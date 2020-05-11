# v8.0.0

- Typescript migration
- Upgrade React to v16.9+
- react-testing-library for test
- use react-router 5+ hooks
- `reactstrap` upgrade

# v7.1.0

- connect React Context API to redux DevTools (_also works for a React-Native app_) for dev only.

# v7.0.0

- migrated to `babel 7`
- update to `React 16.4.x`

# v6.1.0

- add `React 16.3.x` new context API use case (_you may no more need redux_)
- migrated to bootstrap 4

# v6.0.0

- upgrade to `React 16.3.x`
- upgrade to `webpack 4`
- upgrade to `react-hot-loader v4`
- drop `CSS Module` in favor of `styled-components` (_scoped style, theme support, better scaling in huge applications, simplify toolchain and keep nearly SASS syntax_)
- add `flow types` (_even a little typing at least for better dev experience_)
- drop `prop-types`(_static and dynamic typing apart, flow type does far more so avoid writing 2 differents typing system_)
- `workbox-webpack-plugin` (_service worker caching powerful tool from Google_)
- [loadable-components](https://github.com/smooth-code/loadable-components) (_split your code: here splitted just by routes, by you can split a component level if you feel the need_)
- `webpack-bundle-analyzer`: analyze your bundle size (_maybe you should split or lazy load some part of your application: you will see clearly how to fix that_)
- drop `moment` for `date-fns` (_since far smaller size and job's done_)

# v5.0.0

- upgrade to React 16.x
- `react-router 4+` (_read this [nice article about migrating from react-router 3 to react-router 4](https://codeburst.io/react-router-v4-unofficial-migration-guide-5a370b8905a)_)
- add few flow types (_still keep propTypes_)
- updated hot reload (_[read hot reload starter](https://gaearon.github.io/react-hot-loader/getstarted/)_)
- use `CSS module` (_keep coding style with SASS but get benefit of css module for a more peasant coding_)

# 3.0.0

- upgrade to `React 15.6.x`
- upgrade to `webpack v3`
- add `JWT authentication` (protected route, logout components...)

# 2.1.0

- upgrade to `react-router v4`

# 2.0.0

- upgrade to `webpack 2`
- remove autoprefixer in favor of `postcss` and `cssnext`
- upgrade `React` to `15.5.4+`
- `PropTypes` comes now from `prop-types`
- upgrade dependencies

> If you prefer a `webpack 1` version, [version 1.1.0](https://github.com/MacKentoch/react-bootstrap-webpack-starter/tree/v1.1.0) is what you are looking for.
