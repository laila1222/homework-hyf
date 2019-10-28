import React, {Component} from 'react';

class EditTodo extends Component {
  render() {
    const {id} = this.props;
    return (
      <span>
        <button onClick={this.props.toggleForm}>Edit</button>
      </span>
    );
  }
}

export default EditTodo;
