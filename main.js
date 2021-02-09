(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "//ET":
/*!************************************************************!*\
  !*** ./src/app/services/process/launchers/lnk-launcher.ts ***!
  \************************************************************/
/*! exports provided: LnkLauncher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LnkLauncher", function() { return LnkLauncher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _local_app_launcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-app-launcher */ "qF/2");


class LnkLauncher {
    constructor(windowsMgr, dynamicAppLoader, vfs) {
        this.windowsMgr = windowsMgr;
        this.dynamicAppLoader = dynamicAppLoader;
        this.vfs = vfs;
    }
    launch(file, path, settings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const local = new _local_app_launcher__WEBPACK_IMPORTED_MODULE_1__["LocalAppLauncher"](this.windowsMgr, this.dynamicAppLoader);
            const content = (path && path.startsWith("app://")) ? path : yield this.vfs.readTextFile(path);
            return yield local.launch(file, content, settings);
        });
    }
}


/***/ }),

/***/ "/ArM":
/*!*****************************************************************************************************!*\
  !*** ./src/app/global-components/apps/explorer/components/explorer-view/explorer-view.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ExplorerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerViewComponent", function() { return ExplorerViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var src_app_services_ux_context_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ux/context-menu.service */ "L4V/");
/* harmony import */ var src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/os/windows-manager.service */ "fCXL");
/* harmony import */ var src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/process/shell.service */ "9G8U");
/* harmony import */ var src_app_services_ux_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ux/loader.service */ "zhIA");
/* harmony import */ var src_app_services_ux_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ux/dialog.service */ "mY9l");
/* harmony import */ var src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/io/vfm.service */ "Fq8c");
/* harmony import */ var _components_ux_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/ux/context-menu/context-menu.component */ "33ZA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_desktop_launcher_launcher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../components/desktop/launcher/launcher.component */ "DwXz");













const _c0 = ["folderMenu"];
const _c1 = ["iconsMenu"];
function ExplorerViewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
} }
function ExplorerViewComponent_div_6_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExplorerViewComponent_div_6_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.mountUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExplorerViewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "The current drive is not mounted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExplorerViewComponent_div_6_button_5_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-", ctx_r3.theme.brightContrast, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.canMountUnit);
} }
function ExplorerViewComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " The current folder is empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("alert non-selectable text-", ctx_r8.theme.brightContrast, "");
} }
function ExplorerViewComponent_ng_container_7_div_2_app_launcher_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-launcher", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function ExplorerViewComponent_ng_container_7_div_2_app_launcher_1_Template_app_launcher_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const file_r11 = ctx.$implicit; const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r13.showFileContextMenu($event, _r12, file_r11); })("click", function ExplorerViewComponent_ng_container_7_div_2_app_launcher_1_Template_app_launcher_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const file_r11 = ctx.$implicit; const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r15.manageClick($event, _r12, file_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate2"]("width:", ctx_r10.iconSize.w, "px;height:", ctx_r10.iconSize.h, "px;");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx_r10.isSelected(file_r11))("name", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 9, file_r11.getName()))("icon", file_r11.icon)("title", file_r11.path)("authenticationRequired", file_r11.security && file_r11.security.authentication);
} }
function ExplorerViewComponent_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExplorerViewComponent_ng_container_7_div_2_app_launcher_1_Template, 3, 11, "app-launcher", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.files);
} }
function ExplorerViewComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExplorerViewComponent_ng_container_7_div_1_Template, 2, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExplorerViewComponent_ng_container_7_div_2_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.files.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.files.length > 0);
} }
class ExplorerViewComponent {
    constructor(theme, contextMenuSv, windowSv, shell, loaderSv, dialog, vfm) {
        this.theme = theme;
        this.contextMenuSv = contextMenuSv;
        this.windowSv = windowSv;
        this.shell = shell;
        this.loaderSv = loaderSv;
        this.dialog = dialog;
        this.vfm = vfm;
        this.files = [];
        this.fileMenuActions = [];
        this.currentFolderMenuActions = [];
        this.isLoading = false;
        this.selected = null;
        this.selectedDate = new Date();
    }
    ngOnInit() {
        this.subscription = this.explorerManager.changeEvent.subscribe(() => {
            this.showFiles();
        });
        this.showFiles();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    get windowPos() {
        return this.windowSv.getWindowPosition(this.windowId);
    }
    get currentUnit() {
        const unit = this.vfm.extractUnit(this.explorerManager.cwd);
        return unit;
    }
    get isMounted() {
        const drive = this.vfm.getDrive(this.currentUnit);
        return drive.isMounted;
    }
    get canMountUnit() {
        return true;
    }
    get iconSize() {
        return { w: 120, h: 120 };
    }
    isSelected(file) {
        return this.selected && this.selected.path === file.path;
    }
    isDirectory(file) {
        return this.vfm.isDirectory(file);
    }
    navigate(path) {
        this.explorerManager.cwd = path;
    }
    openFolder(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (file.security && file.security.authentication) {
                const securityCheck = yield this.shell.validateSecurity(file);
                if (!securityCheck) {
                    this.dialog.error("You don't have permissions to access to this folder.", "Security");
                    return;
                }
            }
            if (file.path && file.path.includes(":/")) {
                this.explorerManager.navigateTo(file.path);
            }
            else {
                this.explorerManager.navigateTo("./" + file.path);
            }
        });
    }
    manageCurrentFolderClick(ev) {
        this.selected = null;
        this.selectedDate = null;
        this.closeContextMenu();
    }
    manageClick(ev, launcher, file) {
        ev.preventDefault();
        ev.stopPropagation();
        this.closeContextMenu();
        const d = new Date();
        if (this.isSelected(file)) {
            if (ev.button === 0) {
                if (this.selectedDate && (d.getTime() - this.selectedDate.getTime()) <= 400) {
                    if (this.isDirectory(file)) {
                        this.openFolder(file);
                    }
                    else {
                        launcher.launch(file, this.explorerManager.cwd);
                    }
                    this.selectedDate = d;
                    return;
                }
            }
        }
        this.selected = file;
        this.selectedDate = d;
    }
    showFileContextMenu(ev, launcher, file) {
        ev.preventDefault();
        ev.stopPropagation();
        this.closeContextMenu();
        if (this.isDirectory(file)) {
            this.fileMenuActions = [
                { name: "Open", action: () => { this.openFolder(file); } }
            ];
        }
        else {
            this.fileMenuActions = [
                { name: "Open", action: () => { launcher.launch(file, this.explorerManager.cwd); } }
            ];
        }
        console.log("Context", ev);
        this.contextMenuSv.show(this.iconsMenu, ev.pageX - this.windowPos.x, ev.pageY - this.windowPos.y);
    }
    showFolderContextMenu(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.closeContextMenu();
        this.contextMenuSv.show(this.folderMenu, ev.pageX - this.windowPos.x, ev.pageY - this.windowPos.y);
    }
    closeContextMenu() {
        this.contextMenuSv.close();
    }
    mountUnit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promise = this.vfm.mount(this.currentUnit);
            yield this.loaderSv.loadPromise(promise, `Mounting drive ${this.currentUnit}...`);
            yield this.showFiles();
        });
    }
    showFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.isLoading = true;
                if (this.vfm.getDrive(this.currentUnit).isMounted) {
                    const files = yield this.vfm.list(this.explorerManager.cwd);
                    this.files = files;
                }
                else {
                    this.files = [];
                }
            }
            finally {
                this.isLoading = false;
            }
        });
    }
}
ExplorerViewComponent.ɵfac = function ExplorerViewComponent_Factory(t) { return new (t || ExplorerViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_context_menu_service__WEBPACK_IMPORTED_MODULE_3__["ContextMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_4__["WindowsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_5__["ShellService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_8__["VfmService"])); };
ExplorerViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExplorerViewComponent, selectors: [["app-explorer-view"]], viewQuery: function ExplorerViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.folderMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.iconsMenu = _t.first);
    } }, inputs: { windowId: "windowId", explorerManager: "explorerManager" }, decls: 8, vars: 8, consts: [["menuId", "explorer-icons-context-menu", 3, "actions"], ["iconsMenu", ""], ["menuId", "explorer-folder-context-menu", 3, "actions"], ["folderMenu", ""], [3, "contextmenu", "click"], ["class", "internal-loader", 4, "ngIf"], ["class", "alert non-selectable", 4, "ngIf"], [4, "ngIf"], [1, "internal-loader"], [1, "alert", "non-selectable"], ["class", "btn btn-sm btn-primary btn-outline", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-primary", "btn-outline", 3, "click"], [3, "class", 4, "ngIf"], ["class", "full-size d-flex flex-row align-content-start flex-wrap", 4, "ngIf"], [1, "full-size", "d-flex", "flex-row", "align-content-start", "flex-wrap"], ["class", "pt-2 pl-2", 3, "selected", "name", "icon", "title", "authenticationRequired", "style", "contextmenu", "click", 4, "ngFor", "ngForOf"], [1, "pt-2", "pl-2", 3, "selected", "name", "icon", "title", "authenticationRequired", "contextmenu", "click"], ["launcher", ""]], template: function ExplorerViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-context-menu", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-context-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function ExplorerViewComponent_Template_div_contextmenu_4_listener($event) { return ctx.showFolderContextMenu($event); })("click", function ExplorerViewComponent_Template_div_click_4_listener($event) { return ctx.manageCurrentFolderClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExplorerViewComponent_div_5_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ExplorerViewComponent_div_6_Template, 6, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ExplorerViewComponent_ng_container_7_Template, 3, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actions", ctx.fileMenuActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actions", ctx.currentFolderMenuActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("main-div full-size bright-12 bg-", ctx.theme.bright, " p-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMounted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMounted);
    } }, directives: [_components_ux_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_9__["ContextMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_desktop_launcher_launcher_component__WEBPACK_IMPORTED_MODULE_11__["LauncherComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["TitleCasePipe"]], styles: [".main-div[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n\n.internal-loader[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 102;\n  -webkit-backdrop-filter: blur(1px);\n          backdrop-filter: blur(1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvYXBwcy9leHBsb3Jlci9jb21wb25lbnRzL2V4cGxvcmVyLXZpZXcvZXhwbG9yZXItdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1jb21wb25lbnRzL2FwcHMvZXhwbG9yZXIvY29tcG9uZW50cy9leHBsb3Jlci12aWV3L2V4cGxvcmVyLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5pbnRlcm5hbC1sb2FkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMDI7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExplorerViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-explorer-view',
                templateUrl: './explorer-view.component.html',
                styleUrls: ['./explorer-view.component.scss']
            }]
    }], function () { return [{ type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }, { type: src_app_services_ux_context_menu_service__WEBPACK_IMPORTED_MODULE_3__["ContextMenuService"] }, { type: src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_4__["WindowsManagerService"] }, { type: src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_5__["ShellService"] }, { type: src_app_services_ux_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }, { type: src_app_services_ux_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }, { type: src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_8__["VfmService"] }]; }, { folderMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["folderMenu"]
        }], iconsMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["iconsMenu"]
        }], windowId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], explorerManager: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Luciano\Documents\GitHub\lili-os\src\main.ts */"zUnb");


/***/ }),

/***/ "0Iag":
/*!*********************************************!*\
  !*** ./src/app/helpers/animation.helper.ts ***!
  \*********************************************/
/*! exports provided: AnimationHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationHelper", function() { return AnimationHelper; });
class AnimationHelper {
    static animate(element, animation, repeat = 0, duration = null, prefix = 'animate__') {
        return new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = (typeof element === "string") ? document.querySelector(element) : element;
            node.classList.add(`${prefix}animated`, animationName);
            if (repeat > 0) {
                node.classList.add(`animate__repeat-${repeat}`, animationName);
            }
            if (duration) {
                node.style.setProperty('--animate-duration', duration);
            }
            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd() {
                node.classList.remove(`${prefix}animated`, animationName);
                if (repeat > 0) {
                    node.classList.remove(`animate__repeat-${repeat}`, animationName);
                }
                resolve('Animation ended');
            }
            node.addEventListener('animationend', handleAnimationEnd, { once: true });
        });
    }
}


/***/ }),

/***/ "0T2V":
/*!**********************************************!*\
  !*** ./src/app/errors/main-error-handler.ts ***!
  \**********************************************/
/*! exports provided: MainErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainErrorHandler", function() { return MainErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _pipes_error_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pipes/error.pipe */ "N6XA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ux_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ux/dialog.service */ "mY9l");
/* harmony import */ var _services_misc_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/misc/logger.service */ "wrgC");






class MainErrorHandler {
    constructor(dialogService, logger) {
        this.dialogService = dialogService;
        this.logger = logger;
    }
    handleError(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (error && error.promise) {
                error = error.rejection;
            }
            if (error !== undefined) {
                this.logger.error(error);
                const message = _pipes_error_pipe__WEBPACK_IMPORTED_MODULE_1__["ErrorPipe"].extractMessageFromError(error);
                /** @todo Check why this error is being throwed */
                if (message === "Failed to fetch") {
                    return;
                }
                this.dialogService.error(message);
            }
        });
    }
}
MainErrorHandler.ɵfac = function MainErrorHandler_Factory(t) { return new (t || MainErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_ux_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_misc_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"])); };
MainErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MainErrorHandler, factory: MainErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MainErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _services_ux_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }, { type: _services_misc_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] }]; }, null); })();


/***/ }),

/***/ "1MjI":
/*!*********************************************************************************************************!*\
  !*** ./src/app/global-components/apps/explorer/components/explorer-footer/explorer-footer.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ExplorerFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerFooterComponent", function() { return ExplorerFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ExplorerFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExplorerFooterComponent.ɵfac = function ExplorerFooterComponent_Factory(t) { return new (t || ExplorerFooterComponent)(); };
ExplorerFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExplorerFooterComponent, selectors: [["app-explorer-footer"]], decls: 0, vars: 0, template: function ExplorerFooterComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1jb21wb25lbnRzL2FwcHMvZXhwbG9yZXIvY29tcG9uZW50cy9leHBsb3Jlci1mb290ZXIvZXhwbG9yZXItZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExplorerFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-explorer-footer',
                templateUrl: './explorer-footer.component.html',
                styleUrls: ['./explorer-footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1pNT":
/*!***************************************************************************************************!*\
  !*** ./src/app/global-components/apps/viewer/components/markdown-view/markdown-view.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MarkdownViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownViewComponent", function() { return MarkdownViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");



class MarkdownViewComponent {
    constructor(theme) {
        this.theme = theme;
        this.htmlContent = "";
    }
    ngOnInit() {
    }
    get content() {
        return this.rawContent;
    }
    set content(v) {
        this.rawContent = v;
        this.htmlContent = window.marked(v);
    }
}
MarkdownViewComponent.ɵfac = function MarkdownViewComponent_Factory(t) { return new (t || MarkdownViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"])); };
MarkdownViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkdownViewComponent, selectors: [["app-markdown-view"]], inputs: { content: "content" }, decls: 1, vars: 5, consts: [[3, "innerHTML"]], template: function MarkdownViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("full-size bg-", ctx.theme.bright, " text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.htmlContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1jb21wb25lbnRzL2FwcHMvdmlld2VyL2NvbXBvbmVudHMvbWFya2Rvd24tdmlldy9tYXJrZG93bi12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkdownViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-markdown-view',
                templateUrl: './markdown-view.component.html',
                styleUrls: ['./markdown-view.component.scss']
            }]
    }], function () { return [{ type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "33ZA":
/*!**********************************************************************!*\
  !*** ./src/app/components/ux/context-menu/context-menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_helpers_animation_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/animation.helper */ "0Iag");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ContextMenuComponent_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuComponent_div_0_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const action_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.buttonClick(action_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r1.isEnabled(action_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.isEnabled(action_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r2.name);
} }
function ContextMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContextMenuComponent_div_0_a_1_Template, 2, 4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("context-dropdown dropdown-menu dropdown-menu-sm ", ctx_r0.direction, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.menuId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.visibleActions);
} }
class ContextMenuComponent {
    constructor() {
        this.actions = [];
        this.zIndex = 100;
        this.direction = "down";
        this.onAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isClosing = false;
    }
    get menu() {
        const menu = document.getElementById(this.menuId);
        return menu;
    }
    get buttonsEnabled() {
        return !this.isClosing;
    }
    get visibleActions() {
        return this.actions.filter(m => !m.showIf || m.showIf());
    }
    ngOnInit() {
    }
    isEnabled(action) {
        return this.buttonsEnabled && (!action.enableIf || action.enableIf());
    }
    buttonClick(action) {
        if (!this.isEnabled(action)) {
            return;
        }
        this.onAction.emit(action);
        if (action.action) {
            action.action();
        }
        this.close();
    }
    show(x, y) {
        this.isClosing = false;
        this.menu.style.position = "fixed";
        this.menu.style.display = "block";
        this.menu.style.zIndex = "" + (this.zIndex + 1);
        this.menu.style.top = y + "px";
        this.menu.style.left = x + "px";
        src_app_helpers_animation_helper__WEBPACK_IMPORTED_MODULE_1__["AnimationHelper"].animate(this.menu, "fadeIn");
    }
    close() {
        // this.isClosing = true;
        // AnimationHelper.animate(this.menu, "fadeOut").finally(() => {
        this.menu.style.display = "none";
        // this.isClosing = false;
        // });
    }
}
ContextMenuComponent.ɵfac = function ContextMenuComponent_Factory(t) { return new (t || ContextMenuComponent)(); };
ContextMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContextMenuComponent, selectors: [["app-context-menu"]], inputs: { menuId: "menuId", actions: "actions", zIndex: "zIndex", direction: "direction" }, outputs: { onAction: "onAction" }, decls: 1, vars: 1, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], ["class", "dropdown-item", 3, "disabled", "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "disabled", "click"]], template: function ContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContextMenuComponent_div_0_Template, 2, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".context-dropdown.up {\n  transform: translateY(-100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91eC9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXgvY29udGV4dC1tZW51L2NvbnRleHQtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZXh0LWRyb3Bkb3duLnVwIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-context-menu',
                templateUrl: './context-menu.component.html',
                styleUrls: ['./context-menu.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { menuId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], actions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "3kRQ":
/*!*****************************************************************************!*\
  !*** ./src/app/components/desktop/main-tool-bar/main-tool-bar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MainToolBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainToolBarComponent", function() { return MainToolBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ux_context_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ux/context-menu.service */ "L4V/");
/* harmony import */ var src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/os/windows-manager.service */ "fCXL");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ux_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ux/context-menu/context-menu.component */ "33ZA");
/* harmony import */ var _window_in_bar_window_in_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../window-in-bar/window-in-bar.component */ "4Xcz");








const _c0 = ["toolbarMenu"];
const _c1 = ["toolbarIconMenu"];
function MainToolBarComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-window-in-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function MainToolBarComponent_ng_container_5_Template_app_window_in_bar_contextmenu_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const window_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showIconContextMenu($event, window_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const window_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("window", window_r3);
} }
class MainToolBarComponent {
    constructor(contextMenuSv, windowsMgrSv, theme) {
        this.contextMenuSv = contextMenuSv;
        this.windowsMgrSv = windowsMgrSv;
        this.theme = theme;
        this.startClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toolbarMenuActions = [];
        this.iconMenuActions = [];
    }
    ngOnInit() {
        this.toolbarMenuActions.push({
            name: "Show desktop",
            action: () => { this.windowsMgrSv.minimizeAllWindows(); },
            enableIf: () => this.allWindows.some(m => !m.isMinimized())
        });
    }
    get allWindows() {
        return this.windowsMgrSv.windows;
    }
    startMenuClick() {
        this.startClick.emit();
    }
    showContextMenu(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.closeContextMenu();
        this.contextMenuSv.show(this.toolbarMenu, ev.pageX, ev.pageY);
    }
    showStartContextMenu(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    showIconContextMenu(ev, window) {
        ev.preventDefault();
        ev.stopPropagation();
        //  @todo Use a different method instead of dispose
        this.iconMenuActions = [
            { name: "Close", action: () => { this.windowsMgrSv.disposeWindow(window.id); } }
        ];
        this.closeContextMenu();
        this.contextMenuSv.show(this.toolbarIconMenu, ev.pageX, ev.pageY);
    }
    manageClick() {
        this.closeContextMenu();
    }
    resetStatus() {
    }
    windowsId(_index, item) {
        return item.id;
    }
    closeContextMenu() {
        this.contextMenuSv.close();
    }
}
MainToolBarComponent.ɵfac = function MainToolBarComponent_Factory(t) { return new (t || MainToolBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_context_menu_service__WEBPACK_IMPORTED_MODULE_1__["ContextMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_2__["WindowsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"])); };
MainToolBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainToolBarComponent, selectors: [["app-main-tool-bar"]], viewQuery: function MainToolBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarIconMenu = _t.first);
    } }, outputs: { startClick: "startClick" }, decls: 10, vars: 9, consts: [[3, "contextmenu", "click"], [1, "left-side", "d-flex"], ["title", "Start", 1, "navbar-brand", "d-flex", "align-items-stretch", "m-0", "p-0", 3, "contextmenu", "click"], [1, "text-center", "flex-fill"], [1, "fab", "fa-windows"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["zIndex", "1030", "menuId", "toolbar-context-menu", "direction", "up", 3, "actions"], ["toolbarMenu", ""], ["zIndex", "1030", "menuId", "toolbar-icon-context-menu", "direction", "up", 3, "actions"], ["toolbarIconMenu", ""], [3, "window", "contextmenu"]], template: function MainToolBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function MainToolBarComponent_Template_nav_contextmenu_0_listener($event) { return ctx.showContextMenu($event); })("click", function MainToolBarComponent_Template_nav_click_0_listener() { return ctx.manageClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function MainToolBarComponent_Template_a_contextmenu_2_listener($event) { return ctx.showStartContextMenu($event); })("click", function MainToolBarComponent_Template_a_click_2_listener() { return ctx.startMenuClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainToolBarComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-context-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-context-menu", 8, 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("navbar fixed-bottom p-0 d-flex align-items-stretch navbar-", ctx.theme.bright, " bg-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("style", ctx.theme.mainToolbarStyle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeStyle"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allWindows)("ngForTrackBy", ctx.windowsId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actions", ctx.toolbarMenuActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actions", ctx.iconMenuActions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ux_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_5__["ContextMenuComponent"], _window_in_bar_window_in_bar_component__WEBPACK_IMPORTED_MODULE_6__["WindowInBarComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\n  backdrop-filter: blur(10px) saturate(125%);\n  -webkit-backdrop-filter: blur(10px) saturate(125%);\n  height: var(--bottom-toolbar-height);\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  transition: all 0.2s linear;\n  min-width: 50px;\n  line-height: var(--bottom-toolbar-height);\n  height: var(--bottom-toolbar-height);\n}\n\napp-window-in-bar[_ngcontent-%COMP%] {\n  height: var(--bottom-toolbar-height);\n  min-width: 50px;\n  margin-left: 2px;\n}\n\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL21haW4tdG9vbC1iYXIvbWFpbi10b29sLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLDBDQUFBO0VBQ0Esa0RBQUE7RUFDQSxvQ0FBQTtBQU5GOztBQVNBO0VBQ0UsMkJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxvQ0FBQTtBQU5GOztBQVNBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQTtFQUNFLHFDQUFBO0FBTkY7O0FBVUU7RUFDRSwyQ0FBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL21haW4tdG9vbC1iYXIvbWFpbi10b29sLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItZGFyayB7XHJcbiAgLy8gYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci1saWdodCB7XHJcbiAgLy8gYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBzYXR1cmF0ZSgxMjUlKTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBzYXR1cmF0ZSgxMjUlKTtcclxuICBoZWlnaHQ6IHZhcigtLWJvdHRvbS10b29sYmFyLWhlaWdodCk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWJvdHRvbS10b29sYmFyLWhlaWdodCk7XHJcbiAgaGVpZ2h0OiB2YXIoLS1ib3R0b20tdG9vbGJhci1oZWlnaHQpO1xyXG59XHJcblxyXG5hcHAtd2luZG93LWluLWJhciB7XHJcbiAgaGVpZ2h0OiB2YXIoLS1ib3R0b20tdG9vbGJhci1oZWlnaHQpO1xyXG4gIG1pbi13aWR0aDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsge1xyXG4gIC5uYXZiYXItYnJhbmQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainToolBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-tool-bar',
                templateUrl: './main-tool-bar.component.html',
                styleUrls: ['./main-tool-bar.component.scss']
            }]
    }], function () { return [{ type: src_app_services_ux_context_menu_service__WEBPACK_IMPORTED_MODULE_1__["ContextMenuService"] }, { type: src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_2__["WindowsManagerService"] }, { type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }]; }, { toolbarMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toolbarMenu"]
        }], toolbarIconMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["toolbarIconMenu"]
        }], startClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "41Ke":
