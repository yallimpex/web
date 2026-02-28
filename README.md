# Yall Impex — Single Page Site

This is a minimal single-page website for *Yall Impex* (an aggregator importing products from India). It's responsive for mobile and supports HTTPS locally if you provide certificate files, and is ready to deploy to platforms that provide automatic HTTPS (Netlify, Vercel, GitHub Pages for static hosting).

Quick start

1. Install dependencies:

```bash
cd /Users/Vishnu/Documents/GitHub/web
npm install
```

2. Run the site (HTTP):

```bash
npm start
# then open http://localhost:3000
```

Enable HTTPS locally

Option A — Use `mkcert` (recommended for macOS local dev):

```bash
# install mkcert if you don't have it
brew install mkcert
mkcert -install
mkdir -p cert
mkcert -cert-file cert/server.crt -key-file cert/server.key localhost
npm start
# HTTPS will be available at https://localhost:3443
```

Option B — Use OpenSSL (self-signed):

```bash
mkdir -p cert
openssl req -x509 -newkey rsa:4096 -nodes -out cert/server.crt -keyout cert/server.key -days 365 \
  -subj "/CN=localhost"
npm start
```

Deployment

- Deploy the contents of `public/` to Netlify or Vercel for automatic HTTPS.
- Or push this repo and configure a static-hosting workflow.

Testing

Run the sample test (verifies the HTML contains company and aggregator text):

```bash
npm test
```
