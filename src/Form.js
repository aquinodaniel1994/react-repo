import React, {Component} from 'react'

import Input from './Input/input'
/**
* we create a class componenet that it'll use a constructor()
* we need the constructor to use 'this' and to receive props
* of the parent.
*/
class Form extends Component{
    constructor(props){
        super(props)

        this.initialState = {
            name: '',
            job: '',
        }
        this.state = this.initialState
    }
    /* this function will be run every time a change is made to an input*/
    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]:value,
        })
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const{name, job} = this.state;
        return (
            <form>
                <label>Name</label>
                <Input
                    inputType="input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <Input
                    inputType="input"
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange} />
                <Input type="button" value="Submit" onClick={this.submitForm} />    
            </form>
        );
    }
}

export default Form;