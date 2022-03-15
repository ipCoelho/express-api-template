import express from 'express';
import cors from 'cors';
import routes from './router';

const API = express();
const port = process.env["API_PORT"] ?? 3030;

API.listen(port);
console.log(`\n > The API is listening the port ${port}`);

API.use(cors()).use(routes);
