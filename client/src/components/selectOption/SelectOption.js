import React from "react";
import PropTypes from "prop-types";

import "./selectOption.css";
    
class Select extends React.Component{
   
    render(){
        console.log(this.props);
       
        return(
            
            <div className="option col-4">
                <select                   
                    id = {this.props.name}
                    name = {this.props.name}
                    value = {this.props.value}
                    onChange = {this.props.handleInputChange}                  
                    className="form-control col-12"
                                    >
                    {this.props.options.map(optionItem =>(
                        <option 
                          id = {optionItem.id} 
                          value = {optionItem.id}
                          key = {optionItem.id}     
                          
                        > {optionItem.option}
                        </option>
                        
                    ))}
                    
                </select>
            </div>
        );

    }
}

Select.propTypes = {
    onChange: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };
export default Select;