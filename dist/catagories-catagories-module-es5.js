(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catagories-catagories-module"], {
    /***/
    "./src/app/pages/catagories/catagories-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/catagories/catagories-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CatagoriesRoutingModule, routedComponents */

    /***/
    function srcAppPagesCatagoriesCatagoriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatagoriesRoutingModule", function () {
        return CatagoriesRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routedComponents", function () {
        return routedComponents;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _catagories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./catagories.component */
      "./src/app/pages/catagories/catagories.component.ts");
      /* harmony import */


      var _catagories_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../catagories/category-list/category-list.component */
      "./src/app/pages/catagories/category-list/category-list.component.ts");
      /* harmony import */


      var _catagories_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../catagories/category-details/category-details.component */
      "./src/app/pages/catagories/category-details/category-details.component.ts");
      /* harmony import */


      var _catagories_update_category_update_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../catagories/update-category/update-category.component */
      "./src/app/pages/catagories/update-category/update-category.component.ts");
      /* harmony import */


      var _catagories_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../catagories/create-category/create-category.component */
      "./src/app/pages/catagories/create-category/create-category.component.ts");

      var routes = [{
        path: '',
        component: _catagories_component__WEBPACK_IMPORTED_MODULE_2__["CatagoriesComponent"],
        children: [{
          path: 'category-list',
          component: _catagories_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__["CategoryListComponent"]
        }, {
          path: 'add',
          component: _catagories_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_6__["CreateCategoryComponent"]
        }, {
          path: 'update/:id',
          component: _catagories_update_category_update_category_component__WEBPACK_IMPORTED_MODULE_5__["UpdateCategoryComponent"]
        }, {
          path: 'view/:id',
          component: _catagories_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_4__["CategoryDetailsComponent"]
        }]
      }];

      var CatagoriesRoutingModule = function CatagoriesRoutingModule() {
        _classCallCheck(this, CatagoriesRoutingModule);
      };

      CatagoriesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CatagoriesRoutingModule
      });
      CatagoriesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CatagoriesRoutingModule_Factory(t) {
          return new (t || CatagoriesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CatagoriesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatagoriesRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();

      var routedComponents = [_catagories_component__WEBPACK_IMPORTED_MODULE_2__["CatagoriesComponent"]];
      /***/
    },

    /***/
    "./src/app/pages/catagories/catagories.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/catagories/catagories.component.ts ***!
      \**********************************************************/

    /*! exports provided: CatagoriesComponent */

    /***/
    function srcAppPagesCatagoriesCatagoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatagoriesComponent", function () {
        return CatagoriesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var CatagoriesComponent = function CatagoriesComponent() {
        _classCallCheck(this, CatagoriesComponent);

        this.title = 'Angular 9 + Spring Boot 2 CRUD Tutorial';
      };

      CatagoriesComponent.ɵfac = function CatagoriesComponent_Factory(t) {
        return new (t || CatagoriesComponent)();
      };

      CatagoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CatagoriesComponent,
        selectors: [["ngx-categories"]],
        decls: 4,
        vars: 0,
        consts: [[1, "container"], [1, "card"], [1, "card-body"]],
        template: function CatagoriesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["li.nav-item.right-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 20px;\n  background: #fff;\n}\n\nli.nav-item.left-btn[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\nli.nav-item.right-btn[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%], li.nav-item.left-btn[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%] {\n  color: #000 !important;\n  text-decoration: none;\n  font-weight: 300;\n}\n\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #17a2b8 !important;\n  border-color: #17a2b8 !important;\n}\n\nnav.navbar.navbar-expand-sm.bg-primary.navbar-dark[_ngcontent-%COMP%] {\n  height: 70px;\n}\n\nli[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ3BCOztBQUNBO0VBQ0ksZ0JBQWdCO0FBRXBCOztBQUFBO0VBQWtFLHNCQUFzQjtFQUFFLHFCQUFxQjtFQUFFLGdCQUFnQjtBQU1qSTs7QUFMQTtFQUNJLG9DQUFvQztFQUNwQyxnQ0FBaUM7QUFRckM7O0FBTkE7RUFDSSxZQUFZO0FBU2hCOztBQVBBO0VBQU8sV0FBVztBQVdsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxpLm5hdi1pdGVtLnJpZ2h0LWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxubGkubmF2LWl0ZW0ubGVmdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5saS5uYXYtaXRlbS5yaWdodC1idG4gYS5uYXYtbGluaywgbGkubmF2LWl0ZW0ubGVmdC1idG4gYS5uYXYtbGlua3tjb2xvcjogIzAwMCAhaW1wb3J0YW50OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGZvbnQtd2VpZ2h0OiAzMDA7fVxyXG4uYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbn1cclxubmF2Lm5hdmJhci5uYXZiYXItZXhwYW5kLXNtLmJnLXByaW1hcnkubmF2YmFyLWRhcmsge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcbmxpIGgyIHtjb2xvcjogI2ZmZjt9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatagoriesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-categories',
            styleUrls: ['categories.component.scss'],
            template: "\n\n\n<div class=\"container\">\n <div class=\"card\">\n    <div class=\"card-body\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/catagories/catagories.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/catagories/catagories.module.ts ***!
      \*******************************************************/

    /*! exports provided: CatagoriesModule */

    /***/
    function srcAppPagesCatagoriesCatagoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatagoriesModule", function () {
        return CatagoriesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _catagories_catagories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../catagories/catagories.component */
      "./src/app/pages/catagories/catagories.component.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-echarts */
      "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../@theme/theme.module */
      "./src/app/@theme/theme.module.ts");
      /* harmony import */


      var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./create-category/create-category.component */
      "./src/app/pages/catagories/create-category/create-category.component.ts");
      /* harmony import */


      var _category_details_category_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./category-details/category-details.component */
      "./src/app/pages/catagories/category-details/category-details.component.ts");
      /* harmony import */


      var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./category-list/category-list.component */
      "./src/app/pages/catagories/category-list/category-list.component.ts");
      /* harmony import */


      var _update_category_update_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./update-category/update-category.component */
      "./src/app/pages/catagories/update-category/update-category.component.ts");
      /* harmony import */


      var _catagories_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./catagories-routing.module */
      "./src/app/pages/catagories/catagories-routing.module.ts");

      var CatagoriesModule = function CatagoriesModule() {
        _classCallCheck(this, CatagoriesModule);
      };

      CatagoriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CatagoriesModule
      });
      CatagoriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CatagoriesModule_Factory(t) {
          return new (t || CatagoriesModule)();
        },
        imports: [[_catagories_routing_module__WEBPACK_IMPORTED_MODULE_12__["CatagoriesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CatagoriesModule, {
          declarations: [_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_8__["CreateCategoryComponent"], _category_details_category_details_component__WEBPACK_IMPORTED_MODULE_9__["CategoryDetailsComponent"], _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__["CategoryListComponent"], _update_category_update_category_component__WEBPACK_IMPORTED_MODULE_11__["UpdateCategoryComponent"], _catagories_catagories_component__WEBPACK_IMPORTED_MODULE_4__["CatagoriesComponent"]],
          imports: [_catagories_routing_module__WEBPACK_IMPORTED_MODULE_12__["CatagoriesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatagoriesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_8__["CreateCategoryComponent"], _category_details_category_details_component__WEBPACK_IMPORTED_MODULE_9__["CategoryDetailsComponent"], _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__["CategoryListComponent"], _update_category_update_category_component__WEBPACK_IMPORTED_MODULE_11__["UpdateCategoryComponent"], _catagories_catagories_component__WEBPACK_IMPORTED_MODULE_4__["CatagoriesComponent"]],
            imports: [_catagories_routing_module__WEBPACK_IMPORTED_MODULE_12__["CatagoriesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/catagories/category-details/category-details.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/catagories/category-details/category-details.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: CategoryDetailsComponent */

    /***/
    function srcAppPagesCatagoriesCategoryDetailsCategoryDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryDetailsComponent", function () {
        return CategoryDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var app_core_auth_services_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! app/core_auth/services/rest.service */
      "./src/app/core_auth/services/rest.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function CategoryDetailsComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Icon: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.category.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.category.icon, " ");
        }
      }

      var CategoryDetailsComponent = /*#__PURE__*/function () {
        function CategoryDetailsComponent(restService, router) {
          _classCallCheck(this, CategoryDetailsComponent);

          this.restService = restService;
          this.router = router;
        }

        _createClass(CategoryDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.restService.get("/category/categoryList").subscribe(function (data) {
              _this.categories = data.data;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "list",
          value: function list() {
            this.router.navigate(['/pages/categories/category-list']);
          }
        }]);

        return CategoryDetailsComponent;
      }();

      CategoryDetailsComponent.ɵfac = function CategoryDetailsComponent_Factory(t) {
        return new (t || CategoryDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_auth_services_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      CategoryDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoryDetailsComponent,
        selectors: [["ngx-category-details"]],
        decls: 9,
        vars: 1,
        consts: [[4, "ngIf"], [1, "btn", "btn-primary", 3, "click"]],
        template: function CategoryDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Category Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryDetailsComponent_div_3_Template, 11, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDetailsComponent_Template_button_click_6_listener() {
              return ctx.list();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back to Category List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categories);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWdvcmllcy9jYXRlZ29yeS1kZXRhaWxzL2NhdGVnb3J5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyxXQUFXO0VBQUMsU0FBUztBQUc1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFnb3JpZXMvY2F0ZWdvcnktZGV0YWlscy9jYXRlZ29yeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkgaDIge2NvbG9yOiAjZmZmO21hcmdpbjogMDt9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-category-details',
            templateUrl: './category-details.component.html',
            styleUrls: ['./category-details.component.scss']
          }]
        }], function () {
          return [{
            type: app_core_auth_services_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/catagories/category-list/category-list.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/catagories/category-list/category-list.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CategoryListComponent */

    /***/
    function srcAppPagesCatagoriesCategoryListCategoryListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function () {
        return CategoryListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var app_core_auth_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/core_auth/services/rest.service */
      "./src/app/core_auth/services/rest.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function CategoryListComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r1 = ctx.$implicit;
          var id_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](id_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", category_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../update/", category_r1._id, "");
        }
      }

      var CategoryListComponent = /*#__PURE__*/function () {
        function CategoryListComponent(restService) {
          _classCallCheck(this, CategoryListComponent);

          this.restService = restService;
        }

        _createClass(CategoryListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reloadData();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this2 = this;

            this.restService.get("/category/categoryList").subscribe(function (data) {
              _this2.categories = data.data;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory(id) {
            var _this3 = this;

            var tour = this.category.find(function (x) {
              return x.id === id;
            });
            return this.category["delete"](id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
              return _this3.categories = _this3.categories.filter(function (x) {
                return x.id !== id;
              });
            });
          }
        }]);

        return CategoryListComponent;
      }();

      CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) {
        return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_auth_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]));
      };

      CategoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoryListComponent,
        selectors: [["ngx-category-list"]],
        decls: 25,
        vars: 1,
        consts: [[1, "panel", "panel-primary"], [1, "panel-heading"], [1, "navbar", "navbar-expand-sm", "bg-primary", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-item", "right-btn"], ["routerLink", "../add", "routerLinkActive", "active", 1, "nav-link"], [1, "panel-body"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["type", "image", 3, "src"], [1, "btn", "btn-info", 3, "routerLink"]],
        template: function CategoryListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
<<<<<<< HEAD

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CategoryListComponent_tr_24_Template, 10, 4, "tr", 10);

=======

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CategoryListComponent_tr_24_Template, 10, 4, "tr", 10);

