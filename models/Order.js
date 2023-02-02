const mongoose = require('mongoose');

const productchema = mongoose.Schema({
    _product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        require: true
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number,
        require: true
    },
    amount: {
        type: Number
    }
}, { versionKey: false, _id: false });

const OrderDetails = mongoose.model('orderDetails', productchema);
module.exports = { OrderDetails };