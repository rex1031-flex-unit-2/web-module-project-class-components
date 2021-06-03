import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

import './components/Todo.css'

const todos =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }

]

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      todos: todos
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleComplete = itemId =>{
    const completedTask = this.state.todos.map(item => {
      if(item.id === itemId){
        return{
          ...item,
          completed: !item.completed
        }
      }
      return item;
    });
    this.setState({
      ...this.state,
      todos: completedTask
    })
  }
  
  addTask = taskName =>{
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        newTask
      ]
    })
  }

  updateTodos = e => this.setState({
    [e.target.name]: e.target.value
  })

  removeCompletedTasks = e =>{
    e.preventDefault();
    let newTodos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ newTodos })
  }

  render() {
    return (
      <div className="App">
        <h2>Todo App</h2>
        <TodoList 
          todos={this.state.todos} 
          toggleComplete={this.toggleComplete} 
        />

        <TodoForm 
          value={this.state.todos}
          updateTodos={this.updateTodos}
          addTask={this.addTask}
          removeCompletedTasks={this.removeCompletedTasks}

        
        />


      </div>
    );
  }
}

export default App;
