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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  -webkit-font-smoothing: antialiased;\\n  -webkit-osx-font-smoothing: grayscale;\\n}\\n/*0f0c0c*/\\n#back {\\n  background: #130606 space repeat;\\n  background-image: url(\\\"/images/Roman-Helmet.svg\\\");\\n  background-size: 50px;\\n}\\n\\n:root {\\n  --blue-col: #4095ff;\\n  --orange-col: #ffaa40;\\n  --red-col: #f75151;\\n  --bg-col: #101311;\\n  --dark-col: #212422;\\n  --text-col: #efefef;\\n  --text-col2: #dfdfdf;\\n}\\n\\n.abs-center {\\n  position: absolute;\\n  left: 50%;\\n  transform: translate(-50%, 0);\\n  width: 56rem;\\n}\\n.main-box {\\n  border-radius: 16px;\\n  border: dashed 2px var(--red-col);\\n\\n  background-color: var(--bg-col);\\n  color: var(--text-col);\\n  box-shadow: 0px 0px 40px 20px #000000;\\n\\n  padding: 1rem;\\n  margin-top: 2rem;\\n  margin-bottom: 5rem;\\n  min-height: 60rem;\\n}\\n\\n.side-bar {\\n  position: fixed;\\n  width: 15rem;\\n  height: 25rem;\\n  left: -5rem;\\n  bottom: 40%;\\n\\n  background-color: var(--bg-col);\\n  border: solid 2px var(--red-col);\\n  border-radius: 20px;\\n  color: var(--text-col);\\n}\\n.side-bar div {\\n  padding-left: 5.5rem;\\n  padding-right: 0.5rem;\\n  padding-bottom: 0.5rem;\\n  padding-top: 0.5rem;\\n}\\n\\nh2,\\nh3,\\nh4 {\\n  font-family: \\\"Luxurious Roman\\\", cursive;\\n}\\nh3 {\\n  font-size: 1.5rem;\\n}\\nh2 {\\n  padding-top: 4rem;\\n  padding-bottom: 1rem;\\n  font-size: 2.15rem;\\n  text-align: center;\\n  font-family: \\\"Playfair Display\\\", serif;\\n  color: var(--text-col2);\\n}\\n.title {\\n  padding-top: 3rem;\\n  text-shadow: 0px 0px 4px #ffffff;\\n  color: #f5f1e1;\\n  font-size: 4rem;\\n  text-align: center;\\n  font-family: \\\"Playfair Display\\\", serif;\\n}\\na {\\n  color: var(--blue-col);\\n  text-decoration: none;\\n}\\na:hover {\\n  color: var(--orange-col);\\n}\\np {\\n  font-family: \\\"Roboto Mono\\\", monospace;\\n  color: var(--text-col2);\\n}\\n\\n.inline-c {\\n  display: inline;\\n  padding: 1rem;\\n}\\n.inline-l {\\n  display: inline;\\n  position: absolute;\\n  float: left;\\n}\\n.gif {\\n  background-color: var(--dark-col);\\n\\n  display: grid;\\n  place-items: center;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\n  grid-template-rows: auto;\\n  grid-row-gap: 2rem;\\n  row-gap: 2rem;\\n\\n  height: 200px;\\n  justify-content: space-evenly;\\n\\n  margin-left: 5rem;\\n  margin-right: 5rem;\\n  border-radius: 10px;\\n}\\n.git a {\\n  -ms-interpolation-mode: nearest-neighbor;\\n      image-rendering: -moz-crisp-edges;\\n      image-rendering: pixelated;\\n}\\n\\n@media only screen and (max-width: 83rem) {\\n  .title {\\n    padding-top: calc(3rem - 50px);\\n  }\\n  .side-bar {\\n    border-radius: 6px;\\n    position: relative;\\n    width: calc(100vw - 20px);\\n    max-width: 56rem;\\n    height: 50px;\\n\\n    z-index: 2;\\n    align-items: center;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n  }\\n  .side-bar div {\\n    padding-left: 0.5rem;\\n  }\\n}\\n@media only screen and (max-width: 56.9rem) {\\n  .abs-center {\\n    width: calc(100vw - 16px);\\n  }\\n\\n  .inline-l {\\n    padding-bottom: 1rem;\\n    padding-top: 1rem;\\n    display: inherit;\\n    position: relative;\\n    float: none;\\n    text-align: center;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  .gif {\\n    margin: 0;\\n  }\\n}\\n@media only screen and (max-height: 44rem) {\\n  .side-bar {\\n    border-radius: 6px;\\n    position: relative;\\n    width: calc(100vw - 20px);\\n    max-width: 56rem;\\n    height: 50px;\\n\\n    z-index: 2;\\n    align-items: center;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n  }\\n  .side-bar div {\\n    padding-left: 0.5rem;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://index.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,UAAU;EACV,SAAS;EACT,mCAAmC;EACnC,qCAAqC;AACvC;AACA,SAAS;AACT;EACE,gCAAgC;EAChC,iDAAiD;EACjD,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,6BAA6B;EAC7B,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,iCAAiC;;EAEjC,+BAA+B;EAC/B,sBAAsB;EACtB,qCAAqC;;EAErC,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,WAAW;EACX,WAAW;;EAEX,+BAA+B;EAC/B,gCAAgC;EAChC,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;;EAGE,uCAAuC;AACzC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,sCAAsC;EACtC,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,gCAAgC;EAChC,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,sCAAsC;AACxC;AACA;EACE,sBAAsB;EACtB,qBAAqB;AACvB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,iCAAiC;;EAEjC,aAAa;EACb,mBAAmB;EACnB,0CAA0C;EAC1C,wBAAwB;EACxB,kBAAa;EAAb,aAAa;;EAEb,aAAa;EACb,6BAA6B;;EAE7B,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,wCAA0B;MAA1B,iCAA0B;MAA1B,0BAA0B;AAC5B;;AAEA;EACE;IACE,8BAA8B;EAChC;EACA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;;IAEZ,UAAU;IACV,mBAAmB;IACnB,SAAS;IACT,6BAA6B;EAC/B;EACA;IACE,oBAAoB;EACtB;AACF;AACA;EACE;IACE,yBAAyB;EAC3B;;EAEA;IACE,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;EACpB;AACF;AACA;EACE;IACE,SAAS;EACX;AACF;AACA;EACE;IACE,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;;IAEZ,UAAU;IACV,mBAAmB;IACnB,SAAS;IACT,6BAA6B;EAC/B;EACA;IACE,oBAAoB;EACtB;AACF\",\"sourcesContent\":[\"* {\\n  padding: 0;\\n  margin: 0;\\n  -webkit-font-smoothing: antialiased;\\n  -webkit-osx-font-smoothing: grayscale;\\n}\\n/*0f0c0c*/\\n#back {\\n  background: #130606 space repeat;\\n  background-image: url(\\\"/images/Roman-Helmet.svg\\\");\\n  background-size: 50px;\\n}\\n\\n:root {\\n  --blue-col: #4095ff;\\n  --orange-col: #ffaa40;\\n  --red-col: #f75151;\\n  --bg-col: #101311;\\n  --dark-col: #212422;\\n  --text-col: #efefef;\\n  --text-col2: #dfdfdf;\\n}\\n\\n.abs-center {\\n  position: absolute;\\n  left: 50%;\\n  transform: translate(-50%, 0);\\n  width: 56rem;\\n}\\n.main-box {\\n  border-radius: 16px;\\n  border: dashed 2px var(--red-col);\\n\\n  background-color: var(--bg-col);\\n  color: var(--text-col);\\n  box-shadow: 0px 0px 40px 20px #000000;\\n\\n  padding: 1rem;\\n  margin-top: 2rem;\\n  margin-bottom: 5rem;\\n  min-height: 60rem;\\n}\\n\\n.side-bar {\\n  position: fixed;\\n  width: 15rem;\\n  height: 25rem;\\n  left: -5rem;\\n  bottom: 40%;\\n\\n  background-color: var(--bg-col);\\n  border: solid 2px var(--red-col);\\n  border-radius: 20px;\\n  color: var(--text-col);\\n}\\n.side-bar div {\\n  padding-left: 5.5rem;\\n  padding-right: 0.5rem;\\n  padding-bottom: 0.5rem;\\n  padding-top: 0.5rem;\\n}\\n\\nh2,\\nh3,\\nh4 {\\n  font-family: \\\"Luxurious Roman\\\", cursive;\\n}\\nh3 {\\n  font-size: 1.5rem;\\n}\\nh2 {\\n  padding-top: 4rem;\\n  padding-bottom: 1rem;\\n  font-size: 2.15rem;\\n  text-align: center;\\n  font-family: \\\"Playfair Display\\\", serif;\\n  color: var(--text-col2);\\n}\\n.title {\\n  padding-top: 3rem;\\n  text-shadow: 0px 0px 4px #ffffff;\\n  color: #f5f1e1;\\n  font-size: 4rem;\\n  text-align: center;\\n  font-family: \\\"Playfair Display\\\", serif;\\n}\\na {\\n  color: var(--blue-col);\\n  text-decoration: none;\\n}\\na:hover {\\n  color: var(--orange-col);\\n}\\np {\\n  font-family: \\\"Roboto Mono\\\", monospace;\\n  color: var(--text-col2);\\n}\\n\\n.inline-c {\\n  display: inline;\\n  padding: 1rem;\\n}\\n.inline-l {\\n  display: inline;\\n  position: absolute;\\n  float: left;\\n}\\n.gif {\\n  background-color: var(--dark-col);\\n\\n  display: grid;\\n  place-items: center;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\n  grid-template-rows: auto;\\n  row-gap: 2rem;\\n\\n  height: 200px;\\n  justify-content: space-evenly;\\n\\n  margin-left: 5rem;\\n  margin-right: 5rem;\\n  border-radius: 10px;\\n}\\n.git a {\\n  image-rendering: pixelated;\\n}\\n\\n@media only screen and (max-width: 83rem) {\\n  .title {\\n    padding-top: calc(3rem - 50px);\\n  }\\n  .side-bar {\\n    border-radius: 6px;\\n    position: relative;\\n    width: calc(100vw - 20px);\\n    max-width: 56rem;\\n    height: 50px;\\n\\n    z-index: 2;\\n    align-items: center;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n  }\\n  .side-bar div {\\n    padding-left: 0.5rem;\\n  }\\n}\\n@media only screen and (max-width: 56.9rem) {\\n  .abs-center {\\n    width: calc(100vw - 16px);\\n  }\\n\\n  .inline-l {\\n    padding-bottom: 1rem;\\n    padding-top: 1rem;\\n    display: inherit;\\n    position: relative;\\n    float: none;\\n    text-align: center;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  .gif {\\n    margin: 0;\\n  }\\n}\\n@media only screen and (max-height: 44rem) {\\n  .side-bar {\\n    border-radius: 6px;\\n    position: relative;\\n    width: calc(100vw - 20px);\\n    max-width: 56rem;\\n    height: 50px;\\n\\n    z-index: 2;\\n    align-items: center;\\n    left: 50%;\\n    transform: translate(-50%, 0);\\n  }\\n  .side-bar div {\\n    padding-left: 0.5rem;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vaW5kZXguY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3VIO0FBQ3ZILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw2Q0FBNkMsZUFBZSxjQUFjLHdDQUF3QywwQ0FBMEMsR0FBRyxxQkFBcUIscUNBQXFDLHdEQUF3RCwwQkFBMEIsR0FBRyxXQUFXLHdCQUF3QiwwQkFBMEIsdUJBQXVCLHNCQUFzQix3QkFBd0Isd0JBQXdCLHlCQUF5QixHQUFHLGlCQUFpQix1QkFBdUIsY0FBYyxrQ0FBa0MsaUJBQWlCLEdBQUcsYUFBYSx3QkFBd0Isc0NBQXNDLHNDQUFzQywyQkFBMkIsMENBQTBDLG9CQUFvQixxQkFBcUIsd0JBQXdCLHNCQUFzQixHQUFHLGVBQWUsb0JBQW9CLGlCQUFpQixrQkFBa0IsZ0JBQWdCLGdCQUFnQixzQ0FBc0MscUNBQXFDLHdCQUF3QiwyQkFBMkIsR0FBRyxpQkFBaUIseUJBQXlCLDBCQUEwQiwyQkFBMkIsd0JBQXdCLEdBQUcsa0JBQWtCLDhDQUE4QyxHQUFHLE1BQU0sc0JBQXNCLEdBQUcsTUFBTSxzQkFBc0IseUJBQXlCLHVCQUF1Qix1QkFBdUIsNkNBQTZDLDRCQUE0QixHQUFHLFVBQVUsc0JBQXNCLHFDQUFxQyxtQkFBbUIsb0JBQW9CLHVCQUF1Qiw2Q0FBNkMsR0FBRyxLQUFLLDJCQUEyQiwwQkFBMEIsR0FBRyxXQUFXLDZCQUE2QixHQUFHLEtBQUssNENBQTRDLDRCQUE0QixHQUFHLGVBQWUsb0JBQW9CLGtCQUFrQixHQUFHLGFBQWEs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bUIsb0JBQW9CLHVCQUF1Qiw2Q0FBNkMsR0FBRyxLQUFLLDJCQUEyQiwwQkFBMEIsR0FBRyxXQUFXLDZCQUE2QixHQUFHLEtBQUssNENBQTRDLDRCQUE0QixHQUFHLGVBQWUsb0JBQW9CLGtCQUFrQixHQUFHLGFBQWEsb0JBQW9CLHVCQUF1QixnQkFBZ0IsR0FBRyxRQUFRLHNDQUFzQyxvQkFBb0Isd0JBQXdCLCtDQUErQyw2QkFBNkIsa0JBQWtCLG9CQUFvQixrQ0FBa0Msd0JBQXdCLHVCQUF1Qix3QkFBd0IsR0FBRyxVQUFVLCtCQUErQixHQUFHLCtDQUErQyxZQUFZLHFDQUFxQyxLQUFLLGVBQWUseUJBQXlCLHlCQUF5QixnQ0FBZ0MsdUJBQXVCLG1CQUFtQixtQkFBbUIsMEJBQTBCLGdCQUFnQixvQ0FBb0MsS0FBSyxtQkFBbUIsMkJBQTJCLEtBQUssR0FBRywrQ0FBK0MsaUJBQWlCLGdDQUFnQyxLQUFLLGlCQUFpQiwyQkFBMkIsd0JBQXdCLHVCQUF1Qix5QkFBeUIsa0JBQWtCLHlCQUF5QixLQUFLLEdBQUcsNkNBQTZDLFVBQVUsZ0JBQWdCLEtBQUssR0FBRyw4Q0FBOEMsZUFBZSx5QkFBeUIseUJBQXlCLGdDQUFnQyx1QkFBdUIsbUJBQW1CLG1CQUFtQiwwQkFBMEIsZ0JBQWdCLG9DQUFvQyxLQUFLLG1CQUFtQiwyQkFBMkIsS0FBSyxHQUFHLHFCQUFxQjtBQUMvK1E7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9pbmRleC5jc3M/Y2ZkNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC13ZWJraXQtb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbi8qMGYwYzBjKi9cXG4jYmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjMTMwNjA2IHNwYWNlIHJlcGVhdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltYWdlcy9Sb21hbi1IZWxtZXQuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwcHg7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmx1ZS1jb2w6ICM0MDk1ZmY7XFxuICAtLW9yYW5nZS1jb2w6ICNmZmFhNDA7XFxuICAtLXJlZC1jb2w6ICNmNzUxNTE7XFxuICAtLWJnLWNvbDogIzEwMTMxMTtcXG4gIC0tZGFyay1jb2w6ICMyMTI0MjI7XFxuICAtLXRleHQtY29sOiAjZWZlZmVmO1xcbiAgLS10ZXh0LWNvbDI6ICNkZmRmZGY7XFxufVxcblxcbi5hYnMtY2VudGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgd2lkdGg6IDU2cmVtO1xcbn1cXG4ubWFpbi1ib3gge1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJvcmRlcjogZGFzaGVkIDJweCB2YXIoLS1yZWQtY29sKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2wpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IDIwcHggIzAwMDAwMDtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDYwcmVtO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIGxlZnQ6IC01cmVtO1xcbiAgYm90dG9tOiA0MCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2wpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tcmVkLWNvbCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sKTtcXG59XFxuLnNpZGUtYmFyIGRpdiB7XFxuICBwYWRkaW5nLWxlZnQ6IDUuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG5cXG5oMixcXG5oMyxcXG5oNCB7XFxuICBmb250LWZhbWlseTogXFxcIkx1eHVyaW91cyBSb21hblxcXCIsIGN1cnNpdmU7XFxufVxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5oMiB7XFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAyLjE1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2wyKTtcXG59XFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNmZmZmZmY7XFxuICBjb2xvcjogI2Y1ZjFlMTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbn1cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS1jb2wpO1xcbn1cXG5wIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2wyKTtcXG59XFxuXFxuLmlubGluZS1jIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5pbmxpbmUtbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmdpZiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbCk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGdyaWQtcm93LWdhcDogMnJlbTtcXG4gIHJvdy1nYXA6IDJyZW07XFxuXFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5naXQgYSB7XFxuICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBuZWFyZXN0LW5laWdoYm9yO1xcbiAgICAgIGltYWdlLXJlbmRlcmluZzogLW1vei1jcmlzcC1lZGdlcztcXG4gICAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4M3JlbSkge1xcbiAgLnRpdGxlIHtcXG4gICAgcGFkZGluZy10b3A6IGNhbGMoM3JlbSAtIDUwcHgpO1xcbiAgfVxcbiAgLnNpZGUtYmFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7XFxuICAgIG1heC13aWR0aDogNTZyZW07XFxuICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgei1pbmRleDogMjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIH1cXG4gIC5zaWRlLWJhciBkaXYge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni45cmVtKSB7XFxuICAuYWJzLWNlbnRlciB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTZweCk7XFxuICB9XFxuXFxuICAuaW5saW5lLWwge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmdpZiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDRyZW0pIHtcXG4gIC5zaWRlLWJhciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIwcHgpO1xcbiAgICBtYXgtd2lkdGg6IDU2cmVtO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB9XFxuICAuc2lkZS1iYXIgZGl2IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULG1DQUFtQztFQUNuQyxxQ0FBcUM7QUFDdkM7QUFDQSxTQUFTO0FBQ1Q7RUFDRSxnQ0FBZ0M7RUFDaEMsaURBQWlEO0VBQ2pELHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlDQUFpQzs7RUFFakMsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixxQ0FBcUM7O0VBRXJDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXOztFQUVYLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0Qyx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUNBQWlDOztFQUVqQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyx3QkFBd0I7RUFDeEIsa0JBQWE7RUFBYixhQUFhOztFQUViLGFBQWE7RUFDYiw2QkFBNkI7O0VBRTdCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx3Q0FBMEI7TUFBMUIsaUNBQTBCO01BQTFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsWUFBWTs7SUFFWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGO0FBQ0E7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFlBQVk7O0lBRVosVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC13ZWJraXQtb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbi8qMGYwYzBjKi9cXG4jYmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjMTMwNjA2IHNwYWNlIHJlcGVhdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltYWdlcy9Sb21hbi1IZWxtZXQuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwcHg7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmx1ZS1jb2w6ICM0MDk1ZmY7XFxuICAtLW9yYW5nZS1jb2w6ICNmZmFhNDA7XFxuICAtLXJlZC1jb2w6ICNmNzUxNTE7XFxuICAtLWJnLWNvbDogIzEwMTMxMTtcXG4gIC0tZGFyay1jb2w6ICMyMTI0MjI7XFxuICAtLXRleHQtY29sOiAjZWZlZmVmO1xcbiAgLS10ZXh0LWNvbDI6ICNkZmRmZGY7XFxufVxcblxcbi5hYnMtY2VudGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgd2lkdGg6IDU2cmVtO1xcbn1cXG4ubWFpbi1ib3gge1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJvcmRlcjogZGFzaGVkIDJweCB2YXIoLS1yZWQtY29sKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2wpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IDIwcHggIzAwMDAwMDtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDYwcmVtO1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIGxlZnQ6IC01cmVtO1xcbiAgYm90dG9tOiA0MCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2wpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tcmVkLWNvbCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sKTtcXG59XFxuLnNpZGUtYmFyIGRpdiB7XFxuICBwYWRkaW5nLWxlZnQ6IDUuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG5cXG5oMixcXG5oMyxcXG5oNCB7XFxuICBmb250LWZhbWlseTogXFxcIkx1eHVyaW91cyBSb21hblxcXCIsIGN1cnNpdmU7XFxufVxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5oMiB7XFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAyLjE1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2wyKTtcXG59XFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNmZmZmZmY7XFxuICBjb2xvcjogI2Y1ZjFlMTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbn1cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS1jb2wpO1xcbn1cXG5wIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2wyKTtcXG59XFxuXFxuLmlubGluZS1jIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5pbmxpbmUtbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmdpZiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbCk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIHJvdy1nYXA6IDJyZW07XFxuXFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5naXQgYSB7XFxuICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4M3JlbSkge1xcbiAgLnRpdGxlIHtcXG4gICAgcGFkZGluZy10b3A6IGNhbGMoM3JlbSAtIDUwcHgpO1xcbiAgfVxcbiAgLnNpZGUtYmFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7XFxuICAgIG1heC13aWR0aDogNTZyZW07XFxuICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgei1pbmRleDogMjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIH1cXG4gIC5zaWRlLWJhciBkaXYge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni45cmVtKSB7XFxuICAuYWJzLWNlbnRlciB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTZweCk7XFxuICB9XFxuXFxuICAuaW5saW5lLWwge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmdpZiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDRyZW0pIHtcXG4gIC5zaWRlLWJhciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIwcHgpO1xcbiAgICBtYXgtd2lkdGg6IDU2cmVtO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB9XFxuICAuc2lkZS1iYXIgZGl2IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./index.css\n");

/***/ })

});