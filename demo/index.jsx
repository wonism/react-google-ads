import React from 'react';
import { render } from 'react-dom';
import GoogleAds from '../src';

const appRoot = document.getElementById('google-adsense');

render(
  <GoogleAds
    client="ca-pub-1777052704513089"
    slot="9098726054"
    className="custom_class_name"
    format="rectangle"
  />, appRoot
);
