import React from "react";

// import dateFns from "date-fns";
import "./ptag.css";

class PTags extends React.Component{
    
    render(){
       
        return (            
            <p className = "eventTag" 
               id = {this.props.event.id}
               key = {this.props.event.key}>
                {this.props.event.eventName}
            </p>
        );
    }
}

export default PTags;