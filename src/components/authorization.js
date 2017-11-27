import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const Authorization = (WrappedComponent, redirect = false) => {
    class AuthorizationComponent extends Component{
        render() {
            if(this.props.state.login.loggedIn){
                return <WrappedComponent />
            }else if(redirect){
                return <Redirect to='/login' />
            }else{
                return null
            }
        }
    }

    return connect(mapStateToProps)(AuthorizationComponent);
}

function mapStateToProps(state){
	return {
		state
	};
}

export default Authorization;