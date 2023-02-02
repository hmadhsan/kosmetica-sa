const express = require('express');
const router = express.Router();
const { Cart } = require('../models/Cart');
const { Product } = require('../models/Product');
const { auth } = require('../middlewares/auth');

const populate = {
    path: 'cartDetails',
    populate: {
        path: '_product',
        model: '_products',
        populate: {
            path: '_category',
            model: 'categories'
        }
    }
}

router.post('/addToCart', auth, async, (req, res) => {
    //find if customer cart already exist
    const customerCart = await Cart.findOne({ _customerId: req.customerId });
    const product = await Product.findById(req.body._productId);

    const cartDetails = {
        _product: req.body._productId,
        quantity: req.body.quantity,
        price: product.price,
        amount: product.price * req.body.quantity
    }
    //if customer cart already exist
    if (customerCart) {
        //find n updt quantity if item already exist in cart
        Cart.findOneAndUpdate({
            _customerId: req.customerId,
            'cartDetails._product': req.body._productId
        }, {
            $inc: {
                'cartDetails.$.quanity': req.body.quantity,
                'cartDetails.$.amount': req.price * req.body.quantity

            },
        }, {
            new: true

        }).populate(populate).exec().then((data, error) => {
            if (error) res.json({ status: false, error });
            if (data) {
                res.status(200).json({ status: true, message: 'Add items to cart successfully!' })
            }
        })
    }

})