import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';

// Import routes
import SyncRoutes from './routes/sync.route.js';
import { logger } from './utils/logger.utils.js';

const PORT = 8080;

// Create the express app
const app = express();

// Define configurations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.use('/fullSync', SyncRoutes);

app.use("/products", SyncRoutes);

// Listen the application
const server = app.listen(PORT, () => {
  logger.info(`⚡️ Event application listening on port ${PORT}`);
});

export default server;
