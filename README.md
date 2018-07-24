# React 16+ Bootstrap webpack 4 with Hot Reload STARTER

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

## Breaking changes since v6.1.0

* add `React 16.3.x` new context API use case (*you may no more need redux*)
* migrated to bootstrap 4

## Breaking changes since v6.0.0

* upgrade to `React 16.3.x`
* upgrade to `webpack 4`
* upgrade to `react-hot-loader v4`
* drop `CSS Module` in favor of `styled-components` (_scoped style, theme support, better scaling in huge applications, simplify toolchain and keep nearly SASS syntax_)
* add `flow types` (*even a little typing at least for better dev experience*)
* drop `prop-types`(*static and dynamic typing apart, flow type does far more so avoid writing 2 differents typing system*)
* `workbox-webpack-plugin` (_service worker caching powerful tool from Google_)
* [loadable-components](https://github.com/smooth-code/loadable-components) (_split your code: here splitted just by routes, by you can split a component level if you feel the need_)
* `webpack-bundle-analyzer`: analyze your bundle size (_maybe you should split or lazy load some part of your application: you will see clearly how to fix that_)
* drop `moment` for `date-fns` (*since far smaller size and job's done*)

## Breaking changes since v5.0.0

* upgrade to React 16.x
* `react-router 4+` (_read this [nice article about migrating from react-router 3 to react-router 4](https://codeburst.io/react-router-v4-unofficial-migration-guide-5a370b8905a)_)
* add few flow types (_still keep propTypes_)
* updated hot reload (_[read hot reload starter](https://gaearon.github.io/react-hot-loader/getstarted/)_)
* use `CSS module` (_keep coding style with SASS but get benefit of css module for a more peasant coding_)

## HUGE Breaking changes since 3.0.0

* upgrade to `React 15.6.x`
* upgrade to `webpack v3`
* add `JWT authentication` (protected route, logout components...)

## HUGE Breaking changes since 2.1.0

* upgrade to `react-router v4`

## HUGE Breaking changes since 2.0.0

* upgrade to `webpack 2`
* remove autoprefixer in favor of `postcss` and `cssnext`
* upgrade `React` to `15.5.4+`
* `PropTypes` comes now from `prop-types`
* upgrade dependencies

> If you prefer a `webpack 1` version, [version 1.1.0](https://github.com/MacKentoch/react-bootstrap-webpack-starter/tree/v1.1.0) is what you are looking for.

## Detailed Content

**Front:**

* React JS (16.3.x - [github :link:](https://github.com/facebook/react))
* react-router (4.x- [github :link:](https://github.com/reactjs/react-router))
* Bootstrap (4.x - [github :link:](https://github.com/twbs/bootstrap))
* react-strap ([github :link:](https://reactstrap.github.io/))
* font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
* animate.css ([github :link:](https://github.com/daneden/animate.css))
* classnames ([github :link:](https://github.com/JedWatson/classnames))
* react-motion ([github :link:](https://github.com/chenglou/react-motion))
* Webpack 4.x ([github :link:](https://github.com/webpack/webpack))
* babel 6+ ([github :link:](https://github.com/babel/babel))
* axios ([github :link:](https://github.com/mzabriskie/axios) _Why: simple, complete, isomorphic ..._)

**Tool chain:**

* babel 6+
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

## License

The MIT License (MIT)

Copyright (c) 2018 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMacKentoch%2Freact-bootstrap-webpack-starter.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMacKentoch%2Freact-bootstrap-webpack-starter?ref=badge_large)
