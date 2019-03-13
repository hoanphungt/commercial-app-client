import React from 'react'
import { connect } from 'react-redux';
import { loadAds } from '../actions/ads'
import { AdsList } from './AdsList';
import './Ad.css'

class AdsListContainer extends React.Component {
    componentDidMount() {
        this.props.loadAds()
    }

    render() {
        return <AdsList ads={this.props.ads} />
    }
}

const mapStateToProps = state => ({
    ads: state.ads
})

export default connect(mapStateToProps, {loadAds})(AdsListContainer)