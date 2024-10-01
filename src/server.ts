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

app.use('/auth', require('./routes/auth.routes'));
app.use('/carts', require('./routes/cart.routes'));
app.use('/orders', require('./routes/order.routes'));
app.use('/products', require('./routes/products.routes'));
app.use('/categories', require('./routes/categories.routes'));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
