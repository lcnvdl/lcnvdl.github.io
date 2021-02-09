(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "QmVW");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var src_app_drivers_auth_firebase_auth_driver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/drivers/auth/firebase-auth.driver */ "GnCN");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/process/shell.service */ "9G8U");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/**
 * @todo List:
 * -  Bring the angular modules dynamically (based on if FirebaseAuthDriver.settings exists).
 */













const extraModules = [];
const extraProviders = [];
if (src_app_drivers_auth_firebase_auth_driver__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthDriver"].settings) {
    // extraModules.push(AngularFireModule.initializeApp(FirebaseAuthDriver.settings));
    // extraModules.push(AngularFireAuthModule);
    // const mockAngularFireAuth: any = {
    //   auth: jasmine.createSpyObj('auth', {
    //     'signInAnonymously': Promise.reject({
    //       code: 'auth/operation-not-allowed'
    //     }),
    //     // 'signInWithPopup': Promise.reject(),
    //     // 'signOut': Promise.reject()
    //   }),
    //   authState: Observable.of(authState)
    // };
    // { provide: AngularFireAuth, useValue: mockAngularFireAuth },
}
else {
    location.href = "/";
}
class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, providers: [
        // AngularFireAuth,
        // AngularFireStorage,
        src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_9__["ShellService"],
        ...extraProviders
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_app_drivers_auth_firebase_auth_driver__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthDriver"].settings),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
            ...extraModules
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                    src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_app_drivers_auth_firebase_auth_driver__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthDriver"].settings),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
                    ...extraModules
                ],
                providers: [
                    // AngularFireAuth,
                    // AngularFireStorage,
                    src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                    src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_9__["ShellService"],
                    ...extraProviders
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "QmVW");





const routes = [
    {
        path: '',
        redirectTo: 'main',
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "QmVW":
/*!***************************************************!*\
  !*** ./src/app/pages/home/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/os/windows-manager.service */ "fCXL");
/* harmony import */ var _components_desktop_desktop_layer_desktop_layer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/desktop/desktop-layer/desktop-layer.component */ "5XBF");
/* harmony import */ var _components_desktop_windows_layer_windows_layer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/desktop/windows-layer/windows-layer.component */ "7jqN");
/* harmony import */ var _components_desktop_modals_layer_modals_layer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/desktop/modals-layer/modals-layer.component */ "VS2T");
/* harmony import */ var _components_desktop_wallpaper_wallpaper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/desktop/wallpaper/wallpaper.component */ "cPxC");
/* harmony import */ var _components_desktop_main_tool_bar_main_tool_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/desktop/main-tool-bar/main-tool-bar.component */ "3kRQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_desktop_start_menu_layer_start_menu_layer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/desktop/start-menu-layer/start-menu-layer.component */ "7U3q");










function MainComponent_app_start_menu_layer_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-start-menu-layer", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function MainComponent_app_start_menu_layer_5_Template_app_start_menu_layer_onClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.startMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor(windowsMgrSv) {
        this.windowsMgrSv = windowsMgrSv;
        this.startMenu = false;
    }
    ngOnInit() {
    }
    get allWindows() {
        return this.windowsMgrSv.windows;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_1__["WindowsManagerService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 6, vars: 2, consts: [[3, "allWindows"], [3, "startClick"], [3, "onClose", 4, "ngIf"], [3, "onClose"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-desktop-layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-windows-layer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-modals-layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-wallpaper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-main-tool-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("startClick", function MainComponent_Template_app_main_tool_bar_startClick_4_listener() { return ctx.startMenu = !ctx.startMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainComponent_app_start_menu_layer_5_Template, 1, 0, "app-start-menu-layer", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allWindows", ctx.allWindows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startMenu);
    } }, directives: [_components_desktop_desktop_layer_desktop_layer_component__WEBPACK_IMPORTED_MODULE_2__["DesktopLayerComponent"], _components_desktop_windows_layer_windows_layer_component__WEBPACK_IMPORTED_MODULE_3__["WindowsLayerComponent"], _components_desktop_modals_layer_modals_layer_component__WEBPACK_IMPORTED_MODULE_4__["ModalsLayerComponent"], _components_desktop_wallpaper_wallpaper_component__WEBPACK_IMPORTED_MODULE_5__["WallpaperComponent"], _components_desktop_main_tool_bar_main_tool_bar_component__WEBPACK_IMPORTED_MODULE_6__["MainToolBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_desktop_start_menu_layer_start_menu_layer_component__WEBPACK_IMPORTED_MODULE_8__["StartMenuLayerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_1__["WindowsManagerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map