import React, { Component } from 'react'
import AppBar from './../component/organism/Appbar';
import HomepageInscriptionBlock from './../component/organism/HomepageInscriptionBlock';
import HomepageStepperBlock from './../component/organism/HomepageStepperBlock';
import HomepageAboutBlock from './../component/organism/HomepageAboutBlock';
import HomepageOfferBlock from './../component/organism/HomepageOfferBlock';
import HomepageNetworkBlock from './../component/organism/HomepageNetworkBlock';
import HomepageFooterBlock from './../component/organism/HomepageFooterBlock';
import HomepageHeaderBlock from './../component/organism/HomepageHeaderBlock';
import Layout from './../component/template/LayoutFullPage';

export default class homepage extends Component {
  static getInitialProps({ query: { id, toto, logged } }) {
    return { id, toto, logged }
  }
  render() {
    return (
      <>
        <Layout>
          <AppBar />
          <HomepageHeaderBlock />
          <HomepageInscriptionBlock />
          <HomepageStepperBlock />
          <HomepageAboutBlock />
          <HomepageOfferBlock />
          <HomepageNetworkBlock />
          <HomepageFooterBlock />
        </Layout>
      </>
    )
  }
}

