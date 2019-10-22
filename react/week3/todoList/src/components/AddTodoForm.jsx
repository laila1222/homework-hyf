import React, {Component} from 'react';
import Label from './formElements/Label';
import Input from './formElements/Input';
import FormButton from './formElements/FormButton';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      submitString: '',
    };
  }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleDateChange = event => {
    this.setState({date: event.target.value});
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.title === '' || this.state.date === '') {
      this.setState({
        submitString: 'You have to fill the field and select due date!',
      });
    } else {
      this.props.addTodoForm(this.state.title, this.state.date);
      this.setState({submitString: 'Task has been added.'});
      this.setState({title: ''});
      this.setState({date: ''});
    }
  };



  render() {
    const {title, submitString, date} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          You have alltogether {this.props.todos.length} todos.<br></br>{' '}
          {this.props.countCompletedTodos()}{' '}
        </p>

        <Label title="Add todo">
          <Input
            type="text"
            name="title"
            value={title}
            onChange={this.handleInputChange}
          />
        </Label>

        <Label title="Due to">
          <Input
            type="date"
            name="date"
            onChange={this.handleDateChange}
            value={date}
          />
        </Label>

        <p>{submitString}</p>

        <FormButton title="Add Todo"></FormButton>
      </form>
    );
  }
}

export default AddTodoForm;
