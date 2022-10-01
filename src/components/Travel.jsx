import React from 'react'
import locationLogo from '../assets/locationLogo.png'
import '../style.css'


const Travel = (props) => {
    return (
        <container className='travel'>
            <img src={props.item.imageUrl} className="travel--img" alt={props.title} />
                <div className="travel---text">
                <div className='travel--location'>
                    <img src={locationLogo} className="travel--location_logo" />
                    <span className='travel--location_title'>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} className="travel--location_google">View on Google Maps </a>
                </div>
                <div className='travel--title'>{props.item.title}</div>
                <div className='travel--date'>
                    <p>{props.item.startDate} - {props.item.endDate}</p>
                </div>
                <div className='travel--description'>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </container>
    )
}

export default Travel