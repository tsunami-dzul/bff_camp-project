import { Agent, setGlobalDispatcher } from 'undici';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

setGlobalDispatcher(agent);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routers/auth.router'));
app.use('/api/products', require('./routers/products.router'));
app.use('/api/categories', require('./routers/categories.router'));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
