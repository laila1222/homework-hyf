import React, { Component } from 'react';

class AddItem extends Component {
    onSubmit = (e) => {
        e.preventDefault();

        const title = e.target.title.value.trim();

        if (title.length < 1) {
            alert('You did not write in the input.');
        }else {
            this.props.handleNewTodo(title);
            // event.target.reset();
        }
    }


    render () {
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add todo"  />
                <input type="submit" value="add" />
            </form>
        )
    }
}

export default AddItem;