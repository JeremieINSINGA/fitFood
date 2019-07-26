(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-signin-signin-module"],{

/***/ "./src/app/authentication/signin/signin.module.ts":
/*!********************************************************!*\
  !*** ./src/app/authentication/signin/signin.module.ts ***!
  \********************************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/authentication/signin/signin.page.ts");







var routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]
    }
];
var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
        })
    ], SigninPageModule);
    return SigninPageModule;
}());



/***/ }),

/***/ "./src/app/authentication/signin/signin.page.html":
/*!********************************************************!*\
  !*** ./src/app/authentication/signin/signin.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"favorite\">\n    <ion-title>Connexion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\" sizeMd=\"8\" sizeLg=\"6\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title color=\"favorite\">Connectez-vous !</ion-card-title>\n            <ion-card-subtitle>Vite ! La cuisine n'attend pas !</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content>\n            <form [formGroup]=\"signInForm\" (ngSubmit)=\"onSignIn()\">\n              <label>Adresse email</label>\n              <ion-input formControlName=\"email\" class=\"authInput ion-padding-horizontal ion-margin-bottom\" placeholder=\"Adresse email\" type=\"email\"></ion-input>\n              <label>Mot de passe</label>\n              <ion-input formControlName=\"password\" class=\"authInput ion-padding-horizontal\" placeholder=\"Mot de passe\" type=\"password\"></ion-input>\n              <ion-button color=\"favorite\" expand=\"block\" class=\"ion-margin-top\" type=\"submit\">\n                Connexion\n              </ion-button>\n            </form>\n            \n          </ion-card-content>\n        </ion-card>\n\n        <div class=\"text-center\">\n          <ion-button color=\"primary\" class=\"signupBtn\" (click)=\"facebookLogin()\">\n            <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n            Connexion avec Facebook\n          </ion-button>\n\n          <ion-button color=\"danger\" class=\"signupBtn\">\n            <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\n            Connexion avec Google\n          </ion-button>\n        </div>\n\n        <div class=\"linkToSignIn text-center\">\n          <a [routerLink]=\"['/signup']\">Pas encore de compte ? S'inscrire</a>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/authentication/signin/signin.page.scss":
/*!********************************************************!*\
  !*** ./src/app/authentication/signin/signin.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin-top: 3em; }\n\n.authInput {\n  border: 1px solid #40a798 !important;\n  border-radius: 5px !important; }\n\n.signupBtn {\n  margin-top: 20px; }\n\n.linkToSignIn {\n  margin: 20px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyeWFuL0RvY3VtZW50cy9wcm9qZWN0cy9sYWIvd2ViL2lvbmljX3Byb2pldGN0cy9maXRGb29kMi9zcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLG9DQUFvQztFQUNwQyw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG59XG5cbi5hdXRoSW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MGE3OTggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnNpZ251cEJ0biB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmxpbmtUb1NpZ25JbiB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/authentication/signin/signin.page.ts":
/*!******************************************************!*\
  !*** ./src/app/authentication/signin/signin.page.ts ***!
  \******************************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var SigninPage = /** @class */ (function () {
    function SigninPage(formBuilder, authenticationService, navCtrl, platform) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.navCtrl = navCtrl;
        this.platform = platform;
    }
    SigninPage.prototype.ngOnInit = function () {
        this.initSignInForm();
    };
    SigninPage.prototype.initSignInForm = function () {
        this.signInForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    SigninPage.prototype.onSignIn = function () {
        var _this = this;
        var email = this.signInForm.get('email').value;
        var password = this.signInForm.get('password').value;
        this.authenticationService.signInUser(email, password).then(function (user) {
            _this.navCtrl.navigateForward('/profile');
        });
    };
    SigninPage.prototype.facebookLogin = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            console.log('PLateforme cordova');
            // this.facebookCordova();
            this.authenticationService.facebookCordova();
        }
        else {
            console.log('PLateforme Web');
            // this.facebookWeb();
            this.authenticationService.facebookWeb().then(function (data) {
                console.log(data);
                _this.navCtrl.navigateForward('/profile');
            });
        }
    };
    SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.page.html */ "./src/app/authentication/signin/signin.page.html"),
            styles: [__webpack_require__(/*! ./signin.page.scss */ "./src/app/authentication/signin/signin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], SigninPage);
    return SigninPage;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-signin-signin-module.js.map