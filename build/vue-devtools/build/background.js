!function(e){function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var o={};return n.m=e,n.c=o,n.i=function(e){return e},n.d=function(e,n,o){Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=188)}({188:function(e,n){function o(e){return+e+""===e}function t(e){chrome.tabs.executeScript(e,{file:"/build/proxy.js"},function(n){n?console.log("injected proxy to tab "+e):c[e].devtools.postMessage("proxy-fail")})}function r(e,n,o){function t(n){return"log"===n.event?console.log("tab "+e,n.payload):(console.log("devtools -> backend",n),void o.postMessage(n))}function r(o){return"log"===o.event?console.log("tab "+e,o.payload):(console.log("backend -> devtools",o),void n.postMessage(o))}function s(){console.log("tab "+e+" disconnected."),n.onMessage.removeListener(t),o.onMessage.removeListener(r),n.disconnect(),o.disconnect(),c[e]=null}n.onMessage.addListener(t),o.onMessage.addListener(r),n.onDisconnect.addListener(s),o.onDisconnect.addListener(s),console.log("tab "+e+" connected.")}var c={};chrome.runtime.onConnect.addListener(function(e){var n=void 0,s=void 0;o(e.name)?(n=e.name,s="devtools",t(+e.name)):(n=e.sender.tab.id,s="backend"),c[n]||(c[n]={devtools:null,backend:null}),c[n][s]=e,c[n].devtools&&c[n].backend&&r(n,c[n].devtools,c[n].backend)})}});