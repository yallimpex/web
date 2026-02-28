const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

const PORT = process.env.PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 3443;

const keyPath = path.join(__dirname, 'cert', 'server.key');
const certPath = path.join(__dirname, 'cert', 'server.crt');

if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
  const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  };
  https.createServer(options, app).listen(HTTPS_PORT, () => {
    console.log(`HTTPS server running at https://localhost:${HTTPS_PORT}`);
  });
  http.createServer(app).listen(PORT, () => {
    console.log(`HTTP server running at http://localhost:${PORT}`);
  });
} else {
  app.listen(PORT, () => {
    console.log(`HTTP server running at http://localhost:${PORT}`);
    console.log('To enable HTTPS locally, place `server.key` and `server.crt` inside a `cert` folder.');
  });
}
