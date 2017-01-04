import React, { PropTypes, Component } from 'react';

class GoogleAds extends Component {
  componentDidMount() {
    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;

      js = d.createElement(s);
      js.id = id;
      js.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'google-ads-sdk', () => {
      (adsbygoogle = window.adsbygoogle || []).push({});
    });
  }

  render() {
    return (
      <ins
        className={`adsbygoogle ${this.props.className || ''}`}
        data-ad-client={this.props.client}
        data-ad-slot={this.props.slot}
        style={this.props.style}
        data-ad-format={this.props.format}
      />
    );
  }
}

GoogleAds.propTypes = {
  client: PropTypes.string.isRequired,
  slot: PropTypes.string.isRequired,
  format: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

GoogleAds.defaultProps = {
  style: { display: 'block' },
  format: 'auto',
};

export default GoogleAds;

