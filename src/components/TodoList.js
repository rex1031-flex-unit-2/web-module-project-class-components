import Todo from './Todo';


import React from 'react'

const TodoList = props => {
    return (
        <div>
            {props.todos.map( item =>(
                <Todo 
                    toggleComplete={props.toggleComplete} 
                    key={item.id} 
                    item={item} 
                />
            ))}
        </div>
    )
}

export default TodoList

