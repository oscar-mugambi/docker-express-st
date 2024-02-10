import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { query } from './db/index.js';

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.get('/', async (_req, res) => {
  try {
    const response = await query('select * from mock_data limit 10');
    res.status(200).json({ data: response.rows });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
