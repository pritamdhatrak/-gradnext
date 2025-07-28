const cron = require('node-cron');
const { db } = require('../db/database');
const { sendFollowUpEmail } = require('./emailService');
const Application = require('../models/Application');
const EmailTracking = require('../models/EmailTracking');

exports.scheduleFollowUps = (application_id) => {
  const followUps = [
    { type: 'reminder1', delay: 2 * 24 * 60 * 60 * 1000 },
    { type: 'reminder2', delay: 3 * 24 * 60 * 60 * 1000 },
    { type: 'final', delay: 5 * 24 * 60 * 60 * 1000 }
  ];

  followUps.forEach(followUp => {
    const scheduledTime = new Date(Date.now() + followUp.delay);
    
    db.run(
      `INSERT INTO email_queue (application_id, email_type, scheduled_for) VALUES (?, ?, ?)`,
      [application_id, followUp.type, scheduledTime.toISOString()]
    );
  });
};

exports.startEmailScheduler = () => {
  cron.schedule('*/5 * * * *', () => {
    db.all(
      `SELECT eq.*, a.email, a.name, a.id as app_id
       FROM email_queue eq
       JOIN applications a ON eq.application_id = a.id
       WHERE eq.sent = 0 AND eq.scheduled_for <= datetime('now')`,
      (err, emails) => {
        if (err) return console.error('Scheduler error:', err);

        emails.forEach(email => {
          EmailTracking.getByApplicationId(email.app_id, (err, tracking) => {
            if (err) return;

            const latestEmail = tracking[0];
            let shouldSend = false;

            if (email.email_type === 'reminder1' && latestEmail && !latestEmail.opened) {
              shouldSend = true;
            } else if (email.email_type === 'reminder2' && latestEmail && latestEmail.opened && !latestEmail.clicked) {
              shouldSend = true;
            } else if (email.email_type === 'final' && latestEmail && latestEmail.clicked && !latestEmail.payment_made) {
              shouldSend = true;
            }

            if (shouldSend && !latestEmail.payment_made && !latestEmail.replied) {
              sendFollowUpEmail(email.app_id, email.email, email.name, email.email_type);
              
              db.run(
                `UPDATE email_queue SET sent = 1 WHERE id = ?`,
                [email.id]
              );
            }
          });
        });
      }
    );
  });
};
