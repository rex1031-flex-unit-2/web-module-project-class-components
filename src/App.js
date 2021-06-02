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
    const newTask = this.state.todos.map(item => {
      if(item.id === itemId){
        return{
          ...item,
          completed: !item.completed
        }
      }
      console.log('item clicked')
      return item;
    });
    this.setState({
      ...this.state,
      todos: newTask
    })
  }
  
  render() {
    return (
      <div className="App">
        <h2>Todo App</h2>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} />
        <TodoForm />


      </div>
    );
  }
}

export default App;
