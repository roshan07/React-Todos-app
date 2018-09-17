import React, { Component } from 'react';
import './App.css';
import SingleTodo from './components/SingleTodo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ''
    };
  }

  onInputChange = e => {
    this.setState({ currentTodo: e.target.value });
  };

  onClick = () => {
    let todosCopy = this.state.todos.slice(); // creates exact copy of original todos list
    todosCopy.push(this.state.currentTodo);

    this.setState({ todos: todosCopy, currentTodo: '' });
  };

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);

    this.setState({ todos: todosCopy });
  };

  render() {
    let bulletTodos = this.state.todos.map((t, i) => {
      return <SingleTodo key={i} todo={t} delete={() => this.deleteTodo(i)} />;
    });

    return (
      <div className="App">
        <br />
        <input
          placeholder="Enter Todo"
          value={this.state.currentTodo}
          onChange={this.onInputChange}
        />
        <button onClick={this.onClick}>Add Todo</button>
        <br />
        <br />
        {this.state.todos.length === 0 ? (
          'No Todos Yet!'
        ) : (
          <ul>{bulletTodos}</ul>
        )}
      </div>
    );
  }

  /* state = {
    //players: ['rooney', 'ronaldo', 'pogba']
    players: [
      { id: 1, name: 'Scholes' },
      { id: 2, name: 'Giggs' },
      { id: 3, name: 'Keane' }
    ],
    count: 0
  };

  constructor() {
    super();
    this.addOn = this.addOn.bind(this);
    //console.log(this);
  }

  getPlayers() {
    return (
      <ul>
        {this.state.players.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    );
  }

  addOn() {
    this.setState({ count: this.state.count + 1 });
    //console.log('button clicked', this);
  }

  render() {
    return (
      <div className="App">
        {this.getPlayers()}
        <button onClick={this.addOn}>Click</button>
        <span>{this.state.count}</span>
      </div>
    );
  }*/
}

export default App;
