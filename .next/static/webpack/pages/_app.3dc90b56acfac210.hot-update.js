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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  -webkit-font-smoothing: antialiased;\\n  -webkit-osx-font-smoothing: grayscale;\\n}\\n\\nbody {\\n  background: #130606 space repeat;\\n  background-image: url(\\\"/images/Roman-Helmet.svg\\\");\\n  background-size: 50px;\\n}\\n\\n:root {\\n  --blue-col: #4095ff;\\n  --orange-col: #ffaa40;\\n  --red-col: #f75151;\\n  --bg-col: #101311;\\n  --dark-col: #212422;\\n  --text-col: #efefef;\\n  --text-col2: #dfdfdf;\\n}\\n\\n.abs-center {\\n  position: absolute;\\n  left: 50%;\\n  transform: translate(-50%, 0);\\n  width: 56rem;\\n}\\n.main-box {\\n  border-radius: 16px;\\n  border: dashed 2px var(--red-col);\\n\\n  background-color: var(--bg-col);\\n  color: var(--text-col);\\n  box-shadow: 0px 0px 40px 20px #000000;\\n\\n  padding: 1rem;\\n  margin-top: 2rem;\\n  margin-bottom: 5rem;\\n  min-height: 60rem;\\n}\\n\\n.side-bar {\\n  position: fixed;\\n  width: 15rem;\\n  height: 25rem;\\n  left: -5rem;\\n  bottom: 40%;\\n\\n  background-color: var(--bg-col);\\n  border: solid 2px var(--red-col);\\n  border-radius: 20px;\\n  color: var(--text-col);\\n}\\n.side-bar div {\\n  padding-left: 5.5rem;\\n  padding-right: 0.5rem;\\n  padding-bottom: 0.5rem;\\n  padding-top: 0.5rem;\\n}\\n.sb-list li {\\n  list-style-type: none;\\n}\\n.sb-list li * {\\n  white-space: nowrap;\\n}\\n.splitter {\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n  width: 135px;\\n  height: 3px;\\n  background-color: var(--red-col);\\n}\\n\\nh2,\\nh3,\\nh4 {\\n  font-family: \\\"Luxurious Roman\\\", cursive;\\n}\\nh3 {\\n  font-size: 1.5rem;\\n}\\nh2 {\\n  padding-top: 6.5rem;\\n  padding-bottom: 1rem;\\n  font-size: 2.15rem;\\n  text-align: center;\\n  font-family: \\\"Playfair Display\\\", serif;\\n  color: var(--text-col2);\\n}\\n.title {\\n  padding-top: 3rem;\\n  text-shadow: 0px 0px 4px #ffffff;\\n  color: #f5f1e1;\\n  font-size: 4rem;\\n  text-align: center;\\n  font-family: \\\"Playfair Display\\\", serif;\\n}\\na {\\n  white-space: nowrap;\\n  color: var(--blue-col);\\n  text-decoration: none;\\n}\\na:hover {\\n  color: var(--orange-col);\\n}\\np {\\n  font-family: \\\"Roboto Mono\\\", monospace;\\n  color: var(--text-col2);\\n}\\n\\n.inline-c {\\n  display: inline;\\n  padding: 1rem;\\n}\\n.inline-l {\\n  display: inline;\\n  position: absolute;\\n  float: left;\\n}\\n.gif {\\n  background-color: var(--dark-col);\\n\\n  display: grid;\\n  place-items: center;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\\n  grid-template-rows: auto;\\n  grid-row-gap: 2rem;\\n  row-gap: 2rem;\\n\\n  height: 200px;\\n  justify-content: space-evenly;\\n\\n  margin-left: 5rem;\\n  margin-right: 5rem;\\n  border-radius: 10px;\\n}\\n.git a {\\n  -ms-interpolation-mode: nearest-neighbor;\\n      image-rendering: -moz-crisp-edges;\\n      image-rendering: pixelated;\\n}\\n\\n@media only screen and (max-width: 83rem) {\\n  .title {\\n    padding-top: calc(3rem - 50px);\\n  }\\n  .side-bar {\\n    border-radius: 6px;\\n    position: relative;\\n    width: calc(100vw - 20px);\\n    max-width: 56rem;\\n    height: 50px;\\n    margin-bottom: 2rem;\\n    text-align: center;\\n    white-space: nowrap;\\n\\n    z-index: 2;\\n    align-items: center;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n  }\\n  .side-bar div {\\n    padding-left: 0.5rem;\\n  }\\n  .sb-list {\\n    display: inline-block;\\n  }\\n  .sb-list li {\\n    float: left;\\n  }\\n  .sb-list li:not(.splitter) {\\n    padding-left: 0.46rem;\\n    padding-right: 0.47rem;\\n  }\\n  .sb-list li * {\\n    display: block;\\n  }\\n  .splitter {\\n    margin-top: 0px;\\n    margin-bottom: 0px;\\n    margin-left: 2px;\\n    margin-right: 2px;\\n    width: 3px;\\n    height: 1.5rem;\\n  }\\n}\\n@media only screen and (max-width: 56.9rem) {\\n  .abs-center {\\n    width: calc(100vw - 16px);\\n  }\\n  .side-bar {\\n    height: 75px;\\n  }\\n  .splitter {\\n    margin: 0px;\\n    width: 3px;\\n    height: 1.5rem;\\n  }\\n  .inline-l {\\n    padding-bottom: 1rem;\\n    padding-top: 1rem;\\n    display: inherit;\\n    position: relative;\\n    float: none;\\n    text-align: center;\\n  }\\n  .gif {\\n    grid-template-columns: 1fr 1fr 1fr;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  .gif {\\n    margin: 0;\\n    grid-template-columns: 1fr 1fr;\\n  }\\n  h3 {\\n    font-size: 1rem;\\n  }\\n  h2 {\\n    padding-top: 2rem;\\n    font-size: 1.5rem;\\n  }\\n  p {\\n    font-size: 0.65rem;\\n  }\\n  .title {\\n    font-size: 2.5rem;\\n  }\\n}\\n@media only screen and (max-height: 44rem) {\\n  .title {\\n    padding-top: calc(3rem - 50px);\\n  }\\n  .side-bar {\\n    border-radius: 6px;\\n    position: relative;\\n    width: calc(100vw - 20px);\\n    max-width: 56rem;\\n    height: 75px;\\n    margin-bottom: 2rem;\\n    text-align: center;\\n\\n    z-index: 2;\\n    align-items: center;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n  }\\n  .side-bar div {\\n    padding-left: 0.5rem;\\n  }\\n  .sb-list {\\n    display: inline-block;\\n  }\\n  .sb-list li {\\n    float: left;\\n    padding-left: 0.5rem;\\n    padding-right: 0.5rem;\\n  }\\n  .sb-list li * {\\n    display: block;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://index.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,UAAU;EACV,SAAS;EACT,mCAAmC;EACnC,qCAAqC;AACvC;;AAEA;EACE,gCAAgC;EAChC,iDAAiD;EACjD,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,6BAA6B;EAC7B,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,iCAAiC;;EAEjC,+BAA+B;EAC/B,sBAAsB;EACtB,qCAAqC;;EAErC,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,WAAW;EACX,WAAW;;EAEX,+BAA+B;EAC/B,gCAAgC;EAChC,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,gCAAgC;AAClC;;AAEA;;;EAGE,uCAAuC;AACzC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,sCAAsC;EACtC,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,gCAAgC;EAChC,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,sCAAsC;AACxC;AACA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,qBAAqB;AACvB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,iCAAiC;;EAEjC,aAAa;EACb,mBAAmB;EACnB,8CAA8C;EAC9C,wBAAwB;EACxB,kBAAa;EAAb,aAAa;;EAEb,aAAa;EACb,6BAA6B;;EAE7B,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,wCAA0B;MAA1B,iCAA0B;MAA1B,0BAA0B;AAC5B;;AAEA;EACE;IACE,8BAA8B;EAChC;EACA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;;IAEnB,UAAU;IACV,mBAAmB;IACnB,SAAS;IACT,6BAA6B;EAC/B;EACA;IACE,oBAAoB;EACtB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,sBAAsB;EACxB;EACA;IACE,cAAc;EAChB;EACA;IACE,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,UAAU;IACV,cAAc;EAChB;AACF;AACA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;IACX,UAAU;IACV,cAAc;EAChB;EACA;IACE,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;EACpB;EACA;IACE,kCAAkC;EACpC;AACF;AACA;EACE;IACE,SAAS;IACT,8BAA8B;EAChC;EACA;IACE,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,iBAAiB;EACnB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,iBAAiB;EACnB;AACF;AACA;EACE;IACE,8BAA8B;EAChC;EACA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;;IAElB,UAAU;IACV,mBAAmB;IACnB,SAAS;IACT,6BAA6B;EAC/B;EACA;IACE,oBAAoB;EACtB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,WAAW;IACX,oBAAoB;IACpB,qBAAqB;EACvB;EACA;IACE,cAAc;EAChB;AACF\",\"sourcesContent\":[\"* {\\n  padding: 0;\\n  margin: 0;\\n  -webkit-font-smoothing: antialiased;\\n  -webkit-osx-font-smoothing: grayscale;\\n}\\n\\nbody {\\n  background: #130606 space repeat;\\n  background-image: url(\\\"/images/Roman-Helmet.svg\\\");\\n  background-size: 50px;\\n}\\n\\n:root {\\n  --blue-col: #4095ff;\\n  --orange-col: #ffaa40;\\n  --red-col: #f75151;\\n  --bg-col: #101311;\\n  --dark-col: #212422;\\n  --text-col: #efefef;\\n  --text-col2: #dfdfdf;\\n}\\n\\n.abs-center {\\n  position: absolute;\\n  left: 50%;\\n  transform: translate(-50%, 0);\\n  width: 56rem;\\n}\\n.main-box {\\n  border-radius: 16px;\\n  border: dashed 2px var(--red-col);\\n\\n  background-color: var(--bg-col);\\n  color: var(--text-col);\\n  box-shadow: 0px 0px 40px 20px #000000;\\n\\n  padding: 1rem;\\n  margin-top: 2rem;\\n  margin-bottom: 5rem;\\n  min-height: 60rem;\\n}\\n\\n.side-bar {\\n  position: fixed;\\n  width: 15rem;\\n  height: 25rem;\\n  left: -5rem;\\n  bottom: 40%;\\n\\n  background-color: var(--bg-col);\\n  border: solid 2px var(--red-col);\\n  border-radius: 20px;\\n  color: var(--text-col);\\n}\\n.side-bar div {\\n  padding-left: 5.5rem;\\n  padding-right: 0.5rem;\\n  padding-bottom: 0.5rem;\\n  padding-top: 0.5rem;\\n}\\n.sb-list li {\\n  list-style-type: none;\\n}\\n.sb-list li * {\\n  white-space: nowrap;\\n}\\n.splitter {\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n  width: 135px;\\n  height: 3px;\\n  background-color: var(--red-col);\\n}\\n\\nh2,\\nh3,\\nh4 {\\n  font-family: \\\"Luxurious Roman\\\", cursive;\\n}\\nh3 {\\n  font-size: 1.5rem;\\n}\\nh2 {\\n  padding-top: 6.5rem;\\n  padding-bottom: 1rem;\\n  font-size: 2.15rem;\\n  text-align: center;\\n  font-family: \\\"Playfair Display\\\", serif;\\n  color: var(--text-col2);\\n}\\n.title {\\n  padding-top: 3rem;\\n  text-shadow: 0px 0px 4px #ffffff;\\n  color: #f5f1e1;\\n  font-size: 4rem;\\n  text-align: center;\\n  font-family: \\\"Playfair Display\\\", serif;\\n}\\na {\\n  white-space: nowrap;\\n  color: var(--blue-col);\\n  text-decoration: none;\\n}\\na:hover {\\n  color: var(--orange-col);\\n}\\np {\\n  font-family: \\\"Roboto Mono\\\", monospace;\\n  color: var(--text-col2);\\n}\\n\\n.inline-c {\\n  display: inline;\\n  padding: 1rem;\\n}\\n.inline-l {\\n  display: inline;\\n  position: absolute;\\n  float: left;\\n}\\n.gif {\\n  background-color: var(--dark-col);\\n\\n  display: grid;\\n  place-items: center;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\\n  grid-template-rows: auto;\\n  row-gap: 2rem;\\n\\n  height: 200px;\\n  justify-content: space-evenly;\\n\\n  margin-left: 5rem;\\n  margin-right: 5rem;\\n  border-radius: 10px;\\n}\\n.git a {\\n  image-rendering: pixelated;\\n}\\n\\n@media only screen and (max-width: 83rem) {\\n  .title {\\n    padding-top: calc(3rem - 50px);\\n  }\\n  .side-bar {\\n    border-radius: 6px;\\n    position: relative;\\n    width: calc(100vw - 20px);\\n    max-width: 56rem;\\n    height: 50px;\\n    margin-bottom: 2rem;\\n    text-align: center;\\n    white-space: nowrap;\\n\\n    z-index: 2;\\n    align-items: center;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n  }\\n  .side-bar div {\\n    padding-left: 0.5rem;\\n  }\\n  .sb-list {\\n    display: inline-block;\\n  }\\n  .sb-list li {\\n    float: left;\\n  }\\n  .sb-list li:not(.splitter) {\\n    padding-left: 0.46rem;\\n    padding-right: 0.47rem;\\n  }\\n  .sb-list li * {\\n    display: block;\\n  }\\n  .splitter {\\n    margin-top: 0px;\\n    margin-bottom: 0px;\\n    margin-left: 2px;\\n    margin-right: 2px;\\n    width: 3px;\\n    height: 1.5rem;\\n  }\\n}\\n@media only screen and (max-width: 56.9rem) {\\n  .abs-center {\\n    width: calc(100vw - 16px);\\n  }\\n  .side-bar {\\n    height: 75px;\\n  }\\n  .splitter {\\n    margin: 0px;\\n    width: 3px;\\n    height: 1.5rem;\\n  }\\n  .inline-l {\\n    padding-bottom: 1rem;\\n    padding-top: 1rem;\\n    display: inherit;\\n    position: relative;\\n    float: none;\\n    text-align: center;\\n  }\\n  .gif {\\n    grid-template-columns: 1fr 1fr 1fr;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  .gif {\\n    margin: 0;\\n    grid-template-columns: 1fr 1fr;\\n  }\\n  h3 {\\n    font-size: 1rem;\\n  }\\n  h2 {\\n    padding-top: 2rem;\\n    font-size: 1.5rem;\\n  }\\n  p {\\n    font-size: 0.65rem;\\n  }\\n  .title {\\n    font-size: 2.5rem;\\n  }\\n}\\n@media only screen and (max-height: 44rem) {\\n  .title {\\n    padding-top: calc(3rem - 50px);\\n  }\\n  .side-bar {\\n    border-radius: 6px;\\n    position: relative;\\n    width: calc(100vw - 20px);\\n    max-width: 56rem;\\n    height: 75px;\\n    margin-bottom: 2rem;\\n    text-align: center;\\n\\n    z-index: 2;\\n    align-items: center;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n  }\\n  .side-bar div {\\n    padding-left: 0.5rem;\\n  }\\n  .sb-list {\\n    display: inline-block;\\n  }\\n  .sb-list li {\\n    float: left;\\n    padding-left: 0.5rem;\\n    padding-right: 0.5rem;\\n  }\\n  .sb-list li * {\\n    display: block;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vaW5kZXguY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3VIO0FBQ3ZILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw2Q0FBNkMsZUFBZSxjQUFjLHdDQUF3QywwQ0FBMEMsR0FBRyxVQUFVLHFDQUFxQyx3REFBd0QsMEJBQTBCLEdBQUcsV0FBVyx3QkFBd0IsMEJBQTBCLHVCQUF1QixzQkFBc0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIsR0FBRyxpQkFBaUIsdUJBQXVCLGNBQWMsa0NBQWtDLGlCQUFpQixHQUFHLGFBQWEsd0JBQXdCLHNDQUFzQyxzQ0FBc0MsMkJBQTJCLDBDQUEwQyxvQkFBb0IscUJBQXFCLHdCQUF3QixzQkFBc0IsR0FBRyxlQUFlLG9CQUFvQixpQkFBaUIsa0JBQWtCLGdCQUFnQixnQkFBZ0Isc0NBQXNDLHFDQUFxQyx3QkFBd0IsMkJBQTJCLEdBQUcsaUJBQWlCLHlCQUF5QiwwQkFBMEIsMkJBQTJCLHdCQUF3QixHQUFHLGVBQWUsMEJBQTBCLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLGFBQWEscUJBQXFCLHdCQUF3QixpQkFBaUIsZ0JBQWdCLHFDQUFxQyxHQUFHLGtCQUFrQiw4Q0FBOEMsR0FBRyxNQUFNLHNCQUFzQixHQUFHLE1BQU0sd0JBQXdCLHlCQUF5Qix1QkFBdUIsdUJBQXVCLDZDQUE2Qyw0QkFBNEIsR0FBRyxVQUFVLHNCQUFzQixxQ0FBcUMsbUJBQW1CLG9CQUFvQix1QkFBdUIsNkNBQTZDLEdBQUcsS0FBSyx3QkFBd0IsMkJBQTJCLDBCQUEwQixHQUFHLFdBQVcsNkJBQTZCLEdBQUcsS0FBSyw0Q0FBNEMsNEJBQTRCLEdBQUcsZUFBZSxvQkFBb0Isa0JBQWtCLEdBQUcsYUFBYSxvQkFBb0IsdUJBQXVCLGdCQUFnQixHQUFHLFFBQVEsc0NBQXNDLG9CQUFvQix3QkFBd0IsbURBQW1ELDZCQUE2Qix1QkFBdUIsa0JBQWtCLG9CQUFvQixrQ0FBa0Msd0JBQXdCLHVCQUF1Qix3QkFBd0IsR0FBRyxVQUFVLDZDQUE2QywwQ0FBMEMsbUNBQW1DLEdBQUcsK0NBQStDLFlBQVkscUNBQXFDLEtBQUssZUFBZSx5QkFBeUIseUJBQXlCLGdDQUFnQyx1QkFBdUIsbUJBQW1CLDBCQUEwQix5QkFBeUIsMEJBQTBCLG1CQUFtQiwwQkFBMEIsZ0JBQWdCLG9DQUFvQyxLQUFLLG1CQUFtQiwyQkFBMkIsS0FBSyxjQUFjLDRCQUE0QixLQUFLLGlCQUFpQixrQkFBa0IsS0FBSyxnQ0FBZ0MsNEJBQTRCLDZCQUE2QixLQUFLLG1CQUFtQixxQkFBcUIsS0FBSyxlQUFlLHNCQUFzQix5QkFBeUIsdUJBQXVCLHdCQUF3QixpQkFBaUIscUJBQXFCLEtBQUssR0FBRywrQ0FBK0MsaUJBQWlCLGdDQUFnQyxLQUFLLGVBQWUsbUJBQW1CLEtBQUssZUFBZSxrQkFBa0IsaUJBQWlCLHFCQUFxQixLQUFLLGVBQWUsMkJBQTJCLHdCQUF3Qix1QkFBdUIseUJBQXlCLGtCQUFrQix5QkFBeUIsS0FBSyxVQUFVLHlDQUF5QyxLQUFLLEdBQUcsNkNBQTZDLFVBQVUsZ0JBQWdCLHFDQUFxQyxLQUFLLFFBQVEsc0JBQXNCLEtBQUssUUFBUSx3QkFBd0Isd0JBQXdCLEtBQUssT0FBTyx5QkFBeUIsS0FBSyxZQUFZLHdCQUF3QixLQUFLLEdBQUcsOENBQThDLFlBQVkscUNBQXFDLEtBQUssZUFBZSx5QkFBeUIseUJBQXlCLGdDQUFnQyx1QkFBdUIsbUJBQW1CLDBCQUEwQix5QkFBeUIsbUJBQW1CLDBCQUEwQixnQkFBZ0Isb0NBQW9DLEtBQUssbUJBQW1CLDJCQUEyQixLQUFLLGNBQWMsNEJBQTRCLEtBQUssaUJBQWlCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLEtBQUssbUJBQW1CLHFCQUFxQixLQUFLLEdBQUcsU0FBUywwRUFBMEUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksY0FBYyxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFdBQVcsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLDRCQUE0QixlQUFlLGNBQWMsd0NBQXdDLDBDQUEwQyxHQUFHLFVBQVUscUNBQXFDLHdEQUF3RCwwQkFBMEIsR0FBRyxXQUFXLHdCQUF3QiwwQkFBMEIsdUJBQXVCLHNCQUFzQix3QkFBd0Isd0JBQXdCLHlCQUF5QixHQUFHLGlCQUFpQix1QkFBdUIsY0FBYyxrQ0FBa0MsaUJBQWlCLEdBQUcsYUFBYSx3QkFBd0Isc0NBQXNDLHNDQUFzQywyQkFBMkIsMENBQTBDLG9CQUFvQixxQkFBcUIsd0JBQXdCLHNCQUFzQixHQUFHLGVBQWUsb0JBQW9CLGlCQUFpQixrQkFBa0IsZ0JBQWdCLGdCQUFnQixzQ0FBc0MscUNBQXFDLHdCQUF3QiwyQkFBMkIsR0FBRyxpQkFBaUIseUJBQXlCLDBCQUEwQiwyQkFBMkIsd0JBQXdCLEdBQUcsZUFBZSwwQkFBMEIsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsYUFBYSxxQkFBcUIsd0JBQXdCLGlCQUFpQixnQkFBZ0IscUNBQXFDLEdBQUcsa0JBQWtCLDhDQUE4QyxHQUFHLE1BQU0sc0JBQXNCLEdBQUcsTUFBTSx3QkFBd0IseUJBQXlCLHVCQUF1Qix1QkFBdUIsNkNBQTZDLDRCQUE0QixHQUFHLFVBQVUsc0JBQXNCLHFDQUFxQyxtQkFBbUIsb0JBQW9CLHVCQUF1Qiw2Q0FBNkMsR0FBRyxLQUFLLHdCQUF3QiwyQkFBMkIsMEJBQTBCLEdBQUcsV0FBVyw2QkFBNkIsR0FBRyxLQUFLLDRDQUE0Qyw0QkFBNEIsR0FBRyxlQUFlLG9CQUFvQixrQkFBa0IsR0FBRyxhQUFhLG9CQUFvQix1QkFBdUIsZ0JBQWdCLEdBQUcsUUFBUSxzQ0FBc0Msb0JBQW9CLHdCQUF3QixtREFBbUQsNkJBQTZCLGtCQUFrQixvQkFBb0Isa0NBQWtDLHdCQUF3Qix1QkFBdUIsd0JBQXdCLEdBQUcsVUFBVSwrQkFBK0IsR0FBRywrQ0FBK0MsWUFBWSxxQ0FBcUMsS0FBSyxlQUFlLHlCQUF5Qix5QkFBeUIsZ0NBQWdDLHVCQUF1QixtQkFBbUIsMEJBQTBCLHlCQUF5QiwwQkFBMEIsbUJBQW1CLDBCQUEwQixnQkFBZ0Isb0NBQW9DLEtBQUssbUJBQW1CLDJCQUEyQixLQUFLLGNBQWMsNEJBQTRCLEtBQUssaUJBQWlCLGtCQUFrQixLQUFLLGdDQUFnQyw0QkFBNEIsNkJBQTZCLEtBQUssbUJBQW1CLHFCQUFxQixLQUFLLGVBQWUsc0JBQXNCLHlCQUF5Qix1QkFBdUIsd0JBQXdCLGlCQUFpQixxQkFBcUIsS0FBSyxHQUFHLCtDQUErQyxpQkFBaUIsZ0NBQWdDLEtBQUssZUFBZSxtQkFBbUIsS0FBSyxlQUFlLGtCQUFrQixpQkFBaUIscUJBQXFCLEtBQUssZUFBZSwyQkFBMkIsd0JBQXdCLHVCQUF1Qix5QkFBeUIsa0JBQWtCLHlCQUF5QixLQUFLLFVBQVUseUNBQXlDLEtBQUssR0FBRyw2Q0FBNkMsVUFBVSxnQkFBZ0IscUNBQXFDLEtBQUssUUFBUSxzQkFBc0IsS0FBSyxRQUFRLHdCQUF3Qix3QkFBd0IsS0FBSyxPQUFPLHlCQUF5QixLQUFLLFlBQVksd0JBQXdCLEtBQUssR0FBRyw4Q0FBOEMsWUFBWSxxQ0FBcUMsS0FBSyxlQUFlLHlCQUF5Qix5QkFBeUIsZ0NBQWdDLHVCQUF1QixtQkFBbUIsMEJBQTBCLHlCQUF5QixtQkFBbUIsMEJBQTBCLGdCQUFnQixvQ0FBb0MsS0FBSyxtQkFBbUIsMkJBQTJCLEtBQUssY0FBYyw0QkFBNEIsS0FBSyxpQkFBaUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsS0FBSyxtQkFBbUIscUJBQXFCLEtBQUssR0FBRyxxQkFBcUI7QUFDN3pYO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW5kZXguY3NzP2NmZDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtd2Via2l0LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICMxMzA2MDYgc3BhY2UgcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvaW1hZ2VzL1JvbWFuLUhlbG1ldC5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNTBweDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1ibHVlLWNvbDogIzQwOTVmZjtcXG4gIC0tb3JhbmdlLWNvbDogI2ZmYWE0MDtcXG4gIC0tcmVkLWNvbDogI2Y3NTE1MTtcXG4gIC0tYmctY29sOiAjMTAxMzExO1xcbiAgLS1kYXJrLWNvbDogIzIxMjQyMjtcXG4gIC0tdGV4dC1jb2w6ICNlZmVmZWY7XFxuICAtLXRleHQtY29sMjogI2RmZGZkZjtcXG59XFxuXFxuLmFicy1jZW50ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB3aWR0aDogNTZyZW07XFxufVxcbi5tYWluLWJveCB7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYm9yZGVyOiBkYXNoZWQgMnB4IHZhcigtLXJlZC1jb2wpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbCk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggMjBweCAjMDAwMDAwO1xcblxcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgbWluLWhlaWdodDogNjByZW07XFxufVxcblxcbi5zaWRlLWJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTVyZW07XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgbGVmdDogLTVyZW07XFxuICBib3R0b206IDQwJTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbCk7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1yZWQtY29sKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2wpO1xcbn1cXG4uc2lkZS1iYXIgZGl2IHtcXG4gIHBhZGRpbmctbGVmdDogNS41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcbi5zYi1saXN0IGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLnNiLWxpc3QgbGkgKiB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uc3BsaXR0ZXIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB3aWR0aDogMTM1cHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2wpO1xcbn1cXG5cXG5oMixcXG5oMyxcXG5oNCB7XFxuICBmb250LWZhbWlseTogXFxcIkx1eHVyaW91cyBSb21hblxcXCIsIGN1cnNpdmU7XFxufVxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5oMiB7XFxuICBwYWRkaW5nLXRvcDogNi41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDIuMTVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbDIpO1xcbn1cXG4udGl0bGUge1xcbiAgcGFkZGluZy10b3A6IDNyZW07XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI2ZmZmZmZjtcXG4gIGNvbG9yOiAjZjVmMWUxO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxufVxcbmEge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS1jb2wpO1xcbn1cXG5wIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2wyKTtcXG59XFxuXFxuLmlubGluZS1jIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5pbmxpbmUtbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmdpZiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbCk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBncmlkLXJvdy1nYXA6IDJyZW07XFxuICByb3ctZ2FwOiAycmVtO1xcblxcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uZ2l0IGEge1xcbiAgLW1zLWludGVycG9sYXRpb24tbW9kZTogbmVhcmVzdC1uZWlnaGJvcjtcXG4gICAgICBpbWFnZS1yZW5kZXJpbmc6IC1tb3otY3Jpc3AtZWRnZXM7XFxuICAgICAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODNyZW0pIHtcXG4gIC50aXRsZSB7XFxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDNyZW0gLSA1MHB4KTtcXG4gIH1cXG4gIC5zaWRlLWJhciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIwcHgpO1xcbiAgICBtYXgtd2lkdGg6IDU2cmVtO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXG4gICAgei1pbmRleDogMjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIH1cXG4gIC5zaWRlLWJhciBkaXYge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG4gIC5zYi1saXN0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcbiAgLnNiLWxpc3QgbGkge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gIH1cXG4gIC5zYi1saXN0IGxpOm5vdCguc3BsaXR0ZXIpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjQ2cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjQ3cmVtO1xcbiAgfVxcbiAgLnNiLWxpc3QgbGkgKiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgLnNwbGl0dGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgICB3aWR0aDogM3B4O1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni45cmVtKSB7XFxuICAuYWJzLWNlbnRlciB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTZweCk7XFxuICB9XFxuICAuc2lkZS1iYXIge1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICB9XFxuICAuc3BsaXR0ZXIge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICB9XFxuICAuaW5saW5lLWwge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5naWYge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZ2lmIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuICBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIGgyIHtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcXG4gIH1cXG4gIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NHJlbSkge1xcbiAgLnRpdGxlIHtcXG4gICAgcGFkZGluZy10b3A6IGNhbGMoM3JlbSAtIDUwcHgpO1xcbiAgfVxcbiAgLnNpZGUtYmFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7XFxuICAgIG1heC13aWR0aDogNTZyZW07XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICB6LWluZGV4OiAyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgfVxcbiAgLnNpZGUtYmFyIGRpdiB7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcbiAgLnNiLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB9XFxuICAuc2ItbGlzdCBsaSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgfVxcbiAgLnNiLWxpc3QgbGkgKiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxtQ0FBbUM7RUFDbkMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGlEQUFpRDtFQUNqRCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixpQ0FBaUM7O0VBRWpDLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIscUNBQXFDOztFQUVyQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVzs7RUFFWCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RC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biAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLXdlYmtpdC1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjMTMwNjA2IHNwYWNlIHJlcGVhdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltYWdlcy9Sb21hbi1IZWxtZXQuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwcHg7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmx1ZS1jb2w6ICM0MDk1ZmY7XFxuICAtLW9yYW5nZS1jb2w6ICNmZmFhNDA7XFxuICAtLXJlZC1jb2w6ICNmNzUxNTE7XFxuICAtLWJnLWNvbDogIzEwMTMxMTtcXG4gIC0tZGFyay1jb2w6ICMyMTI0MjI7XFxuICAtLXRleHQtY29sOiAjZWZlZmVmO1xcbiAgLS10ZXh0LWNvbDI6ICNkZmRmZGY7XFxufVxcblxcbi5hYnMtY2VudGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgd2lkdGg6IDU2cmVtO1xcbn1cXG4ubWFpbi1ib3gge1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJvcmRlcjogZGFzaGVkIDJweCB2YXIoLS1yZWQtY29sKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2wpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IDIwcHggIzAwMDAwMDtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDYwcmVtO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIGxlZnQ6IC01cmVtO1xcbiAgYm90dG9tOiA0MCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2wpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tcmVkLWNvbCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sKTtcXG59XFxuLnNpZGUtYmFyIGRpdiB7XFxuICBwYWRkaW5nLWxlZnQ6IDUuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4uc2ItbGlzdCBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi5zYi1saXN0IGxpICoge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnNwbGl0dGVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEzNXB4O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sKTtcXG59XFxuXFxuaDIsXFxuaDMsXFxuaDQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdXh1cmlvdXMgUm9tYW5cXFwiLCBjdXJzaXZlO1xcbn1cXG5oMyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuaDIge1xcbiAgcGFkZGluZy10b3A6IDYuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAyLjE1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2wyKTtcXG59XFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNmZmZmZmY7XFxuICBjb2xvcjogI2Y1ZjFlMTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbn1cXG5hIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogdmFyKC0tYmx1ZS1jb2wpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UtY29sKTtcXG59XFxucCB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sMik7XFxufVxcblxcbi5pbmxpbmUtYyB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uaW5saW5lLWwge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5naWYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2wpO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgcm93LWdhcDogMnJlbTtcXG5cXG4gIGhlaWdodDogMjAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmdpdCBhIHtcXG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzcmVtKSB7XFxuICAudGl0bGUge1xcbiAgICBwYWRkaW5nLXRvcDogY2FsYygzcmVtIC0gNTBweCk7XFxuICB9XFxuICAuc2lkZS1iYXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTtcXG4gICAgbWF4LXdpZHRoOiA1NnJlbTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB9XFxuICAuc2lkZS1iYXIgZGl2IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuICAuc2ItbGlzdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG4gIC5zYi1saXN0IGxpIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxuICAuc2ItbGlzdCBsaTpub3QoLnNwbGl0dGVyKSB7XFxuICAgIHBhZGRpbmctbGVmdDogMC40NnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC40N3JlbTtcXG4gIH1cXG4gIC5zYi1saXN0IGxpICoge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5zcGxpdHRlciB7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuOXJlbSkge1xcbiAgLmFicy1jZW50ZXIge1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDE2cHgpO1xcbiAgfVxcbiAgLnNpZGUtYmFyIHtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgfVxcbiAgLnNwbGl0dGVyIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgfVxcbiAgLmlubGluZS1sIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAuZ2lmIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmdpZiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICBoMiB7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIHAge1xcbiAgICBmb250LXNpemU6IDAuNjVyZW07XFxuICB9XFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDRyZW0pIHtcXG4gIC50aXRsZSB7XFxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDNyZW0gLSA1MHB4KTtcXG4gIH1cXG4gIC5zaWRlLWJhciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIwcHgpO1xcbiAgICBtYXgtd2lkdGg6IDU2cmVtO1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgei1pbmRleDogMjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIH1cXG4gIC5zaWRlLWJhciBkaXYge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG4gIC5zYi1saXN0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcbiAgLnNiLWxpc3QgbGkge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIH1cXG4gIC5zYi1saXN0IGxpICoge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./index.css\n");

/***/ })

});