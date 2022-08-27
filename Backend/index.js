import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import rootRouter from './routes/root.routes.js';
import productRouter from './routes/product.routes.js';
import userRouter from './routes/user.routes.js';
import orderRouter from './routes/Order.routes.js';
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('mongodb connecting');
  })
  .catch((err) => {
    // console.log(err.message );
    console.log('Mongo not connecting');
  });

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
);
app.get('/api/keys/paystack', (req, res) => {
  res.send(process.env.PAYSTACK_PUBLIC_KEY);
});
app.use('/api/root', rootRouter);
const port = process.env.PORT || 5000;

app.use('/api/products', productRouter);

app.use('/api/users', userRouter);

app.use('/api/orders', orderRouter);


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/Frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../Frontend/build/index.js'))
);
// error handler

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