/*!********************************************************************************************!*\
  !*** ./src/app/global-components/apps/login/components/login-view/login-view.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LoginViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginViewComponent", function() { return LoginViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_ux_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ux/loader.service */ "zhIA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class LoginViewComponent {
    constructor(theme, authSv, loaderSv) {
        this.theme = theme;
        this.authSv = authSv;
        this.loaderSv = loaderSv;
        this.loginSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    login(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { email, password } = form.value;
            const promise = this.authSv.signInWithEmailAndPassword(email, password);
            const user = yield this.loaderSv.loadPromise(promise);
            this.loginSuccess.emit(user);
        });
    }
    googleLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promise = this.authSv.signInWithProvider("google");
            const user = yield this.loaderSv.loadPromise(promise);
            this.loginSuccess.emit(user);
        });
    }
}
LoginViewComponent.ɵfac = function LoginViewComponent_Factory(t) { return new (t || LoginViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"])); };
LoginViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginViewComponent, selectors: [["app-login-view"]], outputs: { loginSuccess: "loginSuccess" }, decls: 14, vars: 7, consts: [[1, "pb-4"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["type", "email", "id", "email", "name", "email", "placeholder", "Enter your e-mail", "ngModel", "", "required", "", 1, "form-control"], ["type", "password", "id", "password", "name", "password", "autocomplete", "current-password", "placeholder", "Enter your password", "ngModel", "", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-block", "btn-success", 3, "disabled"]], template: function LoginViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginViewComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return ctx.login(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1jb21wb25lbnRzL2FwcHMvbG9naW4vY29tcG9uZW50cy9sb2dpbi12aWV3L2xvZ2luLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login-view',
                templateUrl: './login-view.component.html',
                styleUrls: ['./login-view.component.scss']
            }]
    }], function () { return [{ type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }, { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_services_ux_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }]; }, { loginSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "4Xcz":
/*!*****************************************************************************!*\
  !*** ./src/app/components/desktop/window-in-bar/window-in-bar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WindowInBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowInBarComponent", function() { return WindowInBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/os/windows-manager.service */ "fCXL");
/* harmony import */ var src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/process/shell.service */ "9G8U");
/* harmony import */ var src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ux/icons.service */ "hDY1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function WindowInBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-center text-", ctx_r0.theme.brightContrast, " flex-fill");
} }
class WindowInBarComponent {
    constructor(theme, windowMgr, shell, iconSv) {
        this.theme = theme;
        this.windowMgr = windowMgr;
        this.shell = shell;
        this.iconSv = iconSv;
    }
    ngOnInit() {
        this.iconUrl = this.iconSv.getIcon(this.window.icon);
    }
    get hasIcon() {
        return this.iconUrl && this.iconUrl !== "";
    }
    get hasFocus() {
        return this.windowMgr.focused && this.windowMgr.focused.id === this.window.id;
    }
    get iconBackgroundStyle() {
        let style = "";
        if (this.iconUrl && this.iconUrl !== "") {
            style += `background-image: url(${this.iconUrl});`;
        }
        return style;
    }
    windowClick() {
        if (this.window.isMinimized()) {
            this.windowMgr.restoreWindowStatus(this.window.id);
        }
        else if (!this.hasFocus) {
            this.windowMgr.focus(this.window);
        }
        else {
            this.windowMgr.minimizeWindow(this.window.id);
        }
    }
}
WindowInBarComponent.ɵfac = function WindowInBarComponent_Factory(t) { return new (t || WindowInBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_2__["WindowsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_3__["ShellService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_4__["IconsService"])); };
WindowInBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WindowInBarComponent, selectors: [["app-window-in-bar"]], inputs: { window: "window" }, decls: 2, vars: 5, consts: [[1, "tile", "m-0", "p-0", "full-size", 3, "title", "click"], [3, "class", 4, "ngIf"], [1, "fas", "fa-question-circle"]], template: function WindowInBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WindowInBarComponent_Template_div_click_0_listener() { return ctx.windowClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WindowInBarComponent_div_1_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", ctx.hasFocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.window.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("style", ctx.iconBackgroundStyle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeStyle"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".tile[_ngcontent-%COMP%] {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  transition: all 0.3s linear;\n  border-bottom: 2px solid var(--primary);\n}\n\n.tile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  line-height: var(--bottom-toolbar-height);\n  height: var(--bottom-toolbar-height);\n}\n\n.tile[_ngcontent-%COMP%]:hover {\n  background-color: rgba(128, 128, 128, 0.15);\n}\n\n.tile.focused[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL3dpbmRvdy1pbi1iYXIvd2luZG93LWluLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7QUFDRjs7QUFFQTtFQUNFLHlDQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL3dpbmRvdy1pbi1iYXIvd2luZG93LWluLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWxlIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50aWxlIGkge1xyXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1ib3R0b20tdG9vbGJhci1oZWlnaHQpO1xyXG4gIGhlaWdodDogdmFyKC0tYm90dG9tLXRvb2xiYXItaGVpZ2h0KTtcclxufVxyXG5cclxuLnRpbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNSk7XHJcbn1cclxuXHJcbi50aWxlLmZvY3VzZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowInBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-window-in-bar',
                templateUrl: './window-in-bar.component.html',
                styleUrls: ['./window-in-bar.component.scss']
            }]
    }], function () { return [{ type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }, { type: src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_2__["WindowsManagerService"] }, { type: src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_3__["ShellService"] }, { type: src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_4__["IconsService"] }]; }, { window: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "5XBF":
/*!*****************************************************************************!*\
  !*** ./src/app/components/desktop/desktop-layer/desktop-layer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DesktopLayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopLayerComponent", function() { return DesktopLayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ux_context_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ux/context-menu.service */ "L4V/");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/io/vfm.service */ "Fq8c");
/* harmony import */ var _ux_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ux/context-menu/context-menu.component */ "33ZA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _launcher_launcher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../launcher/launcher.component */ "DwXz");









const _c0 = ["desktopMenu"];
const _c1 = ["iconsMenu"];
function DesktopLayerComponent_app_launcher_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-launcher", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function DesktopLayerComponent_app_launcher_7_Template_app_launcher_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const file_r3 = ctx.$implicit; const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.showFileContextMenu($event, _r4, file_r3); })("click", function DesktopLayerComponent_app_launcher_7_Template_app_launcher_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const file_r3 = ctx.$implicit; const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.manageClick($event, _r4, file_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate2"]("width:", ctx_r2.iconSize.w, "px;height:", ctx_r2.iconSize.h, "px;");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx_r2.isSelected(file_r3))("name", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 9, file_r3.getName()))("icon", file_r3.icon)("title", file_r3.path)("authenticationRequired", file_r3.security && file_r3.security.authentication);
} }
class DesktopLayerComponent {
    constructor(contextMenuSv, theme, vfmSv) {
        this.contextMenuSv = contextMenuSv;
        this.theme = theme;
        this.vfmSv = vfmSv;
        this.files = [];
        this.selected = null;
        this.selectedDate = new Date();
        this.fileMenuActions = [];
        this.desktopMenuActions = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.load();
        });
    }
    get iconSize() {
        return { w: 120, h: 120 };
    }
    get cwd() {
        return "C:/desktop";
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.files = yield this.vfmSv.list(this.cwd);
            this.desktopMenuActions = [
                { name: "Toggle dark mode", action: () => { this.theme.toggleDarkMode(); } }
            ];
        });
    }
    isSelected(file) {
        return this.selected && this.selected.path === file.path;
    }
    manageDesktopClick(ev) {
        this.selected = null;
        this.selectedDate = null;
        this.closeContextMenu();
    }
    manageClick(ev, launcher, file) {
        ev.preventDefault();
        ev.stopPropagation();
        this.closeContextMenu();
        const d = new Date();
        if (this.isSelected(file)) {
            if (ev.button === 0) {
                if (this.selectedDate && (d.getTime() - this.selectedDate.getTime()) <= 400) {
                    launcher.launch(file, this.cwd);
                    this.selectedDate = d;
                    return;
                }
            }
        }
        this.selected = file;
        this.selectedDate = d;
    }
    showFileContextMenu(ev, launcher, file) {
        ev.preventDefault();
        ev.stopPropagation();
        this.closeContextMenu();
        this.fileMenuActions = [
            { name: "Open", action: () => { launcher.launch(file, this.cwd); } }
        ];
        this.contextMenuSv.show(this.iconsMenu, ev.pageX, ev.pageY);
    }
    showDesktopContextMenu(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.closeContextMenu();
        this.contextMenuSv.show(this.desktopMenu, ev.pageX, ev.pageY);
    }
    closeContextMenu() {
        this.contextMenuSv.close();
    }
}
DesktopLayerComponent.ɵfac = function DesktopLayerComponent_Factory(t) { return new (t || DesktopLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_context_menu_service__WEBPACK_IMPORTED_MODULE_2__["ContextMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_4__["VfmService"])); };
DesktopLayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DesktopLayerComponent, selectors: [["app-desktop-layer"]], viewQuery: function DesktopLayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.desktopMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.iconsMenu = _t.first);
    } }, decls: 8, vars: 3, consts: [[1, "layer", "desktop-layer", 3, "contextmenu", "click"], [1, "full-size", "icons-safe-area"], ["menuId", "icons-context-menu", 3, "actions"], ["iconsMenu", ""], ["menuId", "desktop-context-menu", 3, "actions"], ["desktopMenu", ""], [1, "full-size", "d-flex", "flex-column", "align-content-start", "flex-wrap"], ["class", "pt-2 pl-2", 3, "selected", "name", "icon", "title", "authenticationRequired", "style", "contextmenu", "click", 4, "ngFor", "ngForOf"], [1, "pt-2", "pl-2", 3, "selected", "name", "icon", "title", "authenticationRequired", "contextmenu", "click"], ["launcher", ""]], template: function DesktopLayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function DesktopLayerComponent_Template_div_contextmenu_0_listener($event) { return ctx.showDesktopContextMenu($event); })("click", function DesktopLayerComponent_Template_div_click_0_listener($event) { return ctx.manageDesktopClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-context-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-context-menu", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DesktopLayerComponent_app_launcher_7_Template, 3, 11, "app-launcher", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actions", ctx.fileMenuActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actions", ctx.desktopMenuActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);
    } }, directives: [_ux_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_5__["ContextMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _launcher_launcher_component__WEBPACK_IMPORTED_MODULE_7__["LauncherComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: [".icons-safe-area[_ngcontent-%COMP%] {\n  padding-bottom: var(--bottom-toolbar-height_safe-area);\n}\n\napp-launcher[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL2Rlc2t0b3AtbGF5ZXIvZGVza3RvcC1sYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL2Rlc2t0b3AtbGF5ZXIvZGVza3RvcC1sYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ucy1zYWZlLWFyZWEge1xyXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1ib3R0b20tdG9vbGJhci1oZWlnaHRfc2FmZS1hcmVhKTtcclxufVxyXG5cclxuYXBwLWxhdW5jaGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DesktopLayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-desktop-layer',
                templateUrl: './desktop-layer.component.html',
                styleUrls: ['./desktop-layer.component.scss']
            }]
    }], function () { return [{ type: src_app_services_ux_context_menu_service__WEBPACK_IMPORTED_MODULE_2__["ContextMenuService"] }, { type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }, { type: src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_4__["VfmService"] }]; }, { desktopMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["desktopMenu"]
        }], iconsMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["iconsMenu"]
        }] }); })();


/***/ }),

/***/ "7U3q":
/*!***********************************************************************************!*\
  !*** ./src/app/components/desktop/start-menu-layer/start-menu-layer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StartMenuLayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartMenuLayerComponent", function() { return StartMenuLayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _start_menu_start_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../start-menu/start-menu.component */ "x5vE");



class StartMenuLayerComponent {
    constructor() {
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    manageClick(ev) {
        ev.preventDefault();
        // ev.stopPropagation();
        this.onClose.emit();
    }
    manageContextMenu(ev) {
        ev.preventDefault();
        // ev.stopPropagation();
        this.onClose.emit();
    }
}
StartMenuLayerComponent.ɵfac = function StartMenuLayerComponent_Factory(t) { return new (t || StartMenuLayerComponent)(); };
StartMenuLayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartMenuLayerComponent, selectors: [["app-start-menu-layer"]], outputs: { onClose: "onClose" }, decls: 2, vars: 0, consts: [[1, "layer", "start-menu-layer", 3, "contextmenu", "click"]], template: function StartMenuLayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function StartMenuLayerComponent_Template_div_contextmenu_0_listener($event) { return ctx.manageContextMenu($event); })("click", function StartMenuLayerComponent_Template_div_click_0_listener($event) { return ctx.manageClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-start-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_start_menu_start_menu_component__WEBPACK_IMPORTED_MODULE_1__["StartMenuComponent"]], styles: [".start-menu-layer[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL3N0YXJ0LW1lbnUtbGF5ZXIvc3RhcnQtbWVudS1sYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtDQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rlc2t0b3Avc3RhcnQtbWVudS1sYXllci9zdGFydC1tZW51LWxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0LW1lbnUtbGF5ZXIge1xyXG4gIC8vIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartMenuLayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start-menu-layer',
                templateUrl: './start-menu-layer.component.html',
                styleUrls: ['./start-menu-layer.component.scss']
            }]
    }], function () { return []; }, { onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "7jqN":
/*!*****************************************************************************!*\
  !*** ./src/app/components/desktop/windows-layer/windows-layer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WindowsLayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowsLayerComponent", function() { return WindowsLayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/os/windows-manager.service */ "fCXL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _window_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window/window.component */ "AwQX");





function WindowsLayerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-window", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function WindowsLayerComponent_ng_container_1_Template_app_window_mousedown_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const window_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.focus(window_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const window_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("z-index:", ctx_r0.getZ(window_r1), ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", window_r1.isMinimized())("id", window_r1.id)("title", window_r1.title)("content", window_r1.content)("overflow", window_r1.overflow)("hasFocus", window_r1.hasFocus())("isMaximized", window_r1.isMaximized())("positionLocked", window_r1.isMaximized());
} }
class WindowsLayerComponent {
    constructor(windowMgr) {
        this.windowMgr = windowMgr;
        this.allWindows = [];
    }
    get hasMaximizedWindow() {
        return this.allWindows.some(m => m.isMaximized());
    }
    get maximizedWindowId() {
        return this.allWindows.find(m => m.isMaximized()).id;
    }
    ngOnInit() {
    }
    windowsId(_index, item) {
        return item.id;
    }
    focus(window) {
        this.windowMgr.focus(window);
    }
    getZ(window) {
        return window.extra.z || 0;
    }
}
WindowsLayerComponent.ɵfac = function WindowsLayerComponent_Factory(t) { return new (t || WindowsLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_1__["WindowsManagerService"])); };
WindowsLayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WindowsLayerComponent, selectors: [["app-windows-layer"]], inputs: { allWindows: "allWindows" }, decls: 2, vars: 2, consts: [[1, "invisible-layer", "windows-layer"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "hidden", "id", "title", "content", "overflow", "hasFocus", "isMaximized", "positionLocked", "mousedown"]], template: function WindowsLayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WindowsLayerComponent_ng_container_1_Template, 2, 11, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allWindows)("ngForTrackBy", ctx.windowsId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _window_window_component__WEBPACK_IMPORTED_MODULE_3__["WindowComponent"]], styles: ["app-window[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL3dpbmRvd3MtbGF5ZXIvd2luZG93cy1sYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL3dpbmRvd3MtbGF5ZXIvd2luZG93cy1sYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC13aW5kb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowsLayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-windows-layer',
                templateUrl: './windows-layer.component.html',
                styleUrls: ['./windows-layer.component.scss']
            }]
    }], function () { return [{ type: src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_1__["WindowsManagerService"] }]; }, { allWindows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7wug":
/*!********************************************************!*\
  !*** ./src/app/services/dynamic-app-loader.service.ts ***!
  \********************************************************/
/*! exports provided: DynamicAppLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicAppLoaderService", function() { return DynamicAppLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





class DynamicAppLoaderService {
    // @ViewChild('vc', {read: ViewContainerRef}) vc;
    constructor(compiler, injector) {
        this.compiler = compiler;
        this.injector = injector;
    }
    get system() {
        // return SystemJS;
        return SystemJS || window.System;
    }
    loadComponentFactoryFromModule(module) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // register the modules that we already loaded so that no HTTP request is made
            // in my case, the modules are already available in my bundle (bundled by webpack)
            this.system.set('@angular/core', this.system.newModule(_angular_core__WEBPACK_IMPORTED_MODULE_1__));
            this.system.set('@angular/common', this.system.newModule(_angular_common__WEBPACK_IMPORTED_MODULE_2__));
            const compiled = yield this.compiler.compileModuleAndAllComponentsAsync(module);
            const moduleRef = compiled.ngModuleFactory.create(this.injector);
            const factory = compiled.componentFactories[0];
            return factory;
        });
    }
    /**
     * @param moduleEntryPoint Path to the module js file
     */
    loadComponentFactoryFromFile(moduleEntryPoint) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const module = yield this.system.import(moduleEntryPoint);
            return this.loadComponentFactoryFromModule(module);
        });
    }
}
DynamicAppLoaderService.ɵfac = function DynamicAppLoaderService_Factory(t) { return new (t || DynamicAppLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
DynamicAppLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DynamicAppLoaderService, factory: DynamicAppLoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DynamicAppLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();


/***/ }),

/***/ "8K+u":
/*!******************************************************************!*\
  !*** ./src/app/global-components/apps/calc/app/app.component.ts ***!
  \******************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_base_application_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base/application-base */ "PZtw");
/* harmony import */ var src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/os/windows-manager.service */ "fCXL");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");





class AppComponent extends src_app_base_application_base__WEBPACK_IMPORTED_MODULE_1__["ApplicationBase"] {
    constructor(windowsSv, theme) {
        super();
        this.windowsSv = windowsSv;
        this.theme = theme;
        this.operation = "0";
    }
    ngOnInit() {
    }
    start(data, windowId) {
        this.windowsSv.setTitle(windowId, "Calculator");
    }
    numb(n) {
        if (this.operation === "0") {
            this.operation = "";
        }
        this.operation += "" + n;
    }
    plus() {
        this.operation += "+";
    }
    minus() {
        this.operation += "-";
    }
    dot() {
        if (!this.operation.includes(".")) {
            if (this.operation === "") {
                this.operation += "0";
            }
            this.operation += ".";
        }
    }
    divide() {
        this.operation += "/";
    }
    mult() {
        this.operation += "*";
    }
    eval() {
        this.operation = eval(this.operation);
    }
    clear(m) {
        this.operation = "0";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_2__["WindowsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["main-application"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 68, vars: 58, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "p-4"], [1, "col-12"], [1, "row", "mt-2"], [1, "col-3"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() { return ctx.clear(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener() { return ctx.clear(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() { return ctx.divide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_20_listener() { return ctx.numb(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_23_listener() { return ctx.numb(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_26_listener() { return ctx.numb(9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_29_listener() { return ctx.mult(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_33_listener() { return ctx.numb(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_36_listener() { return ctx.numb(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_39_listener() { return ctx.numb(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_42_listener() { return ctx.minus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_46_listener() { return ctx.numb(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_49_listener() { return ctx.numb(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_52_listener() { return ctx.numb(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_55_listener() { return ctx.plus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_60_listener() { return ctx.numb(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_63_listener() { return ctx.dot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_66_listener() { return ctx.eval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.operation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-block btn-", ctx.theme.bright, "");
    } }, styles: [".btn[_ngcontent-%COMP%] {\n  filter: brightness(1.2);\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n  border-radius: 0 !important;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  min-height: 340px;\n  min-width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvYXBwcy9jYWxjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvYXBwcy9jYWxjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBtaW4taGVpZ2h0OiAzNDBweDtcclxuICBtaW4td2lkdGg6IDMyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'main-application',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_2__["WindowsManagerService"] }, { type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "9G8U":
/*!***************************************************!*\
  !*** ./src/app/services/process/shell.service.ts ***!
  \***************************************************/
/*! exports provided: ShellService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellService", function() { return ShellService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/async.helper */ "GLSI");
/* harmony import */ var src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/path.helper */ "lhfI");
/* harmony import */ var src_app_models_io_file_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/io/file-model */ "jj8D");
/* harmony import */ var _launchers_file_by_extension_launcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./launchers/file-by-extension.launcher */ "Re94");
/* harmony import */ var _launchers_href_launcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./launchers/href-launcher */ "e5XF");
/* harmony import */ var _launchers_iframe_launcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./launchers/iframe-launcher */ "ukVy");
/* harmony import */ var _launchers_lnk_launcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./launchers/lnk-launcher */ "//ET");
/* harmony import */ var _launchers_local_app_launcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./launchers/local-app-launcher */ "qF/2");
/* harmony import */ var _launchers_void_launcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./launchers/void-launcher */ "mD+4");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth/auth.service */ "9ans");
/* harmony import */ var _dynamic_app_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dynamic-app-loader.service */ "7wug");
/* harmony import */ var _io_vfm_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../io/vfm.service */ "Fq8c");
/* harmony import */ var _os_windows_manager_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../os/windows-manager.service */ "fCXL");
















