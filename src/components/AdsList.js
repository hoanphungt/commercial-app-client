import React from 'react'
import { Link } from 'react-router-dom'

export const AdsList = (props) => {
    if (props.ads === null) {
        return <h1>Loading ...</h1>
    }

    return (
        <div>
            <h1>Items on sale - check it now!</h1>
            <ol>
                {props.ads.map(ad => (
                    <li key={ad.id}>
                        <h3><Link to={`/ads/${ad.id}`}>{ad.title}</Link></h3>
                        <p>{ad.price}</p><br></br>
                        <img src={ad.picture} alt='item' />
                    </li>
                ))}
            </ol>
        </div>
    )
} 