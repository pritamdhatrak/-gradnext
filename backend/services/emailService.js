const nodemailer = require('nodemailer');
const EmailTracking = require('../models/EmailTracking');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

const getEmailTemplate = (type, name, tracking_id) => {
  const baseUrl = 'http://localhost:5000';
  const trackingPixel = `<img src="${baseUrl}/api/track/open/${tracking_id}" width="1" height="1" style="display:none;">`;
  const paymentLink = `${baseUrl}/api/track/click/${tracking_id}`;

  const templates = {
    selection: {
      subject: 'Congratulations! You\'ve been selected for Consulting Cohort 101',
      html: `
        <h2>Hi ${name},</h2>
        <p>Congratulations! You've been selected for our exclusive Consulting Cohort 101 program.</p>
        <p>To secure your spot, please complete your payment using the link below:</p>
        <a href="${paymentLink}" style="background-color: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Complete Payment</a>
        <p>Best regards,<br>The gradnext Team</p>
        ${trackingPixel}
      `
    },
    reminder1: {
      subject: 'Don\'t miss out on Consulting Cohort 101',
      html: `
        <h2>Hi ${name},</h2>
        <p>We noticed you haven't opened our previous email about your selection for Consulting Cohort 101.</p>
        <p>Spots are filling up fast! Secure yours now:</p>
        <a href="${paymentLink}" style="background-color: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reserve Your Spot</a>
        <p>Best regards,<br>The gradnext Team</p>
        ${trackingPixel}
      `
    },
    reminder2: {
      subject: 'Learn more about Consulting Cohort 101',
      html: `
        <h2>Hi ${name},</h2>
        <p>We see you're interested in our program! Here are some key benefits of joining Consulting Cohort 101:</p>
        <ul>
          <li>12-week intensive training program</li>
          <li>1-on-1 mentorship with MBB consultants</li>
          <li>Guaranteed interview preparation</li>
          <li>Lifetime access to our alumni network</li>
        </ul>
        <p>Ready to accelerate your consulting career?</p>
        <a href="${paymentLink}" style="background-color: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Join Now</a>
        <p>Best regards,<br>The gradnext Team</p>
        ${trackingPixel}
      `
    },
    final: {
      subject: 'Last chance to join Consulting Cohort 101',
      html: `
        <h2>Hi ${name},</h2>
        <p>This is your final reminder - only a few spots remain in Consulting Cohort 101!</p>
        <p>Don't miss this opportunity to transform your consulting career.</p>
        <a href="${paymentLink}" style="background-color: #DC2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Secure Your Spot Now</a>
        <p>This offer expires in 24 hours.</p>
        <p>Best regards,<br>The gradnext Team</p>
        ${trackingPixel}
      `
    }
  };

  return templates[type];
};

exports.sendSelectionEmail = (application_id, email, name) => {
  EmailTracking.create({ application_id, email_type: 'selection' }, (err, result) => {
    if (err) return console.error('Failed to create tracking:', err);

    const template = getEmailTemplate('selection', name, result.tracking_id);
    
    transporter.sendMail({
      from: '"gradnext" <noreply@gradnext.co>',
      to: email,
      subject: template.subject,
      html: template.html
    }, (error) => {
      if (error) console.error('Failed to send email:', error);
    });
  });
};

exports.sendFollowUpEmail = (application_id, email, name, type) => {
  EmailTracking.create({ application_id, email_type: type }, (err, result) => {
    if (err) return console.error('Failed to create tracking:', err);

    const template = getEmailTemplate(type, name, result.tracking_id);
    
    transporter.sendMail({
      from: '"gradnext" <noreply@gradnext.co>',
      to: email,
      subject: template.subject,
      html: template.html
    }, (error) => {
      if (error) console.error('Failed to send email:', error);
    });
  });
};