class ShellService {
    constructor(authSv, dynamicAppLoader, vfm, windowsMgr) {
        this.authSv = authSv;
        this.dynamicAppLoader = dynamicAppLoader;
        this.vfm = vfm;
        this.windowsMgr = windowsMgr;
    }
    launch(file, cwd) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let filePath = file.path;
            if (cwd) {
                if (!file.path.includes(":")) {
                    if (file.path[0] === "/") {
                        const unit = this.vfm.extractUnit(cwd);
                        filePath = unit + ":" + filePath;
                    }
                    else {
                        filePath = src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_3__["PathHelper"].join(cwd, filePath);
                    }
                }
            }
            let launcher;
            let content;
            const args = [];
            if (file.properties.isDirectory) {
                launcher = new _launchers_local_app_launcher__WEBPACK_IMPORTED_MODULE_9__["LocalAppLauncher"](this.windowsMgr, this.dynamicAppLoader);
                content = "app://explorer";
                args.push(file.path);
            }
            else {
                launcher = this.getLauncher(filePath);
                content = filePath;
                // content = await this.vfm.readTextFile(filePath);
            }
            const isSecurityValid = yield this.validateSecurity(file);
            if (isSecurityValid) {
                yield launcher.launch(file, content, {
                    args,
                    cwd
                });
            }
        });
    }
    assertSession() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.authSv.isLogged) {
                const loginId = yield this.launchLoginDialog();
                yield src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_2__["AsyncHelper"].waitFor(() => !this.windowsMgr.isOpen(loginId));
                if (!this.authSv.isLogged) {
                    return false;
                }
            }
            return true;
        });
    }
    validateSecurity(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (file.security && file.security.authentication) {
                return yield this.assertSession();
            }
            return true;
        });
    }
    launchApp(appName, icon) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fakeFile = new src_app_models_io_file_model__WEBPACK_IMPORTED_MODULE_4__["FileModel"]({
                icon: (icon || "file"),
                path: "x.lnk",
                size: 0,
                properties: { isDirectory: false }
            });
            const launcher = this.getLauncher(fakeFile.path);
            const id = yield launcher.launch(fakeFile, appName);
            return id;
        });
    }
    launchLoginDialog() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fakeFile = new src_app_models_io_file_model__WEBPACK_IMPORTED_MODULE_4__["FileModel"]({
                icon: "authentication",
                path: "login.lnk",
                size: 0,
                properties: { isDirectory: false }
            });
            const launcher = this.getLauncher(fakeFile.path);
            const id = yield launcher.launch(fakeFile, "app://login");
            return id;
        });
    }
    getLauncher(path) {
        if (path.includes(".")) {
            const ext = src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_3__["PathHelper"].getExtension(path);
            if (ext === "lnk") {
                return new _launchers_lnk_launcher__WEBPACK_IMPORTED_MODULE_8__["LnkLauncher"](this.windowsMgr, this.dynamicAppLoader, this.vfm);
            }
            if (ext === "href") {
                return new _launchers_href_launcher__WEBPACK_IMPORTED_MODULE_6__["HrefLauncher"](this.vfm);
            }
            if (ext === "iframe") {
                return new _launchers_iframe_launcher__WEBPACK_IMPORTED_MODULE_7__["IframeLauncher"](this.windowsMgr, this.vfm);
            }
            return new _launchers_file_by_extension_launcher__WEBPACK_IMPORTED_MODULE_5__["FileByExtensionLauncher"](this.windowsMgr, this.dynamicAppLoader);
        }
        return new _launchers_void_launcher__WEBPACK_IMPORTED_MODULE_10__["VoidLauncher"]();
    }
}
ShellService.ɵfac = function ShellService_Factory(t) { return new (t || ShellService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_dynamic_app_loader_service__WEBPACK_IMPORTED_MODULE_12__["DynamicAppLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_io_vfm_service__WEBPACK_IMPORTED_MODULE_13__["VfmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_14__["WindowsManagerService"])); };
ShellService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShellService, factory: ShellService.ɵfac, providedIn: 'any' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShellService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }, { type: _dynamic_app_loader_service__WEBPACK_IMPORTED_MODULE_12__["DynamicAppLoaderService"] }, { type: _io_vfm_service__WEBPACK_IMPORTED_MODULE_13__["VfmService"] }, { type: _os_windows_manager_service__WEBPACK_IMPORTED_MODULE_14__["WindowsManagerService"] }]; }, null); })();


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var src_app_drivers_auth_firebase_auth_driver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/drivers/auth/firebase-auth.driver */ "GnCN");





class AuthService {
    constructor(injector) {
        this.injector = injector;
        this.authDriver = null;
        this.loggedUser = null;
    }
    get user() {
        return this.loggedUser;
    }
    get isLogged() {
        return !!this.user;
    }
    get driver() {
        if (this.authDriver === null) {
            const dependency = this.injector.get(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]);
            this.authDriver = new src_app_drivers_auth_firebase_auth_driver__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthDriver"](dependency);
        }
        return this.authDriver;
    }
    getSupportedProviders() {
        return this.driver.getSupportedProviders();
    }
    signInWithProvider(provider) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.driver.signInWithProvider(provider);
            this.loggedUser = user;
            return user;
        });
    }
    signInWithEmailAndPassword(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.driver.signInWithEmailAndPassword(email, password);
            this.loggedUser = user;
            return user;
        });
    }
    signUp(name, email, password) {
        return this.driver.signUp(name, email, password);
    }
    sendPasswordResetEmail(email) {
        return this.driver.sendPasswordResetEmail(email);
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.driver.logout();
            this.loggedUser = null;
        });
    }
    changePassword(currentEmail, password, newPassword) {
        return this.driver.changePassword(currentEmail, password, newPassword);
    }
    changeEmail(currentEmail, password, newEmail) {
        return this.driver.changeEmail(currentEmail, password, newEmail);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'any' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();


/***/ }),

/***/ "AwQX":
/*!***************************************************************!*\
  !*** ./src/app/components/desktop/window/window.component.ts ***!
  \***************************************************************/
/*! exports provided: WindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowComponent", function() { return WindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_helpers_animation_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/animation.helper */ "0Iag");
/* harmony import */ var src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/async.helper */ "GLSI");
/* harmony import */ var _directives_dynamic_component_container_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/dynamic-component-container.directive */ "EUjl");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/os/windows-manager.service */ "fCXL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ux_resizable_draggable_resizable_draggable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ux/resizable-draggable/resizable-draggable.component */ "QMuA");











const _c0 = ["resizableDraggable"];
function WindowComponent_app_resizable_draggable_0_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WindowComponent_app_resizable_draggable_0_span_8_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.maximize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WindowComponent_app_resizable_draggable_0_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WindowComponent_app_resizable_draggable_0_span_9_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.restore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WindowComponent_app_resizable_draggable_0_ng_template_13_Template(rf, ctx) { }
function WindowComponent_app_resizable_draggable_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 17);
} }
function WindowComponent_app_resizable_draggable_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-resizable-draggable", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onMove", function WindowComponent_app_resizable_draggable_0_Template_app_resizable_draggable_onMove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onMove($event); })("onResize", function WindowComponent_app_resizable_draggable_0_Template_app_resizable_draggable_onResize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onResize($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WindowComponent_app_resizable_draggable_0_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.minimize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WindowComponent_app_resizable_draggable_0_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, WindowComponent_app_resizable_draggable_0_span_9_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WindowComponent_app_resizable_draggable_0_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, WindowComponent_app_resizable_draggable_0_ng_template_13_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, WindowComponent_app_resizable_draggable_0_div_14_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("maximized", ctx_r0.isMaximized);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleDisabled", ctx_r0.isMaximized)("left", 100)("top", 100)("width", 400)("height", 300)("heightLimit", 40)("widthLimit", 40)("showControls", !ctx_r0.positionLocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("window-card card shadow card-primary full-size bg-", ctx_r0.theme.bright, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("maximized", ctx_r0.isMaximized)("focused", ctx_r0.hasFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "window-card-", ctx_r0.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.isReady);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("flex-grow-1 text-", ctx_r0.theme.brightContrast, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isMaximized);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isMaximized);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("overflow", ctx_r0.overflow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isDialog);
} }
class WindowComponent {
    constructor(ref, componentFactoryResolver, theme, windowSv) {
        this.ref = ref;
        this.componentFactoryResolver = componentFactoryResolver;
        this.theme = theme;
        this.windowSv = windowSv;
        this.id = -1;
        this.title = "";
        this.icon = null;
        this.isDialog = false;
        this.positionLocked = false;
        this.overflow = false;
        this.hasFocus = false;
        this.isMaximized = false;
        this.lastX = 100;
        this.lastY = 100;
        this.lastWidth = 400;
        this.lastHeight = 300;
        this.isReady = false;
    }
    ngOnInit() {
        this.windowSv.setToWindow(this.id, "component", this);
        //  TODO  -> Fix this
        setTimeout(() => {
            src_app_helpers_animation_helper__WEBPACK_IMPORTED_MODULE_2__["AnimationHelper"].animate(this.card, this.windowSv.openAnimation);
            this.isReady = true;
            this.ref.detectChanges();
        }, 100);
    }
    ngOnDestroy() {
        this.windowSv.setToWindow(this.id, "component", null);
    }
    get card() {
        return `#window-card-${this.id}`;
    }
    get initialized() {
        return this.id >= 0;
    }
    get content() {
        return this.contentComponent;
    }
    set content(v) {
        this.contentComponent = v;
        this.loadComponent();
    }
    minimize() {
        this.windowSv.minimizeWindow(this.id);
    }
    restore() {
        this.windowSv.restoreWindowStatus(this.id);
    }
    maximize() {
        // this.resizableDraggable.left = 0;
        // this.resizableDraggable.top = 0;
        this.windowSv.maximizeWindow(this.id);
    }
    animateRestore() {
        // AnimationHelper.animate(this.card, this.windowSv.restoreFromMaximizedAnimation);
    }
    animateMaximize() {
        // AnimationHelper.animate(this.card, this.windowSv.maximizeAnimation);
    }
    animateMinimize() {
        // AnimationHelper.animate(this.card, this.windowSv.minimizeAnimation);
    }
    close() {
        src_app_helpers_animation_helper__WEBPACK_IMPORTED_MODULE_2__["AnimationHelper"].animate(this.card, this.windowSv.closeAnimation).finally(() => {
            this.windowSv.disposeWindow(this.id);
        });
    }
    onMove(position) {
        this.lastX = position.x;
        this.lastY = position.y;
    }
    onResize(size) {
        this.lastWidth = size.width;
        this.lastHeight = size.height;
    }
    getPosition() {
        return { x: this.resizableDraggable.left, y: this.resizableDraggable.top };
    }
    setPosition(position) {
        this.resizableDraggable.left = position.x;
        this.resizableDraggable.top = position.y;
    }
    getSize() {
        return { width: this.resizableDraggable.width, height: this.resizableDraggable.height };
    }
    resize(size) {
        this.resizableDraggable.setSize(size.width, size.height);
    }
    loadComponent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_3__["AsyncHelper"].waitFor(() => !!this.dynamicComponentContainer);
            const componentOrFactory = this.contentComponent.component;
            const componentFactory = (componentOrFactory.componentType) ?
                componentOrFactory :
                this.componentFactoryResolver.resolveComponentFactory(componentOrFactory);
            const viewContainerRef = this.dynamicComponentContainer.viewContainerRef;
            viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.start(this.contentComponent.data, this.id);
            setTimeout(() => {
                this.adaptToAppSize();
            }, 750);
        });
    }
    adaptToAppSize() {
        const app = document.querySelector(`#window-card-${this.id} main-application > div`);
        if (app) {
            const sizes = app.getBoundingClientRect();
            if (sizes && sizes.width > 0 && sizes.height > 0) {
                this.resizableDraggable.width = sizes.width + 20;
                this.resizableDraggable.height = sizes.height + 40;
            }
            // console.log("App", app, sizes);
        }
    }
}
WindowComponent.ɵfac = function WindowComponent_Factory(t) { return new (t || WindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_6__["WindowsManagerService"])); };
WindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WindowComponent, selectors: [["app-window"]], viewQuery: function WindowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_directives_dynamic_component_container_directive__WEBPACK_IMPORTED_MODULE_4__["DynamicComponentContainerDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.resizableDraggable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dynamicComponentContainer = _t.first);
    } }, inputs: { id: "id", title: "title", icon: "icon", isDialog: "isDialog", positionLocked: "positionLocked", overflow: "overflow", hasFocus: "hasFocus", isMaximized: "isMaximized", content: "content" }, decls: 1, vars: 1, consts: [[3, "maximized", "styleDisabled", "left", "top", "width", "height", "heightLimit", "widthLimit", "showControls", "onMove", "onResize", 4, "ngIf"], [3, "styleDisabled", "left", "top", "width", "height", "heightLimit", "widthLimit", "showControls", "onMove", "onResize"], ["resizableDraggable", ""], [3, "id", "hidden"], [1, "card-header", "d-flex"], [1, "action", "action-minimize", 3, "click"], [1, "fas", "fa-minus-circle"], ["class", "action action-maximize", 3, "click", 4, "ngIf"], ["class", "action action-restore", 3, "click", 4, "ngIf"], [1, "action", "action-close", 3, "click"], [1, "fas", "fa-times-circle"], [1, "card-body", "p-0", "component-container"], ["dynamicComponentContainer", ""], ["class", "card-footer", 4, "ngIf"], [1, "action", "action-maximize", 3, "click"], [1, "fas", "fa-plus-circle"], [1, "action", "action-restore", 3, "click"], [1, "card-footer"]], template: function WindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WindowComponent_app_resizable_draggable_0_Template, 15, 28, "app-resizable-draggable", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.initialized);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ux_resizable_draggable_resizable_draggable_component__WEBPACK_IMPORTED_MODULE_8__["ResizableDraggableComponent"], _directives_dynamic_component_container_directive__WEBPACK_IMPORTED_MODULE_4__["DynamicComponentContainerDirective"]], styles: [".window-card[_ngcontent-%COMP%] {\n  transition: all 0.3s linear;\n  filter: blur(1px);\n  transform: scale(0.85, 0.85);\n}\n\n.window-card.maximized[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  transform: scale(1, 1);\n}\n\n.window-card.disabled[_ngcontent-%COMP%] {\n  filter: grayscale(1);\n}\n\n.window-card.maximized.focused[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: blur(0) grayscale(0);\n  transform: scale(1, 1);\n}\n\n.window-card.focused[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: blur(0) grayscale(0);\n  transform: scale(1, 1);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  padding: 0.4rem;\n}\n\n.card-header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  width: 24px;\n  transition: opacity 0.2s linear;\n  opacity: 0.8;\n}\n\n.card-header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.action-minimize[_ngcontent-%COMP%] {\n  color: var(--info);\n}\n\n.action-restore[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n\n.action-maximize[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n\n.action-close[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n\n.component-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.component-container.overflow[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.maximized[_ngcontent-%COMP%] {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  right: 0 !important;\n  bottom: var(--bottom-toolbar-height) !important;\n  width: 100% !important;\n  height: calc(100% - var(--bottom-toolbar-height)) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL3dpbmRvdy93aW5kb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUNBO0VBQ0Usb0JBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UscUJBQUE7QUFFRjs7QUFDQTtFQUNFLG9CQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUVBLHNCQUFBO0VBQ0EsNERBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVza3RvcC93aW5kb3cvd2luZG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpbmRvdy1jYXJkIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgZmlsdGVyOiBibHVyKDFweCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1LCAwLjg1KTtcclxufVxyXG4ud2luZG93LWNhcmQubWF4aW1pemVkIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxufVxyXG5cclxuLndpbmRvdy1jYXJkLmRpc2FibGVkIHtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcclxufVxyXG5cclxuLndpbmRvdy1jYXJkLm1heGltaXplZC5mb2N1c2VkIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZpbHRlcjogYmx1cigwKSBncmF5c2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxufVxyXG5cclxuLndpbmRvdy1jYXJkLmZvY3VzZWQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZmlsdGVyOiBibHVyKDApIGdyYXlzY2FsZSgwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIC5hY3Rpb24ge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgLmFjdGlvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmFjdGlvbi1taW5pbWl6ZSB7XHJcbiAgY29sb3I6IHZhcigtLWluZm8pO1xyXG59XHJcblxyXG4uYWN0aW9uLXJlc3RvcmUge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcclxufVxyXG5cclxuLmFjdGlvbi1tYXhpbWl6ZSB7XHJcbiAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xyXG59XHJcblxyXG4uYWN0aW9uLWNsb3NlIHtcclxuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxufVxyXG5cclxuLmNvbXBvbmVudC1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb21wb25lbnQtY29udGFpbmVyLm92ZXJmbG93IHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm1heGltaXplZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgYm90dG9tOiB2YXIoLS1ib3R0b20tdG9vbGJhci1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgLy8gei1pbmRleDogMTAwO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1ib3R0b20tdG9vbGJhci1oZWlnaHQpKSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-window',
                templateUrl: './window.component.html',
                styleUrls: ['./window.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"] }, { type: src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_6__["WindowsManagerService"] }]; }, { resizableDraggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["resizableDraggable"]
        }], dynamicComponentContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_directives_dynamic_component_container_directive__WEBPACK_IMPORTED_MODULE_4__["DynamicComponentContainerDirective"], { static: false }]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], positionLocked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], overflow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hasFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isMaximized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BZA0":
/*!************************************************************!*\
  !*** ./src/app/global-components/apps/calc/calc.module.ts ***!
  \************************************************************/
/*! exports provided: CalcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcModule", function() { return CalcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ "8K+u");




class CalcModule {
}
CalcModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalcModule });
CalcModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalcModule_Factory(t) { return new (t || CalcModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalcModule, { declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalcModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Bie7":
/*!***************************************************************!*\
  !*** ./src/app/global-components/global-components.module.ts ***!
  \***************************************************************/
/*! exports provided: GlobalComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalComponentsModule", function() { return GlobalComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class GlobalComponentsModule {
}
GlobalComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlobalComponentsModule });
GlobalComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlobalComponentsModule_Factory(t) { return new (t || GlobalComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlobalComponentsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "BvH6":
/*!***************************************************************************************************************!*\
  !*** ./src/app/global-components/apps/explorer/components/explorer-main-menu/explorer-main-menu.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ExplorerMainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerMainMenuComponent", function() { return ExplorerMainMenuComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ux/icons.service */ "hDY1");






function ExplorerMainMenuComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("separator text-", ctx_r3.theme.brightContrast, "");
} }
function ExplorerMainMenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExplorerMainMenuComponent_ng_container_3_span_1_Template, 2, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExplorerMainMenuComponent_ng_container_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const part_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.navigate(part_r1.path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const part_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", part_r1.name, " ");
} }
class ExplorerMainMenuComponent {
    constructor(theme, iconSv) {
        this.theme = theme;
        this.iconSv = iconSv;
        this.pathParts = [];
    }
    ngOnInit() {
        this.reloadPath();
        this.subscription = this.explorerManager.changeEvent.subscribe(() => {
            this.reloadPath();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    get iconFolder() {
        return this.iconSv.getIcon("folder");
    }
    navigate(path) {
        this.explorerManager.cwd = path;
    }
    reloadPath() {
        const parts = this.explorerManager.cwd ? this.explorerManager.cwd.split("/") : [];
        this.pathParts = [];
        for (let i = 0; i < parts.length; i++) {
            const p = {
                name: new _angular_common__WEBPACK_IMPORTED_MODULE_0__["TitleCasePipe"]().transform(parts[i]),
                path: parts.slice(0, i + 1).join("/")
            };
            this.pathParts.push(p);
        }
        if (this.pathParts.length === 0) {
            this.pathParts.push({ name: "This computer", path: "" });
        }
    }
}
ExplorerMainMenuComponent.ɵfac = function ExplorerMainMenuComponent_Factory(t) { return new (t || ExplorerMainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_3__["IconsService"])); };
ExplorerMainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExplorerMainMenuComponent, selectors: [["app-explorer-main-menu"]], inputs: { explorerManager: "explorerManager" }, decls: 4, vars: 5, consts: [[1, "full-size", "d-flex", "align-items-center"], [1, "icon", "non-selectable", 3, "src"], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], [1, "btn", "btn-link", 3, "click"], [1, "fas", "fa-chevron-right"]], template: function ExplorerMainMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExplorerMainMenuComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("full-width mb-2 p-2 pl-4 pr-4 bg-", ctx.theme.bright, " bright-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.iconFolder, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pathParts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]], styles: [".separator[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding-left: 0.4em;\n  padding-right: 0.4em;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvYXBwcy9leHBsb3Jlci9jb21wb25lbnRzL2V4cGxvcmVyLW1haW4tbWVudS9leHBsb3Jlci1tYWluLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvYXBwcy9leHBsb3Jlci9jb21wb25lbnRzL2V4cGxvcmVyLW1haW4tbWVudS9leHBsb3Jlci1tYWluLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VwYXJhdG9yIHtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNGVtO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExplorerMainMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-explorer-main-menu',
                templateUrl: './explorer-main-menu.component.html',
                styleUrls: ['./explorer-main-menu.component.scss']
            }]
    }], function () { return [{ type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }, { type: src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_3__["IconsService"] }]; }, { explorerManager: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "CJ7x":
/*!**********************************************!*\
  !*** ./src/app/drivers/io/example-driver.ts ***!
  \**********************************************/
/*! exports provided: ExampleDriver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDriver", function() { return ExampleDriver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/async.helper */ "GLSI");
/* harmony import */ var src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/path.helper */ "lhfI");
/* harmony import */ var src_app_models_io_file_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/io/file-model */ "jj8D");




class ExampleDriver {
    constructor() {
        this.driveContent = null;
    }
    mount(unit, settings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield fetch(settings);
            this.driveContent = yield response.json();
            // console.log(this.driveContent);
        });
    }
    isReadOnly() {
        return true;
    }
    getDriveType() {
        return "JSON Read-Only Storage";
    }
    isFolder(metadata) {
        return Array.isArray(metadata.content);
    }
    readTextFile(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_1__["AsyncHelper"].waitFor(() => this.driveContent);
            const split = path.split("/");
            let current = { name: "root", content: this.driveContent };
            if (split[0] === "" || split[0].includes(":")) {
                split.splice(0, 1);
            }
            do {
                const currentPath = split.shift();
                current = current.content.find(m => m.name === currentPath);
            } while (split.length && this.isFolder(current));
            if (current && !this.isFolder(current)) {
                if (typeof current.content === "object") {
                    return JSON.stringify(current.content);
                }
                return "" + current.content;
            }
            throw new Error(`File not found: ${path}`);
        });
    }
    list(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_1__["AsyncHelper"].waitFor(() => this.driveContent);
            if (!path) {
                return [];
            }
            if (path.length === 2 && path[1] === ":") {
                return this.driveContent.map(m => new src_app_models_io_file_model__WEBPACK_IMPORTED_MODULE_3__["FileModel"](Object.assign(m, {
                    path: "/" + m.name,
                    properties: {
                        isDirectory: true
                    }
                })));
            }
            if (path.indexOf(":") === 1) {
                path = path.substr(2);
            }
            const parts = path.split("/").slice(1);
            let currentDirFiles = null;
            if (parts.length === 0) {
                throw new Error(`The directory ${path} does not exists`);
            }
            for (const part of parts) {
                let node;
                if (!currentDirFiles) {
                    node = this.driveContent.find(m => m.name === part);
                }
                else {
                    node = currentDirFiles.find(m => m.name === part);
                }
                if (!node) {
                    throw new Error(`The directory ${path} does not exists`);
                }
                let files = node.content;
                files = JSON.parse(JSON.stringify(files));
                files.forEach(m => m.path = src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_2__["PathHelper"].join(path, m.name));
                currentDirFiles = files;
            }
            return this.getFilesFromJsonContent(currentDirFiles);
        });
    }
    writeTextFile(path, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            throw new Error("The unit is read-only.");
        });
    }
    exists(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /** @todo Implement this method */
            throw new Error("Method not implemented");
        });
    }
    rmdir(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            throw new Error("The unit is read-only.");
        });
    }
    unlink(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            throw new Error("The unit is read-only.");
        });
    }
    getFilesFromJsonContent(files) {
        return files.map(meta => {
            const c = typeof meta.content === "string" ? JSON.stringify(meta.content) : meta.content;
            const f = new src_app_models_io_file_model__WEBPACK_IMPORTED_MODULE_3__["FileModel"]({
                path: `${meta.path || meta.name}`,
                size: byteSize(c),
                icon: meta.icon,
                security: meta.security || null,
                properties: {
                    isDirectory: Array.isArray(meta.content)
                }
            });
            return f;
        });
    }
}
const byteSize = str => new Blob([str]).size;


/***/ }),

/***/ "DwXz":
/*!*******************************************************************!*\
  !*** ./src/app/components/desktop/launcher/launcher.component.ts ***!
  \*******************************************************************/
