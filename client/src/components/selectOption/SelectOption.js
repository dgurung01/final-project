import React from "react";

import "./selectOption.css";
    
//class Select extends React.Component{
    function Select (props){
    // render(){
        console.log(props);
       
        return(
            
            <div className="option col-4">
                <select                   
                    id = {props.name}
                    name = {props.name}
                    value = {props.value}
                    onChange = {props.handleInputChange}                  
                    className="form-control col-12"
                                    >
                    {props.options.map(optionItem =>(
                        <option 
                          id = {optionItem.value} 
                          value = {optionItem.value}
                          key = {optionItem.value}     
                          
                        > {optionItem.label}
                        </option>
                        
                    ))}
                    
                </select>
            </div>
        );

    // }
}

export default Select;