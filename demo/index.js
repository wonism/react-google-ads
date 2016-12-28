import React from 'react';
import { render } from 'react-dom';
import GoogleAds from '../src';

const appRoot = document.getElementById('google-adsense');

render(
  <GoogleAds
    client=""
    slot=""
  />, appRoot
);

