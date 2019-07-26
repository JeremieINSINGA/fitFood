(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-shopping-module"],{

/***/ "./src/app/shopping/shopping.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shopping/shopping.module.ts ***!
  \*********************************************/
/*! exports provided: ShoppingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingPageModule", function() { return ShoppingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shopping_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping.page */ "./src/app/shopping/shopping.page.ts");







var routes = [
    {
        path: '',
        component: _shopping_page__WEBPACK_IMPORTED_MODULE_6__["ShoppingPage"]
    }
];
var ShoppingPageModule = /** @class */ (function () {
    function ShoppingPageModule() {
    }
    ShoppingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_shopping_page__WEBPACK_IMPORTED_MODULE_6__["ShoppingPage"]]
        })
    ], ShoppingPageModule);
    return ShoppingPageModule;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.page.html":
/*!*********************************************!*\
  !*** ./src/app/shopping/shopping.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"favorite\">\n    <ion-title>Liste de courses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item *ngIf=\"!shoppingList\" lines=\"none\" padding>\n    <p class=\"text-center\">Vous n'avez pas encore ajouté de recette à la liste de courses</p>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" *ngFor=\"let ingredient of shoppingList; let i of index\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"square-outline\" slot=\"start\" (click)=\"changeIngCheckValue(i)\" *ngIf=\"ingredient.isChecked === false\"></ion-icon>\n          <ion-icon name=\"checkbox-outline\" slot=\"start\" (click)=\"changeIngCheckValue(i)\" color=\"favorite\" *ngIf=\"ingredient.isChecked === true\"></ion-icon>\n          {{ ingredient.name }}\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shopping/shopping.page.scss":
/*!*********************************************!*\
  !*** ./src/app/shopping/shopping.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL3Nob3BwaW5nLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shopping/shopping.page.ts":
/*!*******************************************!*\
  !*** ./src/app/shopping/shopping.page.ts ***!
  \*******************************************/
/*! exports provided: ShoppingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingPage", function() { return ShoppingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_recipes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/recipes.service */ "./src/app/services/recipes.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





var ShoppingPage = /** @class */ (function () {
    function ShoppingPage(usersService, recipesService) {
        this.usersService = usersService;
        this.recipesService = recipesService;
        this.shoppingList = [];
    }
    ShoppingPage.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.initUser(user.uid);
                _this.initShoppingList(user.uid);
            }
            else {
                console.log('déconnecté');
            }
        });
    };
    ShoppingPage.prototype.initUser = function (userId) {
        var _this = this;
        this.userSubscription = this.usersService.userSuject.subscribe(function (user) {
            _this.user = user;
        });
        this.usersService.getUser(userId);
        this.usersService.emitUser();
    };
    ShoppingPage.prototype.initShoppingList = function (userId) {
        var _this = this;
        this.shoppingListSubscription = this.recipesService.ingredientsToShopSubject.subscribe(function (ingredients) {
            _this.shoppingList = ingredients;
        });
        this.recipesService.getIngredientsToShop(userId);
        this.recipesService.emitIngredientsToShop();
    };
    ShoppingPage.prototype.changeIngCheckValue = function (id) {
        var index = this.shoppingList.findIndex(function (el) {
            if (el === id) {
                return true;
            }
        });
        if (this.shoppingList[index].isChecked === true) {
            this.shoppingList[index].isChecked = false;
        }
        else {
            this.shoppingList[index].isChecked = true;
        }
        this.recipesService.updateShoppingList(this.user.userId, index, this.shoppingList[index]);
    };
    ShoppingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping',
            template: __webpack_require__(/*! ./shopping.page.html */ "./src/app/shopping/shopping.page.html"),
            styles: [__webpack_require__(/*! ./shopping.page.scss */ "./src/app/shopping/shopping.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_recipes_service__WEBPACK_IMPORTED_MODULE_3__["RecipesService"]])
    ], ShoppingPage);
    return ShoppingPage;
}());



/***/ })

}]);
//# sourceMappingURL=shopping-shopping-module.js.map