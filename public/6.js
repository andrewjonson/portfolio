(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/app/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_loading_spinner_src_components_Circle8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-spinner/src/components/Circle8 */ "./node_modules/vue-loading-spinner/src/components/Circle8.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"],
    Circle8: vue_loading_spinner_src_components_Circle8__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      post: {
        title: '',
        post_id: ''
      },
      overlay: false,
      errors: [],
      edit: false,
      interval: null,
      postOverlay: false
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['getPosts', 'createPost', 'getUser', 'updatePost', 'deletePost'])), {}, {
    clear: function clear() {
      this.post.title = '';
    },
    create: function create() {
      var _this = this;

      this.overlay = true;

      if (!this.edit) {
        this.createPost(this.post).then(function (r) {
          _this.$swal.fire('Success', r.data.message, 'success');

          _this.overlay = false;
          _this.post.title = '';

          _this.getPosts('api/posts');
        })["catch"](function (e) {
          _this.overlay = false;

          if (e.response.status === 422) {
            _this.errors = e.response.data.errors;
          }
        });
      } else {
        this.updatePost(this.post).then(function (r) {
          _this.$swal.fire('Success', r.data.message, 'success');

          _this.overlay = false;

          _this.getPosts();

          _this.post.title = '';
        })["catch"](function (e) {
          _this.overlay = false;

          if (e.response.status === 422) {
            _this.errors = e.response.data.errors;
          }
        });
      }
    },
    editPost: function editPost(post) {
      this.edit = true;
      this.post.title = post.title, this.post.post_id = post.id;
      window.scrollTo(0, 0);
    },
    del: function del(id) {
      var _this2 = this;

      if (confirm('Are you sure? Do you really want to delete this post?')) {
        this.overlay = true;
        this.deletePost(id).then(function (r) {
          _this2.$swal.fire('Success', r.data.message, 'success');

          _this2.overlay = false;

          _this2.getPosts('api/posts');
        });
      }
    },
    fetchPosts: function fetchPosts(page_url) {
      var _this3 = this;

      this.interval = setInterval(function () {
        page_url = page_url || 'api/posts';

        _this3.getPosts(page_url);
      }, 5000);
    }
  }),
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['posts', 'currentUser', 'pagination']),
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  },
  created: function created() {
    this.fetchPosts();
    this.getUser();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/dashboard/Dashboard.vue?vue&type=template&id=1c439460&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/app/dashboard/Dashboard.vue?vue&type=template&id=1c439460& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card" },
    [
      _c("div", { staticClass: "card-header bg-primary text-white" }, [
        _vm._v("Dashboard")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("vue-editor", {
            attrs: { placeholder: "Write post here..." },
            model: {
              value: _vm.post.title,
              callback: function($$v) {
                _vm.$set(_vm.post, "title", $$v)
              },
              expression: "post.title"
            }
          }),
          _vm._v(" "),
          _vm.errors.title
            ? _c("span", { staticClass: "text-danger" }, [
                _vm._v(_vm._s(_vm.errors.title[0]))
              ])
            : _vm._e(),
          _c("br"),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.create($event)
                }
              }
            },
            [
              _c("span", { staticClass: "mdi mdi-pencil" }),
              _vm._v(" Save Post")
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-danger",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.clear($event)
                }
              }
            },
            [
              _c("span", { staticClass: "mdi mdi-delete" }),
              _vm._v("Clear Post")
            ]
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.posts.data
            ? _c(
                "nav",
                { attrs: { "aria-label": "Page navigation example" } },
                [
                  _c("ul", { staticClass: "pagination" }, [
                    _c(
                      "li",
                      {
                        staticClass: "page-item",
                        class: { disabled: !_vm.pagination.prev_page_url }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.getPosts(
                                  _vm.pagination.prev_page_url
                                )
                              }
                            }
                          },
                          [_vm._v("Previous")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("li", { staticClass: "page-item disabled" }, [
                      _c(
                        "a",
                        {
                          staticClass: "page-link text-dark",
                          attrs: { href: "#" }
                        },
                        [
                          _vm._v(
                            "Page " +
                              _vm._s(_vm.pagination.current_page) +
                              " of " +
                              _vm._s(_vm.pagination.last_page)
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "page-item",
                        class: { disabled: !_vm.pagination.next_page_url }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.getPosts(
                                  _vm.pagination.next_page_url
                                )
                              }
                            }
                          },
                          [_vm._v("Next")]
                        )
                      ]
                    )
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.posts.data, function(post) {
            return _c("div", { key: post.id, staticClass: "jumbotron" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-sm-4 text-center" },
                  [
                    _c(
                      "v-avatar",
                      { attrs: { size: "100" } },
                      [
                        post.user.image
                          ? _c("v-img", {
                              attrs: {
                                width: "100",
                                src: "user_images/" + post.user.image
                              }
                            })
                          : _c("v-img", {
                              attrs: { src: "images/user_image.jpg" }
                            })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("h5", { staticClass: "mt-2" }, [
                      _vm._v(_vm._s(post.user.name))
                    ]),
                    _vm._v(" "),
                    _c("i", [_vm._v(_vm._s(post.user.email))]),
                    _c("br"),
                    _vm._v(" "),
                    _c("i", [
                      _vm._v(
                        "Joined: " +
                          _vm._s(_vm._f("formatDate")(post.user.created_at))
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c(
                    "p",
                    {
                      staticClass: "lead",
                      domProps: { innerHTML: _vm._s(post.title) }
                    },
                    [_vm._v(_vm._s(post.title))]
                  ),
                  _vm._v(" "),
                  _c("i", [
                    _vm._v(
                      "Created at: " +
                        _vm._s(_vm._f("formatDate")(post.created_at))
                    )
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("i", [
                    _vm._v(
                      "Updated at: " +
                        _vm._s(_vm._f("formatDate")(post.created_at))
                    )
                  ]),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _vm.currentUser.id === post.user.id
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.editPost(post)
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "mdi mdi-pencil" }),
                          _vm._v(" Edit Post")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.id === post.user.id
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.del(post.id)
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "mdi mdi-delete" }),
                          _vm._v(" Delete Post")
                        ]
                      )
                    : _vm._e()
                ])
              ])
            ])
          }),
          _vm._v(" "),
          _vm.posts.data
            ? _c(
                "nav",
                { attrs: { "aria-label": "Page navigation example" } },
                [
                  _c("ul", { staticClass: "pagination" }, [
                    _c(
                      "li",
                      {
                        staticClass: "page-item",
                        class: { disabled: !_vm.pagination.prev_page_url }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.getPosts(
                                  _vm.pagination.prev_page_url
                                )
                              }
                            }
                          },
                          [_vm._v("Previous")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("li", { staticClass: "page-item disabled" }, [
                      _c(
                        "a",
                        {
                          staticClass: "page-link text-dark",
                          attrs: { href: "#" }
                        },
                        [
                          _vm._v(
                            "Page " +
                              _vm._s(_vm.pagination.current_page) +
                              " of " +
                              _vm._s(_vm.pagination.last_page)
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "page-item",
                        class: { disabled: !_vm.pagination.next_page_url }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.getPosts(
                                  _vm.pagination.next_page_url
                                )
                              }
                            }
                          },
                          [_vm._v("Next")]
                        )
                      ]
                    )
                  ])
                ]
              )
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.post.post_id,
            expression: "post.post_id"
          }
        ],
        attrs: { type: "hidden" },
        domProps: { value: _vm.post.post_id },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.post, "post_id", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("v-overlay", { attrs: { value: _vm.overlay } }, [_c("circle8")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/app/dashboard/Dashboard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/app/dashboard/Dashboard.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1c439460___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1c439460& */ "./resources/js/components/app/dashboard/Dashboard.vue?vue&type=template&id=1c439460&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/app/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VOverlay */ "./node_modules/vuetify/lib/components/VOverlay/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1c439460___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1c439460___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_4__["VAvatar"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_5__["VImg"],VOverlay: vuetify_lib_components_VOverlay__WEBPACK_IMPORTED_MODULE_6__["VOverlay"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app/dashboard/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/app/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/app/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app/dashboard/Dashboard.vue?vue&type=template&id=1c439460&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/app/dashboard/Dashboard.vue?vue&type=template&id=1c439460& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1c439460___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1c439460& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/dashboard/Dashboard.vue?vue&type=template&id=1c439460&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1c439460___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1c439460___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);