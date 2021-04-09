const stripe = require('stripe')('sk_test_4eC#9HqLyjWDarjtT1zdp7dc');
const express = require('express');
const app = express();
app.use(express.static('.'));