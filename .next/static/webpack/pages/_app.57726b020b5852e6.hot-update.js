"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./index.css":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./index.css ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  -webkit-font-smoothing: antialiased;\\n  -webkit-osx-font-smoothing: grayscale;\\n}\\n\\nbody {\\n  background: #130606 space repeat;\\n  background-image: url(\\\"/images/Roman-Helmet.svg\\\");\\n  background-size: 50px;\\n}\\n\\n:root {\\n  --blue-col: #4095ff;\\n  --orange-col: #ffaa40;\\n  --red-col: #f75151;\\n  --bg-col: #101311;\\n  --dark-col: #212422;\\n  --text-col: #efefef;\\n  --text-col2: #dfdfdf;\\n}\\n\\n.abs-center {\\n  position: absolute;\\n  left: 50%;\\n  transform: translate(-50%, 0);\\n  width: 56rem;\\n}\\n.main-box {\\n  border-radius: 16px;\\n  border: dashed 2px var(--red-col);\\n\\n  background-color: var(--bg-col);\\n  color: var(--text-col);\\n  box-shadow: 0px 0px 40px 20px #000000;\\n\\n  padding: 1rem;\\n  margin-top: 2rem;\\n  margin-bottom: 5rem;\\n  min-height: 60rem;\\n}\\n\\n.side-bar {\\n  position: fixed;\\n  width: 15rem;\\n  height: 25rem;\\n  left: -5rem;\\n  bottom: 40%;\\n\\n  background-color: var(--bg-col);\\n  border: solid 2px var(--red-col);\\n  border-radius: 20px;\\n  color: var(--text-col);\\n}\\n.side-bar div {\\n  padding-left: 5.5rem;\\n  padding-right: 0.5rem;\\n  padding-bottom: 0.5rem;\\n  padding-top: 0.5rem;\\n}\\n.sb-list li {\\n  list-style-type: none;\\n}\\n.sb-list li * {\\n  white-space: nowrap;\\n}\\n.splitter {\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n  width: 135px;\\n  height: 3px;\\n  background-color: var(--red-col);\\n}\\n\\nh2,\\nh3,\\nh4 {\\n  font-family: \\\"Luxurious Roman\\\", cursive;\\n}\\nh3 {\\n  font-size: 1.5rem;\\n}\\nh2 {\\n  padding-top: 6.5rem;\\n  padding-bottom: 1rem;\\n  font-size: 2.15rem;\\n  text-align: center;\\n  font-family: \\\"Playfair Display\\\", serif;\\n  color: var(--text-col2);\\n}\\n.title {\\n  padding-top: 3rem;\\n  text-shadow: 0px 0px 4px #ffffff;\\n  color: #f5f1e1;\\n  font-size: 4rem;\\n  text-align: center;\\n  font-family: \\\"Playfair Display\\\", serif;\\n}\\na {\\n  white-space: nowrap;\\n  color: var(--blue-col);\\n  text-decoration: none;\\n}\\na:hover {\\n  color: var(--orange-col);\\n}\\np {\\n  font-family: \\\"Roboto Mono\\\", monospace;\\n  color: var(--text-col2);\\n}\\n\\n.inline-c {\\n  display: inline;\\n  padding: 1rem;\\n}\\n.inline-l {\\n  display: inline;\\n  position: absolute;\\n  float: left;\\n}\\n.gif {\\n  background-color: var(--dark-col);\\n\\n  display: grid;\\n  place-items: center;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\\n  grid-template-rows: auto;\\n  grid-row-gap: 2rem;\\n  row-gap: 2rem;\\n\\n  height: 200px;\\n  justify-content: space-evenly;\\n\\n  margin-left: 5rem;\\n  margin-right: 5rem;\\n  border-radius: 10px;\\n}\\n.git a {\\n  -ms-interpolation-mode: nearest-neighbor;\\n      image-rendering: -moz-crisp-edges;\\n      image-rendering: pixelated;\\n}\\n\\n@media only screen and (max-width: 83rem) {\\n  .title {\\n    padding-top: calc(3rem - 50px);\\n  }\\n  .side-bar {\\n    border-radius: 6px;\\n    position: relative;\\n    width: calc(100vw - 20px);\\n    max-width: 56rem;\\n    height: 75px;\\n    margin-bottom: 2rem;\\n    text-align: center;\\n    white-space: nowrap;\\n\\n    z-index: 2;\\n    align-items: center;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n  }\\n  .side-bar div {\\n    padding-left: 0.5rem;\\n  }\\n  .sb-list {\\n    display: inline-block;\\n  }\\n  .sb-list li {\\n    float: left;\\n  }\\n  .sb-list li:not(.splitter) {\\n    padding-left: 0.5rem;\\n    padding-right: 0.5rem;\\n  }\\n  .sb-list li * {\\n    display: block;\\n  }\\n  .splitter {\\n    margin-top: 0px;\\n    margin-bottom: 0px;\\n    margin-left: 10px;\\n    margin-right: 10px;\\n    width: 3px;\\n    height: 53.5px;\\n  }\\n}\\n@media only screen and (max-width: 56.9rem) {\\n  .abs-center {\\n    width: calc(100vw - 16px);\\n  }\\n  .splitter {\\n    margin: 0px;\\n    width: 3px;\\n    height: 1.5rem;\\n  }\\n  .inline-l {\\n    padding-bottom: 1rem;\\n    padding-top: 1rem;\\n    display: inherit;\\n    position: relative;\\n    float: none;\\n    text-align: center;\\n  }\\n  .gif {\\n    grid-template-columns: 1fr 1fr 1fr;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  .gif {\\n    margin: 0;\\n    grid-template-columns: 1fr 1fr;\\n  }\\n  h3 {\\n    font-size: 1rem;\\n  }\\n  h2 {\\n    padding-top: 2rem;\\n    font-size: 1.5rem;\\n  }\\n  p {\\n    font-size: 0.65rem;\\n  }\\n  .title {\\n    font-size: 2.5rem;\\n  }\\n}\\n@media only screen and (max-height: 44rem) {\\n  .title {\\n    padding-top: calc(3rem - 50px);\\n  }\\n  .side-bar {\\n    border-radius: 6px;\\n    position: relative;\\n    width: calc(100vw - 20px);\\n    max-width: 56rem;\\n    height: 50px;\\n    margin-bottom: 2rem;\\n    text-align: center;\\n\\n    z-index: 2;\\n    align-items: center;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n  }\\n  .side-bar div {\\n    padding-left: 0.5rem;\\n  }\\n  .sb-list {\\n    display: inline-block;\\n  }\\n  .sb-list li {\\n    float: left;\\n    padding-left: 0.5rem;\\n    padding-right: 0.5rem;\\n  }\\n  .sb-list li * {\\n    display: block;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://index.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,UAAU;EACV,SAAS;EACT,mCAAmC;EACnC,qCAAqC;AACvC;;AAEA;EACE,gCAAgC;EAChC,iDAAiD;EACjD,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,6BAA6B;EAC7B,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,iCAAiC;;EAEjC,+BAA+B;EAC/B,sBAAsB;EACtB,qCAAqC;;EAErC,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,WAAW;EACX,WAAW;;EAEX,+BAA+B;EAC/B,gCAAgC;EAChC,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,gCAAgC;AAClC;;AAEA;;;EAGE,uCAAuC;AACzC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,sCAAsC;EACtC,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,gCAAgC;EAChC,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,sCAAsC;AACxC;AACA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,qBAAqB;AACvB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,iCAAiC;;EAEjC,aAAa;EACb,mBAAmB;EACnB,8CAA8C;EAC9C,wBAAwB;EACxB,kBAAa;EAAb,aAAa;;EAEb,aAAa;EACb,6BAA6B;;EAE7B,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,wCAA0B;MAA1B,iCAA0B;MAA1B,0BAA0B;AAC5B;;AAEA;EACE;IACE,8BAA8B;EAChC;EACA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;;IAEnB,UAAU;IACV,mBAAmB;IACnB,SAAS;IACT,6BAA6B;EAC/B;EACA;IACE,oBAAoB;EACtB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,WAAW;EACb;EACA;IACE,oBAAoB;IACpB,qBAAqB;EACvB;EACA;IACE,cAAc;EAChB;EACA;IACE,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,cAAc;EAChB;AACF;AACA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,UAAU;IACV,cAAc;EAChB;EACA;IACE,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;EACpB;EACA;IACE,kCAAkC;EACpC;AACF;AACA;EACE;IACE,SAAS;IACT,8BAA8B;EAChC;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,iBAAiB;EACnB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,iBAAiB;EACnB;AACF;AACA;EACE;IACE,8BAA8B;EAChC;EACA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;;IAElB,UAAU;IACV,mBAAmB;IACnB,SAAS;IACT,6BAA6B;EAC/B;EACA;IACE,oBAAoB;EACtB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,WAAW;IACX,oBAAoB;IACpB,qBAAqB;EACvB;EACA;IACE,cAAc;EAChB;AACF\",\"sourcesContent\":[\"* {\\n  padding: 0;\\n  margin: 0;\\n  -webkit-font-smoothing: antialiased;\\n  -webkit-osx-font-smoothing: grayscale;\\n}\\n\\nbody {\\n  background: #130606 space repeat;\\n  background-image: url(\\\"/images/Roman-Helmet.svg\\\");\\n  background-size: 50px;\\n}\\n\\n:root {\\n  --blue-col: #4095ff;\\n  --orange-col: #ffaa40;\\n  --red-col: #f75151;\\n  --bg-col: #101311;\\n  --dark-col: #212422;\\n  --text-col: #efefef;\\n  --text-col2: #dfdfdf;\\n}\\n\\n.abs-center {\\n  position: absolute;\\n  left: 50%;\\n  transform: translate(-50%, 0);\\n  width: 56rem;\\n}\\n.main-box {\\n  border-radius: 16px;\\n  border: dashed 2px var(--red-col);\\n\\n  background-color: var(--bg-col);\\n  color: var(--text-col);\\n  box-shadow: 0px 0px 40px 20px #000000;\\n\\n  padding: 1rem;\\n  margin-top: 2rem;\\n  margin-bottom: 5rem;\\n  min-height: 60rem;\\n}\\n\\n.side-bar {\\n  position: fixed;\\n  width: 15rem;\\n  height: 25rem;\\n  left: -5rem;\\n  bottom: 40%;\\n\\n  background-color: var(--bg-col);\\n  border: solid 2px var(--red-col);\\n  border-radius: 20px;\\n  color: var(--text-col);\\n}\\n.side-bar div {\\n  padding-left: 5.5rem;\\n  padding-right: 0.5rem;\\n  padding-bottom: 0.5rem;\\n  padding-top: 0.5rem;\\n}\\n.sb-list li {\\n  list-style-type: none;\\n}\\n.sb-list li * {\\n  white-space: nowrap;\\n}\\n.splitter {\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n  width: 135px;\\n  height: 3px;\\n  background-color: var(--red-col);\\n}\\n\\nh2,\\nh3,\\nh4 {\\n  font-family: \\\"Luxurious Roman\\\", cursive;\\n}\\nh3 {\\n  font-size: 1.5rem;\\n}\\nh2 {\\n  padding-top: 6.5rem;\\n  padding-bottom: 1rem;\\n  font-size: 2.15rem;\\n  text-align: center;\\n  font-family: \\\"Playfair Display\\\", serif;\\n  color: var(--text-col2);\\n}\\n.title {\\n  padding-top: 3rem;\\n  text-shadow: 0px 0px 4px #ffffff;\\n  color: #f5f1e1;\\n  font-size: 4rem;\\n  text-align: center;\\n  font-family: \\\"Playfair Display\\\", serif;\\n}\\na {\\n  white-space: nowrap;\\n  color: var(--blue-col);\\n  text-decoration: none;\\n}\\na:hover {\\n  color: var(--orange-col);\\n}\\np {\\n  font-family: \\\"Roboto Mono\\\", monospace;\\n  color: var(--text-col2);\\n}\\n\\n.inline-c {\\n  display: inline;\\n  padding: 1rem;\\n}\\n.inline-l {\\n  display: inline;\\n  position: absolute;\\n  float: left;\\n}\\n.gif {\\n  background-color: var(--dark-col);\\n\\n  display: grid;\\n  place-items: center;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\\n  grid-template-rows: auto;\\n  row-gap: 2rem;\\n\\n  height: 200px;\\n  justify-content: space-evenly;\\n\\n  margin-left: 5rem;\\n  margin-right: 5rem;\\n  border-radius: 10px;\\n}\\n.git a {\\n  image-rendering: pixelated;\\n}\\n\\n@media only screen and (max-width: 83rem) {\\n  .title {\\n    padding-top: calc(3rem - 50px);\\n  }\\n  .side-bar {\\n    border-radius: 6px;\\n    position: relative;\\n    width: calc(100vw - 20px);\\n    max-width: 56rem;\\n    height: 75px;\\n    margin-bottom: 2rem;\\n    text-align: center;\\n    white-space: nowrap;\\n\\n    z-index: 2;\\n    align-items: center;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n  }\\n  .side-bar div {\\n    padding-left: 0.5rem;\\n  }\\n  .sb-list {\\n    display: inline-block;\\n  }\\n  .sb-list li {\\n    float: left;\\n  }\\n  .sb-list li:not(.splitter) {\\n    padding-left: 0.5rem;\\n    padding-right: 0.5rem;\\n  }\\n  .sb-list li * {\\n    display: block;\\n  }\\n  .splitter {\\n    margin-top: 0px;\\n    margin-bottom: 0px;\\n    margin-left: 10px;\\n    margin-right: 10px;\\n    width: 3px;\\n    height: 53.5px;\\n  }\\n}\\n@media only screen and (max-width: 56.9rem) {\\n  .abs-center {\\n    width: calc(100vw - 16px);\\n  }\\n  .splitter {\\n    margin: 0px;\\n    width: 3px;\\n    height: 1.5rem;\\n  }\\n  .inline-l {\\n    padding-bottom: 1rem;\\n    padding-top: 1rem;\\n    display: inherit;\\n    position: relative;\\n    float: none;\\n    text-align: center;\\n  }\\n  .gif {\\n    grid-template-columns: 1fr 1fr 1fr;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  .gif {\\n    margin: 0;\\n    grid-template-columns: 1fr 1fr;\\n  }\\n  h3 {\\n    font-size: 1rem;\\n  }\\n  h2 {\\n    padding-top: 2rem;\\n    font-size: 1.5rem;\\n  }\\n  p {\\n    font-size: 0.65rem;\\n  }\\n  .title {\\n    font-size: 2.5rem;\\n  }\\n}\\n@media only screen and (max-height: 44rem) {\\n  .title {\\n    padding-top: calc(3rem - 50px);\\n  }\\n  .side-bar {\\n    border-radius: 6px;\\n    position: relative;\\n    width: calc(100vw - 20px);\\n    max-width: 56rem;\\n    height: 50px;\\n    margin-bottom: 2rem;\\n    text-align: center;\\n\\n    z-index: 2;\\n    align-items: center;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n  }\\n  .side-bar div {\\n    padding-left: 0.5rem;\\n  }\\n  .sb-list {\\n    display: inline-block;\\n  }\\n  .sb-list li {\\n    float: left;\\n    padding-left: 0.5rem;\\n    padding-right: 0.5rem;\\n  }\\n  .sb-list li * {\\n    display: block;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vaW5kZXguY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3VIO0FBQ3ZILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw2Q0FBNkMsZUFBZSxjQUFjLHdDQUF3QywwQ0FBMEMsR0FBRyxVQUFVLHFDQUFxQyx3REFBd0QsMEJBQTBCLEdBQUcsV0FBVyx3QkFBd0IsMEJBQTBCLHVCQUF1QixzQkFBc0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIsR0FBRyxpQkFBaUIsdUJBQXVCLGNBQWMsa0NBQWtDLGlCQUFpQixHQUFHLGFBQWEsd0JBQXdCLHNDQUFzQyxzQ0FBc0MsMkJBQTJCLDBDQUEwQyxvQkFBb0IscUJBQXFCLHdCQUF3QixzQkFBc0IsR0FBRyxlQUFlLG9CQUFvQixpQkFBaUIsa0JBQWtCLGdCQUFnQixnQkFBZ0Isc0NBQXNDLHFDQUFxQyx3QkFBd0IsMkJBQTJCLEdBQUcsaUJBQWlCLHlCQUF5QiwwQkFBMEIsMkJBQTJCLHdCQUF3QixHQUFHLGVBQWUsMEJBQTBCLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLGFBQWEscUJBQXFCLHdCQUF3QixpQkFBaUIsZ0JBQWdCLHFDQUFxQyxHQUFHLGtCQUFrQiw4Q0FBOEMsR0FBRyxNQUFNLHNCQUFzQixHQUFHLE1BQU0sd0JBQXdCLHlCQUF5Qix1QkFBdUIsdUJBQXVCLDZDQUE2Qyw0QkFBNEIsR0FBRyxVQUFVLHNCQUFzQixxQ0FBcUMsbUJBQW1CLG9CQUFvQix1QkFBdUIsNkNBQTZDLEdBQUcsS0FBSyx3QkFBd0IsMkJB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QUFvQyxLQUFLLG1CQUFtQiwyQkFBMkIsS0FBSyxjQUFjLDRCQUE0QixLQUFLLGlCQUFpQixrQkFBa0IsMkJBQTJCLDRCQUE0QixLQUFLLG1CQUFtQixxQkFBcUIsS0FBSyxHQUFHLHFCQUFxQjtBQUMzdFg7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9pbmRleC5jc3M/Y2ZkNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC13ZWJraXQtb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzEzMDYwNiBzcGFjZSByZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9pbWFnZXMvUm9tYW4tSGVsbWV0LnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1MHB4O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJsdWUtY29sOiAjNDA5NWZmO1xcbiAgLS1vcmFuZ2UtY29sOiAjZmZhYTQwO1xcbiAgLS1yZWQtY29sOiAjZjc1MTUxO1xcbiAgLS1iZy1jb2w6ICMxMDEzMTE7XFxuICAtLWRhcmstY29sOiAjMjEyNDIyO1xcbiAgLS10ZXh0LWNvbDogI2VmZWZlZjtcXG4gIC0tdGV4dC1jb2wyOiAjZGZkZmRmO1xcbn1cXG5cXG4uYWJzLWNlbnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHdpZHRoOiA1NnJlbTtcXG59XFxuLm1haW4tYm94IHtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3JkZXI6IGRhc2hlZCAycHggdmFyKC0tcmVkLWNvbCk7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2wpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCAyMHB4ICMwMDAwMDA7XFxuXFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICBtaW4taGVpZ2h0OiA2MHJlbTtcXG59XFxuXFxuLnNpZGUtYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGhlaWdodDogMjVyZW07XFxuICBsZWZ0OiAtNXJlbTtcXG4gIGJvdHRvbTogNDAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sKTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXJlZC1jb2wpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbCk7XFxufVxcbi5zaWRlLWJhciBkaXYge1xcbiAgcGFkZGluZy1sZWZ0OiA1LjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuLnNiLWxpc3QgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4uc2ItbGlzdCBsaSAqIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5zcGxpdHRlciB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHdpZHRoOiAxMzVweDtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNvbCk7XFxufVxcblxcbmgyLFxcbmgzLFxcbmg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHV4dXJpb3VzIFJvbWFuXFxcIiwgY3Vyc2l2ZTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbmgyIHtcXG4gIHBhZGRpbmctdG9wOiA2LjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMi4xNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sMik7XFxufVxcbi50aXRsZSB7XFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjZmZmZmZmO1xcbiAgY29sb3I6ICNmNWYxZTE7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG59XFxuYSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tb3JhbmdlLWNvbCk7XFxufVxcbnAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbDIpO1xcbn1cXG5cXG4uaW5saW5lLWMge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmlubGluZS1sIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZ2lmIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sKTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGdyaWQtcm93LWdhcDogMnJlbTtcXG4gIHJvdy1nYXA6IDJyZW07XFxuXFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5naXQgYSB7XFxuICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBuZWFyZXN0LW5laWdoYm9yO1xcbiAgICAgIGltYWdlLXJlbmRlcmluZzogLW1vei1jcmlzcC1lZGdlcztcXG4gICAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4M3JlbSkge1xcbiAgLnRpdGxlIHtcXG4gICAgcGFkZGluZy10b3A6IGNhbGMoM3JlbSAtIDUwcHgpO1xcbiAgfVxcbiAgLnNpZGUtYmFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7XFxuICAgIG1heC13aWR0aDogNTZyZW07XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcbiAgICB6LWluZGV4OiAyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgfVxcbiAgLnNpZGUtYmFyIGRpdiB7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcbiAgLnNiLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB9XFxuICAuc2ItbGlzdCBsaSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgfVxcbiAgLnNiLWxpc3QgbGk6bm90KC5zcGxpdHRlcikge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgfVxcbiAgLnNiLWxpc3QgbGkgKiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgLnNwbGl0dGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGhlaWdodDogNTMuNXB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjlyZW0pIHtcXG4gIC5hYnMtY2VudGVyIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNnB4KTtcXG4gIH1cXG4gIC5zcGxpdHRlciB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogM3B4O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gIH1cXG4gIC5pbmxpbmUtbCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLmdpZiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5naWYge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgaDIge1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xcbiAgfVxcbiAgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ0cmVtKSB7XFxuICAudGl0bGUge1xcbiAgICBwYWRkaW5nLXRvcDogY2FsYygzcmVtIC0gNTBweCk7XFxuICB9XFxuICAuc2lkZS1iYXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTtcXG4gICAgbWF4LXdpZHRoOiA1NnJlbTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB9XFxuICAuc2lkZS1iYXIgZGl2IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuICAuc2ItbGlzdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG4gIC5zYi1saXN0IGxpIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICB9XFxuICAuc2ItbGlzdCBsaSAqIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULG1DQUFtQztFQUNuQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaURBQWlEO0VBQ2pELHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlDQUFpQzs7RUFFakMsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixxQ0FBcUM7O0VBRXJDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXOztFQUVYLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTs7O0VBR0UsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQ0FBaUM7O0VBRWpDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLHdCQUF3QjtFQUN4QixrQkFBYTtFQUFiLGFBQWE7O0VBRWIsYUFBYTtFQUNiLDZCQUE2Qjs7RUFFN0IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHdDQUEwQjtNQUExQixpQ0FBMEI7TUFBMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7O0lBRW5CLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7RUFDaEI7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjtBQUNBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCOztJQUVsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLXdlYmtpdC1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjMTMwNjA2IHNwYWNlIHJlcGVhdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltYWdlcy9Sb21hbi1IZWxtZXQuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwcHg7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmx1ZS1jb2w6ICM0MDk1ZmY7XFxuICAtLW9yYW5nZS1jb2w6ICNmZmFhNDA7XFxuICAtLXJlZC1jb2w6ICNmNzUxNTE7XFxuICAtLWJnLWNvbDogIzEwMTMxMTtcXG4gIC0tZGFyay1jb2w6ICMyMTI0MjI7XFxuICAtLXRleHQtY29sOiAjZWZlZmVmO1xcbiAgLS10ZXh0LWNvbDI6ICNkZmRmZGY7XFxufVxcblxcbi5hYnMtY2VudGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgd2lkdGg6IDU2cmVtO1xcbn1cXG4ubWFpbi1ib3gge1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJvcmRlcjogZGFzaGVkIDJweCB2YXIoLS1yZWQtY29sKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2wpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IDIwcHggIzAwMDAwMDtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDYwcmVtO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIGxlZnQ6IC01cmVtO1xcbiAgYm90dG9tOiA0MCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2wpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tcmVkLWNvbCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sKTtcXG59XFxuLnNpZGUtYmFyIGRpdiB7XFxuICBwYWRkaW5nLWxlZnQ6IDUuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4uc2ItbGlzdCBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi5zYi1saXN0IGxpICoge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnNwbGl0dGVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEzNXB4O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sKTtcXG59XFxuXFxuaDIsXFxuaDMsXFxuaDQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdXh1cmlvdXMgUm9tYW5cXFwiLCBjdXJzaXZlO1xcbn1cXG5oMyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuaDIge1xcbiAgcGFkZGluZy10b3A6IDYuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAyLjE1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2wyKTtcXG59XFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNmZmZmZmY7XFxuICBjb2xvcjogI2Y1ZjFlMTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbn1cXG5hIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1jb2wpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sKTtcXG59XFxucCB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sMik7XFxufVxcblxcbi5pbmxpbmUtYyB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uaW5saW5lLWwge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5naWYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2wpO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgcm93LWdhcDogMnJlbTtcXG5cXG4gIGhlaWdodDogMjAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmdpdCBhIHtcXG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzcmVtKSB7XFxuICAudGl0bGUge1xcbiAgICBwYWRkaW5nLXRvcDogY2FsYygzcmVtIC0gNTBweCk7XFxuICB9XFxuICAuc2lkZS1iYXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTtcXG4gICAgbWF4LXdpZHRoOiA1NnJlbTtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB9XFxuICAuc2lkZS1iYXIgZGl2IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuICAuc2ItbGlzdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG4gIC5zYi1saXN0IGxpIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxuICAuc2ItbGlzdCBsaTpub3QoLnNwbGl0dGVyKSB7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICB9XFxuICAuc2ItbGlzdCBsaSAqIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuc3BsaXR0ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgaGVpZ2h0OiA1My41cHg7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuOXJlbSkge1xcbiAgLmFicy1jZW50ZXIge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDE2cHgpO1xcbiAgfVxcbiAgLnNwbGl0dGVyIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgfVxcbiAgLmlubGluZS1sIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAuZ2lmIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmdpZiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICBoMiB7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIHAge1xcbiAgICBmb250LXNpemU6IDAuNjVyZW07XFxuICB9XFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDRyZW0pIHtcXG4gIC50aXRsZSB7XFxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDNyZW0gLSA1MHB4KTtcXG4gIH1cXG4gIC5zaWRlLWJhciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIwcHgpO1xcbiAgICBtYXgtd2lkdGg6IDU2cmVtO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgei1pbmRleDogMjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIH1cXG4gIC5zaWRlLWJhciBkaXYge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG4gIC5zYi1saXN0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcbiAgLnNiLWxpc3QgbGkge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIH1cXG4gIC5zYi1saXN0IGxpICoge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./index.css\n");

/***/ })

});