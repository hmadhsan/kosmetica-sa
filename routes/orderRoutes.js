const express = require('express');
const router = express.Router();
const stripe =require('stripe'(process.env.STRIPE_S_KEYS));
const{Order}=require('../models/Order');
const {Cart} =require('../models/Cart');
const {auth} = require('../middlewares/auth');
const { route } = require('./cartRoutes');


const populate = {
    path: 'cartDetails',
    populate: {
        path: '_product',
        model: 'products',
        populate: {
            path: '_category',
            model: 'categories'
        }
    }
}

router.post('/checkout', auth, (req, res)=> {
    Cart.findOne({_customerId: req.customerId}).exec(async(error, data)=> {
        if (error) return res.status(400).json({ status: false, error });

    })
})