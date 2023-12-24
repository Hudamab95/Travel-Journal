import React from "react"

export default function Cards(props){
    return (
         <div className="card">
        <img className="main-img" src={props.imageUrl}/>
        <div  className="col">
                <div  className="info">
                    <img src="./images/location.png"/>
                    <p className="city">{props.location}</p>
                    <a className="location" href={props.location}>View on Google Maps</a>
                </div>
                <h2 className="title">{props.title}</h2>
            <p  className="date">{props.startDate} - {props.startDate}</p>
            <p  className="description">{props.description}</p>
        </div>
        </div>
    )
}

