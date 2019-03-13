import React from 'react'
import { connect } from 'react-redux';
import { loadAd } from '../actions/ads'

class AdDetailsContainer extends React.Component {
    componentDidMount() {
        this.props.loadAd(this.props.match.params.id)
    }

    render() {
        if (this.props.ad === null) return <h1>Loading ...</h1>

        const ad = this.props.ad
        return (
        <div>
            <h1>Details of the Item</h1>
            <h2>Name: {ad.title}</h2>
            <i>Price: Euro {ad.price}</i><br></br>
            <img src={ad.picture} alt='item' />
            <p>Description: {ad.description}</p>
            <p>Email: {ad.email}</p>
            <p>Mobile: {ad.phone}</p>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    ad: state.ad
})

export default connect(mapStateToProps, { loadAd })(AdDetailsContainer)