(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-4e92c885.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-4e92c885.js ***!
  \********************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-ba834eff.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-ba834eff.js ***!
  \********************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _this = undefined;

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var router;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) return [3 /*break*/, 2];
                router = document.querySelector('ion-router');
                if (!router) return [3 /*break*/, 2];
                if (ev != null) {
                    ev.preventDefault();
                }
                return [4 /*yield*/, router.componentOnReady()];
            case 1:
                _a.sent();
                return [2 /*return*/, router.push(url, direction)];
            case 2: return [2 /*return*/, false];
        }
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-c90aaa66.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-c90aaa66.js ***!
  \********************************************************************/
/*! exports provided: a, b, c, d, e, f, h, i, n, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return renderHiddenInput; });
var rIC = function (callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
var hasShadowDom = function (el) {
    return !!el.shadowRoot && !!el.attachShadow;
};
var findItemLabel = function (componentEl) {
    var itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
var renderHiddenInput = function (always, container, name, value, disabled) {
    if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};
var clamp = function (min, n, max) {
    return Math.max(min, Math.min(n, max));
};
var assert = function (actual, reason) {
    if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
var now = function (ev) {
    return ev.timeStamp || Date.now();
};
var pointerCoord = function (ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
var isEndSide = function (side) {
    var isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error("\"" + side + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
    }
};
var debounceEvent = function (event, wait) {
    var original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
var debounce = function (func, wait) {
    if (wait === void 0) { wait = 0; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout.apply(void 0, [func, wait].concat(args));
    };
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-cae2ca23.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-cae2ca23.js ***!
  \********************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var documentFragmentChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes[i];
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (element) {
    return (element.children != null) ? element.children : element.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./src/app/models/User.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/User.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(userId, firstname, lastname, email, phone, birth, sex) {
        this.userId = userId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.birth = birth;
        this.sex = sex;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _models_User_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/User.model */ "./src/app/models/User.model.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(platform, fb, usersService) {
        this.platform = platform;
        this.fb = fb;
        this.usersService = usersService;
        this.providerFb = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
    }
    AuthenticationService.prototype.signUpUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthenticationService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
                console.log('Connecté');
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthenticationService.prototype.facebookCordova = function () {
        // return new Promise(
        //   (resolve, reject) => {
        //     console.log('okey');
        //     this.fb.login(['email']).then(
        //       (response) => {
        //         console.log('OKAY');
        //         const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        //         firebase.auth().signInWithCredential(facebookCredential).then(
        //           (success) => {
        //             console.log('Info Facebook: ' + JSON.stringify(success));
        //             const phone = success.user.phoneNumber ? success.user.phoneNumber : '';
        //             const newUser = new User(success.user.uid, '', '', success.user.email, phone, '', '');
        //             this.usersService.createUser(newUser, success.user.uid);
        //             resolve(success);
        //           },
        //           (error) => {
        //             reject(error);
        //           }
        //         );
        //       },
        //       (error) => {
        //         reject(error);
        //       }
        //     );
        //   }
        // );
        this.fb.login(['email']).then(function (response) {
            var facebookCredential = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider.credential(response.authResponse.accessToken);
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithCredential(facebookCredential)
                .then(function (success) {
                console.log('Info Facebook: ' + JSON.stringify(success));
            }).catch(function (error) {
                console.log('Erreur: ' + JSON.stringify(error));
            });
        }).catch(function (error) { console.log(error); });
    };
    AuthenticationService.prototype.facebookWeb = function () {
        var _this = this;
        // firebase.auth()
        //   .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        //   .then((success) => {
        //     console.log('Info Facebook: ' + JSON.stringify(success));
        //     const phone = success.user.phoneNumber ? success.user.phoneNumber : '';
        //     const newUser = new User(success.user.uid, '', '', success.user.email, phone, '', '');
        //     this.usersService.createUser(newUser, success.user.uid);
        //   }).catch((error) => {
        //     console.log('Erreur: ' + JSON.stringify(error));
        //   });
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider()).then(function (success) {
                console.log('Info Facebook: ' + JSON.stringify(success));
                var phone = success.user.phoneNumber ? success.user.phoneNumber : '';
                var newUser = new _models_User_model__WEBPACK_IMPORTED_MODULE_5__["User"](success.user.uid, '', '', success.user.email, phone, '', '');
                _this.usersService.createUser(newUser, success.user.uid);
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthenticationService.prototype.signOutUser = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
        console.log('déconnecté');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"],
            _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/recipes.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/recipes.service.ts ***!
  \*********************************************/
/*! exports provided: RecipesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesService", function() { return RecipesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var RecipesService = /** @class */ (function () {
    function RecipesService() {
        this.recipeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.allRecipes = [];
        this.allRecipesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.ingredientsToShop = [];
        this.ingredientsToShopSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.addToList = true;
        this.getIngredientsToShop = this.getIngredientsToShop.bind(this);
    }
    RecipesService.prototype.emitRecipe = function () {
        this.recipeSubject.next(this.recipe);
    };
    RecipesService.prototype.emitAllRecipes = function () {
        this.allRecipesSubject.next(this.allRecipes);
    };
    RecipesService.prototype.emitIngredientsToShop = function () {
        this.ingredientsToShopSubject.next(this.ingredientsToShop);
    };
    RecipesService.prototype.saveAllRecipes = function (userId) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + userId + '/recipes/').set(this.allRecipes);
    };
    RecipesService.prototype.createRecipe = function (newRecipe, userId) {
        this.allRecipes.push(newRecipe);
        this.saveAllRecipes(userId);
        this.emitAllRecipes();
    };
    RecipesService.prototype.updateRecipe = function (recipe, recipeId, userId) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + userId + '/recipes/' + recipeId).update(recipe);
    };
    RecipesService.prototype.updateShopParam = function (recipeId, userId) {
        if (this.allRecipes[+recipeId]['toShop'] === true) {
            this.allRecipes[+recipeId]['toShop'] = false;
        }
        else if (this.allRecipes[+recipeId]['toShop'] === false) {
            this.allRecipes[+recipeId]['toShop'] = true;
        }
        this.saveAllRecipes(userId);
        this.emitAllRecipes();
    };
    RecipesService.prototype.getRecipe = function (userId, recipeId) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + userId + '/recipes/' + recipeId).on('value', function (data) {
            _this.recipe = data.val();
            _this.emitRecipe();
        });
        // return new Promise(
        //   (resolve, reject) => {
        //     firebase.database().ref('/users/' + userId + '/recipes/' + recipeId).once('value').then(
        //       (data) => {
        //         resolve(data.val());
        //       },
        //       (error) => {
        //         reject(error);
        //       }
        //     );
        //   }
        // );
    };
    RecipesService.prototype.getAllRecipes = function (userId) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + userId + '/recipes/').on('value', function (data) {
            _this.allRecipes = data.val() ? data.val() : [];
            _this.emitAllRecipes();
        });
    };
    RecipesService.prototype.findRecipeIndex = function (recipe) {
        var recipeIndex = this.allRecipes.findIndex(function (recipeEl) {
            if (recipeEl === recipe) {
                return true;
            }
        });
        return recipeIndex;
    };
    RecipesService.prototype.getSingleRecipe = function (userId, recipeId) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + userId + '/recipes/' + recipeId).once('value').then(function (data) {
                resolve(data.val());
            }, function (error) {
                reject(error);
            });
        });
    };
    RecipesService.prototype.removeRecipe = function (recipeId, userId) {
        this.allRecipes.splice(recipeId, 1);
        this.saveAllRecipes(userId);
        this.emitAllRecipes();
    };
    RecipesService.prototype.addIngredientsToShop = function (userId) {
        this.ingredientsToShop = [];
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + userId + '/recipes').once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                var ingredients = childData.ingredients;
                if (childData.toShop === true) { // if the recipe is added to shopping list
                    ingredients.forEach(function (child) {
                        this.compareIngredients(child);
                    }.bind(this));
                }
            }.bind(this));
        }.bind(this));
        this.saveShoppingList(userId);
    };
    RecipesService.prototype.getIngredientsToShop = function (userId) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + userId + '/shopping/').on('value', function (data) {
            _this.ingredientsToShop = data.val();
            _this.emitIngredientsToShop();
        });
    };
    RecipesService.prototype.compareIngredients = function (ingredient) {
        var ingToAddNameLower = ingredient.name.toLowerCase();
        if (this.ingredientsToShop.length !== 0) {
            for (var i = 0; i < this.ingredientsToShop.length; i++) {
                var element = this.ingredientsToShop[i];
                var elementNameLow = element.name.toLowerCase();
                if (elementNameLow.includes(ingToAddNameLower)) {
                    element.quantity = +ingredient.quantity + +element.quantity;
                    this.addToList = false;
                }
            }
            if (this.addToList === true) {
                this.ingredientsToShop.push(ingredient);
            }
            else {
                this.addToList = true;
            }
        }
        else {
            this.ingredientsToShop.push(ingredient);
        }
    };
    RecipesService.prototype.saveShoppingList = function (userId) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + userId + '/shopping/').set(this.ingredientsToShop);
    };
    RecipesService.prototype.updateShoppingList = function (userId, ingredientId, ingredient) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + userId + '/shopping/' + ingredientId).update(ingredient);
    };
    RecipesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipesService);
    return RecipesService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var UsersService = /** @class */ (function () {
    function UsersService() {
        this.userSuject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    UsersService.prototype.emitUser = function () {
        this.userSuject.next(this.user);
    };
    UsersService.prototype.getUser = function (userId) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + userId).on('value', function (data) {
            _this.user = data.val();
            _this.emitUser();
        });
    };
    UsersService.prototype.updateUser = function (user, userId) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + userId).update(user).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    UsersService.prototype.createUser = function (newUser, userId) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/users/' + userId).set(newUser).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    UsersService.prototype.updateEmail = function (email, currentUser) {
        return new Promise(function (resolve, reject) {
            currentUser.updateEmail(email).then(function () {
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersService);
    return UsersService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map