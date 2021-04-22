const express = require('express');
const path = require('path');
require('colors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || process.env.NODE_ENV === 'production' ? 5000 : 5001;

app.use(express.json({ extended: false }));

const chirpRouter = require('./routes/chirp');
app.use('/api/chirp', chirpRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, '../client/public')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Global error handler
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`Error stack -> ${JSON.stringify(err, null, 2)}`.red);
  }
  return res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error',
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold);
});