/*! exports provided: LauncherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LauncherComponent", function() { return LauncherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_helpers_animation_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/animation.helper */ "0Iag");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/process/shell.service */ "9G8U");
/* harmony import */ var src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ux/icons.service */ "hDY1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["label"];
function LauncherComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.authSuccessIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function LauncherComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.authIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class LauncherComponent {
    constructor(theme, authSv, shell, iconSv) {
        this.theme = theme;
        this.authSv = authSv;
        this.shell = shell;
        this.iconSv = iconSv;
        this.selected = false;
        this.authenticationRequired = false;
        this.authIcon = null;
        this.authSuccessIcon = null;
    }
    ngOnInit() {
        this.iconUrl = this.iconSv.getIcon(this.icon);
        if (this.authenticationRequired) {
            this.authIcon = this.iconSv.getIcon("security-shield");
            this.authSuccessIcon = this.iconSv.getIcon("security-shield-success");
        }
    }
    get isAuthenticated() {
        return this.authSv.isLogged;
    }
    get iconBackgroundStyle() {
        let style = this.theme.mainToolbarStyle;
        if (this.iconUrl && this.iconUrl !== "") {
            style += `background-image: url(${this.iconUrl});`;
        }
        return style;
    }
    launch(file, cwd) {
        this.animateLaunch();
        this.shell.launch(file, cwd);
    }
    animateLaunch() {
        //  @todo Load animation from a configuration
        src_app_helpers_animation_helper__WEBPACK_IMPORTED_MODULE_1__["AnimationHelper"].animate(this.label.nativeElement, "bounce");
    }
}
LauncherComponent.ɵfac = function LauncherComponent_Factory(t) { return new (t || LauncherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_4__["ShellService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_5__["IconsService"])); };
LauncherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LauncherComponent, selectors: [["app-launcher"]], viewQuery: function LauncherComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.label = _t.first);
    } }, inputs: { name: "name", icon: "icon", selected: "selected", authenticationRequired: "authenticationRequired" }, decls: 6, vars: 9, consts: [[1, "tile", "full-size", "d-flex", "flex-column", "align-items-end", "bg-glass"], ["label", ""], ["class", "auth-icon non-selectable", 3, "src", 4, "ngIf"], [1, "auth-icon", "non-selectable", 3, "src"]], template: function LauncherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LauncherComponent_img_4_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LauncherComponent_img_5_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("style", ctx.iconBackgroundStyle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeStyle"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon-name mt-auto p-2 full-width non-selectable text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authIcon && ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authIcon && !ctx.isAuthenticated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".tile[_ngcontent-%COMP%] {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 48px;\n  transition: all 0.3s linear;\n}\n\n.tile.zoom-hover[_ngcontent-%COMP%] {\n  background-size: 72px;\n}\n\n.tile.zoom-hover[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-size: 48px;\n}\n\n.tile.zoom-hover[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background-size: 48px;\n}\n\n.icon-name[_ngcontent-%COMP%] {\n  transition: all 0.3s linear;\n  font-size: 0.75em;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n\n.tile.zoom-hover[_ngcontent-%COMP%]   .icon-name[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.tile.zoom-hover[_ngcontent-%COMP%]:hover   .icon-name[_ngcontent-%COMP%], .tile.zoom-hover.selected[_ngcontent-%COMP%]   .icon-name[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.bordered-tile[_ngcontent-%COMP%] {\n  border: 4px solid var(--secondary);\n  transition: border 0.3s linear;\n}\n\n.bordered-tile.selected[_ngcontent-%COMP%] {\n  border: 4px solid var(--primary);\n}\n\n.tile.bg-glass[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(10px) contrast(0.9);\n          backdrop-filter: blur(10px) contrast(0.9);\n  border: 3px solid rgba(255, 255, 255, 0);\n}\n\n.tile.bg-glass[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 25px 0px rgba(255, 255, 255, 0.25);\n  border: 3px solid rgba(255, 255, 255, 0.1);\n}\n\n.tile.bg-glass.selected[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(10px) saturate(1.25);\n          backdrop-filter: blur(10px) saturate(1.25);\n  box-shadow: 0px 0px 25px 10px rgba(255, 255, 255, 0.5);\n  border: 3px solid rgba(255, 255, 255, 0.3);\n}\n\n.auth-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 28px;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL2xhdW5jaGVyL2xhdW5jaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBOztFQUVFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpREFBQTtVQUFBLHlDQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFLHNEQUFBO0VBQ0EsMENBQUE7QUFDRjs7QUFFQTtFQUNFLGtEQUFBO1VBQUEsMENBQUE7RUFDQSxzREFBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVza3RvcC9sYXVuY2hlci9sYXVuY2hlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWxlIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0OHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxufVxyXG5cclxuLnRpbGUuem9vbS1ob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA3MnB4O1xyXG59XHJcblxyXG4udGlsZS56b29tLWhvdmVyIDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0OHB4O1xyXG59XHJcblxyXG4udGlsZS56b29tLWhvdmVyIC5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0OHB4O1xyXG59XHJcblxyXG4uaWNvbi1uYW1lIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4udGlsZS56b29tLWhvdmVyIC5pY29uLW5hbWUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi50aWxlLnpvb20taG92ZXI6aG92ZXIgLmljb24tbmFtZSxcclxuLnRpbGUuem9vbS1ob3Zlci5zZWxlY3RlZCAuaWNvbi1uYW1lIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYm9yZGVyZWQtdGlsZSB7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5ib3JkZXJlZC10aWxlLnNlbGVjdGVkIHtcclxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLnRpbGUuYmctZ2xhc3Mge1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBjb250cmFzdCgwLjkpO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuXHJcbi50aWxlLmJnLWdsYXNzOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4udGlsZS5iZy1nbGFzcy5zZWxlY3RlZCB7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIHNhdHVyYXRlKDEuMjUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbi5hdXRoLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDRweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LauncherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-launcher',
                templateUrl: './launcher.component.html',
                styleUrls: ['./launcher.component.scss']
            }]
    }], function () { return [{ type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }, { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_4__["ShellService"] }, { type: src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_5__["IconsService"] }]; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["label"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], authenticationRequired: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "EUjl":
/*!********************************************************************************!*\
  !*** ./src/app/components/directives/dynamic-component-container.directive.ts ***!
  \********************************************************************************/
/*! exports provided: DynamicComponentContainerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponentContainerDirective", function() { return DynamicComponentContainerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DynamicComponentContainerDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
DynamicComponentContainerDirective.ɵfac = function DynamicComponentContainerDirective_Factory(t) { return new (t || DynamicComponentContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
DynamicComponentContainerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DynamicComponentContainerDirective, selectors: [["", "dynamicComponentContainer", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicComponentContainerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[dynamicComponentContainer]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "Fq8c":
/*!********************************************!*\
  !*** ./src/app/services/io/vfm.service.ts ***!
  \********************************************/
/*! exports provided: VfmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VfmService", function() { return VfmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_drivers_io_ajax_storage_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/drivers/io/ajax-storage-driver */ "dHhK");
/* harmony import */ var src_app_drivers_io_example_driver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/drivers/io/example-driver */ "CJ7x");
/* harmony import */ var src_app_drivers_io_firebase_storage_driver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/drivers/io/firebase-storage-driver */ "kcQL");
/* harmony import */ var _drives_drive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drives/drive */ "WyMe");







class VfmService {
    constructor(injector) {
        this.injector = injector;
    }
    get nextFreeUnit() {
        const available = "CDEFGHIJKLMNOPQRSTUVWXYZ";
        return available[VfmService.drives.length];
    }
    get units() {
        return VfmService.drives.map(m => m.unit);
    }
    get allDrives() {
        return VfmService.drives;
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.addDrive(new src_app_drivers_io_example_driver__WEBPACK_IMPORTED_MODULE_3__["ExampleDriver"](), "/assets/data/io/json-driver.json");
            this.addDrive(new src_app_drivers_io_firebase_storage_driver__WEBPACK_IMPORTED_MODULE_4__["FirebaseStorageDriver"](), "/assets/data/io/firebase-driver.json");
            this.addDrive(new src_app_drivers_io_ajax_storage_driver__WEBPACK_IMPORTED_MODULE_2__["AjaxStorageDriver"](), "/assets/data/io/ajax-driver.json");
            yield VfmService.drives[0].mount("C:", this.injector);
        });
    }
    mount(unit) {
        return this.getDrive(unit).mount(unit, this.injector);
    }
    exists(path) {
        const driver = this.getDriver(this.extractUnit(path));
        return driver.exists(path);
    }
    rmdir(path) {
        const driver = this.getDriver(this.extractUnit(path));
        return driver.rmdir(path);
    }
    unlink(path) {
        const driver = this.getDriver(this.extractUnit(path));
        return driver.unlink(path);
    }
    writeTextFile(path, content) {
        const driver = this.getDriver(this.extractUnit(path));
        return driver.writeTextFile(path, content);
    }
    readTextFile(path) {
        const driver = this.getDriver(this.extractUnit(path));
        return driver.readTextFile(path);
    }
    isDirectory(file) {
        return file && file.properties && file.properties.isDirectory;
    }
    list(path) {
        const driver = this.getDriver(this.extractUnit(path));
        return driver.list(path);
    }
    addDrive(driver, settings) {
        const unit = this.nextFreeUnit;
        const drive = new _drives_drive__WEBPACK_IMPORTED_MODULE_5__["Drive"](settings, {
            unit,
            driver,
            name: driver.getDriveType()
        });
        VfmService.drives.push(drive);
        return drive;
    }
    getDriver(unit) {
        const drive = this.getDrive(unit);
        if (!drive) {
            throw new Error(`The drive ${unit} doesn't exists.`);
        }
        if (!drive.isMounted) {
            throw new Error(`The drive ${unit} is not mounted.`);
        }
        return drive.driver;
    }
    getDrive(unit) {
        return VfmService.drives.find(m => m.unit === unit);
    }
    extractUnit(dir) {
        if (!VfmService.drives.length) {
            return null;
        }
        if (!dir.includes(":")) {
            return VfmService.drives[0].unit;
        }
        return dir.substr(0, dir.indexOf(":"));
    }
}
VfmService.drives = [];
VfmService.ɵfac = function VfmService_Factory(t) { return new (t || VfmService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
VfmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VfmService, factory: VfmService.ɵfac, providedIn: 'any' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VfmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();


/***/ }),

/***/ "GLSI":
/*!*****************************************!*\
  !*** ./src/app/helpers/async.helper.ts ***!
  \*****************************************/
/*! exports provided: AsyncHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncHelper", function() { return AsyncHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

class AsyncHelper {
    static wait(ms) {
        return new Promise(resolve => {
            setTimeout(() => resolve(), ms);
        });
    }
    static waitFor(condition, ms = 0, sleep = 100) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let timeout = ms;
            const hasTimeout = (ms > 0);
            while (!condition()) {
                yield this.wait(sleep);
                if (hasTimeout) {
                    timeout -= sleep;
                    if (timeout <= 0) {
                        return false;
                    }
                }
            }
            return true;
        });
    }
    static retryWithDelay(generator, retries, delay = 0) {
        return new Promise((resolve, reject) => {
            const p = generator();
            p.then(result => {
                resolve(result);
            }, err => {
                if (retries === 0) {
                    reject(err);
                }
                else if (delay > 0) {
                    setTimeout(() => AsyncHelper.retryWithDelay(generator, retries - 1, delay).then(data => resolve(data), err => reject(err)), delay);
                }
                else {
                    AsyncHelper.retry(generator, retries - 1).then(data => resolve(data), err => reject(err));
                }
            });
        });
    }
    static retry(generator, retries) {
        return new Promise((resolve, reject) => {
            const p = generator();
            p.then(result => {
                resolve(result);
            }, err => {
                if (retries === 0) {
                    reject(err);
                }
                else {
                    AsyncHelper.retry(generator, retries - 1).then(data => resolve(data), err => reject(err));
                }
            });
        });
    }
    static runWithTimeout(promise, timeout, error = null) {
        let timeoutId = null;
        const timeoutPromise = new Promise((resolve, reject) => {
            timeoutId = setTimeout(() => {
                timeoutId = null;
                reject(error || "Timeout");
            }, timeout);
        });
        const successPromise = new Promise((resolve, reject) => {
            promise.then(result => {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    resolve(result);
                }
                else {
                    reject();
                }
            }, err => {
                reject(err);
            });
        });
        return Promise.race([successPromise, timeoutPromise]);
    }
}


/***/ }),

/***/ "GnCN":
/*!******************************************************!*\
  !*** ./src/app/drivers/auth/firebase-auth.driver.ts ***!
  \******************************************************/
/*! exports provided: FirebaseAuthDriver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthDriver", function() { return FirebaseAuthDriver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_models_auth_logged_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/auth/logged-user.model */ "xwpX");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);



class FirebaseAuthDriver {
    constructor(authSv) {
        this.authSv = authSv;
    }
    static load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("/assets/os/drivers/auth/firebase.json");
                const json = yield response.json();
                FirebaseAuthDriver.settings = json;
            }
            catch (err) {
                //  TODO
            }
        });
    }
    // constructor(
    //   private google: GooglePlus,
    //   private logger: LoggerService,
    //   private session: SessionDataService,
    //   private authSv: AngularFireAuth) {
    // }
    initialize() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // await this.authSv.auth.setPersistence("local");
            // this.authSv.auth.onAuthStateChanged(async (m) => {
            //   const success = await this.restore(m);
            //   if (success) {
            //     this.onLogin.emit(this.session.loggedUser);
            //   }
            // });
        });
    }
    getCurrentUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.authSv.currentUser;
        });
    }
    restore(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!user) {
                user = yield this.getCurrentUser();
            }
            if (user && !user.isAnonymous) {
                return this.fillUser(new src_app_models_auth_logged_user_model__WEBPACK_IMPORTED_MODULE_1__["LoggedUser"](), user);
            }
            return null;
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authSv.signOut();
        });
    }
    getSupportedProviders() {
        return ["google"];
    }
    signInWithProvider(provider) {
        if (provider === "google") {
            return this.loginWithGoogle();
        }
        throw new Error(`Unknown provider: ${provider}`);
    }
    signInWithEmailAndPassword(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credentials = yield this.authSv.signInWithEmailAndPassword(email, password);
            return this.fillUser(new src_app_models_auth_logged_user_model__WEBPACK_IMPORTED_MODULE_1__["LoggedUser"](), credentials.user);
        });
    }
    sendPasswordResetEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authSv.sendPasswordResetEmail(email);
        });
    }
    changePassword(currentEmail, password, newPassword) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.authSv.signInWithEmailAndPassword(currentEmail, password);
            if (user) {
                yield user.user.updatePassword(newPassword);
                return true;
            }
            return false;
        });
    }
    changeEmail(currentEmail, password, newEmail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.authSv.signInWithEmailAndPassword(currentEmail, password);
            if (user) {
                yield user.user.updateEmail(newEmail);
                return true;
            }
            return false;
        });
    }
    signUp(name, email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.authSv.createUserWithEmailAndPassword(email, password);
            yield user.user.updateProfile({
                displayName: name
            });
            const credentials = yield this.authSv.signInWithEmailAndPassword(email, password);
            return this.fillUser(new src_app_models_auth_logged_user_model__WEBPACK_IMPORTED_MODULE_1__["LoggedUser"](), credentials.user);
        });
    }
    fillUser(user, data) {
        user.info = data;
        user.name = data.displayName;
        user.email = data.email;
        return user;
    }
    loginWithGoogle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const GoogleAuthProvider = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider;
            const provider = new GoogleAuthProvider();
            provider.addScope("profile");
            provider.addScope("email");
            const credentials = yield this.authSv.signInWithPopup(provider);
            if (!credentials) {
                return null;
            }
            return this.fillUser(new src_app_models_auth_logged_user_model__WEBPACK_IMPORTED_MODULE_1__["LoggedUser"](), credentials.user);
        });
    }
}
FirebaseAuthDriver.settings = null;


/***/ }),

/***/ "Ig1o":
/*!**********************************************!*\
  !*** ./src/app/services/ux/theme.service.ts ***!
  \**********************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ThemeService {
    constructor() {
        this.darkMode = true;
        this.theme = null;
        this.loadTheme();
    }
    get wallpaper() {
        return this.theme ? this.theme.wallpaper : null;
    }
    get mainToolbar() {
        return this.theme ? this.theme.mainToolBar : { opacity: 0 };
    }
    get mainToolbarStyle() {
        const color = this.darkMode ? 0 : 255;
        const alpha = this.mainToolbar.opacity;
        return `background-color:rgba(${color},${color},${color},${alpha})!important;`;
    }
    get bright() {
        return this.darkMode ? "dark" : "light";
    }
    get brightContrast() {
        return !this.darkMode ? "dark" : "light";
    }
    loadTheme() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield fetch("/assets/os/themes/default-theme.json");
            this.theme = yield response.json();
        });
    }
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "J9Zp":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/desktop/window-contents/iframe-content/iframe-content.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: IframeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeContentComponent", function() { return IframeContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function IframeContentComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas fa-spin fa-spinner fa-2x text-", ctx_r1.theme.brightContrast, "");
} }
function IframeContentComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IframeContentComponent_ng_container_0_div_1_Template, 3, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "iframe", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function IframeContentComponent_ng_container_0_Template_iframe_load_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.isLoading = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isLoading)("src", ctx_r0.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"])("title", ctx_r0.data.title);
} }
class IframeContentComponent {
    constructor(sanitizer, theme) {
        this.sanitizer = sanitizer;
        this.theme = theme;
        this.data = null;
        this.src = null;
        this.isLoading = true;
    }
    ngOnInit() {
    }
    start(data) {
        this.data = data;
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(data.src);
    }
}
IframeContentComponent.ɵfac = function IframeContentComponent_Factory(t) { return new (t || IframeContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"])); };
IframeContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IframeContentComponent, selectors: [["app-iframe-content"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "full-size d-flex justify-content-center align-items-center", 4, "ngIf"], [1, "full-size", 3, "hidden", "src", "title", "load"], [1, "full-size", "d-flex", "justify-content-center", "align-items-center"], [1, "pb-2"]], template: function IframeContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IframeContentComponent_ng_container_0_Template, 3, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["iframe[_ngcontent-%COMP%] {\n  border: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL3dpbmRvdy1jb250ZW50cy9pZnJhbWUtY29udGVudC9pZnJhbWUtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rlc2t0b3Avd2luZG93LWNvbnRlbnRzL2lmcmFtZS1jb250ZW50L2lmcmFtZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1lIHtcclxuICBib3JkZXI6IDAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IframeContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iframe-content',
                templateUrl: './iframe-content.component.html',
                styleUrls: ['./iframe-content.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }, { type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "L4V/":
/*!*****************************************************!*\
  !*** ./src/app/services/ux/context-menu.service.ts ***!
  \*****************************************************/
/*! exports provided: ContextMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuService", function() { return ContextMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContextMenuService {
    constructor() {
        this.openMenu = [];
    }
    register(menu) {
        this.openMenu.push(menu);
    }
    show(menu, x, y) {
        this.register(menu);
        menu.show(x, y);
    }
    close() {
        this.openMenu.forEach(m => m.close());
        this.openMenu = [];
    }
}
ContextMenuService.ɵfac = function ContextMenuService_Factory(t) { return new (t || ContextMenuService)(); };
ContextMenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContextMenuService, factory: ContextMenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MLxb":
/*!****************************************!*\
  !*** ./src/app/helpers/math.helper.ts ***!
  \****************************************/
/*! exports provided: MathHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathHelper", function() { return MathHelper; });
class MathHelper {
    static maxItem(items, compare) {
        if (!items || items.length === 0) {
            return null;
        }
        let max = items[0];
        for (let i = 1; i < items.length; i++) {
            if (compare(max, items[i]) < 0) {
                max = items[i];
            }
        }
        return max;
    }
    static max(items) {
        if (!items || items.length === 0) {
            return null;
        }
        let max = items[0];
        for (let i = 1; i < items.length; i++) {
            if (items[i] > max) {
                max = items[i];
            }
        }
        return max;
    }
    static sum(items) {
        let i = 0;
        items.forEach(m => i += m);
        return i;
    }
    static iterate(count) {
        const items = [];
        for (let i = 0; i < count; i++) {
            items.push(i);
        }
        return items;
    }
}


/***/ }),

/***/ "N6XA":
/*!*************************************!*\
  !*** ./src/app/pipes/error.pipe.ts ***!
  \*************************************/
/*! exports provided: ErrorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPipe", function() { return ErrorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorPipe {
    static extractMessageFromError(error) {
        let message = error;
        if (typeof error !== 'string') {
            if (typeof message.error === "string" && message.error.indexOf("html>") === -1) {
                message = message.error;
            }
            else {
                message = message.message;
            }
        }
        if (typeof message === "object") {
            message = JSON.stringify(message);
        }
        return message;
    }
    transform(error) {
        return ErrorPipe.extractMessageFromError(error);
    }
}
ErrorPipe.ɵfac = function ErrorPipe_Factory(t) { return new (t || ErrorPipe)(); };
ErrorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "error", type: ErrorPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'error'
            }]
    }], null, null); })();


/***/ }),

/***/ "OnDT":
/*!***************************************!*\
  !*** ./src/app/helpers/url.helper.ts ***!
  \***************************************/
/*! exports provided: UrlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlHelper", function() { return UrlHelper; });
class UrlHelper {
    static join(url, url2) {
        if (!url.endsWith("/")) {
            url += "/";
        }
        return url + url2;
    }
}


/***/ }),

/***/ "PGY2":
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 4, vars: 0, consts: [[1, "app-body"], [1, "main"], [1, "container-fluid"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PWAk":
/*!********************************************************************!*\
  !*** ./src/app/global-components/apps/terminal/terminal.module.ts ***!
  \********************************************************************/
/*! exports provided: TerminalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalModule", function() { return TerminalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ "jNZR");




class TerminalModule {
}
TerminalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TerminalModule });
TerminalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TerminalModule_Factory(t) { return new (t || TerminalModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TerminalModule, { declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerminalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PZtw":
/*!******************************************!*\
  !*** ./src/app/base/application-base.ts ***!
  \******************************************/
/*! exports provided: ApplicationBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationBase", function() { return ApplicationBase; });
class ApplicationBase {
    constructor() {
        this.name = "";
    }
}


/***/ }),

/***/ "QMuA":
/*!************************************************************************************!*\
  !*** ./src/app/components/ux/resizable-draggable/resizable-draggable.component.ts ***!
  \************************************************************************************/
