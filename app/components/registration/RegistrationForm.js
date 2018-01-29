import React, {Component} from 'react';

export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: ""
        };
        this.handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        };
    }
    formValidation(){
        //console.log(this.state.firstName);
        if(this.state.firstName.length < 5){
            console.log(this.state.firstName);
            return false;
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.formValidation();
        //console.log(this.state);
        this.props.onSubmit(this.state);
    };

    render() {
        //const {fields: {firstName, lastName, userName, email, password}, handleSubmit} = this.props;

        return (
            <div className="container">
                <form>
                    <input
                        name="firstName"
                        placeholder="First name"
                        value={this.state.firstName}
                        onChange={e => this.handleChange(e)}/>
                    <br/>
                    <input
                        name="lastName"
                        placeholder="Last name"
                        value={this.state.lastName}
                        onChange={e => this.handleChange(e)}/>
                    <br/>
                    <input
                        name="userName"
                        placeholder="Username"
                        value={this.state.userName}
                        onChange={e => this.handleChange(e)}/>
                    <br/>
                    <input
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}/>
                    <br/>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}/>
                    <br/>
                    <button onClick={e => this.handleSubmit(e)}>Submit</button>
                </form>
            </div>

        )
    }
}
