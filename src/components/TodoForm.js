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

removeCompletedTasks = e =>{
    e.preventDefault();
    
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
                
                />
                <button onClick={this.handleSubmit}>Add</button>
                <button>Remove Complete</button>
            </form>
        )
    }
}

