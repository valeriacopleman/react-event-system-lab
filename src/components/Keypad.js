// Code Keypad Component Here
import React, { Component } from 'react';

export default class KeyPad extends Component {
    handlePassword = () => console.log('Entering password...')
    render() {
        return (
            <div>
                <input 
                    type="password" 
                    onKeyUp= {this.handlePassword}
                />
            </div>
        )
    }
}
