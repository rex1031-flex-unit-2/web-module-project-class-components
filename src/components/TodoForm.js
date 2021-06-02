import React, { Component } from 'react'

export default class TodoForm extends Component {
    render() {
        return (
            <form>
                <input type="text" />
                <button>Add</button>
                <button>Remove Complete</button>
            </form>
        )
    }
}

