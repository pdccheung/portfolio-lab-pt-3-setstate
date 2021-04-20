import React from "react"
 
function Portfolio(props){
    return(
        <div className = "Portfolio"><h3>Portfolio</h3>
        <p>{props.quote}</p>
        <button onClick= {props.anotherQuote}>Quote from Microsoft's CEO</button>
        </div>
        
        )
}

export default Portfolio