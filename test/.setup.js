require('babel-register')();
// jsdom 11.x +:
const jsdom     = require("jsdom");
const { JSDOM } = jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

global.window   = new JSDOM('').window;
global.document = global.window.document;


// Object
//   .keys(document.defaultView)
//   .forEach(
//     (property) => {
//       if (typeof global[property] === 'undefined') {
//         exposedProperties.push(property);
//         global[property] = document.defaultView[property];
//       }
//     }
// );

global.navigator = {
  userAgent: 'node.js'
};

var documentRef;
documentRef = document;
