(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-edit-recipes-edit-module"],{

/***/ "./src/app/models/Ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/Ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, quantity, unit, isChecked) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.isChecked = isChecked;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/models/Recipe.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/Recipe.model.ts ***!
  \****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(title, portions, meal, prepareTime, globalTime, ingredients, steps, toShop) {
        this.title = title;
        this.portions = portions;
        this.meal = meal;
        this.prepareTime = prepareTime;
        this.globalTime = globalTime;
        this.ingredients = ingredients;
        this.steps = steps;
        this.toShop = toShop;
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/recipes/recipes-edit/recipes-edit.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/recipes/recipes-edit/recipes-edit.module.ts ***!
  \*************************************************************/
/*! exports provided: RecipesEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesEditPageModule", function() { return RecipesEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipes_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes-edit.page */ "./src/app/recipes/recipes-edit/recipes-edit.page.ts");







var routes = [
    {
        path: '',
        component: _recipes_edit_page__WEBPACK_IMPORTED_MODULE_6__["RecipesEditPage"]
    }
];
var RecipesEditPageModule = /** @class */ (function () {
    function RecipesEditPageModule() {
    }
    RecipesEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recipes_edit_page__WEBPACK_IMPORTED_MODULE_6__["RecipesEditPage"]]
        })
    ], RecipesEditPageModule);
    return RecipesEditPageModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipes-edit/recipes-edit.page.html":
