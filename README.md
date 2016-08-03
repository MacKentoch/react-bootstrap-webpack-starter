Full ES2015 React Bootstrap with Hot Reload STARTER
==========
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](https://github.com/MacKentoch/react-bootstrap-webpack-starter)
[![Build Status](https://travis-ci.org/MacKentoch/react-bootstrap-webpack-starter.svg?branch=master)](https://travis-ci.org/MacKentoch/react-bootstrap-webpack-starter)
[![Coverage Status](https://coveralls.io/repos/github/MacKentoch/react-bootstrap-webpack-starter/badge.svg?branch=master)](https://coveralls.io/github/MacKentoch/react-bootstrap-webpack-starter?branch=master)

### ReactJS + Bootstrap starter with hot reload

#### full client and server side in ES6-ES2015

A simple `full ES2015` (*previously named ES6*).

*Concept behind:* **this starter is an easy to understand and ready to use ReactJS (ES6) + bootstrap + webpack starter with:**
- `no hard core Webpack` config so it is more commonly understandable (*they are numerous amazing starters with incredible webpack configs — hard core configs aren't bad things at all! —. This one is just for easier understanding for people even discovering webpack*)
- `with hot reload` (*ReactJS + webpack => hot reload = WINNER*)
- `no flux` (*yes, to give you freedom to add then since you may want to use something else like observables?*)
- `no auth` (*simple starter that even fits for simple applications that don't need auth*)
- *ReactJS Components written with `optimization tricks` (stateless, pure render...).*

## Detailed Content

**Front:**
- React JS (15.x - [github :link:](https://github.com/facebook/react))
- react-router (2.x- [github :link:](https://github.com/reactjs/react-router))
- Bootstrap (3.x - [github :link:](https://github.com/twbs/bootstrap))
- React-Bootstrap ([github :link:](https://github.com/react-bootstrap/react-bootstrap))
- font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
- animate.css ([github :link:](https://github.com/daneden/animate.css))
- classnames ([github :link:](https://github.com/JedWatson/classnames))
- react-motion ([github :link:](https://github.com/chenglou/react-motion))
- Webpack ([github :link:](https://github.com/webpack/webpack))
- babel 6+ ([github :link:](https://github.com/babel/babel))
- react-addons-shallow-compare (*pure render mixin equivalent for ES6*)
- whatwg-fetch (*Why: because it is a fetch `Web API` polyfill*)

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

### bundle dev mode

*General case:*
```bash
npm run dev
```

*Windows - particular - case:*
```bash
npm run dev-win
```

### dev : hot reload mode

*General case:*
```bash
npm run start
```

*Windows - particular - case:*
```bash
npm run start-win
```

### tests

*General case:*
```bash
npm run test
```

*Windows - particular - case:*
```bash
npm run test-win
```

### bundle production mode

*General case:*
```bash
npm run prod
```

*Windows - particular - case:*
```bash
npm run prod-win
```


## To add

- [x] tests
 - [ ] 100%
- [x] coverage
- [x] hot reload
- [ ] ~~Redux~~ (*won't be added "HERE" since specific [repo `react-redux-bootstrap-webpack-starter` created here](https://github.com/MacKentoch/react-redux-bootstrap-webpack-starter)*)

## License

The MIT License (MIT)

Copyright (c) 2016 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
