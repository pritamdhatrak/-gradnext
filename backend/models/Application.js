const { db } = require('../db/database');
const { v4: uuidv4 } = require('uuid');

class Application {
  static create(data, callback) {
    const tracking_id = uuidv4();
    const { name, email, phone } = data;
    
    db.run(
      `INSERT INTO applications (name, email, phone, tracking_id) VALUES (?, ?, ?, ?)`,
      [name, email, phone, tracking_id],
      function(err) {
        if (err) return callback(err);
        callback(null, { id: this.lastID, tracking_id });
      }
    );
  }

  static findById(id, callback) {
    db.get(
      `SELECT * FROM applications WHERE id = ?`,
      [id],
      callback
    );
  }

  static findByEmail(email, callback) {
    db.get(
      `SELECT * FROM applications WHERE email = ?`,
      [email],
      callback
    );
  }

  static updateStatus(id, status, callback) {
    db.run(
      `UPDATE applications SET status = ? WHERE id = ?`,
      [status, id],
      callback
    );
  }

  static getAll(callback) {
    db.all(
      `SELECT * FROM applications ORDER BY created_at DESC`,
      callback
    );
  }
}

module.exports = Application;
