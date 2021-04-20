import React from "react"
 
function AboutMe(props){
    return(
        <div className = "About-Me"><h3>About Me</h3>
        <a href={props.linkedinURL} target="_blank" >LinkedIn</a>
        <img src={props.imgURL} alt="" />
        </div>
        
    )
}

export default AboutMe