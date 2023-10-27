import { type } from "../types/types"

export const authReducer = (state, action) => {

    switch (action.type) {
        case type.LOGIN:
            return {
                ...action.payload,
                isLogged: true
            }

        case type.LOGOUT:
            return {
                isLogged: false
            }
        default:
            return state;
            
    }
}