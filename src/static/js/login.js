!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/static/",t(t.s=16)}({1:function(n,e,t){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function s(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},o=[],i=0;i<n.length;i++){var a=n[i],l=e.base?a[0]+e.base:a[0],c=t[l]||0,d="".concat(l," ").concat(c);t[l]=c+1;var p=s(d),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(r[p].references++,r[p].updater(u)):r.push({identifier:d,updater:x(u,e),references:1}),o.push(d)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var d,p=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=p(e,i);else{var a=document.createTextNode(i),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(a,r[e]):n.appendChild(a)}}function f(n,e,t){var o=t.css,i=t.media,a=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,b=0;function x(n,e){var t,o,i;if(e.singleton){var a=b++;t=m||(m=c(e)),o=u.bind(null,t,a,!1),i=u.bind(null,t,a,!0)}else t=c(e),o=f.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var i=s(t[o]);r[i].references--}for(var a=l(n,e),c=0;c<t.length;c++){var d=s(t[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}t=a}}}},16:function(n,e,t){"use strict";t.r(e);t(17)},17:function(n,e,t){var o=t(1),i=t(18);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(i,a),i.locals?i.locals:{});n.exports=r},18:function(n,e,t){(e=t(2)(!1)).push([n.i,'/* haitian flag blue: #1632AA\n/* haitian flag red: #B30D2C\n*/ \n/*  for login screen */\n\n.login a {\n  color: #92badd;\n  display:inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n\n.login h2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px; \n  color: #cccccc;\n}\n\n\n\n/* STRUCTURE */\n\n.login .wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column; \n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n\n.full_width_height {\n    position: relative;\n    height: 100%;\n    width: 100%;\n}\n\n.login #formContent {\n  -webkit-border-radius: 10px 10px 10px 10px;\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  text-align: center;\n}\n\n.login #formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  -webkit-border-radius: 0 0 10px 10px;\n  border-radius: 0 0 10px 10px;\n}\n\n\n\n/* TABS */\n\n.login h2.inactive {\n  color: #cccccc;\n}\n\n.login h2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n\n\n/* FORM TYPOGRAPHY*/\n\n.login input[type=button], .login input[type=submit], .login input[type=reset]  {\n  background-color: #1632AA;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  cursor:pointer;\n  text-transform: uppercase;\n  font-size: 13px;\n  -webkit-box-shadow: 0 10px 30px 0 rgba(95,120,233,0.4);\n  box-shadow: 0 10px 30px 0 rgba(95,120,233,0.4);\n  -webkit-border-radius: 5px 5px 5px 5px;\n  border-radius: 5px 5px 5px 5px;\n  margin: 15px 20px 20px 20px;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\n.login input[type=button]:hover, .login input[type=submit]:hover, .login input[type=reset]:hover  {\n  background-color: #2340BD;\n  border-style:solid;\n  border-color: aliceblue;\n  border-width: 1px;\n}\n\n.login input[type=button]:active, .login input[type=submit]:active, .login input[type=reset]:active  {\n  -moz-transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -o-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  transform: scale(0.95);\n}\n\n.login input[type=text], .login input[type=password]  {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -webkit-border-radius: 5px 5px 5px 5px;\n  border-radius: 5px 5px 5px 5px;\n}\n\n.login input[type=text]:focus, .login input[type=password]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\n.login input[type=text]:placeholder, .login input[type=password]:placeholder {\n  color: #cccccc;\n}\n\n\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn {\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  -moz-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  -moz-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration:1s;\n  -moz-animation-duration:1s;\n  animation-duration:1s;\n}\n\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  -moz-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  -moz-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  -moz-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n}\n\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  -moz-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #1632AA;\n  content: "";\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n\n\n/* OTHERS */\n\n*:focus {\n    outline: none;\n} \n\n\n',""]),n.exports=e},2:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(r=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([i]).join("\n")}var r,s,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}}});
//# sourceMappingURL=login.js.map