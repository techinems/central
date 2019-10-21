const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { urlencoded, json } = require('body-parser');
const Sentry = require('@sentry/node');

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

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(express.static(path.resolve('./dist/central/')));
app.get('/*', (req, res) => res.sendFile(path.resolve('./dist/central/index.html')));

app.listen(PORT, () => console.log('Central server running on ' + PORT));
