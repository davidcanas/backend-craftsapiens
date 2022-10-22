import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import dotenv from 'dotenv';
import fetch from "node-fetch";

import { router } from './routes/index';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger('dev'));
app.use(cors());

app.use('/', router);

app.listen(port, () => {
    console.log(`🚀 Running on port ${port}`);
});

process.on('SIGINIT', () => {
    console.log('Shutting down');
    process.exit(0);
});
// voltei, tinha ido resolver uma coisa
