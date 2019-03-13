import { AD_LOADED } from "../actions/ads";

export default (state = null, action = {}) => {
    switch (action.type) {
        case AD_LOADED:
            console.log(action)
            return action.payload
        default:
            return state
    }
}