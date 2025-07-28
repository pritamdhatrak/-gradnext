const Application = require('../models/Application');
const EmailTracking = require('../models/EmailTracking');
const { db } = require('../db/database');

exports.getDashboard = (req, res) => {
  Application.getAll((err, applications) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch applications' });
    }

    const promises = applications.map(app => {
      return new Promise((resolve) => {
        EmailTracking.getByApplicationId(app.id, (err, tracking) => {
          resolve({
            ...app,
            email_tracking: tracking || []
          });
        });
      });
    });

    Promise.all(promises).then(results => {
      res.json({ applications: results });
    });
  });
};

exports.getEmailStats = (req, res) => {
  db.all(
    `SELECT 
      email_type,
      COUNT(*) as total,
      SUM(opened) as opened,
      SUM(clicked) as clicked,
      SUM(payment_made) as payments,
      SUM(replied) as replies
    FROM email_tracking
    GROUP BY email_type`,
    (err, stats) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch email stats' });
      }
      res.json({ stats });
    }
  );
};
