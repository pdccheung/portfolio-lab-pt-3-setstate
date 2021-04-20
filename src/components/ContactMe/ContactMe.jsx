import React from "react"
 
function ContactMe(props){
    return(
        <div className="Contact-Me"><h3>Contact Me </h3>
        <p>{props.email}</p></div>
        )
}

export default ContactMe