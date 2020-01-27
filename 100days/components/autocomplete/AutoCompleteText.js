import React from 'react';
import './AutoCompleteText.css';

// pass list
export default class AutoCompleteText extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            suggestions: [],
            text = ''

        }
    }

    onTextChange = (e) => {
        const {items } = this.props;
        const value = e.target.value;
        let suggestions = [];
        if( value.length >0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
            this.setState(() => ({suggestions}));
        }
        this.setState(() =>({suggestions, text: value}));
        
    
    }

    suggestionSelected(value){
        this.setState(() => ({ text:value, suggestions: []}));
    }

    renderSuggestions () {
        const {suggestions} = this.state;
        if (suggestions.length === 0){return null;}
        return(
            <ul>
            {suggestions.map((item) => <li onClick = {() => this.suggestionSelected(item)}>{item}</li>)}
        </ul>
        );
    }

    toggleHidden() {
        this.setState((currentState) => ({isHidden: !currentState.isHidden}));
    }

    render(){
        const {text} = this.state;
        return(
            <div className = "AutoCompleteText">
                <input value = {text} onChange = {(e) => console.log(e.target.value)} type="text"/>
                {this.renderSuggestions()}
                <button onClick={this.toggleHidden}></button>
                {!this.state.isHidden && this.props.text}
            </div>
        );
    }
}