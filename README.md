# React Google Ads
> A Component for google adsense

## Getting Started
```sh
$ git clone https://github.com/wonism/react-google-ads.git && cd react-google-ads
$ yarn add react react-dom react-google-ades
# or..
$ npm i -S react react-dom react-google-ades
```

## Development
```sh
$ npm run demo
```
- access [localhost:3333](http://localhost:3333)

## Production Bundle
```sh
$ npm run bundle
```

## How to Use
### Parameters
| Parameter | Type   | Remarks         |
|:----------|:-------|:----------------|
| client    | string | Required        |
| slot      | string | Required        |
| style     | object | -               |
| format    | string | default: 'auto' |

### Basic
```js
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleAds from '../src';

const appRoot = document.getElementById('google-adsense');

ReactDOM.render(
  <GoogleAds
    client=""
    slot=""
    style={{ display: 'inline-block', width: '100%', }}
  />, appRoot
);
```

