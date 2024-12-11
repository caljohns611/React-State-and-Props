import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
        this .changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({ name: 'Charlie' });
    }

    render() {
        return (
            <div>
                <h1>User profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change name</button>
            </div>
        );
    }
}