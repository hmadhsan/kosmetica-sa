export const addToCart =(product, quantity) => dispatch=> {
console.log('fdfdf',product.name)
    let cartItem = {
        name: product.name,
        _id: product._id,
        image: product.image_link,
      //  varient: varient,
       // price: price.prices[0][varient]*quantity, //individual prices
        quantity: quantity,
        prices: product.prices, //total prices of items in array

    }

    dispatch({type: 'ADD_TO_CART', payload: cartItem})

}