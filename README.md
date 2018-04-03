# React Google Ads
> A Component for google adsense

## Getting Started
```sh
# Installation with package manager
$ yarn add react react-dom react-google-ads
# or..
$ npm i -S react react-dom react-google-ads
```

## Development
```sh
$ npm run demo
```
- access [localhost:8888](http://localhost:8888)

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

## Change Log
__1.0.0__
- Initial release

__1.0.2__
- Added `className` property to add custom class to `<ins>` tag.

__1.0.3__
- migrate `webpack`
- migrate `babel preset`

__1.0.4__
- fix typos in `README.md`

__1.0.5__
- add `prop-types` for `react^16`
