import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }
    
    render() {
        const { id, title } = this.props.todo;
        return(
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={deleteButton}>x</button>
                </p>
            </div>
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired    
}

const deleteButton = {
    background: '#0e7dd2',
    color: '#fff',
    border: 'none',
    padding: '3px 7px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem