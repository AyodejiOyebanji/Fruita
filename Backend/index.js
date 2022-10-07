const express = require('express');
const mongoose = require('mongoose');
const  dotenv = require('dotenv');
const rootRouter =require('./routes/root.routes.js');
const productRouter = require('./routes/product.routes.js');
const  userRouter = require('./routes/user.routes.js');
const  orderRouter = require( './routes/Order.routes.js');
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


// const __dirname = path.resolve();
app.use(express.static("build"))
app.get('/*', (req, res) =>{
  // res.send("HELLO")
  //console.log(__dirname)
  res.sendFile(__dirname+"/build/index.html")
});
// error handler

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
