
import express from 'express';
const server = express();

import { loadModule } from './src/loadModules.js';
import { startServer } from './src/startServer';



loadModule(server);

startServer(server);

