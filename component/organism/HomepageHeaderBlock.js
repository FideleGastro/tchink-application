import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Block = styled.div`
    width: 100%;
    min-height: 50px;
    background: purple  ;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
`;

const Title = styled.h2`
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: center;
    color: #484848;
    margin: 0;
`;

const Text = styled.h4`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #484848;
`;

class HomepageHeaderBlock extends Component {
    render() {
        return (
            <>
                <Block>
                    <Content>
                        <Title>TCHINK</Title>
                    </Content>
                </Block>
            </>
        )
    }
}

export default (HomepageHeaderBlock);
