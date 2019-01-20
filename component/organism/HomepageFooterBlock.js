import React, { Component } from 'react'
import styled from 'styled-components'

const Block = styled.div`
    width: 100%;
    min-height: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
  
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align:center;
`;

const Title = styled.h1`
    width: 246px;
    height: 111px;
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.23;
    letter-spacing: normal;
    text-align: center;
    color: #707070;
`;

const LinkRounded = styled.a`
    border: 1px solid #6e6e6e;
    border-radius: 200007px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #6e6e6e;
    padding: 10px;
    text-align:center;
    
`;

class HomepageFooterBlock extends Component {
    render() {
        return (
            <>
                <Block>
                    <Content>
                        <Title>Ceci est un Footer </Title>
                        <p>ceci est la description du footer</p>
                    </Content>
                </Block>
            </>
        )
    }
}



export default (HomepageFooterBlock);
