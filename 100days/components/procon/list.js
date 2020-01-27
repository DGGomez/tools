import React from 'react';
import item from 'item';

// updateTodo = async (todo) =>{ const newTodos = this.state.todos.map(_todo => { if(todo === _todo) return{ text: todo.text, completed: !todo.completed} else return _todo}); await this.setState({todos: newTodos}) localStorage.setItem('todos', JSON.stringify(this.state.todos));}


class list extends React.Component {

    renderPros(pros){
        return(
            pros.map((_todo, _index) => {
                return(<item updateTodoFn = {this.updateTodo} key={_index}>{_todo}</item>);
            })
        );
    }

    renderCons(cons){
        return(
        cons.map((_todo, _index) => {
            return(<item updateTodoFn = {this.updateTodo} key={_index}>{_todo}</item>);
        }));
    }
    
    render(){
        const {pros, cons} = this.props;

        return(<div className = "todoListContainer">
            <div className = "col-sm-4">{this.renderPros(pros)}</div>
            <div className = "col-sm-4">{this.renderCons(cons)}</div>
        </div>);
    }

    updateTodo = (todo) => {
        this.props.updateTodoFn(todo);
    }
};

export default list;