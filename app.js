const express = require('express'),
    app = express(),
    productsRouter = require('./api/routes/products'),
    ordersRouter = require('./api/routes/orders');

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

module.exports = app;