/*! exports provided: ResizableDraggableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableDraggableComponent", function() { return ResizableDraggableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_enums_resizeable_draggable_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/resizeable-draggable-status.enum */ "RWdI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["box"];
function ResizableDraggableComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 7, ctx_r1.width, "1.0-0"), "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 10, ctx_r1.height, "1.0-0"), "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", ctx_r1.left, ", ", ctx_r1.top, ")");
} }
function ResizableDraggableComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResizableDraggableComponent_div_4_Template_div_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setStatus($event, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r2.showControls);
} }
const _c1 = ["*"];
class ResizableDraggableComponent {
    constructor() {
        this.heightLimit = 0;
        this.widthLimit = 0;
        this.allowMove = true;
        this.allowResize = true;
        this.showControls = true;
        this.resizeable = true;
        this.styleDisabled = false;
        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.debug = false;
        this.statusTimeout = null;
        this.status = src_app_enums_resizeable_draggable_status_enum__WEBPACK_IMPORTED_MODULE_1__["ResizeableDraggableStatusEnum"].None;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.statusTimeout) {
            clearTimeout(this.statusTimeout);
        }
    }
    ngAfterViewInit() {
        this.loadBox();
        this.loadContainer();
    }
    get style() {
        if (this.styleDisabled) {
            return "";
        }
        return `width:${this.width}px;height:${this.height}px;transform:translate3d(${this.left}px, ${this.top}px, 0px);`;
    }
    loadBox() {
        const { left, top } = this.box.nativeElement.getBoundingClientRect();
        this.boxPosition = { left, top };
    }
    loadContainer() {
        const left = this.boxPosition.left - this.left;
        const top = this.boxPosition.top - this.top;
        const right = left + document.body.clientWidth;
        const bottom = top + document.body.clientHeight;
        this.containerPos = { left, top, right, bottom };
        // console.log(this.containerPos);
    }
    setStatus(event, status) {
        if (event.button > 0 || !this.showControls) {
            return;
        }
        if (status === 1) {
            event.stopPropagation();
            this.statusChange.emit(src_app_enums_resizeable_draggable_status_enum__WEBPACK_IMPORTED_MODULE_1__["ResizeableDraggableStatusEnum"].IsResizing);
        }
        else if (status === 2) {
            if (this.heightLimit > 0 && event.clientY > this.heightLimit + this.top) {
                return;
            }
            if (this.widthLimit > 0 && event.clientX > this.left + this.width - this.widthLimit) {
                return;
            }
            this.mouseClick = { x: event.clientX, y: event.clientY, left: this.left, top: this.top };
            this.statusChange.emit(src_app_enums_resizeable_draggable_status_enum__WEBPACK_IMPORTED_MODULE_1__["ResizeableDraggableStatusEnum"].IsMoving);
        }
        else {
            this.loadBox();
            this.statusChange.emit(src_app_enums_resizeable_draggable_status_enum__WEBPACK_IMPORTED_MODULE_1__["ResizeableDraggableStatusEnum"].None);
        }
        this.status = status;
    }
    onMouseMove(event) {
        this.mouse = { x: event.clientX, y: event.clientY };
        if (this.status === src_app_enums_resizeable_draggable_status_enum__WEBPACK_IMPORTED_MODULE_1__["ResizeableDraggableStatusEnum"].IsResizing) {
            this.resize();
        }
        else if (this.status === src_app_enums_resizeable_draggable_status_enum__WEBPACK_IMPORTED_MODULE_1__["ResizeableDraggableStatusEnum"].IsMoving) {
            this.move();
        }
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        this.onResize.emit({ width, height });
    }
    setWidth(value) {
        this.width = value;
        this.onResize.emit({ width: this.width, height: this.height });
    }
    setHeight(value) {
        this.height = value;
        this.onResize.emit({ width: this.width, height: this.height });
    }
    resize() {
        if (this.canResize()) {
            this.width = Number(this.mouse.x > this.boxPosition.left) ? this.mouse.x - this.boxPosition.left : 0;
            this.height = Number(this.mouse.y > this.boxPosition.top) ? this.mouse.y - this.boxPosition.top : 0;
            this.onResize.emit({ width: this.width, height: this.height });
        }
    }
    canResize() {
        if (!this.allowResize || !this.showControls) {
            return false;
        }
        return (this.mouse.x < this.containerPos.right && this.mouse.y < this.containerPos.bottom);
    }
    move() {
        if (this.canMove()) {
            this.left = this.mouseClick.left + (this.mouse.x - this.mouseClick.x);
            this.top = this.mouseClick.top + (this.mouse.y - this.mouseClick.y);
            this.onMove.emit({ x: this.left, y: this.top });
        }
    }
    canMove() {
        if (!this.allowMove || !this.showControls) {
            return false;
        }
        // const offsetLeft = this.mouseClick.x - this.boxPosition.left;
        // const offsetRight = this.width - offsetLeft;
        const offsetTop = this.mouseClick.y - this.boxPosition.top;
        // const offsetBottom = this.height - offsetTop;
        return (
        // this.mouse.x > this.containerPos.left + offsetLeft
        // && this.mouse.x < this.containerPos.right - offsetRight &&
        this.mouse.y > this.containerPos.top + offsetTop
        // && this.mouse.y < this.containerPos.bottom - offsetBottom
        );
    }
}
ResizableDraggableComponent.ɵfac = function ResizableDraggableComponent_Factory(t) { return new (t || ResizableDraggableComponent)(); };
ResizableDraggableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResizableDraggableComponent, selectors: [["app-resizable-draggable"]], viewQuery: function ResizableDraggableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.box = _t.first);
    } }, hostBindings: function ResizableDraggableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function ResizableDraggableComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { width: "width", height: "height", left: "left", top: "top", heightLimit: "heightLimit", widthLimit: "widthLimit", allowMove: "allowMove", allowResize: "allowResize", showControls: "showControls", resizeable: "resizeable", styleDisabled: "styleDisabled" }, outputs: { statusChange: "statusChange", onMove: "onMove", onResize: "onResize" }, ngContentSelectors: _c1, decls: 5, vars: 6, consts: [[1, "resizable-draggable", 3, "mousedown", "mouseup"], ["box", ""], [4, "ngIf"], ["class", "resize-action", 3, "hidden", "mousedown", 4, "ngIf"], [1, "resize-action", 3, "hidden", "mousedown"]], template: function ResizableDraggableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResizableDraggableComponent_Template_div_mousedown_0_listener($event) { return ctx.setStatus($event, 2); })("mouseup", function ResizableDraggableComponent_Template_div_mouseup_0_listener($event) { return ctx.setStatus($event, 0); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResizableDraggableComponent_ng_container_3_Template, 12, 13, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResizableDraggableComponent_div_4_Template, 1, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.status === 1 || ctx.status === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.debug);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resizeable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".resizable-draggable[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  position: absolute;\n  left: 50%;\n  transform: translate3d(-50%, -100%, 0);\n}\n.resizable-draggable[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-100%, -50%, 0);\n}\n.resizable-draggable[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3) {\n  position: absolute;\n  transform: translate3d(-100%, -100%, 0);\n}\n.resize-action[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 100%;\n  top: 100%;\n  z-index: 30;\n  transform: translate3d(-50%, -50%, 0) rotateZ(45deg);\n  border-style: solid;\n  border-width: 8px;\n  opacity: 0.2;\n  transition: opacity 0.3s ease-in-out;\n  border-color: transparent transparent transparent var(--secondary);\n}\n.resize-action[_ngcontent-%COMP%]:hover, .resize-action[_ngcontent-%COMP%]:active {\n  cursor: nwse-resize;\n  opacity: 0.5;\n}\n.resizable-draggable.cursor[_ngcontent-%COMP%]:hover {\n  cursor: all-scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91eC9yZXNpemFibGUtZHJhZ2dhYmxlL3Jlc2l6YWJsZS1kcmFnZ2FibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtBQU5SO0FBU0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxzQ0FBQTtBQVBSO0FBVUk7RUFDSSxrQkFBQTtFQUNBLHVDQUFBO0FBUlI7QUFZQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0VBQUE7QUFUSjtBQVVJO0VBRUksbUJBQUE7RUFDQSxZQUFBO0FBVFI7QUFjSTtFQUNJLGtCQUFBO0FBWFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3V4L3Jlc2l6YWJsZS1kcmFnZ2FibGUvcmVzaXphYmxlLWRyYWdnYWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNpemFibGUtZHJhZ2dhYmxlIHtcbiAgICAvLyBvdXRsaW5lOiAxcHggZGFzaGVkIGdyZWVuO1xuICAgIC8vICYuYWN0aXZlIHtcbiAgICAvLyAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICM4MGZmODAwZDtcbiAgICAvLyB9XG5cbiAgICBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtMTAwJSwgMCk7XG4gICAgfVxuXG4gICAgc3BhbjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC01MCUsIDApO1xuICAgIH1cblxuICAgIHNwYW46bnRoLW9mLXR5cGUoMykge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMDAlLCAwKTtcbiAgICB9XG59XG5cbi5yZXNpemUtYWN0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTAwJTtcbiAgICB0b3A6IDEwMCU7XG4gICAgei1pbmRleDogMzA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSByb3RhdGVaKDQ1ZGVnKTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogOHB4O1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1zZWNvbmRhcnkpO1xuICAgICY6aG92ZXIsXG4gICAgJjphY3RpdmUge1xuICAgICAgICBjdXJzb3I6IG53c2UtcmVzaXplO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxufVxuXG4ucmVzaXphYmxlLWRyYWdnYWJsZS5jdXJzb3Ige1xuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IGFsbC1zY3JvbGw7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableDraggableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resizable-draggable',
                templateUrl: './resizable-draggable.component.html',
                styleUrls: ['./resizable-draggable.component.scss']
            }]
    }], null, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], left: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], top: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], heightLimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], widthLimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], box: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["box"]
        }], resizeable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], statusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:mousemove', ['$event']]
        }] }); })();


/***/ }),

/***/ "RP2r":
/*!******************************************************!*\
  !*** ./src/app/services/misc/enums/log-type.enum.ts ***!
  \******************************************************/
/*! exports provided: LogType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogType", function() { return LogType; });
var LogType;
(function (LogType) {
    LogType[LogType["Debug"] = 0] = "Debug";
    LogType[LogType["Info"] = 1] = "Info";
    LogType[LogType["Warn"] = 2] = "Warn";
    LogType[LogType["Error"] = 3] = "Error";
})(LogType || (LogType = {}));


/***/ }),

/***/ "RWdI":
/*!***********************************************************!*\
  !*** ./src/app/enums/resizeable-draggable-status.enum.ts ***!
  \***********************************************************/
/*! exports provided: ResizeableDraggableStatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeableDraggableStatusEnum", function() { return ResizeableDraggableStatusEnum; });
var ResizeableDraggableStatusEnum;
(function (ResizeableDraggableStatusEnum) {
    ResizeableDraggableStatusEnum[ResizeableDraggableStatusEnum["None"] = 0] = "None";
    ResizeableDraggableStatusEnum[ResizeableDraggableStatusEnum["IsResizing"] = 1] = "IsResizing";
    ResizeableDraggableStatusEnum[ResizeableDraggableStatusEnum["IsMoving"] = 2] = "IsMoving";
})(ResizeableDraggableStatusEnum || (ResizeableDraggableStatusEnum = {}));


/***/ }),

/***/ "Re94":
/*!**************************************************************************!*\
  !*** ./src/app/services/process/launchers/file-by-extension.launcher.ts ***!
  \**************************************************************************/
/*! exports provided: FileByExtensionLauncher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileByExtensionLauncher", function() { return FileByExtensionLauncher; });
/* harmony import */ var _local_app_launcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-app-launcher */ "qF/2");

class FileByExtensionLauncher {
    constructor(windowsMgr, dynamicAppLoader) {
        this.windowsMgr = windowsMgr;
        this.dynamicAppLoader = dynamicAppLoader;
    }
    launch(file, path, settings) {
        const local = new _local_app_launcher__WEBPACK_IMPORTED_MODULE_0__["LocalAppLauncher"](this.windowsMgr, this.dynamicAppLoader);
        return local.launchByFormat(file, path, settings);
    }
}


/***/ }),

/***/ "Scym":
/*!********************************************************************!*\
  !*** ./src/app/global-components/apps/viewer/classes/js-loader.ts ***!
  \********************************************************************/
/*! exports provided: JsLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsLoader", function() { return JsLoader; });
class JsLoader {
    static loadAll(urls) {
        const promises = urls.map(m => m.endsWith(".css") ? JsLoader.loadCss(m) : JsLoader.loadScript(m));
        return promises;
    }
    static loadCss(url) {
        const link = document.createElement("link");
        link.href = url;
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.getElementsByTagName("head")[0].appendChild(link);
        return Promise.resolve();
    }
    static loadScript(url) {
        return new Promise((resolve, reject) => {
            if (window[url]) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.onload = () => resolve();
            script.onerror = err => reject(err);
            script.src = url;
            window[url] = script;
            document.body.appendChild(script);
        });
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'lcnvdl-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "VS2T":
/*!***************************************************************************!*\
  !*** ./src/app/components/desktop/modals-layer/modals-layer.component.ts ***!
  \***************************************************************************/
/*! exports provided: ModalsLayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsLayerComponent", function() { return ModalsLayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ux_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ux/dialog.service */ "mY9l");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ModalsLayerComponent_div_1_div_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsLayerComponent_div_1_div_3_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r6.closeClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalsLayerComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModalsLayerComponent_div_1_div_3_button_3_Template, 3, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.lastModal.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.allowClose);
} }
function ModalsLayerComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.lastModal.message, " ");
} }
function ModalsLayerComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 15);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r3.lastModal.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ModalsLayerComponent_div_1_div_6_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsLayerComponent_div_1_div_6_ng_container_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r12.buttonClick(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.lastModal.cancelButton);
} }
function ModalsLayerComponent_div_1_div_6_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsLayerComponent_div_1_div_6_ng_container_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r14.buttonClick(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.lastModal.okButton);
} }
function ModalsLayerComponent_div_1_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalsLayerComponent_div_1_div_6_ng_container_1_button_1_Template, 2, 1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalsLayerComponent_div_1_div_6_ng_container_1_button_2_Template, 2, 1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.lastModal.cancelButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.lastModal.okButton);
} }
function ModalsLayerComponent_div_1_div_6_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsLayerComponent_div_1_div_6_ng_container_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const i_r18 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r19.buttonClick(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](button_r17);
} }
function ModalsLayerComponent_div_1_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalsLayerComponent_div_1_div_6_ng_container_2_button_1_Template, 2, 1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.lastModal.buttons);
} }
function ModalsLayerComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalsLayerComponent_div_1_div_6_ng_container_1_Template, 3, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalsLayerComponent_div_1_div_6_ng_container_2_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.lastModal.okButton || ctx_r4.lastModal.cancelButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r4.lastModal.okButton || ctx_r4.lastModal.cancelButton));
} }
function ModalsLayerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModalsLayerComponent_div_1_div_3_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ModalsLayerComponent_div_1_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ModalsLayerComponent_div_1_div_5_Template, 1, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ModalsLayerComponent_div_1_div_6_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "modal_" + ctx_r0.lastModal.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.lastModal.title && ctx_r0.lastModal.title != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.lastModal.html);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.lastModal.html);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hasButtons);
} }
class ModalsLayerComponent {
    constructor(dialogSv) {
        this.dialogSv = dialogSv;
    }
    ngOnInit() {
    }
    get hasModals() {
        return this.dialogSv.hasModals;
    }
    get lastModal() {
        return this.dialogSv.currentModal;
    }
    get modalZ() {
        return 110 + this.dialogSv.visibleModals.length;
    }
    get allowClose() {
        return this.lastModal.allowClose;
    }
    get hasButtons() {
        return (this.lastModal.buttons && this.lastModal.buttons.length > 0) ||
            this.lastModal.okButton ||
            this.lastModal.cancelButton;
    }
    manageClick(ev) {
        ev.preventDefault();
        if (this.hasModals) {
            ev.stopPropagation();
        }
    }
    manageContextMenu(ev) {
        if (this.hasModals) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    buttonClick(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.lastModal.cb(index);
            yield this.dialogSv.closeModal();
        });
    }
    closeClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.lastModal.cb(-1);
            yield this.dialogSv.closeModal();
        });
    }
}
ModalsLayerComponent.ɵfac = function ModalsLayerComponent_Factory(t) { return new (t || ModalsLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"])); };
ModalsLayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalsLayerComponent, selectors: [["app-modals-layer"]], decls: 2, vars: 7, consts: [[1, "modals-layer", 3, "contextmenu", "click"], ["class", "modal", "role", "dialog", "style", "display:block!important;", 3, "id", 4, "ngIf"], ["role", "dialog", 1, "modal", 2, "display", "block!important", 3, "id"], [1, "modal-dialog", "modal-dialog-centered", "non-selectable"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], ["class", "modal-body non-selectable p-4", 4, "ngIf"], ["class", "modal-body non-selectable p-4", 3, "innerHTML", 4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-title", "non-selectable"], ["type", "button", "class", "close", 3, "click", 4, "ngIf"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "non-selectable", "p-4"], [1, "modal-body", "non-selectable", "p-4", 3, "innerHTML"], [1, "modal-footer"], [4, "ngIf"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngFor", "ngForOf"]], template: function ModalsLayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function ModalsLayerComponent_Template_div_contextmenu_0_listener($event) { return ctx.manageContextMenu($event); })("click", function ModalsLayerComponent_Template_div_click_0_listener($event) { return ctx.manageClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalsLayerComponent_div_1_Template, 7, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("layer", ctx.hasModals)("visible-layer", ctx.hasModals)("invisible-layer", !ctx.hasModals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasModals);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".modals-layer[_ngcontent-%COMP%] {\n  transition: all 0.3s linear;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.visible-layer[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL21vZGFscy1sYXllci9tb2RhbHMtbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVza3RvcC9tb2RhbHMtbGF5ZXIvbW9kYWxzLWxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFscy1sYXllciB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbi52aXNpYmxlLWxheWVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalsLayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-modals-layer',
                templateUrl: './modals-layer.component.html',
                styleUrls: ['./modals-layer.component.scss']
            }]
    }], function () { return [{ type: src_app_services_ux_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "Wd5c":
/*!**********************************************************************!*\
  !*** ./src/app/global-components/apps/explorer/app/app.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_base_application_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base/application-base */ "PZtw");
/* harmony import */ var src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/path.helper */ "lhfI");
/* harmony import */ var _classes_explorer_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/explorer-manager */ "kDys");
/* harmony import */ var src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/os/windows-manager.service */ "fCXL");
/* harmony import */ var _components_explorer_main_menu_explorer_main_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/explorer-main-menu/explorer-main-menu.component */ "BvH6");
/* harmony import */ var _components_explorer_side_bar_explorer_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/explorer-side-bar/explorer-side-bar.component */ "ioej");
/* harmony import */ var _components_explorer_view_explorer_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/explorer-view/explorer-view.component */ "/ArM");
/* harmony import */ var _components_explorer_footer_explorer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/explorer-footer/explorer-footer.component */ "1MjI");










class AppComponent extends src_app_base_application_base__WEBPACK_IMPORTED_MODULE_1__["ApplicationBase"] {
    constructor(windowsSv) {
        super();
        this.windowsSv = windowsSv;
        this.explorerManager = new _classes_explorer_manager__WEBPACK_IMPORTED_MODULE_3__["ExplorerManager"]();
    }
    ngOnInit() {
        this.subscription = this.explorerManager.changeEvent.subscribe(() => {
            this.updateWindowTitle();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    start(data, windowId) {
        this.windowId = windowId;
        let path = "";
        const { args = [] } = data || {};
        if (args.length > 1) {
            path = args[1];
            if (data.cwd) {
                path = src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_2__["PathHelper"].join(data.cwd, path);
            }
        }
        this.explorerManager.cwd = path;
        if (this.windowsSv.getScreenSize().width > 1024) {
            this.windowsSv.resizeWindow(windowId, 1024, 400);
        }
        this.windowsSv.centerWindow(windowId);
        this.updateWindowTitle();
    }
    updateWindowTitle() {
        const name = src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_2__["PathHelper"].getName(this.explorerManager.cwd);
        if (name && name !== "") {
            this.windowsSv.setTitle(this.windowId, "Explorer - " + src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_2__["PathHelper"].getName(this.explorerManager.cwd));
        }
        else {
            this.windowsSv.setTitle(this.windowId, "Explorer");
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_4__["WindowsManagerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["main-application"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 4, consts: [[1, "container-fluid", "box", "d-flex", "flex-column", "pb-3", "pt-2", "full-size"], [3, "explorerManager"], [1, "flex-grow-1", "d-flex"], [1, "flex-grow-1", "pl-2"], [3, "windowId", "explorerManager"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-explorer-main-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-explorer-side-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-explorer-view", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-explorer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("explorerManager", ctx.explorerManager);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("explorerManager", ctx.explorerManager);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("windowId", ctx.windowId)("explorerManager", ctx.explorerManager);
    } }, directives: [_components_explorer_main_menu_explorer_main_menu_component__WEBPACK_IMPORTED_MODULE_5__["ExplorerMainMenuComponent"], _components_explorer_side_bar_explorer_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["ExplorerSideBarComponent"], _components_explorer_view_explorer_view_component__WEBPACK_IMPORTED_MODULE_7__["ExplorerViewComponent"], _components_explorer_footer_explorer_footer_component__WEBPACK_IMPORTED_MODULE_8__["ExplorerFooterComponent"]], styles: [".box[_ngcontent-%COMP%] {\n  min-width: 300px;\n  min-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvYXBwcy9leHBsb3Jlci9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvYXBwcy9leHBsb3Jlci9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'main-application',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_4__["WindowsManagerService"] }]; }, null); })();


/***/ }),

/***/ "WyMe":
/*!*********************************************!*\
  !*** ./src/app/services/io/drives/drive.ts ***!
  \*********************************************/
/*! exports provided: Drive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drive", function() { return Drive; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

class Drive {
    constructor(settingsFile, data) {
        this.settingsFile = settingsFile;
        this.mounted = false;
        if (data) {
            Object.assign(this, data);
        }
    }
    get fullName() {
        return `${this.name} (${this.unit}:)${this.mounted ? '' : ' *Unmounted*'}`;
    }
    get isMounted() {
        return this.mounted;
    }
    mount(unit, injector) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.mounted) {
                yield this.driver.mount(unit, this.settingsFile, injector);
                this.mounted = true;
            }
        });
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/layout/layout.component */ "PGY2");
/* harmony import */ var _global_components_global_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-components/global-components.module */ "Bie7");
/* harmony import */ var _errors_main_error_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors/main-error-handler */ "0T2V");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _errors_main_error_handler__WEBPACK_IMPORTED_MODULE_7__["MainErrorHandler"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _global_components_global_components_module__WEBPACK_IMPORTED_MODULE_6__["GlobalComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _global_components_global_components_module__WEBPACK_IMPORTED_MODULE_6__["GlobalComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _global_components_global_components_module__WEBPACK_IMPORTED_MODULE_6__["GlobalComponentsModule"]
                ],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _errors_main_error_handler__WEBPACK_IMPORTED_MODULE_7__["MainErrorHandler"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZBVb":
/*!**************************************!*\
  !*** ./src/app/guards/boot.guard.ts ***!
  \**************************************/
/*! exports provided: BootGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootGuard", function() { return BootGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_os_boot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/os/boot.service */ "w6jB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class BootGuard {
    constructor(bootSv, router) {
        this.bootSv = bootSv;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.bootSv.hasBooted) {
            this.router.navigate(["boot"]);
            return false;
        }
        return true;
    }
}
BootGuard.ɵfac = function BootGuard_Factory(t) { return new (t || BootGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_os_boot_service__WEBPACK_IMPORTED_MODULE_1__["BootService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BootGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BootGuard, factory: BootGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_os_boot_service__WEBPACK_IMPORTED_MODULE_1__["BootService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "bYJ0":
/*!*****************************************!*\
  !*** ./src/app/helpers/array.helper.ts ***!
  \*****************************************/
/*! exports provided: ArrayHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayHelper", function() { return ArrayHelper; });
class ArrayHelper {
    static random(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}


/***/ }),

/***/ "cPxC":
/*!*********************************************************************!*\
  !*** ./src/app/components/desktop/wallpaper/wallpaper.component.ts ***!
  \*********************************************************************/
/*! exports provided: WallpaperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallpaperComponent", function() { return WallpaperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function WallpaperComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx_r0.wallpaperUrl, ");");
} }
class WallpaperComponent {
    constructor(theme) {
        this.theme = theme;
    }
    ngOnInit() {
    }
    get wallpaperUrl() {
        return this.theme.wallpaper;
    }
}
WallpaperComponent.ɵfac = function WallpaperComponent_Factory(t) { return new (t || WallpaperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"])); };
WallpaperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WallpaperComponent, selectors: [["app-wallpaper"]], decls: 1, vars: 1, consts: [["class", "layer wallpaper-layer wallpaper", 3, "style", 4, "ngIf"], [1, "layer", "wallpaper-layer", "wallpaper"]], template: function WallpaperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WallpaperComponent_div_0_Template, 1, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wallpaperUrl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".wallpaper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-size: cover;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL3dhbGxwYXBlci93YWxscGFwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL3dhbGxwYXBlci93YWxscGFwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FsbHBhcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WallpaperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wallpaper',
                templateUrl: './wallpaper.component.html',
                styleUrls: ['./wallpaper.component.scss']
            }]
    }], function () { return [{ type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "cmmC":
/*!*********************************************!*\
  !*** ./src/app/enums/window-status.enum.ts ***!
  \*********************************************/
/*! exports provided: WindowStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowStatus", function() { return WindowStatus; });
var WindowStatus;
(function (WindowStatus) {
    WindowStatus[WindowStatus["Normal"] = 0] = "Normal";
    WindowStatus[WindowStatus["Maximized"] = 1] = "Maximized";
    WindowStatus[WindowStatus["Fullscreen"] = 2] = "Fullscreen";
})(WindowStatus || (WindowStatus = {}));


/***/ }),

