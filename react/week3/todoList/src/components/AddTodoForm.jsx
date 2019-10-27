import React, {Component} from 'react';
import Label from './formElements/Label';
import Input from './formElements/Input';
import FormButton from './formElements/FormButton';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      deadline: '',
      submitString: '',
    };
  }

  handleInputChange = event => {
    console.log('inputchange');
    this.setState({[event.target.name]: event.target.value});
  };

  handleDateChange = event => {
    this.setState({deadline: event.target.value});
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.description === '' || this.state.deadline === '') {
      this.setState({
        submitString: 'You have to fill the field and select due date!',
      });
    } else {
      this.props.addTodo(this.state.description, this.state.deadline);
      this.setState({submitString: 'Task has been added.'});
      this.setState({description: ''});
      this.setState({deadline: ''});
    }
  };

  render() {
    const {description, submitString, deadline} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          You have alltogether {this.props.todos.length} todos.{' '}
          {/* {this.props.countCompletedTodos()}{' '} */}
        </p>

        <Label title="Add todo">
          <Input
            type="text"
            name="description"
            value={description}
            onChange={this.handleInputChange}
          />
        </Label>

        <Label title="Due to">
          <Input
            type="date"
            name="deadline"
            onChange={this.handleDateChange}
            value={deadline}
          />
        </Label>

        <p>{submitString}</p>

        <FormButton title="Add Todo"></FormButton>
      </form>
    );
  }
}

export default AddTodoForm;