>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: [".btn-delete-user[_ngcontent-%COMP%] {\n  width: 60px;\n  text-align: center;\n  box-sizing: content-box;\n  margin: 0 10px;\n}\n\nli.nav-item.right-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 6px;\n  background: #fff;\n}\n\nli.nav-item.left-btn[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\nli.nav-item.right-btn[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%], li.nav-item.left-btn[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%] {\n  color: #000 !important;\n  text-decoration: none;\n  font-weight: 300;\n}\n\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #17a2b8 !important;\n  border-color: #17a2b8 !important;\n}\n\ninput[type=\"image\"][_ngcontent-%COMP%] {\n  max-width: 90px;\n  height: auto;\n}\n\nli[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWdvcmllcy9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixjQUFhO0FBQ2pCOztBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsZ0JBQWdCO0FBRXBCOztBQUFBO0VBQ0ksZ0JBQWdCO0FBR3BCOztBQURBO0VBQWtFLHNCQUFzQjtFQUFFLHFCQUFxQjtFQUFFLGdCQUFnQjtBQU9qSTs7QUFOQTtFQUNJLG9DQUFvQztFQUNwQyxnQ0FBaUM7QUFTckM7O0FBUEE7RUFDSSxlQUFlO0VBQ2YsWUFBWTtBQVVoQjs7QUFSQTtFQUFPLFdBQVc7RUFBQyxTQUFTO0FBYTVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0YWdvcmllcy9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWRlbGV0ZS11c2VyIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICBtYXJnaW46MCAxMHB4O1xyXG59XHJcbmxpLm5hdi1pdGVtLnJpZ2h0LWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHJpZ2h0OiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbmxpLm5hdi1pdGVtLmxlZnQtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxubGkubmF2LWl0ZW0ucmlnaHQtYnRuIGEubmF2LWxpbmssIGxpLm5hdi1pdGVtLmxlZnQtYnRuIGEubmF2LWxpbmt7Y29sb3I6ICMwMDAgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBmb250LXdlaWdodDogMzAwO31cclxuLmJnLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgIzE3YTJiOCAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0W3R5cGU9XCJpbWFnZVwiXSB7XHJcbiAgICBtYXgtd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxubGkgaDIge2NvbG9yOiAjZmZmO21hcmdpbjogMDt9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-category-list',
            templateUrl: './category-list.component.html',
            styleUrls: ['./category-list.component.scss']
          }]
        }], function () {
          return [{
            type: app_core_auth_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/catagories/create-category/create-category.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/catagories/create-category/create-category.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CreateCategoryComponent, DialogOverviewExampleDialog */

    /***/
    function srcAppPagesCatagoriesCreateCategoryCreateCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function () {
        return CreateCategoryComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function () {
        return DialogOverviewExampleDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

      function CreateCategoryComponent_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateCategoryComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateCategoryComponent_div_15_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.icon.errors.required);
        }
      }

      function CreateCategoryComponent_div_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateCategoryComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateCategoryComponent_div_20_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.name.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var CreateCategoryComponent = /*#__PURE__*/function () {
        function CreateCategoryComponent(http, router, fb, location, dialog) {
          _classCallCheck(this, CreateCategoryComponent);

          this.http = http;
          this.router = router;
          this.fb = fb;
          this.location = location;
          this.dialog = dialog;
          this.isFormSubmitted = false;
        }

        _createClass(CreateCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              icon: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var file = event.target.files[0];
            this.form.patchValue({
              icon: file,
              name: ''
            });
            this.form.get('icon').updateValueAndValidity();
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this4 = this;

            this.isFormSubmitted = true; // Return if form is invalid

            if (this.form.invalid) {
              return;
            }

            var formData = new FormData();
            formData.append("name", this.form.get('name').value);
            formData.append("icon", this.form.get('icon').value);
            this.http.post('http://13.58.33.101:2000/category/create', formData, {
              reportProgress: true,
              observe: 'events',
              headers: this.getHeader(FormData)
            }).subscribe(function (response) {
              if (response.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                _this4.percentDone = Math.round(100 * response.loaded / response.total); //console.log('Progress ' + this.percentDone + '%');
              }

              if (response['body'] != undefined) {
                _this4.refresh(response);
              }
            }, function (error) {
              alert("Something Went Wrong Please Check");
              console.log(error);
<<<<<<< HEAD
=======
              _this4.loading = !_this4.loading;
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac
            });
          }
        }, {
          key: "refresh",
          value: function refresh(response) {
<<<<<<< HEAD
            if (response['meta']['status'] == 201) {
              this.router.navigate(['/pages/categories/category-list']); //alert("Category added Successfully");

              this.makeHttpCall();
            }
          }
        }, {
          key: "makeHttpCall",
          value: function makeHttpCall() {
            var _this5 = this;

            this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(function (r) {
              console.log(r);

              _this5.openDialog();
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this6 = this;
=======
            if (response['body']['meta']['status'] == 201) {
              this.loading = !this.loading;
              this.router.navigate(['/pages/categories/category-list']); //alert("Category added Successfully");

              this.openDialog();
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this5 = this;
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac

            var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
              direction: "ltr",
              data: {
                massage: this.msg
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
<<<<<<< HEAD
              _this6.msg = result;
=======
              _this5.msg = result;
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac
            });
          }
        }, {
          key: "getHeader",
          value: function getHeader(isFormData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            if (!isFormData) {
              headers = headers.append('Content-Type', 'json');
            }

            headers = headers.append('Authorization', localStorage.getItem('access_token'));
            return headers;
          }
        }]);

        return CreateCategoryComponent;
      }();

      CreateCategoryComponent.ɵfac = function CreateCategoryComponent_Factory(t) {
        return new (t || CreateCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
      };

      CreateCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateCategoryComponent,
        selectors: [["ngx-create-category"]],
<<<<<<< HEAD
        decls: 24,
        vars: 9,
        consts: [[1, "navbar", "navbar-expand-sm", "bg-primary", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-item", "right-btn"], ["href", "/pages/categories/category-list", "routerlink", "/pages/categories/category-list", "ng-reflect-router-link", "/pages/categories/category-list", 1, "btn", "nav-link"], [2, "width", "500px", "margin", "auto"], [1, "submit-form"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "icon"], ["type", "file", "name", "icon", "accept", ".png, .jpeg, .jpg", 1, "form-control", 3, "ngClass", "change"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "input-group-lg"], ["for", "name"], ["placeholder", "Name", "formControlName", "name", "name", "name", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-info"], [1, "invalid-feedback"], [4, "ngIf"]],
=======
        decls: 29,
        vars: 11,
        consts: [[1, "navbar", "navbar-expand-sm", "bg-primary", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-item", "right-btn"], ["href", "/pages/categories/category-list", "routerlink", "/pages/categories/category-list", "ng-reflect-router-link", "/pages/categories/category-list", 1, "btn", "nav-link"], [2, "width", "500px", "margin", "auto"], [1, "submit-form"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "icon"], ["type", "file", "name", "icon", "accept", ".png, .jpeg, .jpg", 1, "form-control", 3, "ngClass", "change"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "input-group-lg"], ["for", "name"], ["placeholder", "Name", "formControlName", "name", "name", "name", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-info"], [1, "progress-loader", 3, "hidden"], [1, "loading-spinner"], ["src", "assets/images/loader.gif"], [1, "loading-message"], [1, "invalid-feedback"], [4, "ngIf"]],
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac
        template: function CreateCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateCategoryComponent_Template_form_ngSubmit_10_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateCategoryComponent_Template_input_change_14_listener($event) {
              return ctx.uploadFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateCategoryComponent_div_15_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreateCategoryComponent_div_20_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.isFormSubmitted && ctx.form.controls.icon.errors || !ctx.form.controls.icon.pristine && ctx.form.controls.icon.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFormSubmitted && ctx.form.controls.icon.errors || !ctx.form.controls.icon.pristine && ctx.form.controls.icon.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isFormSubmitted && ctx.form.controls.name.errors || !ctx.form.controls.name.pristine && ctx.form.controls.name.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFormSubmitted && ctx.form.controls.name.errors || !ctx.form.controls.name.pristine && ctx.form.controls.name.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Progress ", ctx.percentDone, " %");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]],
<<<<<<< HEAD
        styles: ["li.nav-item.right-btn {\n  position: absolute;\n  top: 15px;\n  right: 20px;\n  background: #fff;\n}\n\nli.nav-item.left-btn {\n  background: #fff;\n}\n\nli.nav-item.right-btn a.nav-link, li.nav-item.left-btn a.nav-link {\n  color: #000 !important;\n  text-decoration: none;\n  font-weight: 300;\n}\n\n.bg-primary {\n  background-color: #17a2b8 !important;\n  border-color: #17a2b8 !important;\n}\n\nnav.navbar.navbar-expand-sm.bg-primary.navbar-dark {\n  height: 70px;\n}\n\nli.nav-item h2 {\n  color: #fff;\n}\n\nli h2 {\n  color: #fff !important;\n  margin: 0 !important;\n}\n\nform {\n  margin-top: 20px;\n}\n\n.form-control::-moz-placeholder {\n  height: calc(1.5em + 0.75rem + 8px) !important;\n  font-size: 17px;\n  color: #222b45 !important;\n  font-family: inherit;\n  font-weight: 400;\n  color: #000;\n}\n\n.form-control:-ms-input-placeholder {\n  height: calc(1.5em + 0.75rem + 8px) !important;\n  font-size: 17px;\n  color: #222b45 !important;\n  font-family: inherit;\n  font-weight: 400;\n  color: #000;\n}\n\n.form-control, .form-control::placeholder {\n  height: calc(1.5em + 0.75rem + 8px) !important;\n  font-size: 17px;\n  color: #222b45 !important;\n  font-family: inherit;\n  font-weight: 400;\n  color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWdvcmllcy9jcmVhdGUtY2F0ZWdvcnkvY3JlYXRlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ3BCOztBQUNBO0VBQ0ksZ0JBQWdCO0FBRXBCOztBQUFBO0VBQWtFLHNCQUFzQjtFQUFFLHFCQUFxQjtFQUFFLGdCQUFnQjtBQU1qSTs7QUFMQTtFQUNJLG9DQUFvQztFQUNwQyxnQ0FBaUM7QUFRckM7O0FBTkE7RUFDSSxZQUFZO0FBU2hCOztBQVBBO0VBQ0ksV0FBVztBQVVmOztBQVJBO0VBQU8sc0JBQXNCO0VBQUMsb0JBQW9CO0FBYWxEOztBQVpBO0VBQ0ksZ0JBQWdCO0FBZXBCOztBQWJFO0VBQTBDLDhDQUE4QztFQUFDLGVBQWU7RUFBQyx5QkFBeUI7RUFBQyxvQkFBb0I7RUFBQyxnQkFBZ0I7RUFBQyxXQUFXO0FBc0J0TDs7QUF0QkU7RUFBMEMsOENBQThDO0VBQUMsZUFBZTtFQUFDLHlCQUF5QjtFQUFDLG9CQUFvQjtFQUFDLGdCQUFnQjtFQUFDLFdBQVc7QUFzQnRMOztBQXRCRTtFQUEwQyw4Q0FBOEM7RUFBQyxlQUFlO0VBQUMseUJBQXlCO0VBQUMsb0JBQW9CO0VBQUMsZ0JBQWdCO0VBQUMsV0FBVztBQXNCdEwiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRhZ29yaWVzL2NyZWF0ZS1jYXRlZ29yeS9jcmVhdGUtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaS5uYXYtaXRlbS5yaWdodC1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbmxpLm5hdi1pdGVtLmxlZnQtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxubGkubmF2LWl0ZW0ucmlnaHQtYnRuIGEubmF2LWxpbmssIGxpLm5hdi1pdGVtLmxlZnQtYnRuIGEubmF2LWxpbmt7Y29sb3I6ICMwMDAgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBmb250LXdlaWdodDogMzAwO31cclxuLmJnLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgIzE3YTJiOCAhaW1wb3J0YW50O1xyXG59XHJcbm5hdi5uYXZiYXIubmF2YmFyLWV4cGFuZC1zbS5iZy1wcmltYXJ5Lm5hdmJhci1kYXJrIHtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG5saS5uYXYtaXRlbSBoMiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5saSBoMiB7Y29sb3I6ICNmZmYgIWltcG9ydGFudDttYXJnaW46IDAgIWltcG9ydGFudDt9XHJcbmZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbCwgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXJ7aGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDhweCkgIWltcG9ydGFudDtmb250LXNpemU6IDE3cHg7Y29sb3I6ICMyMjJiNDUgIWltcG9ydGFudDtmb250LWZhbWlseTogaW5oZXJpdDtmb250LXdlaWdodDogNDAwO2NvbG9yOiAjMDAwO1xyXG4gIH0iXX0= */"],
=======
        styles: ["li.nav-item.right-btn {\n  position: absolute;\n  top: 15px;\n  right: 20px;\n  background: #fff;\n}\n\nli.nav-item.left-btn {\n  background: #fff;\n}\n\nli.nav-item.right-btn a.nav-link, li.nav-item.left-btn a.nav-link {\n  color: #000 !important;\n  text-decoration: none;\n  font-weight: 300;\n}\n\n.bg-primary {\n  background-color: #17a2b8 !important;\n  border-color: #17a2b8 !important;\n}\n\nnav.navbar.navbar-expand-sm.bg-primary.navbar-dark {\n  height: 70px;\n}\n\nli.nav-item h2 {\n  color: #fff;\n}\n\nli h2 {\n  color: #fff !important;\n  margin: 0 !important;\n}\n\nform {\n  margin-top: 20px;\n}\n\n.form-control::-moz-placeholder {\n  height: calc(1.5em + 0.75rem + 8px) !important;\n  font-size: 17px;\n  color: #222b45 !important;\n  font-family: inherit;\n  font-weight: 400;\n  color: #000;\n}\n\n.form-control:-ms-input-placeholder {\n  height: calc(1.5em + 0.75rem + 8px) !important;\n  font-size: 17px;\n  color: #222b45 !important;\n  font-family: inherit;\n  font-weight: 400;\n  color: #000;\n}\n\n.form-control, .form-control::placeholder {\n  height: calc(1.5em + 0.75rem + 8px) !important;\n  font-size: 17px;\n  color: #222b45 !important;\n  font-family: inherit;\n  font-weight: 400;\n  color: #000;\n}\n\n.loading-spinner {\n  background-color: #0000001f;\n  position: absolute;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  display: grid;\n}\n\n.loading-spinner img {\n  align-self: end;\n}\n\n.loading-message {\n  text-align: center;\n  align-self: start;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWdvcmllcy9jcmVhdGUtY2F0ZWdvcnkvY3JlYXRlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ3BCOztBQUNBO0VBQ0ksZ0JBQWdCO0FBRXBCOztBQUFBO0VBQWtFLHNCQUFzQjtFQUFFLHFCQUFxQjtFQUFFLGdCQUFnQjtBQU1qSTs7QUFMQTtFQUNJLG9DQUFvQztFQUNwQyxnQ0FBaUM7QUFRckM7O0FBTkE7RUFDSSxZQUFZO0FBU2hCOztBQVBBO0VBQ0ksV0FBVztBQVVmOztBQVJBO0VBQU8sc0JBQXNCO0VBQUMsb0JBQW9CO0FBYWxEOztBQVpBO0VBQ0ksZ0JBQWdCO0FBZXBCOztBQWJFO0VBQTBDLDhDQUE4QztFQUFDLGVBQWU7RUFBQyx5QkFBeUI7RUFBQyxvQkFBb0I7RUFBQyxnQkFBZ0I7RUFBQyxXQUFXO0FBc0J0TDs7QUF0QkU7RUFBMEMsOENBQThDO0VBQUMsZUFBZTtFQUFDLHlCQUF5QjtFQUFDLG9CQUFvQjtFQUFDLGdCQUFnQjtFQUFDLFdBQVc7QUFzQnRMOztBQXRCRTtFQUEwQyw4Q0FBOEM7RUFBQyxlQUFlO0VBQUMseUJBQXlCO0VBQUMsb0JBQW9CO0VBQUMsZ0JBQWdCO0VBQUMsV0FBVztBQXNCdEw7O0FBbEJFO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0FBcUJqQjs7QUFsQkU7RUFDRSxlQUFlO0FBcUJuQjs7QUFsQkU7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBcUJyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFnb3JpZXMvY3JlYXRlLWNhdGVnb3J5L2NyZWF0ZS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxpLm5hdi1pdGVtLnJpZ2h0LWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxubGkubmF2LWl0ZW0ubGVmdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5saS5uYXYtaXRlbS5yaWdodC1idG4gYS5uYXYtbGluaywgbGkubmF2LWl0ZW0ubGVmdC1idG4gYS5uYXYtbGlua3tjb2xvcjogIzAwMCAhaW1wb3J0YW50OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGZvbnQtd2VpZ2h0OiAzMDA7fVxyXG4uYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbn1cclxubmF2Lm5hdmJhci5uYXZiYXItZXhwYW5kLXNtLmJnLXByaW1hcnkubmF2YmFyLWRhcmsge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcbmxpLm5hdi1pdGVtIGgyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbmxpIGgyIHtjb2xvcjogI2ZmZiAhaW1wb3J0YW50O21hcmdpbjogMCAhaW1wb3J0YW50O31cclxuZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sLCAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlcntoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgOHB4KSAhaW1wb3J0YW50O2ZvbnQtc2l6ZTogMTdweDtjb2xvcjogIzIyMmI0NSAhaW1wb3J0YW50O2ZvbnQtZmFtaWx5OiBpbmhlcml0O2ZvbnQtd2VpZ2h0OiA0MDA7Y29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmxvYWRpbmctc3Bpbm5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIH1cclxuICBcclxuICAubG9hZGluZy1zcGlubmVyIGltZ3tcclxuICAgIGFsaWduLXNlbGY6IGVuZDtcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRpbmctbWVzc2FnZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIH0iXX0= */"],
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateCategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-create-category',
            templateUrl: './create-category.component.html',
            styleUrls: ['./create-category.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
          }];
        }, null);
      })();

      var DialogOverviewExampleDialog = /*#__PURE__*/function () {
        function DialogOverviewExampleDialog(dialogRef, data) {
          _classCallCheck(this, DialogOverviewExampleDialog);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(DialogOverviewExampleDialog, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }]);

        return DialogOverviewExampleDialog;
      }();

      DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) {
        return new (t || DialogOverviewExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]));
      };

      DialogOverviewExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogOverviewExampleDialog,
        selectors: [["dialog-overview-example-dialog"]],
        decls: 9,
        vars: 0,
        consts: [["dir", "rtl", 2, "text-align", "center"], ["mat-dialog-title", "", 2, "text-align", "center", "background-color", "#17a2b8", "padding", "10px", "font-size", "20px", "margin", "-30px -24px 30px"], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 2, "color", "#fff", "background-color", "#17a2b8", "border-color", "#17a2b8", "padding", "5px 20px", "border-radius", "7px", 3, "click"]],
        template: function DialogOverviewExampleDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Category added Successfully");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOverviewExampleDialog_Template_button_click_7_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogOverviewExampleDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dialog-overview-example-dialog',
            templateUrl: 'dialog-overview-example-dialog.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/catagories/update-category/update-category.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/catagories/update-category/update-category.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: UpdateCategoryComponent, DialogOverviewExampleDialog */

    /***/
    function srcAppPagesCatagoriesUpdateCategoryUpdateCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateCategoryComponent", function () {
        return UpdateCategoryComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function () {
        return DialogOverviewExampleDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var app_core_auth_services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/core_auth/services/rest.service */
      "./src/app/core_auth/services/rest.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js"); // ActivatedRoue is used to get the current associated components information.


      function UpdateCategoryComponent_div_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UpdateCategoryComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateCategoryComponent_div_25_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.name.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var UpdateCategoryComponent = /*#__PURE__*/function () {
        function UpdateCategoryComponent(restService, http, router, route, fb, location, actRoute, dialog) {
          _classCallCheck(this, UpdateCategoryComponent);

          this.restService = restService;
          this.http = http;
          this.router = router;
          this.route = route;
          this.fb = fb;
          this.location = location;
          this.actRoute = actRoute;
          this.dialog = dialog;
          this.isNotShowDiv = true;
          this.isShowDiv = false;
          this.submitted = false;
          this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            icon: [null]
          });
        }

        _createClass(UpdateCategoryComponent, [{
          key: "toggleDisplayDiv",
          value: function toggleDisplayDiv() {
            this.isShowDiv = !this.isShowDiv;
            this.isNotShowDiv = !this.isNotShowDiv;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
<<<<<<< HEAD
            var _this7 = this;
=======
            var _this6 = this;
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac

            var id;
            this.activeRoute = this.route.params.subscribe(function (params) {
              id = {
                "_id": params['id']
              };
            });
            this.restService.post("/category/view", id).subscribe(function (data) {
<<<<<<< HEAD
              _this7.category = data.data;
=======
              _this6.category = data.data;
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var file = event.target.files[0];
            this.form.patchValue({
              icon: file
            });
            this.form.get('icon').updateValueAndValidity();
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
<<<<<<< HEAD
            var _this8 = this;
=======
            var _this7 = this;
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac

            var formData = new FormData();

            if (this.form.get('icon').value != null) {
              formData.append("icon", this.form.get('icon').value);
            }

            formData.append("name", this.form.get('name').value);
            var id;
            this.activeRoute = this.route.params.subscribe(function (params) {
              id = params['id'];
            });
            this.submitted = true;

            if (this.form.valid) {
              this.http.post('http://13.58.33.101:2000/category/categoryUpdate/' + id, formData, {
                reportProgress: true,
                observe: 'events',
                headers: this.getHeader(FormData)
              }).subscribe(function (response) {
<<<<<<< HEAD
                _this8.makeHttpCall();

                _this8.refresh(response);
              }, function (error) {
                alert("Something Went Wrong Please Check");
                console.log(error);
=======
                if (response.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                  _this7.percentDone = Math.round(100 * response.loaded / response.total); //console.log('Progress ' + this.percentDone + '%');
                }

                if (response['body'] != undefined) {
                  _this7.refresh(response);
                }
              }, function (error) {
                alert("Something Went Wrong Please Check");
                console.log(error);
                _this7.loading = !_this7.loading;
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac
              });
            }
          }
        }, {
          key: "refresh",
          value: function refresh(response) {
<<<<<<< HEAD
            if (response['meta']['status'] == 200) {
              //alert("Category Updated successfully");
=======
            if (response['body']['meta']['status'] == 200) {
              this.loading = !this.loading; //alert("Category Updated successfully");

>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac
              this.router.navigate(['/pages/categories/category-list']);
              this.openDialog();
            }
          }
        }, {
          key: "makeHttpCall",
          value: function makeHttpCall() {
<<<<<<< HEAD
            var _this9 = this;
=======
            var _this8 = this;
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac

            this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(function (r) {
              console.log(r);

<<<<<<< HEAD
              _this9.openDialog();
=======
              _this8.openDialog();
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
<<<<<<< HEAD
            var _this10 = this;
=======
            var _this9 = this;
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac

            var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
              direction: "ltr",
              data: {
                massage: this.msg
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
<<<<<<< HEAD
              _this10.msg = result;
=======
              _this9.msg = result;
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac
            });
          }
        }, {
          key: "getHeader",
          value: function getHeader(isFormData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();

            if (!isFormData) {
              headers = headers.append('Content-Type', 'json');
            }

            headers = headers.append('Authorization', localStorage.getItem('access_token'));
            return headers;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.activeRoute) {
              this.activeRoute.unsubscribe();
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }]);

        return UpdateCategoryComponent;
      }();

      UpdateCategoryComponent.ɵfac = function UpdateCategoryComponent_Factory(t) {
        return new (t || UpdateCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_auth_services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
      };

      UpdateCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UpdateCategoryComponent,
        selectors: [["ngx-update-category"]],
<<<<<<< HEAD
        decls: 31,
        vars: 14,
        consts: [[1, "navbar", "navbar-expand-sm", "bg-primary", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-item", "right-btn"], ["href", "/pages/categories/category-list", "routerlink", "/pages/categories/category-list", "ng-reflect-router-link", "/pages/categories/category-list", 1, "btn", "nav-link"], [2, "width", "500px", "margin", "auto"], [1, "submit-form"], [3, "formGroup"], [1, "form-group", 3, "hidden"], ["type", "image", 3, "src"], ["for", "icon"], ["type", "file", "name", "icon", "accept", ".png, .jpeg, .jpg", 1, "form-control", 3, "change"], [1, "form-group", "input-group-lg", 3, "hidden"], ["for", "name"], ["placeholder", "Name", "formControlName", "name", "disabled", "", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Name", "formControlName", "name", "name", "name", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], [1, "btn", "btn-info", 2, "margin-left", "10px", 3, "hidden", "click"], [1, "invalid-feedback"], [4, "ngIf"]],
=======
        decls: 36,
        vars: 16,
        consts: [[1, "navbar", "navbar-expand-sm", "bg-primary", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-item", "right-btn"], ["href", "/pages/categories/category-list", "routerlink", "/pages/categories/category-list", "ng-reflect-router-link", "/pages/categories/category-list", 1, "btn", "nav-link"], [2, "width", "500px", "margin", "auto"], [1, "submit-form"], [3, "formGroup"], [1, "form-group", 3, "hidden"], ["type", "image", 3, "src"], ["for", "icon"], ["type", "file", "name", "icon", "accept", ".png, .jpeg, .jpg", 1, "form-control", 3, "change"], [1, "form-group", "input-group-lg", 3, "hidden"], ["for", "name"], ["placeholder", "Name", "formControlName", "name", "disabled", "", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Name", "formControlName", "name", "name", "name", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], [1, "btn", "btn-info", 2, "margin-left", "10px", 3, "hidden", "click"], [1, "progress-loader", 3, "hidden"], [1, "loading-spinner"], ["src", "assets/images/loader.gif"], [1, "loading-message"], [1, "invalid-feedback"], [4, "ngIf"]],
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac
        template: function UpdateCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Change Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateCategoryComponent_Template_input_change_16_listener($event) {
              return ctx.uploadFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateCategoryComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.category.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateCategoryComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.category.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UpdateCategoryComponent_div_25_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateCategoryComponent_Template_button_click_27_listener() {
              return ctx.toggleDisplayDiv();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateCategoryComponent_Template_button_click_29_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isShowDiv);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.category.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isNotShowDiv);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isShowDiv);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isNotShowDiv);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.name.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.name.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isShowDiv);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isNotShowDiv);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Progress ", ctx.percentDone, " %");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
<<<<<<< HEAD
        styles: ["input[type=\"image\"] {\n  width: 120px;\n  height: auto;\n}\n\nli.nav-item.right-btn {\n  position: absolute;\n  top: 15px;\n  right: 20px;\n  background: #fff;\n}\n\nli.nav-item.left-btn {\n  background: #fff;\n}\n\nli.nav-item.right-btn a.nav-link, li.nav-item.left-btn a.nav-link {\n  color: #000 !important;\n  text-decoration: none;\n  font-weight: 300;\n}\n\n.bg-primary {\n  background-color: #17a2b8 !important;\n  border-color: #17a2b8 !important;\n}\n\nnav.navbar.navbar-expand-sm.bg-primary.navbar-dark {\n  height: 70px;\n}\n\nli.nav-item h2 {\n  color: #fff;\n}\n\nli h2 {\n  color: #fff !important;\n  margin: 0 !important;\n}\n\nform {\n  margin-top: 20px;\n}\n\n.form-control::-moz-placeholder {\n  height: calc(1.5em + 0.75rem + 8px) !important;\n  font-size: 17px;\n  color: #222b45 !important;\n  font-family: inherit;\n  font-weight: 400;\n  color: #000;\n}\n\n.form-control:-ms-input-placeholder {\n  height: calc(1.5em + 0.75rem + 8px) !important;\n  font-size: 17px;\n  color: #222b45 !important;\n  font-family: inherit;\n  font-weight: 400;\n  color: #000;\n}\n\n.form-control, .form-control::placeholder {\n  height: calc(1.5em + 0.75rem + 8px) !important;\n  font-size: 17px;\n  color: #222b45 !important;\n  font-family: inherit;\n  font-weight: 400;\n  color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWdvcmllcy91cGRhdGUtY2F0ZWdvcnkvdXBkYXRlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFlBQVk7QUFDaEI7O0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7QUFFcEI7O0FBQUE7RUFDSSxnQkFBZ0I7QUFHcEI7O0FBREE7RUFBa0Usc0JBQXNCO0VBQUUscUJBQXFCO0VBQUUsZ0JBQWdCO0FBT2pJOztBQU5BO0VBQ0ksb0NBQW9DO0VBQ3BDLGdDQUFpQztBQVNyQzs7QUFQQTtFQUNJLFlBQVk7QUFVaEI7O0FBUkE7RUFDSSxXQUFXO0FBV2Y7O0FBVEE7RUFBTyxzQkFBc0I7RUFBQyxvQkFBb0I7QUFjbEQ7O0FBYkE7RUFDSSxnQkFBZ0I7QUFnQnBCOztBQWRBO0VBQTBDLDhDQUE4QztFQUFDLGVBQWU7RUFBQyx5QkFBeUI7RUFBQyxvQkFBb0I7RUFBQyxnQkFBZ0I7RUFBQyxXQUFXO0FBdUJwTDs7QUF2QkE7RUFBMEMsOENBQThDO0VBQUMsZUFBZTtFQUFDLHlCQUF5QjtFQUFDLG9CQUFvQjtFQUFDLGdCQUFnQjtFQUFDLFdBQVc7QUF1QnBMOztBQXZCQTtFQUEwQyw4Q0FBOEM7RUFBQyxlQUFlO0VBQUMseUJBQXlCO0VBQUMsb0JBQW9CO0VBQUMsZ0JBQWdCO0VBQUMsV0FBVztBQXVCcEwiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRhZ29yaWVzL3VwZGF0ZS1jYXRlZ29yeS91cGRhdGUtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiaW1hZ2VcIl0ge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbmxpLm5hdi1pdGVtLnJpZ2h0LWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxubGkubmF2LWl0ZW0ubGVmdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5saS5uYXYtaXRlbS5yaWdodC1idG4gYS5uYXYtbGluaywgbGkubmF2LWl0ZW0ubGVmdC1idG4gYS5uYXYtbGlua3tjb2xvcjogIzAwMCAhaW1wb3J0YW50OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGZvbnQtd2VpZ2h0OiAzMDA7fVxyXG4uYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbn1cclxubmF2Lm5hdmJhci5uYXZiYXItZXhwYW5kLXNtLmJnLXByaW1hcnkubmF2YmFyLWRhcmsge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcbmxpLm5hdi1pdGVtIGgyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbmxpIGgyIHtjb2xvcjogI2ZmZiAhaW1wb3J0YW50O21hcmdpbjogMCAhaW1wb3J0YW50O31cclxuZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVye2hlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyA4cHgpICFpbXBvcnRhbnQ7Zm9udC1zaXplOiAxN3B4O2NvbG9yOiAjMjIyYjQ1ICFpbXBvcnRhbnQ7Zm9udC1mYW1pbHk6IGluaGVyaXQ7Zm9udC13ZWlnaHQ6IDQwMDtjb2xvcjogIzAwMDtcclxufSJdfQ== */"],
=======
        styles: ["input[type=\"image\"] {\n  width: 120px;\n  height: auto;\n}\n\nli.nav-item.right-btn {\n  position: absolute;\n  top: 15px;\n  right: 20px;\n  background: #fff;\n}\n\nli.nav-item.left-btn {\n  background: #fff;\n}\n\nli.nav-item.right-btn a.nav-link, li.nav-item.left-btn a.nav-link {\n  color: #000 !important;\n  text-decoration: none;\n  font-weight: 300;\n}\n\n.bg-primary {\n  background-color: #17a2b8 !important;\n  border-color: #17a2b8 !important;\n}\n\nnav.navbar.navbar-expand-sm.bg-primary.navbar-dark {\n  height: 70px;\n}\n\nli.nav-item h2 {\n  color: #fff;\n}\n\nli h2 {\n  color: #fff !important;\n  margin: 0 !important;\n}\n\nform {\n  margin-top: 20px;\n}\n\n.form-control::-moz-placeholder {\n  height: calc(1.5em + 0.75rem + 8px) !important;\n  font-size: 17px;\n  color: #222b45 !important;\n  font-family: inherit;\n  font-weight: 400;\n  color: #000;\n}\n\n.form-control:-ms-input-placeholder {\n  height: calc(1.5em + 0.75rem + 8px) !important;\n  font-size: 17px;\n  color: #222b45 !important;\n  font-family: inherit;\n  font-weight: 400;\n  color: #000;\n}\n\n.form-control, .form-control::placeholder {\n  height: calc(1.5em + 0.75rem + 8px) !important;\n  font-size: 17px;\n  color: #222b45 !important;\n  font-family: inherit;\n  font-weight: 400;\n  color: #000;\n}\n\n.loading-spinner {\n  background-color: #0000001f;\n  position: absolute;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  display: grid;\n}\n\n.loading-spinner img {\n  align-self: end;\n}\n\n.loading-message {\n  text-align: center;\n  align-self: start;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWdvcmllcy91cGRhdGUtY2F0ZWdvcnkvdXBkYXRlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFlBQVk7QUFDaEI7O0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7QUFFcEI7O0FBQUE7RUFDSSxnQkFBZ0I7QUFHcEI7O0FBREE7RUFBa0Usc0JBQXNCO0VBQUUscUJBQXFCO0VBQUUsZ0JBQWdCO0FBT2pJOztBQU5BO0VBQ0ksb0NBQW9DO0VBQ3BDLGdDQUFpQztBQVNyQzs7QUFQQTtFQUNJLFlBQVk7QUFVaEI7O0FBUkE7RUFDSSxXQUFXO0FBV2Y7O0FBVEE7RUFBTyxzQkFBc0I7RUFBQyxvQkFBb0I7QUFjbEQ7O0FBYkE7RUFDSSxnQkFBZ0I7QUFnQnBCOztBQWRBO0VBQTBDLDhDQUE4QztFQUFDLGVBQWU7RUFBQyx5QkFBeUI7RUFBQyxvQkFBb0I7RUFBQyxnQkFBZ0I7RUFBQyxXQUFXO0FBdUJwTDs7QUF2QkE7RUFBMEMsOENBQThDO0VBQUMsZUFBZTtFQUFDLHlCQUF5QjtFQUFDLG9CQUFvQjtFQUFDLGdCQUFnQjtFQUFDLFdBQVc7QUF1QnBMOztBQXZCQTtFQUEwQyw4Q0FBOEM7RUFBQyxlQUFlO0VBQUMseUJBQXlCO0VBQUMsb0JBQW9CO0VBQUMsZ0JBQWdCO0VBQUMsV0FBVztBQXVCcEw7O0FBckJBO0VBQ0ksMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0FBd0JqQjs7QUFyQkU7RUFDRSxlQUFlO0FBd0JuQjs7QUFyQkU7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBd0JyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFnb3JpZXMvdXBkYXRlLWNhdGVnb3J5L3VwZGF0ZS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJpbWFnZVwiXSB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxubGkubmF2LWl0ZW0ucmlnaHQtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5saS5uYXYtaXRlbS5sZWZ0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbmxpLm5hdi1pdGVtLnJpZ2h0LWJ0biBhLm5hdi1saW5rLCBsaS5uYXYtaXRlbS5sZWZ0LWJ0biBhLm5hdi1saW5re2NvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgZm9udC13ZWlnaHQ6IDMwMDt9XHJcbi5iZy1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogICMxN2EyYjggIWltcG9ydGFudDtcclxufVxyXG5uYXYubmF2YmFyLm5hdmJhci1leHBhbmQtc20uYmctcHJpbWFyeS5uYXZiYXItZGFyayB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxubGkubmF2LWl0ZW0gaDIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxubGkgaDIge2NvbG9yOiAjZmZmICFpbXBvcnRhbnQ7bWFyZ2luOiAwICFpbXBvcnRhbnQ7fVxyXG5mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbCwgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXJ7aGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDhweCkgIWltcG9ydGFudDtmb250LXNpemU6IDE3cHg7Y29sb3I6ICMyMjJiNDUgIWltcG9ydGFudDtmb250LWZhbWlseTogaW5oZXJpdDtmb250LXdlaWdodDogNDAwO2NvbG9yOiAjMDAwO1xyXG59XHJcbi5sb2FkaW5nLXNwaW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRpbmctc3Bpbm5lciBpbWd7XHJcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkaW5nLW1lc3NhZ2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcclxuICB9Il19 */"],
>>>>>>> ac67fe8a5dda304845dbc52fa78e8cca2d8472ac
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateCategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-update-category',
            templateUrl: './update-category.component.html',
            styleUrls: ['./update-category.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: app_core_auth_services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }];
        }, null);
      })();

      var DialogOverviewExampleDialog = /*#__PURE__*/function () {
        function DialogOverviewExampleDialog(dialogRef, data) {
          _classCallCheck(this, DialogOverviewExampleDialog);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(DialogOverviewExampleDialog, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }]);

        return DialogOverviewExampleDialog;
      }();

      DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) {
        return new (t || DialogOverviewExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]));
      };

      DialogOverviewExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogOverviewExampleDialog,
        selectors: [["dialog-overview-example-dialog"]],
        decls: 9,
        vars: 0,
        consts: [["dir", "rtl", 2, "text-align", "center"], ["mat-dialog-title", "", 2, "text-align", "center", "background-color", "#17a2b8", "padding", "10px", "font-size", "20px", "margin", "-30px -24px 30px"], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 2, "color", "#fff", "background-color", "#17a2b8", "border-color", "#17a2b8", "padding", "5px 20px", "border-radius", "7px", 3, "click"]],
        template: function DialogOverviewExampleDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Category Updated Successfully");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOverviewExampleDialog_Template_button_click_7_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogOverviewExampleDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dialog-overview-example-dialog',
            templateUrl: 'dialog-overview-example-dialog.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=catagories-catagories-module-es5.js.map