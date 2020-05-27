import React, { Component } from 'react';
import '../../styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="homescreen">
                <h1>MyDoctor</h1>
                <h2>Interface de gestion de médecin</h2>
                <a className='btn login' href='/login'>Log in</a>
                <a className='btn register' href='/register'>Register</a>
            </div>
        )
    }
}

export default Home;