import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-color: red;
`;

class Home extends Component{
	render() {
		return (
            <Div>
                home
            </Div>
        )
	}
}

export default Home;