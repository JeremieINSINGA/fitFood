(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-module"],{

/***/ "./src/app/recipes/recipes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/*! exports provided: RecipesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPageModule", function() { return RecipesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes.page */ "./src/app/recipes/recipes.page.ts");







var routes = [
    {
        path: '',
        component: _recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"]
    }
];
var RecipesPageModule = /** @class */ (function () {
    function RecipesPageModule() {
    }
    RecipesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"]]
        })
    ], RecipesPageModule);
    return RecipesPageModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.page.html":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"favorite\">\n    <ion-title>Recettes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"position-relative\">\n\n  <ion-grid>\n    <ion-row class=\"ion-padding-vertical\">\n      <ion-col *ngFor=\"let recipe of allRecipes; let i = index\" size=\"12\" sizeMd=\"6\" sizeLg=\"4\">\n        <ion-card class=\"ion-no-margin\">\n          <ion-item class=\"ion-padding-end\">\n            <ion-card-header>\n              <ion-card-title color=\"favorite\" class=\"fs-20\">{{ recipe.title }}</ion-card-title>\n              <ion-card-subtitle>{{ recipe.meal }}</ion-card-subtitle>\n              \n            </ion-card-header>\n            <ion-icon (click)=\"onAddRecipeToShoppingList(i)\" *ngIf=\"!recipe.toShop\" name=\"bookmark\" slot=\"end\" class=\"bookmark\"></ion-icon>\n            <ion-icon (click)=\"onRemoveRecipeFromShoppingList(i)\" *ngIf=\"recipe.toShop\" color=\"favorite\" name=\"bookmark\" slot=\"end\" class=\"bookmark\"></ion-icon>\n          </ion-item>\n\n          <ion-card-content>\n            <ion-item lines=\"none\" class=\"fs-15\">\n              <ion-icon class=\"fs-20\" slot=\"start\" name=\"pie\"></ion-icon>\n              Portions : {{ recipe.portions }}\n            </ion-item>\n            <ion-item lines=\"none\" class=\"fs-15\">\n              <ion-icon class=\"fs-20\" slot=\"start\" name=\"time\"></ion-icon>\n              Temps global : {{ recipe.globalTime | date : 'HH:mm' }}\n            </ion-item>\n            <div class=\"d-flex ion-padding-top\">\n                <ion-button color=\"favorite\" class=\"mx-auto\" [routerLink]=\"['/recipe', i]\">Voir la recette</ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <button routerLink=\"/recipes/edit\" class=\"bg-favorite rounded-circle text-whitesmoke position-fixed btnAddRecipe\">\n    <ion-icon name=\"add\" class=\"fs-35\"></ion-icon>\n  </button>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/recipes/recipes.page.scss":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnAddRecipe {\n  bottom: 62px;\n  right: 12px;\n  height: 50px;\n  width: 50px;\n  padding: 7px;\n  text-align: center; }\n\n.boockmark {\n  position: relative;\n  z-index: 99; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyeWFuL0RvY3VtZW50cy9wcm9qZWN0cy9sYWIvd2ViL2lvbmljX3Byb2pldGN0cy9maXRGb29kMi9zcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL3JlY2lwZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkFkZFJlY2lwZSB7XG4gICAgYm90dG9tOiA2MnB4O1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9vY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk7XG59Il19 */"

/***/ }),

/***/ "./src/app/recipes/recipes.page.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipes.page.ts ***!
  \*****************************************/
/*! exports provided: RecipesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPage", function() { return RecipesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/recipes.service */ "./src/app/services/recipes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");






// import { ShoppingService } from '../services/shopping.service';
var RecipesPage = /** @class */ (function () {
    function RecipesPage(recipesService, usersService, router) {
        this.recipesService = recipesService;
        this.usersService = usersService;
        this.router = router;
    }
    RecipesPage.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.initUser(user.uid);
                _this.initAllRecipes(user.uid);
            }
            else {
                console.log('déconnecté');
            }
        });
    };
    RecipesPage.prototype.initUser = function (userId) {
        var _this = this;
        this.userSubscription = this.usersService.userSuject.subscribe(function (user) {
            _this.user = user;
        });
        this.usersService.getUser(userId);
        this.usersService.emitUser();
    };
    RecipesPage.prototype.initAllRecipes = function (userId) {
        var _this = this;
        this.allRecipesSubscription = this.recipesService.allRecipesSubject.subscribe(function (allRecipes) {
            _this.allRecipes = allRecipes;
        });
        this.recipesService.getAllRecipes(userId);
        this.recipesService.emitAllRecipes();
    };
    RecipesPage.prototype.onNewRecipe = function () {
        this.router.navigate(['/recipe', 'edit']);
    };
    RecipesPage.prototype.onDisplayRecipe = function (id) {
        this.router.navigate(['/recipe', id]);
    };
    RecipesPage.prototype.onAddRecipeToShoppingList = function (recipeId) {
        this.recipesService.updateShopParam(recipeId, this.user.userId);
        this.recipesService.addIngredientsToShop(this.user.userId);
    };
    RecipesPage.prototype.onRemoveRecipeFromShoppingList = function (recipeId) {
        this.recipesService.updateShopParam(recipeId, this.user.userId);
        this.recipesService.addIngredientsToShop(this.user.userId);
    };
    RecipesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! ./recipes.page.html */ "./src/app/recipes/recipes.page.html"),
            styles: [__webpack_require__(/*! ./recipes.page.scss */ "./src/app/recipes/recipes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RecipesPage);
    return RecipesPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipes-recipes-module.js.map