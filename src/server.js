const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes')

const app = express();

app.use(bodyparser.json())
app.use(routes);

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('debug', true);

app.listen(process.env.PORT, process.env.HOST, () => console.log('server running!'))
