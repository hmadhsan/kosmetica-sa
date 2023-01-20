export const addToCart =(product, quantity, varient, price) => dispatch=> {
console.log('product', product)
    let cartItem = {
        name: product.name,
        _id: product._id,
        image: product.image_link,
        varient: varient,
        //price: price.prices[0][varient]*quantity, //individual prices
        quantity: quantity,
        price: product.price, //total prices of items in array

    }

    dispatch({type: 'ADD_TO_CART', payload: cartItem})

}