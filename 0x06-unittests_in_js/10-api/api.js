const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (request, resolve) => {
  resolve.end('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, resolve) => {
  resolve.end(`Payment methods for cart ${request.params.id}`);
});

app.get('/available_payments', (request, resolve) => {
  const obj = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  resolve.json(obj);
});

app.post('/login', (request, resolve) => {
  const username = request.body.userName;
  resolve.end(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
