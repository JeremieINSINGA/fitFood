(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-single-recipe-single-recipe-module"],{

/***/ "./src/app/recipes/single-recipe/single-recipe.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/recipes/single-recipe/single-recipe.module.ts ***!
  \***************************************************************/
/*! exports provided: SingleRecipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleRecipePageModule", function() { return SingleRecipePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _single_recipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-recipe.page */ "./src/app/recipes/single-recipe/single-recipe.page.ts");







var routes = [
    {
        path: '',
        component: _single_recipe_page__WEBPACK_IMPORTED_MODULE_6__["SingleRecipePage"]
    }
];
var SingleRecipePageModule = /** @class */ (function () {
    function SingleRecipePageModule() {
    }
    SingleRecipePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_single_recipe_page__WEBPACK_IMPORTED_MODULE_6__["SingleRecipePage"]]
        })
    ], SingleRecipePageModule);
    return SingleRecipePageModule;
}());



/***/ }),

/***/ "./src/app/recipes/single-recipe/single-recipe.page.html":
/*!***************************************************************!*\
  !*** ./src/app/recipes/single-recipe/single-recipe.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-text *ngIf=\"!loading\">\n  <h1>Chargement...</h1>\n</ion-text> -->\n\n<ion-header *ngIf=\"recipe\">\n  <ion-toolbar color=\"favorite\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n      <ion-button *ngIf=\"recipe\" (click)=\"onBackToRecipe()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ recipe.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"recipe\">\n  <ion-item *ngIf=\"recipe.portions\" class=\"ion-padding-end\" lines=\"none\">\n    <ion-icon name=\"pie\" slot=\"start\"></ion-icon>\n    <p>{{ recipe.portions }} portion(s)</p>\n  </ion-item>\n  <ion-item *ngIf=\"recipe.prepareTime\" class=\"ion-padding-end\" lines=\"none\">\n    <ion-icon name=\"time\" slot=\"start\"></ion-icon>\n    <p>{{ recipe.prepareTime | date : 'HH:mm' }} de préparation</p>\n  </ion-item>\n  <ion-item *ngIf=\"recipe.globalTime\" class=\"ion-padding-end\" lines=\"none\">\n    <ion-icon name=\"timer\" slot=\"start\"></ion-icon>\n    <p>{{ recipe.globalTime | date : 'HH:mm' }} au total</p>\n  </ion-item>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title color=\"favorite\" class=\"fs-20\">Ingédients</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content class=\"ion-no-padding\">\n      <ion-item color=\"light\" class=\"ion-padding\" lines=\"none\" *ngFor=\"let ingredient of recipe.ingredients\">\n        {{ ingredient.name }} <span *ngIf=\"ingredient.quantity\">- {{ ingredient.quantity}}</span> <span *ngIf=\"ingredient.unit !== 'aucun'\">{{ ingredient.unit }}</span>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title color=\"favorite\" class=\"fs-20\">Etapes</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content class=\"ion-no-padding ion-padding-bottom\">\n      <ion-item color=\"light\" class=\"ion-padding\" lines=\"none\" *ngFor=\"let step of recipe.steps\">\n        {{ step }}\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button color=\"tertiary\" expand=\"block\" (click)=\"onEditRecipe()\">Modifier</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"danger\" expand=\"block\" (click)=\"presentAlertConfirm()\">Supprimer</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/recipes/single-recipe/single-recipe.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/recipes/single-recipe/single-recipe.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvc2luZ2xlLXJlY2lwZS9zaW5nbGUtcmVjaXBlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/single-recipe/single-recipe.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/recipes/single-recipe/single-recipe.page.ts ***!
  \*************************************************************/
/*! exports provided: SingleRecipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleRecipePage", function() { return SingleRecipePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/recipes.service */ "./src/app/services/recipes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var SingleRecipePage = /** @class */ (function () {
    function SingleRecipePage(recipesService, usersService, route, navCtrl, alertCtrl) {
        this.recipesService = recipesService;
        this.usersService = usersService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    SingleRecipePage.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.initUser(user.uid);
                _this.initRecipe(user.uid);
            }
            else {
                console.log('déconnecté');
            }
        });
    };
    SingleRecipePage.prototype.initUser = function (userId) {
        var _this = this;
        this.userSubscription = this.usersService.userSuject.subscribe(function (user) {
            _this.user = user;
        });
        this.usersService.getUser(userId);
        this.usersService.emitUser();
    };
    SingleRecipePage.prototype.initRecipe = function (userId) {
        var _this = this;
        var recipeId = this.route.snapshot.params['id'];
        this.recipesService.getSingleRecipe(userId, recipeId).then(function (data) {
            _this.recipe = data;
        });
    };
    SingleRecipePage.prototype.onRemoveRecipe = function () {
        var recipeId = this.route.snapshot.params['id'];
        this.recipesService.removeRecipe(recipeId, this.user.userId);
        // this.router.navigate(['/recipes']);
    };
    SingleRecipePage.prototype.onEditRecipe = function () {
        var recipeId = this.route.snapshot.params['id'];
        this.navCtrl.navigateForward('/recipes/edit/' + recipeId);
    };
    SingleRecipePage.prototype.onBackToRecipe = function () {
        var id = this.route.snapshot.params['id'];
        this.navCtrl.navigateBack('/recipes');
    };
    SingleRecipePage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.route.snapshot.params['id'];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Supprimer cette recette ?',
                                buttons: [
                                    {
                                        text: 'Annuler',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }, {
                                        text: 'Supprimer',
                                        handler: function () {
                                            _this.recipesService.removeRecipe(id, _this.user.userId);
                                            _this.navCtrl.navigateForward('/recipes');
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
    SingleRecipePage.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    SingleRecipePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-recipe',
            template: __webpack_require__(/*! ./single-recipe.page.html */ "./src/app/recipes/single-recipe/single-recipe.page.html"),
            styles: [__webpack_require__(/*! ./single-recipe.page.scss */ "./src/app/recipes/single-recipe/single-recipe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], SingleRecipePage);
    return SingleRecipePage;
}());



/***/ })

}]);
//# sourceMappingURL=recipes-single-recipe-single-recipe-module.js.map