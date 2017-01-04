import React from 'react';
import { render } from 'react-dom';
import GoogleAds from '../src';

const appRoot = document.getElementById('google-adsense');

render(
  <GoogleAds
    client=""
    slot=""
    className="custom_class_name"
    format="rectangle"
  />, appRoot
);

