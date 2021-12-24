(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-frontend-portfolio-portfolio-module"],{

/***/ "1q+f":
/*!**************************************************************!*\
  !*** ./src/app/pages/frontend/portfolio/portfolio.module.ts ***!
  \**************************************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.component */ "rBNx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _jgpl_shared_webfooter_webfooter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jgpl/shared/webfooter/webfooter.module */ "e9I3");
/* harmony import */ var _jgpl_shared_webheader_webheader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jgpl/shared/webheader/webheader.module */ "trQ7");
/* harmony import */ var _jgpl_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jgpl/shared/material.module */ "5dmV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class PortfolioModule {
}
PortfolioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PortfolioModule });
PortfolioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function PortfolioModule_Factory(t) { return new (t || PortfolioModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _jgpl_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _jgpl_shared_webheader_webheader_module__WEBPACK_IMPORTED_MODULE_4__["WebheaderModule"],
            _jgpl_shared_webfooter_webfooter_module__WEBPACK_IMPORTED_MODULE_3__["WebfooterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PortfolioModule, { declarations: [_portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _jgpl_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _jgpl_shared_webheader_webheader_module__WEBPACK_IMPORTED_MODULE_4__["WebheaderModule"],
        _jgpl_shared_webfooter_webfooter_module__WEBPACK_IMPORTED_MODULE_3__["WebfooterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "rBNx":
/*!*****************************************************************!*\
  !*** ./src/app/pages/frontend/portfolio/portfolio.component.ts ***!
  \*****************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_webheader_webheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/webheader/webheader.component */ "tJC6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_webfooter_webfooter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/webfooter/webfooter.component */ "WVEZ");









const _c0 = function (a0) { return { "background-image": a0 }; };
const _c1 = function () { return ["/policies"]; };
class PortfolioComponent {
    constructor() {
        this.step = "step1";
        this.Branches = "INDIA";
        this.bgimage = '../../../../assets/bannerImages/banner5.jpg';
    }
    ngOnInit() {
    }
    selectback(e, v) {
        this.bgimage = e;
        this.Branches = v;
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 61, vars: 7, consts: [[1, "portfoilio"], [1, "container-fluid"], [1, "heading", 3, "ngStyle"], [1, "overlay"], [1, "select-state"], [1, ""], ["appearance", "outline"], ["value", "India", "selected", "", 3, "click"], ["value", "Maharastra", 3, "click"], ["value", "Madhya Pradesh", 3, "click"], ["value", "Gujrat", 3, "click"], ["value", "Goa", 3, "click"], [1, "row", "card-section"], [1, "col-sm-6"], [1, "row"], [1, "col-sm-6", "p-0"], [3, "routerLink"], [1, "image-hover"], ["src", "https://www.janarogyam.in/assets/home/images/home/portfolio/p1.jpg", 1, "image", 2, "width", "100%"], [1, "middle"], ["mat-raised-button", ""], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-phone-alt"], ["href", "tel:09975920269"], [1, "fas", "fa-envelope"], ["href", "mailTo:info@janarogyam.in"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-webheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_Template_mat_option_click_13_listener() { return ctx.selectback("assets/bannerImages/banner5.jpg", "India "); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_Template_mat_option_click_16_listener() { return ctx.selectback("assets/bannerImages/banner1.jpg", "Maharastra Branch"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Maharastra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_Template_mat_option_click_19_listener() { return ctx.selectback("../../../../assets/bannerImages/banner2.jpg", "Madhya Pradesh Branch"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Madhya Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_Template_mat_option_click_22_listener() { return ctx.selectback("../../../../assets/bannerImages/banner3.jpg", "Gujrat  Branch"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Gujrat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_Template_mat_option_click_25_listener() { return ctx.selectback("../../../../assets/bannerImages/banner4.jpg", "Goa Branch"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Goa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "View Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "BHIGWAN JANAROGYAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Owner Name: Ajit Jagtap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u00A0 Shop No.10,Hirai Complex,High School Road,Bhigwan,Tal-Indapur,Dist-Pune. Pin-413130");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " 9975920269");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "info@janarogyam.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "app-webfooter");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "url(" + ctx.bgimage + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Branches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Branches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_shared_webheader_webheader_component__WEBPACK_IMPORTED_MODULE_1__["WebheaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _shared_webfooter_webfooter_component__WEBPACK_IMPORTED_MODULE_8__["WebfooterComponent"]], styles: [".portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  max-width: 1670px;\n  padding: 0 30px;\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  position: relative;\n  border-bottom: 1px solid gray;\n  height: 350px;\n  margin-bottom: 30px;\n  border-radius: 10px;\n  padding: 0 10px;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .heading.imgclass1[_ngcontent-%COMP%] {\n  background-image: url('banner1.jpg');\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .heading.imgclass2[_ngcontent-%COMP%] {\n  background-image: url('banner2.jpg');\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .heading.imgclass3[_ngcontent-%COMP%] {\n  background-image: url('banner3.jpg');\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .heading.imgclass4[_ngcontent-%COMP%] {\n  background-image: url('banner4.jpg');\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 10px;\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n  color: #fff;\n  text-transform: uppercase;\n  font-family: \"mont-bold\";\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .select-state[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  height: 100%;\n  margin: 0;\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 0;\n  transition: 0.5s ease;\n  border: 1px solid #e4e4e4;\n  border-radius: 4px;\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 8px 0px silver;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: 0.5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .image-hover[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .image-hover[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.portfoilio[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .image-hover[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBSlI7QUFLUTtFQUNJLGtCQUFBO0VBYUEsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFmWjtBQUpZO0VBQ0ksb0NBQUE7QUFNaEI7QUFKWTtFQUNJLG9DQUFBO0FBTWhCO0FBSlk7RUFDSSxvQ0FBQTtBQU1oQjtBQUpZO0VBQ0ksb0NBQUE7QUFNaEI7QUFJWTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFGaEI7QUFHZ0I7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBRHBCO0FBR2dCO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQURwQjtBQUtRO0VBQ0ksb0JBQUE7QUFIWjtBQUlZO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRmhCO0FBR2dCO0VBQ0ksa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFEcEI7QUFHZ0I7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FBRHBCO0FBR2dCO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQURwQjtBQUdnQjtFQUNJLHNCQUFBO0FBRHBCO0FBR2dCO0VBQ0ksWUFBQTtBQURwQjtBQUdnQjtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQURwQiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2ltYWdlMTogJy4uLy4uLy4uLy4uL2Fzc2V0cy9iYW5uZXJJbWFnZXMvYmFubmVyMS5qcGcnO1xyXG4kYmFja2ltYWdlMjogJy4uLy4uLy4uLy4uL2Fzc2V0cy9iYW5uZXJJbWFnZXMvYmFubmVyMi5qcGcnO1xyXG4kYmFja2ltYWdlMzogJy4uLy4uLy4uLy4uL2Fzc2V0cy9iYW5uZXJJbWFnZXMvYmFubmVyMy5qcGcnO1xyXG4kYmFja2ltYWdlNDogJy4uLy4uLy4uLy4uL2Fzc2V0cy9iYW5uZXJJbWFnZXMvYmFubmVyNC5qcGcnO1xyXG4ucG9ydGZvaWxpbyB7XHJcbiAgICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE2NzBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICYuaW1nY2xhc3MxIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkYmFja2ltYWdlMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5pbWdjbGFzczIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRiYWNraW1hZ2UyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmltZ2NsYXNzMyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGJhY2tpbWFnZTMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuaW1nY2xhc3M0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkYmFja2ltYWdlNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC41KTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LWJvbGRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWxlY3Qtc3RhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYigxOTIsIDE5MiwgMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1pZGRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2UtaG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2UtaG92ZXI6aG92ZXIgLmltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2UtaG92ZXI6aG92ZXIgLm1pZGRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=pages-frontend-portfolio-portfolio-module.js.map