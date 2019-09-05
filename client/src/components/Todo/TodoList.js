import React from "react";
import TodoItem from "./TodoItem";


class TodoList extends React.Component{

	removeNode =  (nodeId) => {
		this.props.removeNode(nodeId);
		return;
    }
    
	toggleComplete = (nodeId) => {
		this.props.toggleComplete(nodeId);
		return;
    }
    
	render() {
		var listNodes = this.props.data.map(function (listItem) {
			return (
				<TodoItem 
					key={listItem.id} 
					nodeId={listItem.id} 
					task={listItem.taskName} 
					status={listItem.status} 
					removeNode={this.removeNode} 
					toggleComplete={this.toggleComplete} />
			);
		},this);
		return (
			<ul className="list-group">
				{listNodes}
			</ul>
		);
	}
}

export default TodoList;
