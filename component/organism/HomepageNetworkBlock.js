import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Block = styled.div`
    width: 100%;
    min-height: 50vh;
    background: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
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

class HomepageNetworkBlock extends Component {
    render() {
        return (
            <>
                <Block>
                    <Content>
                        <Title>REJOINDRE NOTRE RÉSEAUX </Title>
                        <Link href='/about'><LinkRounded>ÊTRE RÉFÉRENCÉ</LinkRounded></Link>
                    </Content>
                </Block>

            </>
        )
    }
}

export default (HomepageNetworkBlock);
