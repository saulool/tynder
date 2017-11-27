import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './actions';

class Login extends Component{
	render() {
        let user = {username:1123,password:12345};
		return (
            <div>
                <button onClick={ () => this.props.login(user) }>Login</button>
            </div>
        )
	}
}

function mapStateToProps(state){
	return {
		state
	};
}

export default connect(mapStateToProps, { login })(Login);