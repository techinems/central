const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { urlencoded, json } = require('body-parser');
const Sentry = require('@sentry/node');
const passport = require('passport');
const fs = require('fs');
const SamlStrategy = require('passport-saml').Strategy;

// Load Environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

// Intialize Express app
const app = express();

// Configure Sentry exception logging
if (process.env.SENTRY_DSN) {
    const sentryConfig = {
        dsn: process.env.SENTRY_DSN,
        release: 'central@' + require('./package.json').version
    };
    if (process.env.ENVIRONMENT) sentryConfig.environment = process.env.ENVIRONMENT;
    Sentry.init(sentryConfig);
    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.errorHandler());
}

// Configure OAuth 2.0 authentication strategy for GSuite
passport.use(new SamlStrategy({
    path: '/login/callback',
    entryPoint: process.env.SAML_ENTRY_POINT,
    cert: fs.readFileSync(process.env.SAML_CERT_FILE, 'utf-8'),
    issuer: process.env.SAML_ISSUER
}, (profile, done) => done(null /* err */, profile)));

app.use(urlencoded({ extended: true }));
app.use(json());

// Auth Routes
app.get('/login', passport.authenticate('saml', { scope: ['profile'] }));
app.get('/login/callback',
    passport.authenticate('saml', { failureRedirect: '/login' }),
    (req, res) => res.redirect('/'));

// UI Routes
app.use(express.static(path.resolve('./dist/central/')));
app.get('/*', (req, res) => res.sendFile(path.resolve('./dist/central/index.html')));

app.listen(PORT, () => console.log('Central server running on ' + PORT));
