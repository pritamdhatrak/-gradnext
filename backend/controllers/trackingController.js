const EmailTracking = require('../models/EmailTracking');

exports.trackOpen = (req, res) => {
  const { id } = req.params;

  EmailTracking.trackOpen(id, (err) => {
    if (err) {
      return res.status(500).send();
    }
    res.status(200).send();
  });
};

exports.trackClick = (req, res) => {
  const { id } = req.params;

  EmailTracking.trackClick(id, (err) => {
    if (err) {
      return res.status(500).send();
    }
    res.redirect('https://example.com/payment');
  });
};

exports.simulatePayment = (req, res) => {
  const { tracking_id } = req.body;

  EmailTracking.trackPayment(tracking_id, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Payment simulation failed' });
    }
    res.json({ message: 'Payment recorded successfully' });
  });
};

exports.simulateReply = (req, res) => {
  const { tracking_id } = req.body;

  EmailTracking.trackReply(tracking_id, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Reply simulation failed' });
    }
    res.json({ message: 'Reply recorded successfully' });
  });
};
