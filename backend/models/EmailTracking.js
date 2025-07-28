const { db } = require('../db/database');
const { v4: uuidv4 } = require('uuid');

class EmailTracking {
  static create(data, callback) {
    const tracking_id = uuidv4();
    const { application_id, email_type } = data;
    
    db.run(
      `INSERT INTO email_tracking (application_id, email_type, tracking_id) VALUES (?, ?, ?)`,
      [application_id, email_type, tracking_id],
      function(err) {
        if (err) return callback(err);
        callback(null, { id: this.lastID, tracking_id });
      }
    );
  }

  static trackOpen(tracking_id, callback) {
    db.run(
      `UPDATE email_tracking SET opened = 1, opened_at = CURRENT_TIMESTAMP WHERE tracking_id = ?`,
      [tracking_id],
      callback
    );
  }

  static trackClick(tracking_id, callback) {
    db.run(
      `UPDATE email_tracking SET clicked = 1, clicked_at = CURRENT_TIMESTAMP WHERE tracking_id = ?`,
      [tracking_id],
      callback
    );
  }

  static trackPayment(tracking_id, callback) {
    db.run(
      `UPDATE email_tracking SET payment_made = 1 WHERE tracking_id = ?`,
      [tracking_id],
      callback
    );
  }

  static trackReply(tracking_id, callback) {
    db.run(
      `UPDATE email_tracking SET replied = 1 WHERE tracking_id = ?`,
      [tracking_id],
      callback
    );
  }

  static getByApplicationId(application_id, callback) {
    db.all(
      `SELECT * FROM email_tracking WHERE application_id = ? ORDER BY sent_at DESC`,
      [application_id],
      callback
    );
  }

  static getTrackingData(tracking_id, callback) {
    db.get(
      `SELECT * FROM email_tracking WHERE tracking_id = ?`,
      [tracking_id],
      callback
    );
  }
}

module.exports = EmailTracking;
