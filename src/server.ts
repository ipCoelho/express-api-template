import express from 'express';
import cors from 'cors';

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    return res.json({ message: "Hello World!" });
})