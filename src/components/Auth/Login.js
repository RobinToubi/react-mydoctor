import React, { Component } from 'react';
import Axios from 'axios';
import URL from '../../utils/constantes';
import '../../styles/Auth.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
        let token =  localStorage.getItem('token');
        if (token !== null) {
            Axios
                .post(URL.api_base_url + URL.verify,
                    '',
                    {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    })
                .then((response) => {
                    console.log(response + ": Success")
                    this.props.history.push('/home');
                })
                .catch((err) => {
                    console.log(": Error " + err.message);
                    this.setState({ error: err.message});
                });
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLogin(event) {
        if (this.state.username === '' && this.state.password === '') {
            this.setState({error: 'Fields must be filled'});
            return
        }
        Axios
            .post(URL.api_base_url + URL.login,
                {
                    username: this.state.username,
                    password: this.state.password
                })
            .then((response) => {
                localStorage.setItem('token', JSON.stringify(response.data));
                localStorage.setItem('username', this.state.username);
                this.props.history.push('/home');
            })
            .catch((err) => {
                this.setState({ error: err.message });
            })
    }

    render() 
    {
        return (
            <div className="form">
                <p className="sign">Sign in</p>
                <form action={this.handleLogin} >
                    <input className="un" type='text' onChange={this.handleChange} value={this.state.username} name="username" required placeholder="username" />  
                    <input className="un" type='password' onChange={this.handleChange} value={this.state.password} name="password" required placeholder="password" /> 
                    <input className='login' type="submit" value="Log in" />
                </form>
                <span>{this.state.error}</span>
            </div>
        )
    }
    
}

export default Login;