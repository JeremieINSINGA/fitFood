(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-signup-signup-module"],{

/***/ "./src/app/authentication/signup/signup.module.ts":
/*!********************************************************!*\
  !*** ./src/app/authentication/signup/signup.module.ts ***!
  \********************************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/authentication/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/authentication/signup/signup.page.html":
/*!********************************************************!*\
  !*** ./src/app/authentication/signup/signup.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"favorite\">\n    <ion-title>Inscription</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"12\" sizeMd=\"8\" sizeLg=\"6\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title color=\"favorite\">Créez votre compte !</ion-card-title>\n            <ion-card-subtitle>Nous avons hâte de goûter vos recettes !</ion-card-subtitle>\n          </ion-card-header>\n      \n          <ion-card-content>\n            \n            <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSignUp()\">\n              <label class=\"authLabel\">Adresse email</label>\n              <ion-input type=\"text\" placeholder=\"Adresse email\" formControlName=\"email\" class=\"authInput ion-padding-horizontal ion-margin-bottom\"></ion-input>\n      \n              <label class=\"authLabel\">Mot de passe</label>\n              <ion-input type=\"password\" placeholder=\"Mot de passe\" formControlName=\"password\" class=\"authInput ion-padding-horizontal ion-margin-bottom\"></ion-input>\n      \n              <label class=\"authLabel\">Confirmer mot de passe</label>\n              <ion-input type=\"password\" placeholder=\"Mot de passe\" formControlName=\"passwordConfirm\" class=\"authInput ion-padding-horizontal\"></ion-input>\n      \n              <ion-button type=\"submit\" color=\"favorite\" expand=\"block\" class=\"ion-margin-top\">Inscription</ion-button>\n            </form>\n      \n            \n          </ion-card-content>\n        </ion-card>\n      \n        <div class=\"text-center\">\n          <ion-button color=\"primary\" class=\"signupBtn\" (click)=\"facebookLogin()\">\n            <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n            Connexion avec Facebook\n          </ion-button>\n      \n          <ion-button color=\"danger\" class=\"signupBtn\">\n            <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\n            Connexion avec Google\n          </ion-button>\n        </div>\n      \n        <div class=\"linkToSignIn text-center\">\n          <a [routerLink]=\"['/signin']\">Déjà un compte ? Se connecter</a>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/authentication/signup/signup.page.scss":
/*!********************************************************!*\
  !*** ./src/app/authentication/signup/signup.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin-top: 3em; }\n\n.authInput {\n  border: 1px solid #40a798 !important;\n  border-radius: 5px !important; }\n\n.signupBtn {\n  margin-top: 20px; }\n\n.linkToSignIn {\n  margin: 20px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyeWFuL0RvY3VtZW50cy9wcm9qZWN0cy9sYWIvd2ViL2lvbmljX3Byb2pldGN0cy9maXRGb29kMi9zcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLG9DQUFvQztFQUNwQyw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG59XG5cbi5hdXRoSW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MGE3OTggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnNpZ251cEJ0biB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmxpbmtUb1NpZ25JbiB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/authentication/signup/signup.page.ts":
/*!******************************************************!*\
  !*** ./src/app/authentication/signup/signup.page.ts ***!
  \******************************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_models_User_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/User.model */ "./src/app/models/User.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var SignupPage = /** @class */ (function () {
    function SignupPage(authenticationService, formBuilder, router, usersService, platform) {
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.usersService = usersService;
        this.platform = platform;
    }
    SignupPage.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignupPage.prototype.initForm = function () {
        this.signUpForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    SignupPage.prototype.onSignUp = function () {
        var _this = this;
        var email = this.signUpForm.get('email').value;
        var password = this.signUpForm.get('password').value;
        var passwordConfirm = this.signUpForm.get('passwordConfirm').value;
        if (password === passwordConfirm) {
            this.authenticationService.signUpUser(email, password).then(function (data) {
                console.log(data);
                var userId = data['user'].uid;
                var newUser = new src_app_models_User_model__WEBPACK_IMPORTED_MODULE_6__["User"](userId, '', '', email, '', '', '');
                _this.usersService.createUser(newUser, userId).then(function () {
                    _this.router.navigate(['/profile']);
                });
            });
        }
        else {
            alert('Les mots de passes saisis doivent être identiques');
        }
    };
    SignupPage.prototype.facebookLogin = function () {
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
                _this.router.navigate(['/profile']);
            });
        }
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/authentication/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/authentication/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-signup-signup-module.js.map