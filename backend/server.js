const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const cohortRoutes = require('./routes/cohortRoutes');
const emailRoutes = require('./routes/emailRoutes');
const trackingRoutes = require('./routes/trackingRoutes');
const adminRoutes = require('./routes/adminRoutes');
const { initDB } = require('./db/database');
const { startEmailScheduler } = require('./services/emailScheduler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/cohort', cohortRoutes);
app.use('/api/email', emailRoutes);
app.use('/api/track', trackingRoutes);
app.use('/api/admin', adminRoutes);

initDB();
startEmailScheduler();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
