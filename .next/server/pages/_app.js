"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(544);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/side-bar.js




class SideBar extends app["default"] {
    constructor(props){
        super(props);
        this.state = {
            windowWidth: null
        };
    }
    handleResize = ()=>{
        this.setState({
            windowWidth: window.innerWidth
        });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    }
    Fill = (width)=>{
        if (width <= 530) {
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "sb-list",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "blog",
                                children: "🏛️"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "blog",
                                children: "📜"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "books",
                                children: "🔖"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "mailto:main@seththyer.com?subject=Sent%20From%20SethThyersPage",
                                children: "📯"
                            })
                        })
                    })
                ]
            }));
        }
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "sb-list",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            children: "🏛️ Home"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/blog",
                            children: "📜 Writings"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/books",
                            children: "🔖 Books"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "mailto:seththyer23@gmail.com?subject=Sent%20From%20SethThyersPage",
                            children: "📯 Email"
                        })
                    })
                })
            ]
        }));
    };
    render() {
        const winX = this.state.windowWidth;
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "side-bar",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: this.Fill(winX)
            })
        }));
    }
}
/* harmony default export */ const side_bar = (SideBar);

;// CONCATENATED MODULE: ./pages/_app.js






class MyApp extends app["default"] {
    componentDidMount() {
        document.body.id = "back";
    }
    render() {
        const { Component , pageProps  } = this.props;
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(side_bar, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com",
                            crossOrigin: "true"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Luxurious+Roman&display=swap",
                            rel: "stylesheet"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap",
                            rel: "stylesheet"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap",
                            rel: "stylesheet"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "SethThyer's Webpage"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "57x57",
                            href: "/favicon/apple-icon-57x57.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "60x60",
                            href: "/favicon/apple-icon-60x60.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "72x72",
                            href: "/favicon/apple-icon-72x72.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "76x76",
                            href: "/favicon/apple-icon-76x76.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "114x114",
                            href: "/favicon/apple-icon-114x114.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "120x120",
                            href: "/favicon/apple-icon-120x120.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "144x144",
                            href: "/favicon/apple-icon-144x144.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "152x152",
                            href: "/favicon/apple-icon-152x152.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/favicon/apple-icon-180x180.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "192x192",
                            href: "/favicon/android-icon-192x192.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicon/favicon-32x32.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "96x96",
                            href: "/favicon/favicon-96x96.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "/favicon/favicon-16x16.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "manifest",
                            href: "/manifest.json"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "msapplication-TileColor",
                            content: "#ffffff"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "msapplication-TileImage",
                            content: "/ms-icon-144x144.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "theme-color",
                            content: "#ffffff"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "abs-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "title",
                            children: "Seth Thyer's Page"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-box",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        })
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 18:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,544], () => (__webpack_exec__(274)));
module.exports = __webpack_exports__;

})();