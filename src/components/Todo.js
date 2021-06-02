

import React from 'react'

const Todo = props => {
    return (
        <div
            style={props.item.completed? {textDecoration: 'line-through'} : null}
            onClick={()=>props.toggleComplete(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo
