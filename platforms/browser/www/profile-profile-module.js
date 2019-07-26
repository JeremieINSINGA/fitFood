(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"favorite\">\n    <ion-title>Profil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\" *ngIf=\"user\">\n\n  <ion-item color=\"light\" class=\"ion-padding-horizontal ion-padding-top\" (click)=\"editProfile('lastname')\">\n    <ion-label>\n      Nom\n    </ion-label>\n    <p class=\"font-300 my-0 ml-auto\">\n      {{ user.lastname }}\n    </p>\n  </ion-item>\n\n  <ion-item color=\"light\" class=\"ion-padding-horizontal\"(click)=\"editProfile('firstname')\">\n    <ion-label>\n      Prénom\n    </ion-label>\n    <p class=\"font-300 my-0 ml-auto\">\n      {{ user.firstname }}\n    </p>\n  </ion-item>\n\n  <ion-item color=\"light\" class=\"ion-padding-horizontal\" (click)=\"editProfile('email')\">\n    <ion-label>\n      Email\n    </ion-label>\n    <p class=\"font-300 my-0 ml-auto\">\n      {{ user.email }}\n    </p>\n  </ion-item>\n\n  <ion-item color=\"light\" class=\"ion-padding-horizontal\" (click)=\"editProfile('phone')\">\n    <ion-label>\n      Téléphone\n    </ion-label>\n    <p class=\"font-300 my-0 ml-auto\">\n      {{ user.phone }}\n    </p>\n  </ion-item>\n\n  <ion-item color=\"light\" class=\"ion-padding-horizontal\" (click)=\"editProfile('birth')\">\n    <ion-label>\n      Date de naissance\n    </ion-label>\n    <p class=\"font-300 my-0 ml-auto\">\n      {{ user.birth | date : 'dd/MM/yyyy'}}\n    </p>\n  </ion-item>\n\n  <ion-item color=\"light\" class=\"ion-padding-horizontal\" (click)=\"editProfile('sex')\">\n    <ion-label>\n      Sexe\n    </ion-label>\n    <p class=\"font-300 my-0 ml-auto\">\n      {{ user.sex }}\n    </p>\n  </ion-item>\n\n  <ion-item color=\"light\" class=\"ion-padding-horizontal\">\n    <ion-label color=\"danger\" (click)=\"onSignOut()\">\n        Déconnexion\n    </ion-label>\n  </ion-item>\n\n  <ion-item color=\"light\" class=\"ion-padding-horizontal\">\n    <ion-label>\n      Mentions légales et conditions générales\n    </ion-label>\n  </ion-item>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_models_User_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/User.model */ "./src/app/models/User.model.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ProfilePage = /** @class */ (function () {
    // profileModalTitle: string;
    // profileModalObject: string;
    function ProfilePage(usersService, authenticationService, alertCtrl, navCtrl, router) {
        this.usersService = usersService;
        this.authenticationService = authenticationService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.initUser(user.uid);
                _this.currentUser = user;
            }
            else {
                console.log('déconnecté');
            }
        });
    };
    ProfilePage.prototype.initUser = function (userId) {
        var _this = this;
        this.userSubscription = this.usersService.userSuject.subscribe(function (user) {
            _this.user = user;
        });
        this.usersService.getUser(userId);
        this.usersService.emitUser();
    };
    ProfilePage.prototype.editProfile = function (title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var paramToDisplay, paramToChange, inputParam, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(title);
                        switch (title) {
                            case 'lastname':
                                paramToDisplay = 'nom';
                                paramToChange = 'lastname';
                                inputParam = [
                                    {
                                        name: 'lastname',
                                        type: 'text',
                                        placeholder: 'Votre nom'
                                    }
                                ];
                                break;
                            case 'firstname':
                                paramToDisplay = 'prénom';
                                paramToChange = 'firstname';
                                inputParam = [
                                    {
                                        name: 'firstname',
                                        type: 'text',
                                        placeholder: 'Votre prénom'
                                    }
                                ];
                                break;
                            case 'email':
                                paramToDisplay = 'email';
                                paramToChange = 'email';
                                inputParam = [
                                    {
                                        name: 'email',
                                        type: 'email',
                                        placeholder: 'Votre email'
                                    }
                                ];
                                break;
                            case 'phone':
                                paramToDisplay = 'téléphone';
                                paramToChange = 'phone';
                                inputParam = [
                                    {
                                        name: 'phone',
                                        type: 'tel',
                                        placeholder: 'Votre téléphone'
                                    }
                                ];
                                break;
                            case 'birth':
                                paramToDisplay = 'date de naissance';
                                paramToChange = 'birth';
                                inputParam = [
                                    {
                                        name: 'birth',
                                        type: 'date',
                                    }
                                ];
                                break;
                            case 'sex':
                                paramToDisplay = 'genre';
                                paramToChange = 'sex';
                                inputParam = [
                                    {
                                        name: 'sex',
                                        type: 'radio',
                                        label: 'Homme',
                                        value: 'Homme'
                                    },
                                    {
                                        name: 'sex',
                                        type: 'radio',
                                        label: 'Femme',
                                        value: 'Femme'
                                    }
                                ];
                                break;
                        }
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Modifier votre ' + paramToDisplay + ' ?',
                                inputs: inputParam,
                                buttons: [
                                    {
                                        text: 'Annuler',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Enregistrer',
                                        handler: function (data) {
                                            var userId = _this.user.userId;
                                            var userFirstname = _this.user.firstname;
                                            var userLastname = _this.user.lastname;
                                            var userEmail = _this.user.email;
                                            var userPhone = _this.user.phone;
                                            var userBirth = _this.user.birth;
                                            var userSex = _this.user.sex;
                                            switch (paramToChange) {
                                                case 'firstname':
                                                    userFirstname = data[paramToChange];
                                                    break;
                                                case 'lastname':
                                                    userLastname = data[paramToChange];
                                                    break;
                                                case 'email':
                                                    userEmail = data[paramToChange];
                                                    break;
                                                case 'phone':
                                                    userPhone = data[paramToChange];
                                                    break;
                                                case 'birth':
                                                    userBirth = data[paramToChange];
                                                    break;
                                                case 'sex':
                                                    userSex = data;
                                                    break;
                                            }
                                            var newUser = new src_app_models_User_model__WEBPACK_IMPORTED_MODULE_3__["User"](userId, userFirstname, userLastname, userEmail, userPhone, userBirth, userSex);
                                            _this.usersService.updateUser(newUser, userId);
                                            _this.usersService.updateEmail(userEmail, _this.currentUser).then(function () {
                                                console.log('Email updated');
                                            }, function (error) {
                                                _this.errorAlert(error);
                                            });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.errorAlert = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Error',
                            message: "" + message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.onSignOut = function () {
        // this.navCtrl.navigateForward('/signin');
        this.authenticationService.signOutUser();
        this.router.navigate(['/signin']);
    };
    ProfilePage.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map