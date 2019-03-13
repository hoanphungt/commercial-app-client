import request from 'superagent'

export const ADS_LOADED = 'ADS_LOADED'
export const AD_LOADED = 'AD_LOADED'

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

const adLoaded = ad => ({
    type: AD_LOADED,
    payload: ad
})

export const loadAd = (id) => (dispatch) => {
    //Get request
    request(`${baseUrl}/ads/${id}`)
        .then(response => {
            dispatch(adLoaded(response.body))
        })
        .catch(console.error)
}