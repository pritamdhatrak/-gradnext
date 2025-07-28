const Application = require('../models/Application');
const { sendSelectionEmail } = require('../services/emailService');
const { scheduleFollowUps } = require('../services/emailScheduler');

exports.submitApplication = (req, res) => {
  const { name, email, phone } = req.body;

  Application.create({ name, email, phone }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to submit application' });
    }

    sendSelectionEmail(result.id, email, name);
    scheduleFollowUps(result.id);

    res.status(201).json({ 
      message: 'Application submitted successfully',
      tracking_id: result.tracking_id 
    });
  });
};

exports.getApplicationStatus = (req, res) => {
  const { tracking_id } = req.params;

  db.get(
    `SELECT * FROM applications WHERE tracking_id = ?`,
    [tracking_id],
    (err, row) => {
      if (err || !row) {
        return res.status(404).json({ error: 'Application not found' });
      }
      res.json({ status: row.status });
    }
  );
};
