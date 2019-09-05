import React from "react";

class TodoItem extends React.Component{

	removeNode =  (e) => {
		e.preventDefault();
		this.props.removeNode(this.props.nodeId);
		return;
    }
    
	toggleComplete = (e) =>{
		e.preventDefault();
		this.props.toggleComplete(this.props.nodeId);
		return;
    }
    
	updateClass = function () {
		
    }
    
	render() {
		console.log(this.props.status);
		var classes = 'list-group-item clearfix ';
		if (this.props.status === 'C') {
			classes = classes + 'list-group-item-success';
		}
		return (
			<li className={classes}>
				<strong>{this.props.task}</strong>
				<div className="pull-right" role="group">
					<button 
						type="button" 
						className="btn btn-xs btn-success img-circle" 
						onClick={this.toggleComplete}>&#x2713;</button> 
					<button 
						type="button" 
						className="btn btn-xs btn-danger img-circle" 
						onClick={this.removeNode}>&#xff38;</button>
				</div>
			</li>
		);
	}
}

export default TodoItem;