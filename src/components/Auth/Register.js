import React, { Component } from 'react';
import URL from '../../utils/constantes';
import '../../styles/Auth.css';

const axios = require('axios');

class Register extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            username: '',
            password: '',
            firstname: '',
            lastname: '',
        };

        this.handleRegister.bind(this);
    }


    handleRegister(event) {
        const url = URL.api_base_url + "api/user/register";
        this.setState({ username: event.target[0].value,
                        lastname: event.target[1].value,
                        firstname: event.target[2].value,
                        password: event.target[3].value
        }, () => {
            axios.post(url, {
                username: this.state.username,
                password: this.state.password
            })
            .catch((err) => {
                this.setState({ error: err.response.data.error })
            })
            .then((res) => {
                if (res) {
                    alert("Account created !");
                    this.props.history.push('/login');
                }
            });
        });
    }

    render() 
    {
        return (
            <div className="form">
                <p className="sign">Register</p>
                <form action={this.handleRegister}>
                    <input className="un" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Username" required/>
                    <input className="un" type="text" maxLength="30" value={this.state.value} onChange={this.handleChange} placeholder="Nom" required/>
                    <input className="un" type="text" maxLength="30" value={this.state.value} onChange={this.handleChange} placeholder="Prenom" required />
                    <input className="un" type="password" value={this.state.value} onChange={this.handleChange} placeholder="Password" required />
                    <input className="login" type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Register;