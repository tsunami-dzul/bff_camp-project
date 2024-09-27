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

app.use('/auth', require('./routers/auth.router'));
app.use('/products', require('./routers/products.router'));
app.use('/categories', require('./routers/categories.router'));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
