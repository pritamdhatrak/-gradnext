const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'gradnext.db'));

const initDB = () => {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS applications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      status TEXT DEFAULT 'submitted',
      tracking_id TEXT UNIQUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS email_tracking (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      application_id INTEGER,
      email_type TEXT,
      tracking_id TEXT UNIQUE,
      opened BOOLEAN DEFAULT 0,
      clicked BOOLEAN DEFAULT 0,
      payment_made BOOLEAN DEFAULT 0,
      replied BOOLEAN DEFAULT 0,
      sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      opened_at DATETIME,
      clicked_at DATETIME,
      FOREIGN KEY (application_id) REFERENCES applications (id)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS email_queue (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      application_id INTEGER,
      email_type TEXT,
      scheduled_for DATETIME,
      sent BOOLEAN DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (application_id) REFERENCES applications (id)
    )`);
  });
};

module.exports = { db, initDB };
