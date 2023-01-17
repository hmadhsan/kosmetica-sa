export const getAllKosmeticsReduxers = (state= {}, action ) => {
    switch(action.type){
        case 'GET_KOSMETICS_REQUEST' : return {
            ...state
        }
        case 'GET_KOSMETICS_SUCCESS' : return {
            kosmetics: action.payload
        }
        case 'GET_KOSMETICS_FAILED' : return {
            kosmetics: action.payload
        }
        default : return 
    }
}