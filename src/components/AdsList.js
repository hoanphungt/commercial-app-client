import React from 'react'
import { Link } from 'react-router-dom'

export const AdsList = (props) => {
    if (props.ads === null) {
        return <h1>Loading ...</h1>
    }

    return (
        <div>
            <h1>List of all items</h1>
            <ul>
                {props.ads.map(ad => (
                    <li key={ad.id}>
                        <h3><Link to={`/ads/${ad.id}`}>{ad.title}</Link></h3>
                        <p>{ad.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
} 