# React 16+ Bootstrap webpack 4 Babel 7 with Hot Reload STARTER

[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](https://github.com/MacKentoch/react-bootstrap-webpack-starter)
[![Build Status](https://travis-ci.org/MacKentoch/react-bootstrap-webpack-starter.svg?branch=master)](https://travis-ci.org/MacKentoch/react-bootstrap-webpack-starter)
[![Coverage Status](https://coveralls.io/repos/github/MacKentoch/react-bootstrap-webpack-starter/badge.svg?branch=master)](https://coveralls.io/github/MacKentoch/react-bootstrap-webpack-starter?branch=master)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMacKentoch%2Freact-bootstrap-webpack-starter.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMacKentoch%2Freact-bootstrap-webpack-starter?ref=badge_shield)

### ReactJS + Bootstrap starter with hot reload

#### Full client and server side in ES6+-ES2015+

_Concept behind:_ **this starter is an easy way to understand and ready to use ReactJS (ES6) + bootstrap + webpack starter with:**

* `no hard core Webpack` config so it is more commonly understandable (_they are numerous amazing starters with incredible webpack configs — hard core configs aren't bad things at all! —. This one is just for easier understanding for people even discovering webpack_)
* `with hot reload` (_ReactJS + webpack => hot reload = WINNER_)
* `no flux` (_yes, to give you freedom to add then since you may want to use something else like observables?_)
* `with JWT auth`
* _ReactJS Components written with `optimization tricks` (stateless, pure render...)._

![preview](./preview/preview.png)

> _Looking for server side rendering?_ check this project with SSR added [here](https://github.com/MacKentoch/react-bootstrap-webpack-ssr-starter#react-bootstrap-with-server-side-rendering-starter)

## Detailed Content

**Front:**

* React JS (16.4.x - [github :link:](https://github.com/facebook/react))
* react-router (4.x- [github :link:](https://github.com/reactjs/react-router))
* Bootstrap (4.x - [github :link:](https://github.com/twbs/bootstrap))
* react-strap ([github :link:](https://reactstrap.github.io/))
* font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
* animate.css ([github :link:](https://github.com/daneden/animate.css))
* classnames ([github :link:](https://github.com/JedWatson/classnames))
* react-motion ([github :link:](https://github.com/chenglou/react-motion))
* Webpack 4.x ([github :link:](https://github.com/webpack/webpack))
* babel 7+ ([github :link:](https://github.com/babel/babel))
* axios ([github :link:](https://github.com/mzabriskie/axios) _Why: simple, complete, isomorphic ..._)

**Tool chain:**

* babel 7+
* eslint
* hot reload
* loaders
  * `js` / `jsx`
  * css
  * json
  * images formats
  * svg and fonts formats

**tests:**

- Jest
- enzyme

## Usage

### Install

```bash
npm install
```

or

```bash
yarn install
```

### bundle dev mode

```bash
npm run dev
```

### dev : hot reload mode

```bash
npm run start
```

### bundle size analyze

```bash
npm run analyze
```

### tests

```bash
npm run test
```

### bundle production mode

```bash
npm run prod
```

### mini node-express server

with server hot reload (_and dev bundle_):

```bash
npm run serve-dev
```

without hot reload (_and prod bundle_):

```bash
npm run serve-prod
```

## Donate

Do you use & like react-bootstrap-webpack-starter but you don’t find a way to show some love?
If yes, please consider donating to support this project. Otherwise, no worries, regardless of whether there is support or not, I will keep maintaining this project. Still, if you buy me a cup of coffee I would be more than happy though 😄

[![Support via PayPal](./assets/Paypal-button.png)](https://www.paypal.me/ErwanDatin/)


## License

The MIT License (MIT)

Copyright (c) 2018 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMacKentoch%2Freact-bootstrap-webpack-starter.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMacKentoch%2Freact-bootstrap-webpack-starter?ref=badge_large)
