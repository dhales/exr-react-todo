import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import uuid from 'uuid'

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Learn React',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Send important email',
        completed: false
      }
    ]
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos 
                  todos={this.state.todos} 
                  toggleComplete={this.toggleComplete} 
                  deleteTodo={this.deleteTodo} 
                />
              </React.Fragment>
            )} />
            
          </div>        
        </div>
      </Router>      
    );
  }

}

export default App;
