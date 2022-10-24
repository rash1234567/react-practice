import React from "react"

export default function Star (props) {
    return (<img className="card--favorite"
      src={`/images/${ props.isFilled? "filled-star.png" : "empty-star.png"}`} 
      onClick= {props.onClick}/>
    )
}