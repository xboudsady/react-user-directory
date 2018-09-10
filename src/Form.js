import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    // Will run every time a change is made to an input

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value 
        });
    }

    // Pass the Form state through as the character parameter we defined earlier.
    // It will also reset the state to initial state, to clear the form after submit
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange} /> 
                <input 
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
    }

}

export default Form;