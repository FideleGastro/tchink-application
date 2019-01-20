import React, { Component } from 'react'
import AppBar from './../component/organism/Appbar';
import HomepageHeaderBlock from './../component/organism/HomepageHeaderBlock';
import DisplayBar from './../component/organism/DisplayBar';
import ListBar from './../component/organism/BarpageList';
import Layout from './../component/template/LayoutFullPage';
import HomepageFooterBlock from './../component/organism/HomepageFooterBlock';
import HomepageNetworkBlock from './../component/organism/HomepageNetworkBlock';

export default class barpage extends Component {
    static getInitialProps({ query: { id, data } }) {
        return { id, data }
    }
    render() {
        return (
            <>
                <Layout>
                    <AppBar />
                    <HomepageHeaderBlock />
                    {this.props.id ? (
                        <DisplayBar bar={this.props.data.bar} />
                    ) : (
                            <ListBar data={this.props.data} />
                        )}
                    <HomepageNetworkBlock />
                    <HomepageFooterBlock />
                </Layout>
            </>
        )
    }
}