/***/ "dHhK":
/*!***************************************************!*\
  !*** ./src/app/drivers/io/ajax-storage-driver.ts ***!
  \***************************************************/
/*! exports provided: AjaxStorageDriver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxStorageDriver", function() { return AjaxStorageDriver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_models_io_file_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/io/file-model */ "jj8D");
/* harmony import */ var src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ux/icons.service */ "hDY1");



class AjaxStorageDriver {
    constructor() {
        this.headers = null;
        this.readOnly = true;
    }
    isReadOnly() {
        return this.readOnly;
    }
    mount(unit, settingsUrl, injector) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield fetch(settingsUrl);
            const settings = yield response.json();
            this.iconSv = this.iconSv || injector.get(src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_2__["IconsService"]);
            this.baseUrl = settings.url;
            this.unit = unit;
            if (!this.baseUrl.endsWith("/")) {
                this.baseUrl += "/";
            }
            const info = yield this.get("mount");
            if (!info) {
                throw new Error("Error mounting device.");
            }
            this.readOnly = info.readOnly;
        });
    }
    getDriveType() {
        return "Ajax Storage";
    }
    list(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.post("list", { path: this.parsePath(path) });
            let list;
            if (!Array.isArray(result)) {
                list = result.list;
            }
            else {
                list = result;
            }
            list = list.map(m => this.toFileModel(m));
            return list;
        });
    }
    exists(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.post("exists", { path: this.parsePath(path) });
            if (typeof result !== "boolean") {
                return result.exists;
            }
            return result;
        });
    }
    rmdir(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.post("rmdir", { path });
        });
    }
    unlink(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.post("unlink", { path });
        });
    }
    readTextFile(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.post("read", { path });
            if (typeof result !== "string") {
                return result.content;
            }
            return result;
        });
    }
    writeTextFile(path, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.post("write", { path, content });
        });
    }
    parsePath(path) {
        return path.replace(this.unit + ":", "");
    }
    get(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const finalUrl = this.parseUrl(url);
            let req = {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                headers: this.headers || {},
            };
            const response = yield fetch(finalUrl, req);
            if (response.ok) {
                const responseData = yield response.json();
                return responseData;
            }
            else {
                throw new Error(response.statusText);
            }
        });
    }
    post(url, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const finalUrl = this.parseUrl(url);
            let req = {
                body: JSON.stringify(data),
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
            };
            if (this.headers) {
                Object.assign(req.headers, this.headers);
            }
            const response = yield fetch(finalUrl, req);
            if (response.ok) {
                const responseData = yield response.json();
                return responseData;
            }
            else {
                throw new Error(response.statusText);
            }
        });
    }
    parseUrl(url) {
        return this.baseUrl + url;
    }
    toFileModel(file) {
        /** @todo Assign icons shouldn't be responsability of the driver */
        const model = new src_app_models_io_file_model__WEBPACK_IMPORTED_MODULE_1__["FileModel"](file);
        if (!model.icon) {
            model.icon = this.iconSv.getIconByFormat(file.path);
        }
        return model;
    }
}


/***/ }),

/***/ "e5XF":
/*!*************************************************************!*\
  !*** ./src/app/services/process/launchers/href-launcher.ts ***!
  \*************************************************************/
/*! exports provided: HrefLauncher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrefLauncher", function() { return HrefLauncher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/async.helper */ "GLSI");


class HrefLauncher {
    constructor(vfm) {
        this.vfm = vfm;
    }
    launch(file, path, settings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const content = yield this.vfm.readTextFile(path);
            const json = JSON.parse(content);
            yield src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_1__["AsyncHelper"].wait(1000);
            window.open(json.href, json.target);
            return true;
        });
    }
}


/***/ }),

/***/ "ekpT":
/*!***********************************************************************************************!*\
  !*** ./src/app/global-components/apps/viewer/components/iframe-view/iframe-view.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: IframeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeViewComponent", function() { return IframeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IframeViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
IframeViewComponent.ɵfac = function IframeViewComponent_Factory(t) { return new (t || IframeViewComponent)(); };
IframeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IframeViewComponent, selectors: [["app-iframe-view"]], decls: 2, vars: 0, template: function IframeViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "iframe-view works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1jb21wb25lbnRzL2FwcHMvdmlld2VyL2NvbXBvbmVudHMvaWZyYW1lLXZpZXcvaWZyYW1lLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IframeViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iframe-view',
                templateUrl: './iframe-view.component.html',
                styleUrls: ['./iframe-view.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fCXL":
/*!********************************************************!*\
  !*** ./src/app/services/os/windows-manager.service.ts ***!
  \********************************************************/
/*! exports provided: WindowsManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowsManagerService", function() { return WindowsManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_enums_window_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/enums/window-status.enum */ "cmmC");
/* harmony import */ var src_app_helpers_array_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/array.helper */ "bYJ0");
/* harmony import */ var src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/async.helper */ "GLSI");
/* harmony import */ var src_app_helpers_math_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/math.helper */ "MLxb");
/* harmony import */ var src_app_interfaces_os_window_process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/os/window-process */ "xWs4");








class WindowsManagerService {
    constructor(ref) {
        this.ref = ref;
        this.visualSettings = null;
        this.windows = [];
        this.attachments = {};
        this.loadVisualSettings();
    }
    get openAnimation() {
        return src_app_helpers_array_helper__WEBPACK_IMPORTED_MODULE_3__["ArrayHelper"].random(this.visualSettings.animations.open);
    }
    get minimizeAnimation() {
        return src_app_helpers_array_helper__WEBPACK_IMPORTED_MODULE_3__["ArrayHelper"].random(this.visualSettings.animations.minimize);
    }
    get maximizeAnimation() {
        return src_app_helpers_array_helper__WEBPACK_IMPORTED_MODULE_3__["ArrayHelper"].random(this.visualSettings.animations.maximize);
    }
    get restoreFromMinimizedAnimation() {
        return src_app_helpers_array_helper__WEBPACK_IMPORTED_MODULE_3__["ArrayHelper"].random(this.visualSettings.animations.restoreFromMinimized);
    }
    get restoreFromMaximizedAnimation() {
        return src_app_helpers_array_helper__WEBPACK_IMPORTED_MODULE_3__["ArrayHelper"].random(this.visualSettings.animations.restoreFromMaximized);
    }
    get closeAnimation() {
        return src_app_helpers_array_helper__WEBPACK_IMPORTED_MODULE_3__["ArrayHelper"].random(this.visualSettings.animations.close);
    }
    get openAnimationSafe() {
        return this.visualSettings ? this.openAnimation : "";
    }
    get focused() {
        return this.windows.find(w => w.extra.z === 100);
    }
    createWindow(title, icon) {
        const window = new src_app_interfaces_os_window_process__WEBPACK_IMPORTED_MODULE_6__["WindowProcess"]({
            id: ++WindowsManagerService.idCounter,
            title: (title || "New window"),
            icon: (icon || null),
        });
        return window;
    }
    isOpen(id) {
        return this.windows.find(m => m.id === id);
    }
    setToWindow(id, key, value) {
        if (this.windows.some(m => m.id === id)) {
            this.attachments[id] = this.attachments[id] || {};
            if (value === null || value === undefined) {
                delete this.attachments[id][key];
            }
            else {
                this.attachments[id][key] = value;
            }
        }
    }
    getFromWindow(id, key) {
        return (this.attachments && this.attachments[id]) ? this.attachments[id][key] : null;
    }
    addWindow(window) {
        if (!window.content) {
            throw new Error("Window content is empty.");
        }
        this.windows.push(window);
        this.focus(window);
        this.refreshGui();
    }
    enableWindow(id) {
        /** @todo Complete this method */
    }
    disableWindow(id) {
        /** @todo Complete this method */
    }
    maximizeWindow(id) {
        const window = this.windows.find(m => m.id === id);
        if (window) {
            this.windows
                .filter(m => m.status === src_app_enums_window_status_enum__WEBPACK_IMPORTED_MODULE_2__["WindowStatus"].Maximized)
                .forEach(m => m.status = src_app_enums_window_status_enum__WEBPACK_IMPORTED_MODULE_2__["WindowStatus"].Normal);
            window.status = src_app_enums_window_status_enum__WEBPACK_IMPORTED_MODULE_2__["WindowStatus"].Maximized;
            window.restore();
            this.focus(window);
            this.refreshGui();
        }
    }
    getScreenSize() {
        return { width: document.body.clientWidth, height: document.body.clientHeight };
    }
    getWindowPosition(id) {
        const component = this.getFromWindow(id, "component");
        if (component) {
            return component.getPosition();
        }
        return null;
    }
    setTitle(id, title) {
        const component = this.getFromWindow(id, "component");
        if (component) {
            component.title = title;
        }
    }
    centerWindow(id) {
        const component = this.getFromWindow(id, "component");
        if (component) {
            const { width, height } = component.getSize();
            const screen = this.getScreenSize();
            const x = screen.width / 2 - width / 2;
            const y = screen.height / 2 - height / 2;
            component.setPosition({ x, y });
        }
    }
    resizeWindow(id, width, height) {
        const component = this.getFromWindow(id, "component");
        if (component) {
            component.resize({ width, height });
        }
    }
    restoreWindowStatus(id) {
        const window = this.windows.find(m => m.id === id);
        if (window) {
            if (window.isMinimized()) {
                window.restore();
            }
            else {
                window.status = src_app_enums_window_status_enum__WEBPACK_IMPORTED_MODULE_2__["WindowStatus"].Normal;
            }
            this.focus(window);
            this.refreshGui();
        }
    }
    minimizeAllWindows() {
        this.windows
            .filter(m => !m.isMinimized())
            .map(m => m.id)
            .forEach(id => this.minimizeWindow(id));
    }
    minimizeWindow(id) {
        const window = this.windows.find(m => m.id === id);
        if (window) {
            window.minimize();
            this.focusFirst();
            this.refreshGui();
        }
    }
    disposeWindow(id) {
        const i = this.windows.findIndex(m => m.id === id);
        if (i >= 0) {
            this.windows.splice(i, 1);
        }
        delete this.attachments[id];
        this.focusFirst();
        this.refreshGui();
    }
    focus(window) {
        this.bringAllBack();
        window.extra.z = 100;
    }
    focusFirst() {
        const windows = this.windows.filter(m => !m.isMinimized());
        const max = src_app_helpers_math_helper__WEBPACK_IMPORTED_MODULE_5__["MathHelper"].maxItem(windows, (a, b) => a.extra.z - b.extra.z);
        if (max) {
            this.focus(max);
        }
        else {
            this.bringAllBack();
        }
    }
    bringAllBack() {
        this.windows.forEach(m => m.extra.z -= 1);
    }
    waitForCompleteLoading() {
        return src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_4__["AsyncHelper"].waitFor(() => this.visualSettings !== null);
    }
    refreshGui() {
        this.ref.tick();
    }
    loadVisualSettings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield fetch("/assets/os/windows/default-settings.json");
            this.visualSettings = yield response.json();
        });
    }
}
WindowsManagerService.idCounter = 0;
WindowsManagerService.ɵfac = function WindowsManagerService_Factory(t) { return new (t || WindowsManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"])); };
WindowsManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WindowsManagerService, factory: WindowsManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WindowsManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }]; }, null); })();


/***/ }),

/***/ "ffPV":
/*!********************************************************************!*\
  !*** ./src/app/global-components/apps/explorer/explorer.module.ts ***!
  \********************************************************************/
/*! exports provided: ExplorerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerModule", function() { return ExplorerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ "Wd5c");
/* harmony import */ var _components_explorer_side_bar_explorer_side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/explorer-side-bar/explorer-side-bar.component */ "ioej");
/* harmony import */ var _components_explorer_view_explorer_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/explorer-view/explorer-view.component */ "/ArM");
/* harmony import */ var _components_explorer_footer_explorer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/explorer-footer/explorer-footer.component */ "1MjI");
/* harmony import */ var _components_explorer_main_menu_explorer_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/explorer-main-menu/explorer-main-menu.component */ "BvH6");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");









class ExplorerModule {
}
ExplorerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExplorerModule });
ExplorerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExplorerModule_Factory(t) { return new (t || ExplorerModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExplorerModule, { declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_explorer_side_bar_explorer_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["ExplorerSideBarComponent"],
        _components_explorer_view_explorer_view_component__WEBPACK_IMPORTED_MODULE_4__["ExplorerViewComponent"],
        _components_explorer_footer_explorer_footer_component__WEBPACK_IMPORTED_MODULE_5__["ExplorerFooterComponent"],
        _components_explorer_main_menu_explorer_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["ExplorerMainMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExplorerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_explorer_side_bar_explorer_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["ExplorerSideBarComponent"],
                    _components_explorer_view_explorer_view_component__WEBPACK_IMPORTED_MODULE_4__["ExplorerViewComponent"],
                    _components_explorer_footer_explorer_footer_component__WEBPACK_IMPORTED_MODULE_5__["ExplorerFooterComponent"],
                    _components_explorer_main_menu_explorer_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["ExplorerMainMenuComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
                ], providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "hDY1":
/*!**********************************************!*\
  !*** ./src/app/services/ux/icons.service.ts ***!
  \**********************************************/
/*! exports provided: IconsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsService", function() { return IconsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/path.helper */ "lhfI");
/* harmony import */ var src_app_helpers_url_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/url.helper */ "OnDT");





class IconsService {
    constructor() {
        this.iconSet = {};
        this.load();
    }
    getIconByFormat(format) {
        if (format.includes(".")) {
            format = src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_2__["PathHelper"].getExtension(format);
        }
        format = format.trim().toLowerCase();
        switch (format) {
            case "doc":
            case "docx":
                return "file-word";
            case "txt":
                return "notepad";
            case "pdf":
                return "file-pdf";
            default:
                return "file";
        }
    }
    getIcon(name) {
        if (name && name.includes("://")) {
            return name;
        }
        if (!this.iconSet.icons[name]) {
            return null;
        }
        return src_app_helpers_url_helper__WEBPACK_IMPORTED_MODULE_3__["UrlHelper"].join(this.iconSet.base, this.iconSet.icons[name]);
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield fetch("/assets/os/icons/default-icons.json");
            this.iconSet = yield response.json();
        });
    }
}
IconsService.ɵfac = function IconsService_Factory(t) { return new (t || IconsService)(); };
IconsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IconsService, factory: IconsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IconsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hMBp":
/*!**************************************************************************************************!*\
  !*** ./src/app/global-components/apps/login/components/register-view/register-view.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: RegisterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterViewComponent", function() { return RegisterViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class RegisterViewComponent {
    constructor(authSv, theme) {
        this.authSv = authSv;
        this.theme = theme;
        this.registerSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isCaptchaValid = false;
    }
    ngOnInit() {
        /** @todo Add google recaptcha and remove the next line */
        this.captchaResolved(null);
    }
    register(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isCaptchaValid) {
                return;
            }
            const { email, password, name } = form.value;
            yield this.authSv.signUp(name, email, password);
            this.registerSuccess.emit();
        });
    }
    captchaResolved(ev) {
        this.isCaptchaValid = true;
    }
}
RegisterViewComponent.ɵfac = function RegisterViewComponent_Factory(t) { return new (t || RegisterViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"])); };
RegisterViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterViewComponent, selectors: [["app-register-view"]], outputs: { registerSuccess: "registerSuccess" }, decls: 22, vars: 13, consts: [[1, "pb-4"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["type", "text", "id", "name", "name", "name", "autocomplete", "given-name", "placeholder", "Enter your full name", "ngModel", "", "required", "", 1, "form-control"], ["type", "email", "id", "email", "name", "email", "placeholder", "Enter your e-mail", "ngModel", "", "required", "", 1, "form-control"], ["type", "password", "id", "password", "name", "password", "autocomplete", "new-password", "placeholder", "Enter your password", "ngModel", "", "required", "", 1, "form-control"], ["type", "password", "id", "confirm", "name", "confirm", "autocomplete", "new-password", "placeholder", "Repeat your password", "ngModel", "", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-block", "btn-success", 3, "disabled"]], template: function RegisterViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterViewComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return ctx.register(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Repeat your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1jb21wb25lbnRzL2FwcHMvbG9naW4vY29tcG9uZW50cy9yZWdpc3Rlci12aWV3L3JlZ2lzdGVyLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register-view',
                templateUrl: './register-view.component.html',
                styleUrls: ['./register-view.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }]; }, { registerSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "hpGe":
/*!**************************************************************!*\
  !*** ./src/app/global-components/apps/login/login.module.ts ***!
  \**************************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ "m6Yf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login-view/login-view.component */ "41Ke");
/* harmony import */ var _components_register_view_register_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register-view/register-view.component */ "hMBp");







class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_4__["LoginViewComponent"],
        _components_register_view_register_view_component__WEBPACK_IMPORTED_MODULE_5__["RegisterViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_4__["LoginViewComponent"],
                    _components_register_view_register_view_component__WEBPACK_IMPORTED_MODULE_5__["RegisterViewComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ioej":
/*!*************************************************************************************************************!*\
  !*** ./src/app/global-components/apps/explorer/components/explorer-side-bar/explorer-side-bar.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ExplorerSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerSideBarComponent", function() { return ExplorerSideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/io/vfm.service */ "Fq8c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ExplorerSideBarComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExplorerSideBarComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const drive_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectDrive(drive_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const drive_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("non-selectable pl-4 list-group-item list-group-item-action bright-12 bg-", ctx_r0.theme.bright, " text-", ctx_r0.theme.brightContrast, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", drive_r1.fullName, " ");
} }
class ExplorerSideBarComponent {
    constructor(theme, vfmSv) {
        this.theme = theme;
        this.vfmSv = vfmSv;
    }
    ngOnInit() {
    }
    get drives() {
        return this.vfmSv.allDrives;
    }
    getDrive(unit) {
        return this.vfmSv.getDrive(unit);
    }
    selectDrive(drive) {
        this.select(`${drive.unit}:`);
    }
    select(path) {
        this.explorerManager.cwd = path;
    }
}
ExplorerSideBarComponent.ɵfac = function ExplorerSideBarComponent_Factory(t) { return new (t || ExplorerSideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_2__["VfmService"])); };
ExplorerSideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExplorerSideBarComponent, selectors: [["app-explorer-side-bar"]], inputs: { explorerManager: "explorerManager" }, decls: 5, vars: 13, consts: [["href", "javascript:;", 3, "class", "click", 4, "ngFor", "ngForOf"], ["href", "javascript:;", 3, "click"]], template: function ExplorerSideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExplorerSideBarComponent_a_4_Template, 2, 5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("list-group list-group-flush full-size bg-", ctx.theme.bright, " text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("list-group-item bright-12 non-selectable bg-", ctx.theme.bright, " text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("list-group list-group-flush full-size non-selectable bg-", ctx.theme.bright, " text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drives);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".list-group-item[_ngcontent-%COMP%] {\n  padding-top: 0.1em;\n  padding-bottom: 0.1em;\n}\n\nul[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvYXBwcy9leHBsb3Jlci9jb21wb25lbnRzL2V4cGxvcmVyLXNpZGUtYmFyL2V4cGxvcmVyLXNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1jb21wb25lbnRzL2FwcHMvZXhwbG9yZXIvY29tcG9uZW50cy9leHBsb3Jlci1zaWRlLWJhci9leHBsb3Jlci1zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIHBhZGRpbmctdG9wOiAwLjFlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC4xZW07XHJcbn1cclxuXHJcbnVsIHtcclxuICBmb250LXNpemU6MC45ZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExplorerSideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-explorer-side-bar',
                templateUrl: './explorer-side-bar.component.html',
                styleUrls: ['./explorer-side-bar.component.scss']
            }]
    }], function () { return [{ type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }, { type: src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_2__["VfmService"] }]; }, { explorerManager: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _desktop_desktop_layer_desktop_layer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desktop/desktop-layer/desktop-layer.component */ "5XBF");
/* harmony import */ var _global_components_global_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global-components/global-components.module */ "Bie7");
/* harmony import */ var _desktop_windows_layer_windows_layer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desktop/windows-layer/windows-layer.component */ "7jqN");
/* harmony import */ var _desktop_window_window_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desktop/window/window.component */ "AwQX");
/* harmony import */ var _desktop_window_contents_iframe_content_iframe_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desktop/window-contents/iframe-content/iframe-content.component */ "J9Zp");
/* harmony import */ var _ux_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ux/context-menu/context-menu.component */ "33ZA");
/* harmony import */ var _desktop_launcher_launcher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./desktop/launcher/launcher.component */ "DwXz");
/* harmony import */ var _desktop_main_tool_bar_main_tool_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./desktop/main-tool-bar/main-tool-bar.component */ "3kRQ");
/* harmony import */ var _desktop_wallpaper_wallpaper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./desktop/wallpaper/wallpaper.component */ "cPxC");
/* harmony import */ var _desktop_window_in_bar_window_in_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./desktop/window-in-bar/window-in-bar.component */ "4Xcz");
/* harmony import */ var _directives_dynamic_component_container_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/dynamic-component-container.directive */ "EUjl");
/* harmony import */ var _ux_resizable_draggable_resizable_draggable_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ux/resizable-draggable/resizable-draggable.component */ "QMuA");
/* harmony import */ var _desktop_modals_layer_modals_layer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./desktop/modals-layer/modals-layer.component */ "VS2T");
/* harmony import */ var _desktop_start_menu_start_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./desktop/start-menu/start-menu.component */ "x5vE");
/* harmony import */ var _desktop_start_menu_layer_start_menu_layer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./desktop/start-menu-layer/start-menu-layer.component */ "7U3q");


















