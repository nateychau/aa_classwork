import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.target.value});
        }
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    render(){
        // debugger
        if(this.props.session.id){
            return <Redirect to="/"></Redirect>
        }
        //Logic for setting up form template 
        const signup = {header: 'Sign Up', path: '/login', linkHeader: 'Log In'};
        const login = {header: 'Log In', path: '/signup', linkHeader: 'Sign Up'};
        const {header, path, linkHeader} = this.props.formType === 'signup' ? signup : login;

        //handle errors

        const errorArr = this.props.errors.session.length ? this.props.errors.session.map((error) => {
            return (
                <li>{error}</li>
            )
        }) : []

        return (
            <div>
                <Link to={path}>{linkHeader}</Link>
                <h3>{header}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: 
                        <input type="text" onChange={this.handleInput('username')} value={this.state.username}></input>
                    </label>
                    {this.props.formType === 'signup' ? 
                    <label>Email: 
                        <input type="text" onChange={this.handleInput('email')} value={this.state.email}></input>
                    </label>
                    : <></>}
                    <label>Password: 
                        <input type="password" onChange={this.handleInput('password')} value={this.state.password}></input>
                    </label>
                    {errorArr.length ? 
                    <ul>{errorArr}</ul> 
                    : <></>}
                    <input type="submit" value={header}/>
                </form>
            </div>
        )
    }
}