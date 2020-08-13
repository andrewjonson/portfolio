(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/users/ChangePassword.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/app/users/ChangePassword.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_loading_spinner_src_components_Circle8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-spinner/src/components/Circle8 */ "./node_modules/vue-loading-spinner/src/components/Circle8.vue");
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
    Circle8: vue_loading_spinner_src_components_Circle8__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      user: {
        old: '',
        password: '',
        password_confirmation: ''
      },
      overlay: false,
      errors: []
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['changePassword'])), {}, {
    onSubmit: function onSubmit() {
      var _this = this;

      this.changePassword(this.user).then(function (r) {
        _this.overlay = true;
        localStorage.removeItem('appToken');
        window.location.replace('/login');
      })["catch"](function (e) {
        _this.overlay = false;

        if (e.response.status === 422) {
          _this.errors = e.response.data.errors;
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/users/ChangePassword.vue?vue&type=template&id=0f0803eb&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/app/users/ChangePassword.vue?vue&type=template&id=0f0803eb& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        _vm._v("Change Password")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-3 col-form-label text-md-right",
                  class: { "text-danger": _vm.errors.old },
                  attrs: { for: "old" }
                },
                [_vm._v("Old Password")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("div", { staticClass: "input-group-prepend" }, [
                    _c("span", {
                      staticClass: "input-group-text mdi mdi-lock",
                      class: { "text-danger": _vm.errors.old },
                      attrs: { id: "basic-addon1" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.old,
                        expression: "user.old"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.old },
                    attrs: { type: "password" },
                    domProps: { value: _vm.user.old },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "old", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.errors.old
                  ? _c(
                      "span",
                      { staticClass: "text-danger", attrs: { role: "alert" } },
                      [_c("strong", [_vm._v(_vm._s(_vm.errors.old[0]))])]
                    )
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-3 col-form-label text-md-right",
                  class: { "text-danger": _vm.errors.password },
                  attrs: { for: "password" }
                },
                [_vm._v("Password")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("div", { staticClass: "input-group-prepend" }, [
                    _c("span", {
                      staticClass: "input-group-text mdi mdi-lock",
                      class: { "text-danger": _vm.errors.password },
                      attrs: { id: "basic-addon1" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.password,
                        expression: "user.password"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.password },
                    attrs: { type: "password" },
                    domProps: { value: _vm.user.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "password", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.errors.password
                  ? _c(
                      "span",
                      { staticClass: "text-danger", attrs: { role: "alert" } },
                      [_c("strong", [_vm._v(_vm._s(_vm.errors.password[0]))])]
                    )
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-3 col-form-label text-md-right",
                  class: { "text-danger": _vm.errors.password_confirmation },
                  attrs: { for: "password" }
                },
                [_vm._v("Confirm New Password")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("div", { staticClass: "input-group-prepend" }, [
                    _c("span", {
                      staticClass: "input-group-text mdi mdi-lock",
                      class: {
                        "text-danger": _vm.errors.password_confirmation
                      },
                      attrs: { id: "basic-addon1" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.password_confirmation,
                        expression: "user.password_confirmation"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.password_confirmation },
                    attrs: { type: "password" },
                    domProps: { value: _vm.user.password_confirmation },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.user,
                          "password_confirmation",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.errors.password_confirmation
                  ? _c(
                      "span",
                      { staticClass: "text-danger", attrs: { role: "alert" } },
                      [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.errors.password_confirmation[0]))
                        ])
                      ]
                    )
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row mb-0" }, [
              _c("div", { staticClass: "col-md-8 offset-md-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "text-white btn btn-primary btn-block",
                    attrs: { type: "submit" },
                    on: {
                      click: function($event) {
                        _vm.overlay = !_vm.overlay
                      }
                    }
                  },
                  [
                    _c("span", { staticClass: "mdi mdi-lock" }),
                    _vm._v(
                      "\n                        Change Password\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("i", { staticClass: "text-danger" }, [
                  _vm._v(
                    "*You will be automatically logout upon changing password."
                  )
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("v-overlay", { attrs: { value: _vm.overlay } }, [_c("circle8")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/app/users/ChangePassword.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/app/users/ChangePassword.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_0f0803eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=0f0803eb& */ "./resources/js/components/app/users/ChangePassword.vue?vue&type=template&id=0f0803eb&");
/* harmony import */ var _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/components/app/users/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VOverlay */ "./node_modules/vuetify/lib/components/VOverlay/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePassword_vue_vue_type_template_id_0f0803eb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangePassword_vue_vue_type_template_id_0f0803eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VOverlay: vuetify_lib_components_VOverlay__WEBPACK_IMPORTED_MODULE_4__["VOverlay"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app/users/ChangePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/app/users/ChangePassword.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/app/users/ChangePassword.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/users/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app/users/ChangePassword.vue?vue&type=template&id=0f0803eb&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/app/users/ChangePassword.vue?vue&type=template&id=0f0803eb& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_0f0803eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=template&id=0f0803eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/users/ChangePassword.vue?vue&type=template&id=0f0803eb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_0f0803eb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_0f0803eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);