class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _global_components_global_components_module__WEBPACK_IMPORTED_MODULE_3__["GlobalComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_desktop_desktop_layer_desktop_layer_component__WEBPACK_IMPORTED_MODULE_2__["DesktopLayerComponent"],
        _desktop_windows_layer_windows_layer_component__WEBPACK_IMPORTED_MODULE_4__["WindowsLayerComponent"],
        _desktop_window_window_component__WEBPACK_IMPORTED_MODULE_5__["WindowComponent"],
        _desktop_window_contents_iframe_content_iframe_content_component__WEBPACK_IMPORTED_MODULE_6__["IframeContentComponent"],
        _ux_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_7__["ContextMenuComponent"],
        _desktop_main_tool_bar_main_tool_bar_component__WEBPACK_IMPORTED_MODULE_9__["MainToolBarComponent"],
        _desktop_wallpaper_wallpaper_component__WEBPACK_IMPORTED_MODULE_10__["WallpaperComponent"],
        _desktop_launcher_launcher_component__WEBPACK_IMPORTED_MODULE_8__["LauncherComponent"],
        _ux_resizable_draggable_resizable_draggable_component__WEBPACK_IMPORTED_MODULE_13__["ResizableDraggableComponent"],
        _directives_dynamic_component_container_directive__WEBPACK_IMPORTED_MODULE_12__["DynamicComponentContainerDirective"],
        _desktop_window_in_bar_window_in_bar_component__WEBPACK_IMPORTED_MODULE_11__["WindowInBarComponent"],
        _desktop_modals_layer_modals_layer_component__WEBPACK_IMPORTED_MODULE_14__["ModalsLayerComponent"],
        _desktop_start_menu_start_menu_component__WEBPACK_IMPORTED_MODULE_15__["StartMenuComponent"],
        _desktop_start_menu_layer_start_menu_layer_component__WEBPACK_IMPORTED_MODULE_16__["StartMenuLayerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _global_components_global_components_module__WEBPACK_IMPORTED_MODULE_3__["GlobalComponentsModule"]], exports: [_desktop_desktop_layer_desktop_layer_component__WEBPACK_IMPORTED_MODULE_2__["DesktopLayerComponent"],
        _desktop_windows_layer_windows_layer_component__WEBPACK_IMPORTED_MODULE_4__["WindowsLayerComponent"],
        _desktop_window_window_component__WEBPACK_IMPORTED_MODULE_5__["WindowComponent"],
        _desktop_window_contents_iframe_content_iframe_content_component__WEBPACK_IMPORTED_MODULE_6__["IframeContentComponent"],
        _ux_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_7__["ContextMenuComponent"],
        _desktop_main_tool_bar_main_tool_bar_component__WEBPACK_IMPORTED_MODULE_9__["MainToolBarComponent"],
        _desktop_wallpaper_wallpaper_component__WEBPACK_IMPORTED_MODULE_10__["WallpaperComponent"],
        _desktop_launcher_launcher_component__WEBPACK_IMPORTED_MODULE_8__["LauncherComponent"],
        _ux_resizable_draggable_resizable_draggable_component__WEBPACK_IMPORTED_MODULE_13__["ResizableDraggableComponent"],
        _directives_dynamic_component_container_directive__WEBPACK_IMPORTED_MODULE_12__["DynamicComponentContainerDirective"],
        _desktop_window_in_bar_window_in_bar_component__WEBPACK_IMPORTED_MODULE_11__["WindowInBarComponent"],
        _desktop_modals_layer_modals_layer_component__WEBPACK_IMPORTED_MODULE_14__["ModalsLayerComponent"],
        _desktop_start_menu_layer_start_menu_layer_component__WEBPACK_IMPORTED_MODULE_16__["StartMenuLayerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _desktop_desktop_layer_desktop_layer_component__WEBPACK_IMPORTED_MODULE_2__["DesktopLayerComponent"],
                    _desktop_windows_layer_windows_layer_component__WEBPACK_IMPORTED_MODULE_4__["WindowsLayerComponent"],
                    _desktop_window_window_component__WEBPACK_IMPORTED_MODULE_5__["WindowComponent"],
                    _desktop_window_contents_iframe_content_iframe_content_component__WEBPACK_IMPORTED_MODULE_6__["IframeContentComponent"],
                    _ux_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_7__["ContextMenuComponent"],
                    _desktop_main_tool_bar_main_tool_bar_component__WEBPACK_IMPORTED_MODULE_9__["MainToolBarComponent"],
                    _desktop_wallpaper_wallpaper_component__WEBPACK_IMPORTED_MODULE_10__["WallpaperComponent"],
                    _desktop_launcher_launcher_component__WEBPACK_IMPORTED_MODULE_8__["LauncherComponent"],
                    _ux_resizable_draggable_resizable_draggable_component__WEBPACK_IMPORTED_MODULE_13__["ResizableDraggableComponent"],
                    _directives_dynamic_component_container_directive__WEBPACK_IMPORTED_MODULE_12__["DynamicComponentContainerDirective"],
                    _desktop_window_in_bar_window_in_bar_component__WEBPACK_IMPORTED_MODULE_11__["WindowInBarComponent"],
                    _desktop_modals_layer_modals_layer_component__WEBPACK_IMPORTED_MODULE_14__["ModalsLayerComponent"],
                    _desktop_start_menu_start_menu_component__WEBPACK_IMPORTED_MODULE_15__["StartMenuComponent"],
                    _desktop_start_menu_layer_start_menu_layer_component__WEBPACK_IMPORTED_MODULE_16__["StartMenuLayerComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _global_components_global_components_module__WEBPACK_IMPORTED_MODULE_3__["GlobalComponentsModule"]
                ],
                exports: [
                    _desktop_desktop_layer_desktop_layer_component__WEBPACK_IMPORTED_MODULE_2__["DesktopLayerComponent"],
                    _desktop_windows_layer_windows_layer_component__WEBPACK_IMPORTED_MODULE_4__["WindowsLayerComponent"],
                    _desktop_window_window_component__WEBPACK_IMPORTED_MODULE_5__["WindowComponent"],
                    _desktop_window_contents_iframe_content_iframe_content_component__WEBPACK_IMPORTED_MODULE_6__["IframeContentComponent"],
                    _ux_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_7__["ContextMenuComponent"],
                    _desktop_main_tool_bar_main_tool_bar_component__WEBPACK_IMPORTED_MODULE_9__["MainToolBarComponent"],
                    _desktop_wallpaper_wallpaper_component__WEBPACK_IMPORTED_MODULE_10__["WallpaperComponent"],
                    _desktop_launcher_launcher_component__WEBPACK_IMPORTED_MODULE_8__["LauncherComponent"],
                    _ux_resizable_draggable_resizable_draggable_component__WEBPACK_IMPORTED_MODULE_13__["ResizableDraggableComponent"],
                    _directives_dynamic_component_container_directive__WEBPACK_IMPORTED_MODULE_12__["DynamicComponentContainerDirective"],
                    _desktop_window_in_bar_window_in_bar_component__WEBPACK_IMPORTED_MODULE_11__["WindowInBarComponent"],
                    _desktop_modals_layer_modals_layer_component__WEBPACK_IMPORTED_MODULE_14__["ModalsLayerComponent"],
                    _desktop_start_menu_layer_start_menu_layer_component__WEBPACK_IMPORTED_MODULE_16__["StartMenuLayerComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "j2TA":
/*!****************************************************************!*\
  !*** ./src/app/global-components/apps/viewer/viewer.module.ts ***!
  \****************************************************************/
/*! exports provided: ViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerModule", function() { return ViewerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ "t1qS");
/* harmony import */ var _components_iframe_view_iframe_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/iframe-view/iframe-view.component */ "ekpT");
/* harmony import */ var _components_markdown_view_markdown_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/markdown-view/markdown-view.component */ "1pNT");






class ViewerModule {
}
ViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewerModule });
ViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewerModule_Factory(t) { return new (t || ViewerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewerModule, { declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_iframe_view_iframe_view_component__WEBPACK_IMPORTED_MODULE_3__["IframeViewComponent"], _components_markdown_view_markdown_view_component__WEBPACK_IMPORTED_MODULE_4__["MarkdownViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_iframe_view_iframe_view_component__WEBPACK_IMPORTED_MODULE_3__["IframeViewComponent"], _components_markdown_view_markdown_view_component__WEBPACK_IMPORTED_MODULE_4__["MarkdownViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jNZR":
/*!**********************************************************************!*\
  !*** ./src/app/global-components/apps/terminal/app/app.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_base_application_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base/application-base */ "PZtw");
/* harmony import */ var _viewer_classes_js_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../viewer/classes/js-loader */ "Scym");
/* harmony import */ var src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/os/windows-manager.service */ "fCXL");
/* harmony import */ var src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/io/vfm.service */ "Fq8c");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");








class AppComponent extends src_app_base_application_base__WEBPACK_IMPORTED_MODULE_2__["ApplicationBase"] {
    constructor(windowsSv, vfm, theme) {
        super();
        this.windowsSv = windowsSv;
        this.vfm = vfm;
        this.theme = theme;
        this.scriptsLoaded = 0;
        this.scripts = [
            "https://cdnjs.cloudflare.com/ajax/libs/xterm/3.14.5/xterm.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/xterm/3.14.5/xterm.min.js"
        ];
    }
    ngOnInit() {
    }
    get isLoading() {
        return this.scriptsLoaded < this.scripts.length;
    }
    get loadProgress() {
        return Math.round(this.scriptsLoaded * 100 / this.scripts.length);
    }
    start(data, windowId) {
        this.windowId = windowId;
        this.windowsSv.setTitle(windowId, "Terminal");
        if (this.windowsSv.getScreenSize().width > 1024) {
            this.windowsSv.resizeWindow(windowId, 1024, 400);
        }
        this.windowsSv.centerWindow(windowId);
        this.load();
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = _viewer_classes_js_loader__WEBPACK_IMPORTED_MODULE_3__["JsLoader"].loadAll(this.scripts);
            for (const promise of promises) {
                yield promise;
                ++this.scriptsLoaded;
            }
            this.initXterm();
        });
    }
    initXterm() {
        this.terminal = new (window.Terminal)();
        this.terminal.open(document.getElementById(`terminal-${this.windowId}`));
        this.terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_4__["WindowsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_5__["VfmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-app"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[1, "main-app", "container-fluid", "full-size", "p-2", 3, "id"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "terminal-", ctx.windowId, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1jb21wb25lbnRzL2FwcHMvdGVybWluYWwvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_4__["WindowsManagerService"] }, { type: src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_5__["VfmService"] }, { type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "jj8D":
/*!*****************************************!*\
  !*** ./src/app/models/io/file-model.ts ***!
  \*****************************************/
/*! exports provided: FileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModel", function() { return FileModel; });
class FileModel {
    constructor(base) {
        this.setDefaultSecuritySettings();
        if (base) {
            Object.assign(this, base);
            if (!this.icon && this.properties && this.properties.isDirectory) {
                this.icon = "folder";
            }
        }
    }
    getName() {
        const p = this.path.split("/");
        let name = p[p.length - 1].trim();
        if (name.includes(".")) {
            name = name.substr(0, name.indexOf("."));
        }
        return name;
    }
    setDefaultSecuritySettings() {
        this.security = {
            authentication: false,
            readOnly: false
        };
    }
}


/***/ }),

/***/ "kDys":
/*!*****************************************************************************!*\
  !*** ./src/app/global-components/apps/explorer/classes/explorer-manager.ts ***!
  \*****************************************************************************/
/*! exports provided: ExplorerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerManager", function() { return ExplorerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/path.helper */ "lhfI");


class ExplorerManager {
    constructor() {
        this.current = null;
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get cwd() {
        return this.current;
    }
    set cwd(v) {
        this.current = v;
        this.changeEvent.emit();
    }
    navigateTo(directory) {
        if (directory && (directory[0] === "/" || directory.includes(":/"))) {
            this.cwd = directory;
        }
        else {
            this.cwd = src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_1__["PathHelper"].join(this.cwd, directory);
        }
    }
}


/***/ }),

/***/ "kcQL":
/*!*******************************************************!*\
  !*** ./src/app/drivers/io/firebase-storage-driver.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseStorageDriver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseStorageDriver", function() { return FirebaseStorageDriver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_models_io_file_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/io/file-model */ "jj8D");
/* harmony import */ var src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ux/icons.service */ "hDY1");





class FirebaseStorageDriver {
    constructor() {
        this.root = "";
    }
    mount(unit, settingsUrl, injector) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authSv = this.authSv || injector.get(src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
            this.storage = this.storage || injector.get(_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]);
            this.iconSv = this.iconSv || injector.get(src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_4__["IconsService"]);
            const response = yield fetch(settingsUrl);
            const settings = yield response.json();
            this.root = settings.root;
            this.structure = settings.structure;
            if (this.root.includes("$userId")) {
                if (!this.authSv.isLogged) {
                    throw new Error("You must be logged to mount this unit.");
                }
                this.root = this.root.split("$userId").join(this.authSv.user.id);
            }
        });
    }
    isReadOnly() {
        return false;
    }
    getDriveType() {
        return "Firebase Storage";
    }
    exists(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this.getRef(path);
            return new Promise((resolve) => {
                ref.getDownloadURL().subscribe(() => {
                    resolve(true);
                }, _ => {
                    resolve(false);
                });
            });
        });
    }
    rmdir(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this.getRef(path);
            yield ref.delete().toPromise();
        });
    }
    unlink(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this.getRef(path);
            yield ref.delete().toPromise();
        });
    }
    pathToFirebasePath(path) {
        let adaptedPath;
        if (path.indexOf(":/") !== -1) {
            adaptedPath = path.substr(path.indexOf(":/") + 2);
        }
        else if (path.indexOf(":") !== -1) {
            adaptedPath = path.substr(path.indexOf(":") + 1);
        }
        else {
            adaptedPath = path;
        }
        return adaptedPath;
    }
    list(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const adaptedPath = this.pathToFirebasePath(path);
            if (adaptedPath === "") {
                return Object.keys(this.structure).map(k => {
                    const file = new src_app_models_io_file_model__WEBPACK_IMPORTED_MODULE_3__["FileModel"]({
                        icon: "folder",
                        path: path + "/" + k,
                        size: 0,
                        security: this.structure[k].security,
                        properties: {
                            isDirectory: true
                        }
                    });
                    return file;
                });
            }
            // console.log("List", path, this.root + "/" + adaptedPath);
            const ref = this.storage.ref(this.root + "/" + adaptedPath);
            const all = yield ref.listAll().toPromise();
            const files = [];
            for (const folderRef of all.prefixes) {
                const file = new src_app_models_io_file_model__WEBPACK_IMPORTED_MODULE_3__["FileModel"]();
                file.path = folderRef.name;
                file.security = {
                    authentication: true,
                    readOnly: false
                };
                file.icon = "folder";
                file.size = 1;
                file.properties = {
                    isDirectory: true
                };
                files.push(file);
            }
            for (const itemRef of all.items) {
                const file = new src_app_models_io_file_model__WEBPACK_IMPORTED_MODULE_3__["FileModel"]();
                file.path = this.root + "/" + itemRef.fullPath;
                file.security = {
                    authentication: true,
                    readOnly: false
                };
                let meta = yield itemRef.getMetadata();
                if (!meta) {
                    meta = {};
                }
                /** @todo Assign icons shouldn't be responsability of the driver */
                file.icon = this.iconSv.getIconByFormat(file.path);
                file.size = meta.size || 1;
                file.properties = {
                    isDirectory: false
                };
                files.push(file);
            }
            return files;
        });
    }
    readTextFile(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this.getRef(path);
            const url = yield ref.getDownloadURL().toPromise();
            const content = yield this.downloadTextFile(url);
            return content;
        });
    }
    writeTextFile(path, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this.getRef(path);
            yield ref.putString(content, "raw", { contentType: "text/plain" });
        });
    }
    getRef(path) {
        const adaptedPath = this.pathToFirebasePath(path);
        const ref = this.storage.ref(this.root + "/" + adaptedPath);
        return ref;
    }
    downloadTextFile(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'text';
                xhr.onload = () => resolve(xhr.response);
                xhr.onerror = err => reject(err);
                xhr.open('GET', url);
                xhr.send();
            });
        });
    }
}


/***/ }),

/***/ "lhfI":
/*!****************************************!*\
  !*** ./src/app/helpers/path.helper.ts ***!
  \****************************************/
/*! exports provided: PathHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathHelper", function() { return PathHelper; });
class PathHelper {
    static getName(path) {
        let normalized = PathHelper.normalize(path);
        if (normalized.includes("/")) {
            normalized = normalized.substr(normalized.lastIndexOf("/") + 1);
        }
        return normalized;
    }
    static join(...args) {
        const normalized = args.map(m => {
            let name = PathHelper.normalize(m);
            if (name.startsWith("./")) {
                name = name.substr(2);
            }
            while (name.endsWith("/")) {
                name = name.substr(0, name.length - 1);
            }
            return name;
        }).filter(m => m && m !== "");
        let final = "";
        // let unit = null;
        for (let i = 0; i < normalized.length; i++) {
            const n = normalized[i];
            if (final !== "") {
                final += "/";
            }
            // else if (n.includes(":")) {
            //   unit = n;
            // }
            // if (n.startsWith("/")) {
            //   final = unit + "/" + n;
            // }
            // else 
            if (n.startsWith("/") || n.includes(":/")) {
                final = n;
            }
            else if (n.startsWith("./")) {
                final = n.substr(2);
            }
            else if (n.startsWith("../")) {
                if (final.includes("/")) {
                    final = final.substr(0, final.lastIndexOf("/"));
                }
                final += n.substr(3);
            }
            else {
                final += n;
            }
        }
        return final;
    }
    static getAbsolutePath(path, cwd) {
        /** @todo Get the absolute path */
        let finalPath = this.normalize(path);
        if (finalPath[0] !== "/") {
            finalPath = "/" + finalPath;
        }
        if (cwd && cwd.split("/")[0] && cwd.split("/")[0].includes(":") &&
            finalPath.startsWith("/")) {
            const unit = cwd.substr(0, cwd.indexOf(":") + 1);
            finalPath = unit + finalPath;
        }
        return finalPath;
    }
    static getExtension(path) {
        if (!path || path === "") {
            return "";
        }
        const format = path.substr(path.lastIndexOf(".") + 1).toLowerCase();
        return format;
    }
    static normalize(path) {
        let finalPath = path;
        if (finalPath.endsWith("/")) {
            finalPath = finalPath.substr(0, finalPath.length - 1);
        }
        finalPath = finalPath
            .split("\\")
            .join("/")
            .split("/")
            // .filter(m => m && m.trim() !== "") /** @todo This is causing a bug (it deletes the first /) */
            .join("/");
        return finalPath;
    }
}


/***/ }),

/***/ "m6Yf":
/*!*******************************************************************!*\
  !*** ./src/app/global-components/apps/login/app/app.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_base_application_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base/application-base */ "PZtw");
/* harmony import */ var src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/os/windows-manager.service */ "fCXL");
/* harmony import */ var _components_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/login-view/login-view.component */ "41Ke");
/* harmony import */ var _components_register_view_register_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/register-view/register-view.component */ "hMBp");






class AppComponent extends src_app_base_application_base__WEBPACK_IMPORTED_MODULE_1__["ApplicationBase"] {
    constructor(windowsSv) {
        super();
        this.windowsSv = windowsSv;
        this.activeTab = 0;
    }
    ngOnInit() {
    }
    start(data, windowId) {
        this.windowId = windowId;
        this.windowsSv.setTitle(windowId, "Authentication");
    }
    loginSuccess(user) {
        this.windowsSv.disposeWindow(this.windowId);
    }
    registerSuccess() {
        this.windowsSv.disposeWindow(this.windowId);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_2__["WindowsManagerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-app"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 6, consts: [[1, "main-container", "full-size", "p-2"], [1, "nav", "nav-pills", "nav-fill"], [1, "nav-item"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [3, "hidden", "loginSuccess"], [3, "hidden", "registerSuccess"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_3_listener() { return ctx.activeTab = 0; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_6_listener() { return ctx.activeTab = 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-login-view", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginSuccess", function AppComponent_Template_app_login_view_loginSuccess_9_listener($event) { return ctx.loginSuccess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-register-view", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("registerSuccess", function AppComponent_Template_app_register_view_registerSuccess_10_listener() { return ctx.registerSuccess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeTab === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activeTab === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.activeTab !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.activeTab !== 1);
    } }, directives: [_components_login_view_login_view_component__WEBPACK_IMPORTED_MODULE_3__["LoginViewComponent"], _components_register_view_register_view_component__WEBPACK_IMPORTED_MODULE_4__["RegisterViewComponent"]], styles: [".main-container[_ngcontent-%COMP%] {\n  min-height: 300px;\n  min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvYXBwcy9sb2dpbi9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvYXBwcy9sb2dpbi9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyICB7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_2__["WindowsManagerService"] }]; }, null); })();


/***/ }),

/***/ "mD+4":
/*!*************************************************************!*\
  !*** ./src/app/services/process/launchers/void-launcher.ts ***!
  \*************************************************************/
/*! exports provided: VoidLauncher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoidLauncher", function() { return VoidLauncher; });
class VoidLauncher {
    launch(_file, _content, settings) {
        alert("No suitable launcher found for the file type.");
        return Promise.resolve(1);
    }
}


/***/ }),

/***/ "mY9l":
/*!***********************************************!*\
  !*** ./src/app/services/ux/dialog.service.ts ***!
  \***********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_helpers_animation_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/animation.helper */ "0Iag");




class DialogService {
    constructor() {
        this.modals = [];
    }
    get hasModals() {
        return this.modals.length > 0;
    }
    get visibleModals() {
        return this.modals;
    }
    get currentModal() {
        return this.visibleModals[this.visibleModals.length - 1];
    }
    get modalElement() {
        return this.getModalElement(this.currentModal.id);
    }
    getModalElement(id) {
        return document.getElementById(`modal_${id}`);
    }
    closeModal(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!id) {
                yield src_app_helpers_animation_helper__WEBPACK_IMPORTED_MODULE_2__["AnimationHelper"].animate(this.modalElement, "fadeOutUpBig");
                this.modals.pop();
            }
            else {
                const element = this.getModalElement(id);
                if (element) {
                    yield src_app_helpers_animation_helper__WEBPACK_IMPORTED_MODULE_2__["AnimationHelper"].animate(element, "fadeOutUpBig");
                }
                this.modals.splice(this.modals.findIndex(m => m.id === id), 1);
            }
        });
    }
    show(modal) {
        modal.id = modal.id || (new Date().getTime() + "");
        this.modals.push(modal);
        return modal.id;
    }
    showAndWait(modal) {
        return new Promise((resolve) => {
            const originalCb = modal.cb;
            const cb = (result) => {
                if (originalCb) {
                    setTimeout(() => originalCb(result), 1);
                }
                resolve(result);
            };
            modal.id = modal.id || (new Date().getTime() + "");
            modal.cb = cb;
            this.modals.push(modal);
        });
    }
    error(message, title = "Error") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showAndWait({
                title,
                message,
                okButton: "Dismiss",
                type: "danger",
                cb: null
            });
        });
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qF/2":
/*!******************************************************************!*\
  !*** ./src/app/services/process/launchers/local-app-launcher.ts ***!
  \******************************************************************/
/*! exports provided: LocalAppLauncher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalAppLauncher", function() { return LocalAppLauncher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/path.helper */ "lhfI");


class LocalAppLauncher {
    constructor(windowsMgr, dynamicAppLoader) {
        this.windowsMgr = windowsMgr;
        this.dynamicAppLoader = dynamicAppLoader;
    }
    static registerApp(protocol, module, assotiations) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            LocalAppLauncher.registeredApps[protocol] = module;
            if (assotiations) {
                assotiations.forEach(k => LocalAppLauncher.formatAssotiations[k] = protocol);
            }
        });
    }
    launchByFormat(file, content, settings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let appUrl = LocalAppLauncher.formatAssotiations[src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_1__["PathHelper"].getExtension(file.path)];
            if (!appUrl) {
                appUrl = LocalAppLauncher.formatAssotiations["*"];
            }
            // const finalSettings: ILaunchSettings = settings || { args: [] };
            /** @todo Maybe the content should not be readed previously */
            // finalSettings.args.push("--content");
            // finalSettings.args.push(content);
            return this.launch(file, appUrl, settings);
        });
    }
    launch(file, url, settings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const module = LocalAppLauncher.loadedApps[url] || LocalAppLauncher.registeredApps[url];
            if (!module) {
                throw new Error("Module not found.");
            }
            const componentFactory = yield this.dynamicAppLoader.loadComponentFactoryFromModule(module);
            if (!componentFactory) {
                throw new Error("The module could not be loaded.");
            }
            const window = this.windowsMgr.createWindow(file.getName(), file.icon);
            window.overflow = true;
            const finalSettings = settings || { args: [] };
            const absPath = src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_1__["PathHelper"].getAbsolutePath(file.path, finalSettings.cwd);
            finalSettings.args.unshift(absPath);
            window.content = {
                component: componentFactory,
                data: finalSettings
            };
            this.windowsMgr.addWindow(window);
            return window.id;
        });
    }
}
LocalAppLauncher.loadedApps = {};
LocalAppLauncher.registeredApps = {};
LocalAppLauncher.formatAssotiations = {};


