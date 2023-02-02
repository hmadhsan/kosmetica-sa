const express = require('express');
const router = express.Router();
const {Cart} = require('../models/Cart');
const {Product} = require('../models/Product');
const {auth} = require('../middlewares/auth');

router.post('/addToCart', auth, async, (req, res) => {
    //find if customer cart already exist
    
})