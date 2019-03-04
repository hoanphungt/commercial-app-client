import { ADS_LOADED } from "../actions/ads";

export default (state = null, action = {}) => {
    switch (action.type) {
        case ADS_LOADED:
            return action.payload.ads
        default:
            return state
    }
}