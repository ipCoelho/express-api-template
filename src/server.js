import express from 'express';
import cors from 'cors';
import router from './router.js';

const API = express();
const port = 3030;

API.listen(port);
console.log(`\n > The API is listening the port ${port}`);

API.use(cors()).use(router);
  