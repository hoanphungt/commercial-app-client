import request from 'superagent'

export const ADS_LOADED = 'ADS_LOADED'

const baseUrl = 'http://localhost:4000'

const adsLoaded = ads => ({
    type: ADS_LOADED,
    payload: ads
})

export const loadAds = () => (dispatch, getState) => {
    if (getState().events) return

    //Get request
    request(`${baseUrl}/ads`)
        .then(response => {
            dispatch(adsLoaded(response.body))
        })
        .catch(console.error)
}