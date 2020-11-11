import React, { Compnent } from 'react';
import Header from './Header';
import Footer from './Footer';
import Style from '../static/Style';

class Layout extends Component {

  render() {
    return (
      <div>
        {style}
        <Header header={this.props.header} title={this.props.title} />
        {this.props.childred}
        <Footer footer="copyright SYODA-Tuyano." />
      </div>
    );
  }
}

export default Layout;
