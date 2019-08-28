import React from "react";

// import dateFns from "date-fns";
import "./ptag.css";

class PTags extends React.Component{
    constructor(props){
        super(props);
    }

    checkDateRange (){
        const startDate = this.props.event.startDate;
        const endDate = this.props.event.endDate;

        // const noOfDays = dateFns.differenceInDays(startDate,endDate);

    }
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