export const addToCart =(products, quantity, varient) => dispatch=> {
 console.log('Prod', products)
    let cartItem = {
        name: products.name,
        _id: products._id,
        image: products.image_link,
        varient: varient,
      //  price: price.prices[0][varient]*quantity, //individual prices
        quantity: quantity,
        price: products.price, //total prices of items in array

        
    }
    console.log('Nameee', cartItem)

    
    dispatch({type: 'ADD_TO_CART', payload: cartItem})

}