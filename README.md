Full ES2015+ React Bootstrap with Hot Reload STARTER
==========
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](https://github.com/MacKentoch/react-bootstrap-webpack-starter)
[![Build Status](https://travis-ci.org/MacKentoch/react-bootstrap-webpack-starter.svg?branch=master)](https://travis-ci.org/MacKentoch/react-bootstrap-webpack-starter)
[![Coverage Status](https://coveralls.io/repos/github/MacKentoch/react-bootstrap-webpack-starter/badge.svg?branch=master)](https://coveralls.io/github/MacKentoch/react-bootstrap-webpack-starter?branch=master)

### ReactJS + Bootstrap starter with hot reload

#### full client and server side in ES6+-ES2015+

A simple `full ES2015+`.

[preview here](https://mackentoch.github.io/react-bootstrap-webpack-starter)

*Concept behind:* **this starter is an easy to understand and ready to use ReactJS (ES6) + bootstrap + webpack starter with:**
- `no hard core Webpack` config so it is more commonly understandable (*they are numerous amazing starters with incredible webpack configs — hard core configs aren't bad things at all! —. This one is just for easier understanding for people even discovering webpack*)
- `with hot reload` (*ReactJS + webpack => hot reload = WINNER*)
- `no flux` (*yes, to give you freedom to add then since you may want to use something else like observables?*)
- `no auth` (*simple starter that even fits for simple applications that don't need auth*)
- *ReactJS Components written with `optimization tricks` (stateless, pure render...).*

> *Looking for server side rendering?* check this project with SSR added [here](https://github.com/MacKentoch/react-bootstrap-webpack-ssr-starter#react-bootstrap-with-server-side-rendering-starter)

## Breaking change since v1.1.0
- `cross-env` added so no more particular windows command
- serve dev and prod bundles 
 - `npm run serve-dev`: with server hot reload (*uses nodemon*)
 - `npm run serve-prod`: production like node-express server

## Breaking change since v1.0.0

- whatwg-fetch is now replaced by [axios](https://github.com/mzabriskie/axios).
- splits vendors script and css from main bundle (*extract-text-webpack-plugin v1.x*)
- create map file (DEV)
- prepared `launch.json` for VSCode debugger
- add some typescript types (typings)
- add some flow types (flow-typed)

## Breaking change since v0.5.0

`ReactJS` `v15.4.x` requires `react-hot-loader` to be `v3+` (*previous react-hot-loader was v1.x*).
So This starter had to include breaking changes to follow all of that.


## Detailed Content

**Front:**
- React JS (15.4.x - [github :link:](https://github.com/facebook/react))
- react-router (3.x- [github :link:](https://github.com/reactjs/react-router))
- Bootstrap (3.x - [github :link:](https://github.com/twbs/bootstrap))
- React-Bootstrap ([github :link:](https://github.com/react-bootstrap/react-bootstrap))
- font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
- animate.css ([github :link:](https://github.com/daneden/animate.css))
- classnames ([github :link:](https://github.com/JedWatson/classnames))
- react-motion ([github :link:](https://github.com/chenglou/react-motion))
- Webpack ([github :link:](https://github.com/webpack/webpack))
- babel 6+ ([github :link:](https://github.com/babel/babel))
- axios ([github :link:](https://github.com/mzabriskie/axios) *Why: simple, complete, isomorphic ...*)

**Tool chain:**
- babel 6+
- eslint
- hot reload
- loaders
  - `js` / `jsx`
  - sass
  - css
  - json
  - images formats
  - svg and fonts formats
- autoprefixer (css and sass)

**tests:**
- Mocha
- Chai (*+ dirty-chai*)
- enzyme
- Sinon
- nyc


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

### tests

```bash
npm run test
```

### bundle production mode


```bash
npm run prod
```

### mini node-express server (for dev or prod bundles)

with server hot reload:
```bash
npm run serve-dev
```

without hot reload:
```bash
npm run serve-prod
```



## To add

- [x] tests
 - [ ] 100%
- [x] coverage
- [x] hot reload
- [ ] ~~Redux~~ (*won't be added "HERE" since specific [repo `react-redux-bootstrap-webpack-starter` created here](https://github.com/MacKentoch/react-redux-bootstrap-webpack-starter)*)

## License

The MIT License (MIT)

Copyright (c) 2017 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
