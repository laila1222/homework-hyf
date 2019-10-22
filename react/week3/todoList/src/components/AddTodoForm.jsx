import React, {Component} from 'react';
import Label from './formElements/Label';
import Input from './formElements/Input';
import FormButton from './formElements/FormButton';


class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      submitString: '',
    };
  }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
    console.log(event.target.name);
    console.log(event.target.value);
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.title)
    if (this.state.title === '') {
      this.setState({submitString: 'You have to fill the field!'});
    } else {
      this.props.addTodo(this.state.title);
      this.setState({submitString: 'Task has been added.'});
      this.setState({title: ''});
    }

  }

  render() {
    const { title, submitString } = this.state;
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
        
        <p>{submitString}</p>

        <FormButton title="Add Todo"></FormButton>
      </form>
    );
  }
}

export default AddTodoForm;
