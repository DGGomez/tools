import React, {Component} from 'react';
import formDetails from 'formDetails';
import FormPersonalDetails from 'FormPersonalDetails';

export class form extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        occupation: '',
        city: '',
        email: '',
        bio: ''

    }

    // proceed to next step
    nextStep = () => {
        const {step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // proceed to next step
    prevStep = () => {
            const {step } = this.state;
            this.setState({
                step: step - 1
            });
        }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio }
        
        switch(step){
            case 1:
                return (<formDetails
                nextStep = {this.nextStep}
                handleChange={this.handleChange}
                values = {values}
                />);
            case 2:
                return <h1>FormPersonalDetails</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
            default:
                return <h1> ERROR </h1>
        }

    }
}

export default form;