/*!*************************************************************!*\
  !*** ./src/app/recipes/recipes-edit/recipes-edit.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"favorite\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n      <ion-button *ngIf=\"recipe\" (click)=\"onBackToRecipe()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Edition d'une recette</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSaveRecipe()\">\n    <ion-item class=\"ion-padding-horizontal ion-padding-top\">\n      <ion-label color=\"favorite\">\n          Informations globales\n      </ion-label>\n    </ion-item>\n\n    <div class=\"ion-padding-horizontal\">\n      <div class=\"ion-padding-horizontal ion-padding-top\">\n        <label class=\"recipeFormLabel\">Titre</label>\n        <ion-input formControlName=\"title\" type=\"text\" class=\"recipeFormInput ion-padding-horizontal\" placeholder=\"Ex: Ravioli ricotta épinard\"></ion-input>\n      </div>\n      <div class=\"ion-padding-horizontal pt-3\">\n        <ion-item lines=\"none\" class=\"recipeSelect\">\n          <ion-label>Portions</ion-label>\n          <ion-select formControlName=\"portions\" value=\"portions\" okText=\"OK\" cancelText=\"Annuler\">\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6\">6</ion-select-option>\n            <ion-select-option value=\"8\">8</ion-select-option>\n            <ion-select-option value=\"10\">10</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n      <div class=\"ion-padding-horizontal pt-3\">\n        <ion-item lines=\"none\" class=\"recipeSelect\">\n          <ion-label>Repas</ion-label>\n          <ion-select formControlName=\"meal\" value=\"meal\" okText=\"OK\" cancelText=\"Annuler\">\n            <ion-select-option value=\"Petit déjeuner\">Petit déjeuner</ion-select-option>\n            <ion-select-option value=\"Déjeuner\">Déjeuner</ion-select-option>\n            <ion-select-option value=\"Dîner\">Dîner</ion-select-option>\n            <ion-select-option value=\"Entrée\">Entrée</ion-select-option>\n            <ion-select-option value=\"Dessert\">Dessert</ion-select-option>\n            <ion-select-option value=\"Collation\">Collation</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n    </div>\n\n    <ion-grid class=\"ion-padding-horizontal\">\n      <ion-row class=\"ion-padding-horizontal\">\n        <ion-col size=\"6\">\n          <ion-item class=\"recipeSelect\" lines=\"none\">\n            <ion-label>Préparation</ion-label>\n            <ion-datetime formControlName=\"prepareTime\" displayFormat=\"HH:mm\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item class=\"recipeSelect\" lines=\"none\">\n            <ion-label>Temps global</ion-label>\n            <ion-datetime formControlName=\"globalTime\" displayFormat=\"HH:mm\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-item class=\"ion-padding-horizontal\">\n      <ion-label color=\"favorite\">\n          Ingrédients\n      </ion-label>\n    </ion-item>\n\n    <div class=\"ion-padding-horizontal\">\n      <div class=\"ion-padding-horizontal ion-padding-top\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-input type=\"text\" class=\"recipeFormInput ion-padding-horizontal\" placeholder=\"Ingédient\" formControlName=\"ingredientName\"></ion-input>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-input type=\"text\" class=\"recipeFormInput ion-padding-horizontal\" placeholder=\"Qté\" formControlName=\"ingredientQty\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\" class=\"recipeSelect\">\n                <ion-label>Unité</ion-label>\n                <ion-select formControlName=\"ingredientUnit\" value=\"unit\" okText=\"OK\" cancelText=\"Annuler\">\n                  <ion-select-option value=\"g\" selected>g</ion-select-option>\n                  <ion-select-option value=\"kg\">kg</ion-select-option>\n                  <ion-select-option value=\"L\">L</ion-select-option>\n                  <ion-select-option value=\"cL\">cL</ion-select-option>\n                  <ion-select-option value=\"mL\">mL</ion-select-option>\n                  <ion-select-option value=\"cuillère à café\">cuillère à café</ion-select-option>\n                  <ion-select-option value=\"cuillère à soupe\">cuillère à soupe</ion-select-option>\n                  <ion-select-option value=\"aucun\">aucun</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button color=\"favorite\" class=\"ion-no-padding p-0\" expand=\"block\" (click)=\"onAddIngredient()\">\n                <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n                Ajouter\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" *ngFor=\"let ingredient of addedIngredients\">\n              <ion-item class=\"ion-no-padding d-flex\" color=\"light\">\n                <ion-label text-wrap class=\"ion-padding-start\">\n                  {{ ingredient.name }} <span *ngIf=\"ingredient.quantity\">-</span> {{ ingredient.quantity }} <span *ngIf=\"ingredient.unit !== 'aucun'\">{{ ingredient.unit }}</span>\n                </ion-label>\n                <ion-icon name=\"close\" color=\"danger\" style=\"cursor: pointer;\" (click)=\"onRemoveIngredient()\"></ion-icon>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <ion-item class=\"ion-padding-horizontal\">\n      <ion-label color=\"favorite\">\n          Etapes\n      </ion-label>\n    </ion-item>\n\n    <div class=\"ion-padding-horizontal ion-padding-top\">\n      <div class=\"ion-padding-horizontal\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n              <ion-item lines=\"none\" class=\"recipeFormInput\">\n                <ion-textarea placeholder=\"Entrez les étapes ici\" formControlName=\"step\"></ion-textarea>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\" class=\"d-flex\">\n              <ion-button color=\"favorite\" class=\"ion-no-padding p-0 m-auto stepBtn\" shape=\"round\" (click)=\"onAddStep()\">\n                <ion-icon name=\"add\" class=\"fs-30\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" *ngFor=\"let step of addedSteps\">\n              <ion-item color=\"light\" class=\"ion-no-padding d-flex\">\n                <ion-label text-wrap class=\"ion-padding-start\">\n                  {{ step }}\n                </ion-label>\n                <ion-icon name=\"close\" color=\"danger\" style=\"cursor: pointer;\" (click)=\"onRemoveStep()\"></ion-icon>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <ion-button type=\"submit\" class=\"ion-padding ion-margin\" color=\"favorite\" expand=\"block\">\n      Enregistrer\n    </ion-button>\n\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/recipes/recipes-edit/recipes-edit.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/recipes/recipes-edit/recipes-edit.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recipeFormInput {\n  border: 1px solid #40a798 !important;\n  border-radius: 5px !important; }\n\n.recipeSelect {\n  border: 1px solid #40a798 !important;\n  border-radius: 5px !important; }\n\n.stepBtn {\n  width: 50px;\n  height: 50px;\n  border-radius: 50% !important; }\n\n.subBtn {\n  height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyeWFuL0RvY3VtZW50cy9wcm9qZWN0cy9sYWIvd2ViL2lvbmljX3Byb2pldGN0cy9maXRGb29kMi9zcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy1lZGl0L3JlY2lwZXMtZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBb0M7RUFDcEMsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksb0NBQW9DO0VBQ3BDLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCLEVBQUE7O0FBR2pDO0VBRUksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLWVkaXQvcmVjaXBlcy1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNpcGVGb3JtSW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MGE3OTggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnJlY2lwZVNlbGVjdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQwYTc5OCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RlcEJ0biB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4uc3ViQnRuIHtcbiAgICAvLyB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/recipes/recipes-edit/recipes-edit.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/recipes/recipes-edit/recipes-edit.page.ts ***!
  \***********************************************************/
/*! exports provided: RecipesEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesEditPage", function() { return RecipesEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_Ingredient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Ingredient.model */ "./src/app/models/Ingredient.model.ts");
/* harmony import */ var src_app_models_Recipe_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Recipe.model */ "./src/app/models/Recipe.model.ts");
/* harmony import */ var src_app_services_recipes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/recipes.service */ "./src/app/services/recipes.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");










