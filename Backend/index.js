import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connect from './utils/db.js';

const app = express();
const PORT = process.env.PORT || 3030;

// middlewares
app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    connect(); // db connection
    console.log(`serving on port ${PORT}`);
});