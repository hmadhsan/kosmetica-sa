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

const orderSchema = mongoose.Schema({
    _customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
        require: true
    },
    orderDetails: [
        {
            type: productchema
        }
    ],

    orderDate: {
        type: Date,
        default: Date.now()
    },
    totalAmount: {
        type: Number
    },
    paymentId: {
        type: String
    }
})

const Order = mongoose.model('orders', orderSchema);
const OrderDetails = mongoose.model('orderDetails', productchema);
module.exports = { Order, OrderDetails };