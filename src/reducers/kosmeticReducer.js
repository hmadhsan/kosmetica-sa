export const getAllKosmeticsReducer = (state= {kosmetics: []}, action ) => {
    switch(action.type){
        case 'GET_KOSMETICS_REQUEST' : return {
            loading: true,
            ...state 
        }
        case 'GET_KOSMETICS_SUCCESS' : return {
            loading: false,
            kosmetics: action.payload
        }
        case 'GET_KOSMETICS_FAILED' : return {
            error: action.payload,
            loading: false
        }
        default : return state
    }
}