/***/ }),

/***/ "t1qS":
/*!********************************************************************!*\
  !*** ./src/app/global-components/apps/viewer/app/app.component.ts ***!
  \********************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_base_application_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base/application-base */ "PZtw");
/* harmony import */ var src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/path.helper */ "lhfI");
/* harmony import */ var _classes_js_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/js-loader */ "Scym");
/* harmony import */ var src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/os/windows-manager.service */ "fCXL");
/* harmony import */ var src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/io/vfm.service */ "Fq8c");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_markdown_view_markdown_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/markdown-view/markdown-view.component */ "1pNT");











function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("width: ", ctx_r0.loadProgress, "%");
} }
function AppComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "object", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "embed", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("data", ctx_r2.currentFile, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("type", "application/", ctx_r2.currentFormat, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.currentFile, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("type", "application/", ctx_r2.currentFormat, "");
} }
function AppComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-markdown-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r3.fileContent);
} }
function AppComponent_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate2"]("full-size bg-", ctx_r4.theme.bright, " text-", ctx_r4.theme.brightContrast, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r4.fileContent);
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_2_ng_container_1_Template, 3, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_2_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_2_ng_container_3_Template, 2, 5, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.viewComponent === "object");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.viewComponent === "markdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.viewComponent === "raw");
} }
class AppComponent extends src_app_base_application_base__WEBPACK_IMPORTED_MODULE_2__["ApplicationBase"] {
    constructor(windowsSv, vfm, theme) {
        super();
        this.windowsSv = windowsSv;
        this.vfm = vfm;
        this.theme = theme;
        this.currentFile = null;
        this.fileContent = "";
        this.download = false;
        this.scriptsLoaded = 0;
        this.scripts = [
            "https://cdn.jsdelivr.net/npm/marked/marked.min.js"
        ];
    }
    ngOnInit() {
    }
    get currentFormat() {
        if (this.currentFile && this.currentFile.includes(".")) {
            return src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_3__["PathHelper"].getExtension(this.currentFile);
        }
        return null;
    }
    get viewComponent() {
        switch (this.currentFormat) {
            case "pdf":
                return "object";
            case "md":
                return "markdown";
            case "html":
                return "iframe";
            default:
                return "raw";
        }
    }
    get isLoading() {
        return this.scriptsLoaded < this.scripts.length;
    }
    get loadProgress() {
        return Math.round(this.scriptsLoaded * 100 / this.scripts.length);
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = this.scripts.map(m => _classes_js_loader__WEBPACK_IMPORTED_MODULE_4__["JsLoader"].loadScript(m));
            if (this.viewComponent === "markdown" || this.viewComponent === "raw") {
                promises.push(new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.readFileContent(this.currentFile).then(content => {
                        this.fileContent = content;
                        resolve();
                    }, err => {
                        reject(err);
                    });
                })));
            }
            for (const promise of promises) {
                yield promise;
                ++this.scriptsLoaded;
            }
        });
    }
    start(data, windowId) {
        let path = "";
        const { args = [] } = data || {};
        for (let i = 0; i < args.length; i++) {
            if (args[i] === "--download") {
                this.download = true;
            }
            else {
                path = args[i];
            }
        }
        if (!this.download && data.cwd) {
            path = src_app_helpers_path_helper__WEBPACK_IMPORTED_MODULE_3__["PathHelper"].join(data.cwd, path);
        }
        this.windowsSv.setTitle(windowId, `Viewer: ${path}`);
        this.currentFile = path;
        if (this.windowsSv.getScreenSize().width > 1024) {
            this.windowsSv.resizeWindow(windowId, 1024, 400);
        }
        this.windowsSv.centerWindow(windowId);
        this.load();
    }
    readFileContent(currentFile) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.download) {
                const request = yield fetch(currentFile);
                return yield request.text();
            }
            else {
                return yield this.vfm.readTextFile(currentFile);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_5__["WindowsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_6__["VfmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-app"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[1, "container-fluid", "box", "d-flex", "flex-column", "pb-3", "pt-2", "full-size"], [4, "ngIf"], ["class", "full-size", 4, "ngIf"], [1, "progress"], ["role", "progressbar", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated"], [1, "full-size"], [3, "data", "type"], [3, "src", "type"], [3, "content"], ["readonly", "", 3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_2_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_markdown_view_markdown_view_component__WEBPACK_IMPORTED_MODULE_9__["MarkdownViewComponent"]], styles: ["textarea[_ngcontent-%COMP%] {\n  border: none;\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvYXBwcy92aWV3ZXIvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtY29tcG9uZW50cy9hcHBzL3ZpZXdlci9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_5__["WindowsManagerService"] }, { type: src_app_services_io_vfm_service__WEBPACK_IMPORTED_MODULE_6__["VfmService"] }, { type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "ukVy":
/*!***************************************************************!*\
  !*** ./src/app/services/process/launchers/iframe-launcher.ts ***!
  \***************************************************************/
/*! exports provided: IframeLauncher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeLauncher", function() { return IframeLauncher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/async.helper */ "GLSI");
/* harmony import */ var src_app_components_desktop_window_contents_iframe_content_iframe_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/desktop/window-contents/iframe-content/iframe-content.component */ "J9Zp");



class IframeLauncher {
    constructor(windowsMgr, vfm) {
        this.windowsMgr = windowsMgr;
        this.vfm = vfm;
    }
    launch(file, path, settings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const content = yield this.vfm.readTextFile(path);
            const data = JSON.parse(content);
            yield src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_1__["AsyncHelper"].wait(1000);
            const window = this.windowsMgr.createWindow(data.title, file.icon);
            window.content = {
                component: src_app_components_desktop_window_contents_iframe_content_iframe_content_component__WEBPACK_IMPORTED_MODULE_2__["IframeContentComponent"],
                data
            };
            this.windowsMgr.addWindow(window);
            return window.id;
        });
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_boot_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/boot.guard */ "ZBVb");
/* harmony import */ var _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/layout/layout.component */ "PGY2");






const routes = [{
        path: '',
        children: [
            {
                path: "",
                redirectTo: "boot",
                pathMatch: "full"
            },
            {
                path: "boot",
                component: _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
                loadChildren: () => __webpack_require__.e(/*! import() | pages-boot-boot-module */ "pages-boot-boot-module").then(__webpack_require__.bind(null, /*! ./pages/boot/boot.module */ "kJrg")).then(m => m.BootModule)
            }
        ]
    }, {
        path: 'home',
        canActivate: [_guards_boot_guard__WEBPACK_IMPORTED_MODULE_2__["BootGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomeModule),
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vhBa":
/*!**************************************************************************!*\
  !*** ./src/app/global-components/apps/user-profile/app/app.component.ts ***!
  \**************************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_base_application_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base/application-base */ "PZtw");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/os/windows-manager.service */ "fCXL");
/* harmony import */ var src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ux/icons.service */ "hDY1");
/* harmony import */ var src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/process/shell.service */ "9G8U");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function AppComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-", ctx_r0.theme.brightContrast, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.email);
} }
function AppComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign in / sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.locked);
} }
class AppComponent extends src_app_base_application_base__WEBPACK_IMPORTED_MODULE_2__["ApplicationBase"] {
    constructor(sanitizer, windowsSv, iconSv, shell, authSv, theme) {
        super();
        this.sanitizer = sanitizer;
        this.windowsSv = windowsSv;
        this.iconSv = iconSv;
        this.shell = shell;
        this.authSv = authSv;
        this.theme = theme;
        this.locked = false;
        this.lastPicture = "";
        this.pictureUrl = null;
    }
    ngOnInit() {
    }
    get isLocked() {
        return this.locked;
    }
    get isLogged() {
        return this.authSv.isLogged;
    }
    get email() {
        return this.authSv.user.email;
    }
    get picture() {
        const target = (this.isLogged ? this.authSv.user.pictureUrl : this.iconSv.getIcon("user")) || this.iconSv.getIcon("user");
        if (this.lastPicture !== target) {
            this.lastPicture = target;
            if (this.isLogged) {
                this.pictureUrl = this.sanitizer.bypassSecurityTrustUrl(target);
            }
            else {
                this.pictureUrl = target;
            }
        }
        return this.pictureUrl;
    }
    get userName() {
        return this.authSv.isLogged ? this.authSv.user.name : "Guest";
    }
    start(_data, windowId) {
        this.windowId = windowId;
        this.windowsSv.centerWindow(windowId);
        this.windowsSv.setTitle(windowId, "User profile");
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.locked = true;
            try {
                this.windowsSv.disableWindow(this.windowId);
                yield this.shell.assertSession();
            }
            finally {
                this.locked = false;
                this.windowsSv.enableWindow(this.windowId);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_4__["WindowsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_5__["IconsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_6__["ShellService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_8__["ThemeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-app"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 7, consts: [[1, "main-app", "container-fluid", "full-size", "p-2"], [1, "row", "m-0"], [1, "col-md-4", "pr-2"], [1, "picture", 3, "src"], [1, "col-md-8"], [4, "ngIf"], ["class", "btn btn-success", 3, "disabled", "click", 4, "ngIf"], [1, "pl-2"], [1, "btn", "btn-success", 3, "disabled", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_ng_container_7_Template, 4, 4, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_button_8_Template, 2, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.picture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogged);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".main-app[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\n.picture[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvYXBwcy91c2VyLXByb2ZpbGUvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtY29tcG9uZW50cy9hcHBzL3VzZXItcHJvZmlsZS9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYXBwIHtcclxuICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuLnBpY3R1cmUge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: src_app_services_os_windows_manager_service__WEBPACK_IMPORTED_MODULE_4__["WindowsManagerService"] }, { type: src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_5__["IconsService"] }, { type: src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_6__["ShellService"] }, { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_8__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "w6jB":
/*!*********************************************!*\
  !*** ./src/app/services/os/boot.service.ts ***!
  \*********************************************/
/*! exports provided: BootService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootService", function() { return BootService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_drivers_auth_firebase_auth_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/drivers/auth/firebase-auth.driver */ "GnCN");
/* harmony import */ var src_app_global_components_apps_internal_apps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global-components/apps/internal-apps */ "wnDj");
/* harmony import */ var src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/async.helper */ "GLSI");
/* harmony import */ var _process_launchers_local_app_launcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../process/launchers/local-app-launcher */ "qF/2");
/* harmony import */ var _ux_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ux/theme.service */ "Ig1o");
/* harmony import */ var _io_vfm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../io/vfm.service */ "Fq8c");
/* harmony import */ var _windows_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./windows-manager.service */ "fCXL");
/* harmony import */ var _ux_icons_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ux/icons.service */ "hDY1");











class BootService {
    constructor(themeSv, vfm, windowSv, icons) {
        this.themeSv = themeSv;
        this.vfm = vfm;
        this.windowSv = windowSv;
        this.icons = icons;
        this.boot = false;
    }
    get hasBooted() {
        return this.boot;
    }
    load(progressCb) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [
                this.themeSv.loadTheme(),
                this.windowSv.waitForCompleteLoading(),
                this.icons.load(),
                this.vfm.load(),
                this.loadApps(),
                ...this.loadDrivers()
            ];
            for (let i = 0; i < promises.length; i++) {
                const p = promises[i];
                yield p;
                progressCb((i + 1) / promises.length);
                yield src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_4__["AsyncHelper"].wait(100);
            }
            progressCb(1);
            yield src_app_helpers_async_helper__WEBPACK_IMPORTED_MODULE_4__["AsyncHelper"].wait(500);
            this.boot = true;
        });
    }
    loadDrivers() {
        return [
            src_app_drivers_auth_firebase_auth_driver__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthDriver"].load()
        ];
    }
    loadApps() {
        src_app_global_components_apps_internal_apps__WEBPACK_IMPORTED_MODULE_3__["InternalApps"].forEach(internalApp => {
            _process_launchers_local_app_launcher__WEBPACK_IMPORTED_MODULE_5__["LocalAppLauncher"].registerApp("app://" + internalApp.name, internalApp.module, internalApp.assotiations);
        });
        return Promise.resolve(true);
    }
}
BootService.ɵfac = function BootService_Factory(t) { return new (t || BootService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ux_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_io_vfm_service__WEBPACK_IMPORTED_MODULE_7__["VfmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_windows_manager_service__WEBPACK_IMPORTED_MODULE_8__["WindowsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ux_icons_service__WEBPACK_IMPORTED_MODULE_9__["IconsService"])); };
BootService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BootService, factory: BootService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BootService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ux_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"] }, { type: _io_vfm_service__WEBPACK_IMPORTED_MODULE_7__["VfmService"] }, { type: _windows_manager_service__WEBPACK_IMPORTED_MODULE_8__["WindowsManagerService"] }, { type: _ux_icons_service__WEBPACK_IMPORTED_MODULE_9__["IconsService"] }]; }, null); })();


/***/ }),

/***/ "wnDj":
/*!*********************************************************!*\
  !*** ./src/app/global-components/apps/internal-apps.ts ***!
  \*********************************************************/
/*! exports provided: InternalApps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalApps", function() { return InternalApps; });
/* harmony import */ var _calc_calc_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc/calc.module */ "BZA0");
/* harmony import */ var _explorer_explorer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explorer/explorer.module */ "ffPV");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.module */ "hpGe");
/* harmony import */ var _terminal_terminal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terminal/terminal.module */ "PWAk");
/* harmony import */ var _user_profile_user_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile/user-profile.module */ "zO2q");
/* harmony import */ var _viewer_viewer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewer/viewer.module */ "j2TA");






/** @todo Re-design the internal dynamic apps system. Info: https://indepth.dev/dynamically-loading-components-with-angular-cli */
const InternalApps = [
    { name: "profile", module: _user_profile_user_profile_module__WEBPACK_IMPORTED_MODULE_4__["UserProfileModule"] },
    { name: "calc", module: _calc_calc_module__WEBPACK_IMPORTED_MODULE_0__["CalcModule"] },
    { name: "explorer", module: _explorer_explorer_module__WEBPACK_IMPORTED_MODULE_1__["ExplorerModule"] },
    { name: "login", module: _login_login_module__WEBPACK_IMPORTED_MODULE_2__["LoginModule"] },
    { name: "terminal", module: _terminal_terminal_module__WEBPACK_IMPORTED_MODULE_3__["TerminalModule"] },
    { name: "viewer", module: _viewer_viewer_module__WEBPACK_IMPORTED_MODULE_5__["ViewerModule"], assotiations: ["*"] },
];


/***/ }),

/***/ "wrgC":
/*!*************************************************!*\
  !*** ./src/app/services/misc/logger.service.ts ***!
  \*************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums_log_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/log-type.enum */ "RP2r");



class LoggerService {
    constructor() { }
    debug(message, extraData) {
        this.log(_enums_log_type_enum__WEBPACK_IMPORTED_MODULE_1__["LogType"].Debug, message, extraData);
    }
    error(message, extraData) {
        this.log(_enums_log_type_enum__WEBPACK_IMPORTED_MODULE_1__["LogType"].Error, message, extraData);
    }
    warn(message, extraData) {
        this.log(_enums_log_type_enum__WEBPACK_IMPORTED_MODULE_1__["LogType"].Warn, message, extraData);
    }
    info(message, extraData) {
        this.log(_enums_log_type_enum__WEBPACK_IMPORTED_MODULE_1__["LogType"].Info, message, extraData);
    }
    log(type, message, extraData) {
        let fn;
        if (type === _enums_log_type_enum__WEBPACK_IMPORTED_MODULE_1__["LogType"].Error) {
            fn = console.error;
        }
        else {
            fn = console.log;
        }
        if (typeof extraData === "undefined") {
            fn(message);
        }
        else {
            fn(message, extraData);
        }
    }
}
LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "x5vE":
/*!***********************************************************************!*\
  !*** ./src/app/components/desktop/start-menu/start-menu.component.ts ***!
  \***********************************************************************/
/*! exports provided: StartMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartMenuComponent", function() { return StartMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_helpers_animation_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/animation.helper */ "0Iag");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ux/theme.service */ "Ig1o");
/* harmony import */ var src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/process/shell.service */ "9G8U");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ux/icons.service */ "hDY1");








class StartMenuComponent {
    constructor(sanitizer, theme, shell, authSv, iconSv) {
        this.sanitizer = sanitizer;
        this.theme = theme;
        this.shell = shell;
        this.authSv = authSv;
        this.iconSv = iconSv;
        this.lastPicture = "";
        this.pictureUrl = "";
    }
    ngOnInit() {
        src_app_helpers_animation_helper__WEBPACK_IMPORTED_MODULE_1__["AnimationHelper"].animate(this.container, "fadeInUp");
    }
    get container() {
        const element = document.getElementById("start-menu");
        return element;
    }
    get isLogged() {
        return this.authSv.isLogged;
    }
    get userName() {
        return this.isLogged ? this.authSv.user.name : "Guest";
    }
    get picture() {
        const target = (this.isLogged ? this.authSv.user.pictureUrl : this.iconSv.getIcon("user")) || this.iconSv.getIcon("user");
        if (this.lastPicture !== target) {
            this.lastPicture = target;
            if (this.isLogged) {
                this.pictureUrl = this.sanitizer.bypassSecurityTrustUrl(target);
            }
            else {
                this.pictureUrl = target;
            }
        }
        return this.pictureUrl;
    }
    userClick() {
        this.shell.launchApp("app://profile", "user");
    }
}
StartMenuComponent.ɵfac = function StartMenuComponent_Factory(t) { return new (t || StartMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_4__["ShellService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_6__["IconsService"])); };
StartMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartMenuComponent, selectors: [["app-start-menu"]], decls: 23, vars: 21, consts: [["id", "start-menu"], ["id", "current-user", 1, "menu-item", "p-2", 3, "click"], [1, "d-flex", "full-size"], [1, "media"], [1, "mr-3", "picture", 3, "src"], [1, "media-body"], ["id", "space-1", 1, "flex-grow-1"], ["id", "current-user", 1, "menu-item", "p-2"]], template: function StartMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartMenuComponent_Template_div_click_1_listener() { return ctx.userClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Power off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("start-menu d-flex flex-column bg-", ctx.theme.bright, " animate__faster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("style", ctx.theme.mainToolbarStyle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeStyle"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("picture fas fa-cog mr-3 text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("picture fas fa-power-off mr-3 text-", ctx.theme.brightContrast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-", ctx.theme.brightContrast, "");
    } }, styles: [".start-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  backdrop-filter: blur(10px) saturate(125%);\n  -webkit-backdrop-filter: blur(10px) saturate(125%);\n  left: 0;\n  bottom: var(--bottom-toolbar-height);\n  min-height: 200px;\n  min-width: 180px;\n  padding-right: 0.2em;\n  padding-top: 0.2em;\n}\n\n.picture[_ngcontent-%COMP%] {\n  max-width: 24px;\n  font-size: 24px;\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  transition: all 0.2s linear;\n  background-color: rgba(255, 255, 255, 0);\n  cursor: pointer;\n}\n\n.menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNrdG9wL3N0YXJ0LW1lbnUvc3RhcnQtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGtEQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVza3RvcC9zdGFydC1tZW51L3N0YXJ0LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQtbWVudSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBzYXR1cmF0ZSgxMjUlKTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBzYXR1cmF0ZSgxMjUlKTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogdmFyKC0tYm90dG9tLXRvb2xiYXItaGVpZ2h0KTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBtaW4td2lkdGg6IDE4MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuMmVtO1xyXG4gIHBhZGRpbmctdG9wOiAwLjJlbTtcclxufVxyXG5cclxuLnBpY3R1cmUge1xyXG4gIG1heC13aWR0aDogMjRweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0ge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lbnUtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start-menu',
                templateUrl: './start-menu.component.html',
                styleUrls: ['./start-menu.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: src_app_services_ux_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }, { type: src_app_services_process_shell_service__WEBPACK_IMPORTED_MODULE_4__["ShellService"] }, { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: src_app_services_ux_icons_service__WEBPACK_IMPORTED_MODULE_6__["IconsService"] }]; }, null); })();


/***/ }),

/***/ "xWs4":
/*!*************************************************!*\
  !*** ./src/app/interfaces/os/window-process.ts ***!
  \*************************************************/
/*! exports provided: WindowProcess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowProcess", function() { return WindowProcess; });
/* harmony import */ var src_app_enums_window_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/window-status.enum */ "cmmC");

class WindowProcess {
    constructor(data) {
        this.extra = {};
        this.content = null;
        this.status = src_app_enums_window_status_enum__WEBPACK_IMPORTED_MODULE_0__["WindowStatus"].Normal;
        this.overflow = false;
        this.visible = true;
        if (data) {
            Object.assign(this, data);
        }
    }
    hasFocus() {
        return this.extra.z === 100;
    }
    isMinimized() {
        return !this.visible;
    }
    isMaximized() {
        return this.status === src_app_enums_window_status_enum__WEBPACK_IMPORTED_MODULE_0__["WindowStatus"].Maximized;
    }
    isFullscreen() {
        return this.status === src_app_enums_window_status_enum__WEBPACK_IMPORTED_MODULE_0__["WindowStatus"].Fullscreen;
    }
    minimize() {
        this.visible = false;
    }
    restore() {
        this.visible = true;
    }
}


/***/ }),

/***/ "xwpX":
/*!**************************************************!*\
  !*** ./src/app/models/auth/logged-user.model.ts ***!
  \**************************************************/
/*! exports provided: LoggedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedUser", function() { return LoggedUser; });
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-md5/dist/md5 */ "kScs");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_0__);

class LoggedUser {
    get id() {
        return this.info.uid;
    }
    get pictureUrl() {
        if (!this.picture || this.picture === "") {
            if (this.email && this.email !== "") {
                const str = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_0__["Md5"].hashStr(this.email);
                this.picture = `https://www.gravatar.com/avatar/${str}`;
            }
        }
        return this.picture;
    }
}


/***/ }),

/***/ "zO2q":
/*!****************************************************************************!*\
  !*** ./src/app/global-components/apps/user-profile/user-profile.module.ts ***!
  \****************************************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ "vhBa");




class UserProfileModule {
}
UserProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserProfileModule });
UserProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserProfileModule_Factory(t) { return new (t || UserProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfileModule, { declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zhIA":
/*!***********************************************!*\
  !*** ./src/app/services/ux/loader.service.ts ***!
  \***********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.service */ "mY9l");




class LoaderService {
    constructor(dialogSv) {
        this.dialogSv = dialogSv;
    }
    loadPromise(promise, message, title, showSpinner = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let msg = message || "Loading...";
            if (showSpinner) {
                msg = "<i class='fas fa-spin fa-spinner mr-2'></i> " + msg;
            }
            const id = this.dialogSv.show({
                message: msg,
                title,
                html: true,
                allowClose: false,
                cb: () => { }
            });
            try {
                const result = yield promise;
                return result;
            }
            finally {
                this.dialogSv.closeModal(id);
            }
        });
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"])); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map