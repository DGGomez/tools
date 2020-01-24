import React from 'react';

// needs to be pass a function
// addTodo = async (todo) => {await this.setState({todos: [...this.state.todos, {text: todo, completed: false}];})
// localStorage.setItem('todos', JSON.stringify(this.state.todos))}

class addItem extends React.Component {

    constructor() {
        super();
        this.state = {
            todo = ''
        };
    }

    render(){
        return(<div className = 'addTodoContainer'>
            <form onSubmit={(e) => this.submitItem(e)}> 
                <input onChange={(e) => this.updateInput(e)} type="text"></input>
                <button type="submit">Add Item</button>
            </form>
        </div>);
    }

    updateInput = (e) => {
        this.setState({ todo: e.target.value});
    }
    submitItem = () =>{
        e.preventDefault();
        this.props.addItemFn(this.state.todo);
        document.getElementById('addTodoInput').value = '';
    }
};

export default addItem;