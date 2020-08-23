(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modules_Stream_stream_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Stream/stream.component */ "./src/app/modules/Stream/stream.component.ts");
/* harmony import */ var _modules_StreamerCard_streamer_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/StreamerCard/streamer-card.component */ "./src/app/modules/StreamerCard/streamer-card.component.ts");








function AppComponent_streamer_card_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "streamer-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onPlay", function AppComponent_streamer_card_5_Template_streamer_card_onPlay_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.launchStream($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const streamer_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("streamer", streamer_r1)("stream", ctx_r0.streams[i_r2]);
} }
class AppComponent {
    constructor(appServices, sanitizer) {
        this.appServices = appServices;
        this.sanitizer = sanitizer;
        this.title = 'twitch-streamer-list';
        this.streamerList = [
            'h2xd',
            'radjon',
            'deadlyfantasy',
            'zermisttv',
            'wayland0',
            'ZIGI_hate',
            'rekvizit8bit',
            'bratishkinoff',
            'jesusavgn'
        ];
        this.streams = [];
    }
    ngOnInit() {
        this.loadStreamerList();
    }
    launchStream(stream) {
        this.currentStream = stream;
    }
    /**
     * Private
     */
    loadStreamerList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newList = yield Promise.all(this.streamerList.map(this.loadStreamerData.bind(this)));
            const newStreams = yield Promise.all(newList.map((streamer) => {
                return this.getStreamById(streamer._id);
            }));
            newList.sort((a) => {
                const stream = newStreams.find((e) => { var _a; return ((_a = e === null || e === void 0 ? void 0 : e.channel) === null || _a === void 0 ? void 0 : _a._id.toString()) === a._id.toString(); });
                return !!stream ? -1 : 1;
            });
            newStreams.sort((stream) => {
                return !!stream ? -1 : 1;
            });
            this.streamerList = newList;
            this.streams = newStreams;
        });
    }
    loadStreamerData(name) {
        return new Promise(resolve => {
            const service = this.appServices.getStreamer(name).subscribe((e) => {
                if (e._total) {
                    resolve(e.users[0]);
                    service.unsubscribe();
                    return;
                }
                resolve(false);
            });
        });
    }
    getStreamById(id) {
        return new Promise(resolve => {
            const service = this.appServices.getStream(id).subscribe((e) => {
                if (e.stream) {
                    resolve(e.stream);
                    service.unsubscribe();
                    return;
                }
                resolve(false);
            });
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 2, consts: [[1, "app"], [1, "app__sidebar"], [1, "streamer-list"], [3, "streamer", "stream", "onPlay", 4, "ngFor", "ngForOf"], [1, "app__content"], [3, "stream"], [3, "streamer", "stream", "onPlay"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Angular Streamer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_streamer_card_5_Template, 1, 2, "streamer-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Current Stream ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "stream", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.streamerList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stream", ctx.currentStream);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _modules_Stream_stream_component__WEBPACK_IMPORTED_MODULE_5__["StreamComponent"], _modules_StreamerCard_streamer_card_component__WEBPACK_IMPORTED_MODULE_6__["StreamerCardComponent"]], styles: [".app[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"sidebar content\";\n  grid-template-columns: 300px 1fr;\n  grid-gap: 20px;\n  padding: 20px;\n  box-sizing: border-box;\n  margin: auto;\n  min-height: 100vh;\n  max-width: 1024px;\n}\n@media (max-width: 768px) {\n  .app[_ngcontent-%COMP%] {\n    grid-template-areas: \"content\" \"sidebar\";\n    grid-template-columns: 1fr;\n    justify-content: center;\n  }\n}\n.app__sidebar[_ngcontent-%COMP%] {\n  grid-area: sidebar;\n  width: 300px;\n}\n@media (max-width: 768px) {\n  .app__sidebar[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n.app__content[_ngcontent-%COMP%] {\n  grid-area: content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFGRjtBQUlFO0VBWkY7SUFhSSx3Q0FBQTtJQUNBLDBCQUFBO0lBQ0EsdUJBQUE7RUFERjtBQUNGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLFlBckJZO0FBb0JoQjtBQUdJO0VBSkY7SUFLSSxXQUFBO0VBQUo7QUFDRjtBQUdFO0VBQ0Usa0JBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJHNpZGViYXItd2lkdGg6IDMwMHB4O1xuLmFwcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzaWRlYmFyIGNvbnRlbnQnO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICRzaWRlYmFyLXdpZHRoIDFmcjtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NvbnRlbnQnICdzaWRlYmFyJztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICZfX3NpZGViYXIge1xuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgICB3aWR0aDogJHNpZGViYXItd2lkdGg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gICZfX2NvbnRlbnQge1xuICAgIGdyaWQtYXJlYTogY29udGVudDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _modules_StreamerCard_streamer_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/StreamerCard/streamer-card.module */ "./src/app/modules/StreamerCard/streamer-card.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_Stream_stream_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/Stream/stream.module */ "./src/app/modules/Stream/stream.module.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _modules_StreamerCard_streamer_card_module__WEBPACK_IMPORTED_MODULE_6__["StreamerCardModule"],
            _modules_Stream_stream_module__WEBPACK_IMPORTED_MODULE_8__["StreamModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _modules_StreamerCard_streamer_card_module__WEBPACK_IMPORTED_MODULE_6__["StreamerCardModule"],
        _modules_Stream_stream_module__WEBPACK_IMPORTED_MODULE_8__["StreamModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _modules_StreamerCard_streamer_card_module__WEBPACK_IMPORTED_MODULE_6__["StreamerCardModule"],
                    _modules_Stream_stream_module__WEBPACK_IMPORTED_MODULE_8__["StreamModule"]
                ],
                providers: [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_utils_ExtendHttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/utils/ExtendHttpClient */ "./src/assets/utils/ExtendHttpClient.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AppService {
    constructor(_http) {
        this._http = _http;
        this.http = Object(_assets_utils_ExtendHttpClient__WEBPACK_IMPORTED_MODULE_1__["ExtendHttpClient"])(this._http, {
            baseHeaders: {
                // Default headers for all requests
                'Client-Id': '1b10wjmbcfujfjpmyvoigzv9vpjkyc',
                'Accept': 'application/vnd.twitchtv.v5+json'
            },
            baseParams: {
            // Default params for all requests
            },
            baseUrl: 'https://api.twitch.tv/kraken/'
        });
    }
    getStream(id) {
        return this.http.get('streams/' + id);
    }
    getStreamer(streamerName) {
        return this.http.get('users', {
            params: {
                login: streamerName
            }
        });
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/Stream/stream.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/Stream/stream.component.ts ***!
  \****************************************************/
/*! exports provided: StreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamComponent", function() { return StreamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function StreamComponent_iframe_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getStreamLink(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function StreamComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pick a stream ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StreamComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.stream.channel.display_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" [ ", ctx_r2.stream.game, " ] ", ctx_r2.stream.channel.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Watchers: ", ctx_r2.stream.viewers, " ");
} }
class StreamComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    getStreamLink() {
        const { bypassSecurityTrustResourceUrl } = this.sanitizer;
        const { name } = this.stream.channel;
        const parent = (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production && 'h2xdev.github.io') || 'localhost';
        return bypassSecurityTrustResourceUrl('//player.twitch.tv?channel=' + name + '&parent=' + parent);
    }
}
StreamComponent.ɵfac = function StreamComponent_Factory(t) { return new (t || StreamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
StreamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StreamComponent, selectors: [["stream"]], inputs: { stream: "stream" }, decls: 5, vars: 3, consts: [[1, "stream"], [1, "stream__container"], ["class", "stream__frame", 3, "src", 4, "ngIf"], ["class", "stream__placeholder", 4, "ngIf"], ["class", "stream__info", 4, "ngIf"], [1, "stream__frame", 3, "src"], [1, "stream__placeholder"], [1, "stream__info"], [1, "stream__title"]], template: function StreamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StreamComponent_iframe_2_Template, 1, 1, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StreamComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StreamComponent_div_4_Template, 7, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.stream);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.stream);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.stream);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".stream__container[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 56.65%;\n}\n.stream__frame[_ngcontent-%COMP%], .stream__placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  border-radius: 4px;\n}\n.stream__placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px dashed rgba(255, 255, 255, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9TdHJlYW0vc3RyZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9TdHJlYW0vc3RyZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0cmVhbSB7XG4gICZfX2NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiA1Ni42NSU7XG4gIH1cblxuICAmX19mcmFtZSwgJl9fcGxhY2Vob2xkZXIgIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmX19wbGFjZWhvbGRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKCNmZmYsIDAuMjUpXG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StreamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'stream',
                templateUrl: './stream.component.html',
                styleUrls: ['./stream.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { stream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/Stream/stream.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/Stream/stream.module.ts ***!
  \*************************************************/
/*! exports provided: StreamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamModule", function() { return StreamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _stream_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stream.component */ "./src/app/modules/Stream/stream.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class StreamModule {
}
StreamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StreamModule });
StreamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StreamModule_Factory(t) { return new (t || StreamModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StreamModule, { declarations: [_stream_component__WEBPACK_IMPORTED_MODULE_1__["StreamComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_stream_component__WEBPACK_IMPORTED_MODULE_1__["StreamComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StreamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [
                    _stream_component__WEBPACK_IMPORTED_MODULE_1__["StreamComponent"]
                ],
                exports: [_stream_component__WEBPACK_IMPORTED_MODULE_1__["StreamComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/StreamerCard/streamer-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/StreamerCard/streamer-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: StreamerCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamerCardComponent", function() { return StreamerCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function StreamerCardComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StreamerCardComponent_ng_template_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.buttonPlayClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StreamerCardComponent {
    constructor() {
        this.onPlay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    buttonPlayClick() {
        this.onPlay.emit(this.stream);
    }
}
StreamerCardComponent.ɵfac = function StreamerCardComponent_Factory(t) { return new (t || StreamerCardComponent)(); };
StreamerCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StreamerCardComponent, selectors: [["streamer-card"]], inputs: { streamer: "streamer", stream: "stream" }, outputs: { onPlay: "onPlay" }, decls: 10, vars: 4, consts: [[1, "streamer-card"], ["alt", "", 1, "streamer-card__photo", 3, "src"], [1, "streamer-card__title"], [1, "streamer-card__subtitle"], [1, "streamer-card__actions"], [3, "ngIf"], ["title", "Remove streamer from list", 1, "button"], [1, "button", 3, "click"]], template: function StreamerCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StreamerCardComponent_ng_template_7_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.streamer.logo || "//via.placeholder.com/32x32", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.streamer.display_name || "loading...", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.streamer.bio || "no-description", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.stream);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".streamer-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"photo title actions\" \"photo subtitle actions\";\n  grid-template-columns: 32px 1fr -webkit-max-content;\n  grid-template-columns: 32px 1fr max-content;\n  grid-gap: 0 5px;\n  padding: 8px;\n  border-radius: 4px;\n  align-items: center;\n}\n.streamer-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.streamer-card__photo[_ngcontent-%COMP%] {\n  grid-area: photo;\n  width: 32px;\n  height: 32px;\n  border-radius: 4px;\n}\n.streamer-card__title[_ngcontent-%COMP%] {\n  grid-area: title;\n  font-size: 14px;\n  font-weight: bold;\n}\n.streamer-card__subtitle[_ngcontent-%COMP%] {\n  grid-area: subtitle;\n  font-weight: 100;\n  font-size: 12px;\n}\n.streamer-card__actions[_ngcontent-%COMP%] {\n  grid-area: actions;\n  display: flex;\n  justify-content: flex-end;\n}\n.streamer-card__actions[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9TdHJlYW1lckNhcmQvc3RyZWFtZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtRUFDQTtFQUVBLG1EQUFBO0VBQUEsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0Usb0NBQUE7QUFESjtBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSEo7QUFNRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBTEo7QUFPSTtFQUNFLGlCQUFBO0FBTE4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL1N0cmVhbWVyQ2FyZC9zdHJlYW1lci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0cmVhbWVyLWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAncGhvdG8gdGl0bGUgYWN0aW9ucydcbiAgJ3Bob3RvIHN1YnRpdGxlIGFjdGlvbnMnO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMycHggMWZyIG1heC1jb250ZW50O1xuICBncmlkLWdhcDogMCA1cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoI2ZmZiwgMC4yKTtcbiAgfVxuXG4gICZfX3Bob3RvIHtcbiAgICBncmlkLWFyZWE6IHBob3RvO1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAmX19zdWJ0aXRsZSB7XG4gICAgZ3JpZC1hcmVhOiBzdWJ0aXRsZTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gICZfX2FjdGlvbnMge1xuICAgIGdyaWQtYXJlYTogYWN0aW9ucztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAuYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StreamerCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'streamer-card',
                templateUrl: './streamer-card.component.html',
                styleUrls: ['./streamer-card.component.scss']
            }]
    }], null, { streamer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onPlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/StreamerCard/streamer-card.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/StreamerCard/streamer-card.module.ts ***!
  \**************************************************************/
/*! exports provided: StreamerCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamerCardModule", function() { return StreamerCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _streamer_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./streamer-card.component */ "./src/app/modules/StreamerCard/streamer-card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class StreamerCardModule {
}
StreamerCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StreamerCardModule });
StreamerCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StreamerCardModule_Factory(t) { return new (t || StreamerCardModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StreamerCardModule, { declarations: [_streamer_card_component__WEBPACK_IMPORTED_MODULE_2__["StreamerCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], exports: [_streamer_card_component__WEBPACK_IMPORTED_MODULE_2__["StreamerCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StreamerCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                declarations: [_streamer_card_component__WEBPACK_IMPORTED_MODULE_2__["StreamerCardComponent"]],
                exports: [_streamer_card_component__WEBPACK_IMPORTED_MODULE_2__["StreamerCardComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/assets/utils/ExtendHttpClient.ts":
/*!**********************************************!*\
  !*** ./src/assets/utils/ExtendHttpClient.ts ***!
  \**********************************************/
/*! exports provided: ExtendHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendHttpClient", function() { return ExtendHttpClient; });
/**
 * Создает оберточные методы вокруг методов HttpClient для определения заголовков и параметров по умолчанию для каждого метода
 * @param { HttpClient } http - экземпляр класса HttpClient
 * @param { ExtendHttpClientConfig } config - Настройки запросов
 */
function ExtendHttpClient(http, config) {
    let { baseUrl } = config;
    const { baseHeaders, baseParams } = config;
    const excludeMethods = ['constructor', 'request'];
    const requestMethods = Object.getOwnPropertyNames(http.__proto__).filter(e => !excludeMethods.includes(e));
    const methodList = {};
    if (baseUrl[baseUrl.length - 1] !== '/') {
        baseUrl = baseUrl + '/';
    }
    for (let requestMethod of requestMethods) {
        methodList[requestMethod] = function (method, options) {
            const argCount = http[requestMethod].length;
            const isMethodContainsBody = argCount === 2;
            const headers = Object.assign(Object.assign({}, baseHeaders), ((options === null || options === void 0 ? void 0 : options.headers) || {}));
            const params = Object.assign(Object.assign({}, baseParams), ((options === null || options === void 0 ? void 0 : options.params) || {}));
            const requestOptions = Object.assign(Object.assign({ observe: 'body', responseType: 'json' }, options), { headers,
                params });
            if (isMethodContainsBody) {
                delete requestOptions.params;
            }
            return http[requestMethod](baseUrl + method, isMethodContainsBody && options.params || requestOptions, isMethodContainsBody && requestOptions);
        };
    }
    return methodList;
}


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Projects/twitch-streamer-list/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map