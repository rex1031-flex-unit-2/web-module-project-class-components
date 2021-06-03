import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(){
        super();

        this.state={
            newTask: ''
        }
    }

    handleChange = e =>{
        this.setState({
            ...this.state,
            newTask: e.target.value
        })
}
    handleRemove = e =>{
        const newTodos= this.props.clearCompletedTasks()
        this.setState({
            ...this.state,
            todos: newTodos
        })
    }



    handleSubmit = e =>{
        /*Problem: When an item is entered into the input field it stays
        in the input field after it has been submitted.

        Solution: The input is a controlled component you can't 
        directly change the input field value without modifying state*/
        e.preventDefault();
        const newTask = this.state.newTask
        this.props.addTask(newTask);
        this.setState({ newTask: ''})
    }

    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    name="task"
                    value={this.state.newTask}
                    onChange={this.handleChange}
                    placeholder="Enter Task"
                />
                <button onClick={this.handleSubmit}>Add</button>
                <button onClick={this.handleRemove}>Remove Complete</button>
            </form>
        )
    }
}

