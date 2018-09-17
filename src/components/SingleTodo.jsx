import React from 'react';

/*class SingleTodo extends Component {
  render() {
    return (
      <li>
        {this.props.todo} <button onClick={this.props.delete}> Delete </button>
      </li>
    );
  }
}*/

const SingleTodo = props => {
  return (
    <li>
      {props.todo} <button onClick={props.delete}> Delete </button>
    </li>
  );
};

export default SingleTodo;
