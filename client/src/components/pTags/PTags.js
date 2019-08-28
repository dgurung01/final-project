import React from "react";

// import dateFns from "date-fns";
import "./ptag.css";

class PTags extends React.Component{
    
    render(){
        return (            
            <p className = "eventTag" 
               id = {this.props.event.id}
               key = {this.props.key}>
                {this.props.event.name}
            </p>
        );
    }
}

export default PTags;