(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-frontend-login-login-module"],{

/***/ "jf+y":
/*!******************************************************!*\
  !*** ./src/app/pages/frontend/login/login.module.ts ***!
  \******************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _jgpl_shared_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jgpl/shared/material.module */ "5dmV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "xGk8");
/* harmony import */ var _jgpl_core_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jgpl/core/services/login.service */ "twzC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, providers: [
        _jgpl_core_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _jgpl_shared_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LoginModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _jgpl_shared_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-frontend-login-login-module.js.map