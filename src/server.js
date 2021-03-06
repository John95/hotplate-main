import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import passport from 'passport';
import path from 'path';

import {} from 'dotenv/config';

import router from './routes';

// Initialize Express
const app = express();

// Enable Middleware
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.json());
app.use(cookieParser(process.env.JWTSECRET));
app.use(passport.initialize());

// Load routes
app.use('/auth', router.auth);
app.use('/api', router.api);
app.use('/api/bundles', router.bundles);
app.use('/api/projects', router.projects);
app.use('/', router.client);
  
// Listen on port 3000 when not in production
const PORT = process.env.PORT || 3001
app.listen(PORT, function() {
  console.log(`App listening on port ${PORT}.`);
});
