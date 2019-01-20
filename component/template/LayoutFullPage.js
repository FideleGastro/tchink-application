import React, { Component } from 'react'
import styled from 'styled-components'

const Layout = styled.div`
    /* height: 100vh; */
    width: 100vw;
    background: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:0;
    margin:0;
`;

class LayoutFullPage extends Component {
    render() {
        return (
            <Layout>
                {this.props.children}
            </Layout>
        )
    }
}



export default (LayoutFullPage);
