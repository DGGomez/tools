import React from 'react';

export default class hideableText extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isHidden: false
        }
    }

    toggleHidden() {
        this.setState((currentState) => ({isHidden: !currentState.isHidden}));
    }

    render(){
        return(
            <div>
                <button onClick={this.toggleHidden}></button>
                {!this.state.isHidden && this.props.text}
            </div>
        );
    }
}