var RecipesEditPage = /** @class */ (function () {
    function RecipesEditPage(formBuilder, recipesService, usersService, router, route, navCtrl) {
        this.formBuilder = formBuilder;
        this.recipesService = recipesService;
        this.usersService = usersService;
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.loading = false;
        this.addedIngredients = [];
        this.addedSteps = [];
    }
    RecipesEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.initRecipeForm();
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.initUser(user.uid);
                _this.initRecipe(user.uid);
            }
            else {
                console.log('déconnecté');
            }
        });
    };
    RecipesEditPage.prototype.initUser = function (userId) {
        var _this = this;
        this.userSubscription = this.usersService.userSuject.subscribe(function (user) {
            _this.user = user;
            if (_this.user !== undefined) {
                _this.loading = true;
            }
            else {
                _this.loading = false;
            }
        });
        this.usersService.getUser(userId);
        this.usersService.emitUser();
    };
    RecipesEditPage.prototype.initRecipe = function (userId) {
        var _this = this;
        if (this.route.snapshot.params['id']) {
            var recipeId = this.route.snapshot.params['id'];
            this.recipe = new src_app_models_Recipe_model__WEBPACK_IMPORTED_MODULE_4__["Recipe"]('', '', '', '', '', [], [], false);
            this.recipeSubscription = this.recipesService.recipeSubject.subscribe(function (recipe) {
                _this.recipe = recipe;
                setTimeout(function () {
                    _this.recipeForm.get('title').setValue(_this.recipe.title);
                    _this.recipeForm.get('portions').setValue(_this.recipe.portions);
                    _this.recipeForm.get('meal').setValue(_this.recipe.meal);
                    _this.recipeForm.get('prepareTime').setValue(_this.recipe.prepareTime);
                    _this.recipeForm.get('globalTime').setValue(_this.recipe.globalTime);
                    _this.addedIngredients = _this.recipe.ingredients ? _this.recipe.ingredients : [];
                    _this.addedSteps = _this.recipe.steps ? _this.recipe.steps : [];
                }, 500);
            });
            this.recipesService.getRecipe(userId, recipeId);
            this.recipesService.emitRecipe();
        }
    };
    RecipesEditPage.prototype.initRecipeForm = function () {
        this.recipeForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            portions: [''],
            meal: [''],
            prepareTime: [''],
            globalTime: [''],
            ingredientName: [''],
            ingredientQty: [''],
            ingredientUnit: [''],
            step: ['']
        });
    };
    RecipesEditPage.prototype.onSaveRecipe = function () {
        var recipeId = this.route.snapshot.params['id'];
        var title = this.recipeForm.get('title').value;
        var portions = this.recipeForm.get('portions').value;
        var meal = this.recipeForm.get('meal').value;
        var prepareTime = this.recipeForm.get('prepareTime').value;
        var globalTime = this.recipeForm.get('globalTime').value;
        var ingredient = this.addedIngredients ? this.addedIngredients : [];
        var steps = this.addedSteps ? this.addedSteps : [];
        var toShop = false;
        var newRecipe = new src_app_models_Recipe_model__WEBPACK_IMPORTED_MODULE_4__["Recipe"](title, portions, meal, prepareTime, globalTime, ingredient, steps, toShop);
        console.log(newRecipe);
        if (this.route.snapshot.params['id']) {
            this.recipesService.updateRecipe(newRecipe, recipeId, this.user.userId);
        }
        else {
            this.recipesService.createRecipe(newRecipe, this.user.userId);
        }
        this.router.navigate(['/recipes']);
    };
    RecipesEditPage.prototype.onAddIngredient = function () {
        var name = this.recipeForm.get('ingredientName').value;
        var quantity = this.recipeForm.get('ingredientQty').value;
        var unit = this.recipeForm.get('ingredientUnit').value ? this.recipeForm.get('ingredientUnit').value : '';
        var newIngredient = new src_app_models_Ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"](name, quantity, unit, false);
        this.addedIngredients.push(newIngredient);
        this.recipeForm.get('ingredientName').setValue('');
        this.recipeForm.get('ingredientQty').setValue('');
    };
    RecipesEditPage.prototype.onRemoveIngredient = function (id) {
        this.addedIngredients.splice(id, 1);
    };
    RecipesEditPage.prototype.onAddStep = function () {
        var step = this.recipeForm.get('step').value;
        this.addedSteps.push(step);
        this.recipeForm.get('step').setValue('');
    };
    RecipesEditPage.prototype.onRemoveStep = function (id) {
        this.addedSteps.splice(id, 1);
    };
    RecipesEditPage.prototype.onBackToRecipe = function () {
        var id = this.route.snapshot.params['id'];
        this.navCtrl.navigateBack('/recipe/' + id);
    };
    RecipesEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes-edit',
            template: __webpack_require__(/*! ./recipes-edit.page.html */ "./src/app/recipes/recipes-edit/recipes-edit.page.html"),
            styles: [__webpack_require__(/*! ./recipes-edit.page.scss */ "./src/app/recipes/recipes-edit/recipes-edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            src_app_services_recipes_service__WEBPACK_IMPORTED_MODULE_5__["RecipesService"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]])
    ], RecipesEditPage);
    return RecipesEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipes-recipes-edit-recipes-edit-module.js.map