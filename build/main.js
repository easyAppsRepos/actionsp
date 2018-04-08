webpackJsonp([14],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = (function () {
    function ApiProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiUrl = 'https://jsonplaceholder.typicode.com';
        this.api2 = 'http://18.188.29.225:3003';
        // console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.verificarLogin = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('usr_tok_datagym').then(function (value) {
                // console.log(value);
                value ? resolve(value) : resolve(false);
            }).catch(function () { return resolve(false); });
        });
    };
    ApiProvider.prototype.getDataHome = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/getDataHome').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getYoutubeDataVideo = function (videoLink) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://www.googleapis.com/youtube/v3/videos?id=' + videoLink + '&key=AIzaSyBSJcqdt3hnOf3NYcmiKDAzwEi4lvZxeR8&part=snippet,statistics&fields=items(id,snippet,statistics)').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                if (err.url) {
                    resolve(err);
                }
                else {
                    resolve(null);
                }
            });
        });
    };
    ApiProvider.prototype.getYoutubeLink = function (linkIR) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(linkIR).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                if (err.url) {
                    resolve(err);
                }
                else {
                    resolve(null);
                }
            });
        });
    };
    ApiProvider.prototype.getActividadData = function (idAc) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getActividadData', JSON.stringify({ idActividad: idAc }), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getRutinaUsuario = function (idUsuario) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getRutinaUsuario', JSON.stringify({ idUsuario: idUsuario }), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getEstadistica = function (idUsuario) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getEstadistica', JSON.stringify({ idUsuario: idUsuario }), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.agregarReserva = function (idUsuario, idReserva) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/agregarReserva', JSON.stringify({ idUsuario: idUsuario, idReserva: idReserva }), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getHorarioSemana = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/getHorarioSemana').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getNovedades = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/getNovedades').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getEquipamento = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/getEquipamento').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getClasesReserva = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/getReservaClase').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.api2 + '/login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.doLoginApi = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/doLoginApi', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.registrarUsuario = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/registrarUsuario', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.enviarContra = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/enviarContra', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.completarEjercicio = function (idActividad, idR, idUsuario) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/completarEjercicio2', JSON.stringify({ idActividad: idActividad, idRutina: idR, idUsuario: idUsuario }), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.verificarReserva = function (idClase, idUsuario) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/verificarReserva', JSON.stringify({ idClase: idClase, idUsuario: idUsuario }), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
    ], ApiProvider);
    return ApiProvider;
    var _a, _b;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/actividad/actividad.module": [
		284,
		13
	],
	"../pages/clase/clase.module": [
		285,
		12
	],
	"../pages/equipamento/equipamento.module": [
		288,
		11
	],
	"../pages/escaner/escaner.module": [
		286,
		10
	],
	"../pages/estadistica/estadistica.module": [
		287,
		9
	],
	"../pages/horarios/horarios.module": [
		289,
		8
	],
	"../pages/inicio/inicio.module": [
		290,
		7
	],
	"../pages/login/login.module": [
		291,
		6
	],
	"../pages/mi-rutina/mi-rutina.module": [
		292,
		5
	],
	"../pages/novedades/novedades.module": [
		295,
		4
	],
	"../pages/nuevo-socio/nuevo-socio.module": [
		294,
		3
	],
	"../pages/perfil/perfil.module": [
		293,
		2
	],
	"../pages/reservar/reservar.module": [
		297,
		1
	],
	"../pages/youtubevide/youtubevide.module": [
		296,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_api__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { PerfilPage } from '../pages/perfil/perfil';
//import { HorariosPage } from '../pages/horarios/horarios';





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    tabsPlacement: 'top',
                    backButtonText: ''
                }, {
                    links: [
                        { loadChildren: '../pages/actividad/actividad.module#ActividadPageModule', name: 'ActividadPage', segment: 'actividad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clase/clase.module#ClasePageModule', name: 'ClasePage', segment: 'clase', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/escaner/escaner.module#EscanerPageModule', name: 'EscanerPage', segment: 'escaner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estadistica/estadistica.module#EstadisticaPageModule', name: 'EstadisticaPage', segment: 'estadistica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipamento/equipamento.module#EquipamentoPageModule', name: 'EquipamentoPage', segment: 'equipamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/horarios/horarios.module#HorariosPageModule', name: 'HorariosPage', segment: 'horarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mi-rutina/mi-rutina.module#MiRutinaPageModule', name: 'MiRutinaPage', segment: 'mi-rutina', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevo-socio/nuevo-socio.module#NuevoSocioPageModule', name: 'NuevoSocioPage', segment: 'nuevo-socio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/novedades/novedades.module#NovedadesPageModule', name: 'NovedadesPage', segment: 'novedades', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/youtubevide/youtubevide.module#YoutubevidePageModule', name: 'YoutubevidePage', segment: 'youtubevide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservar/reservar.module#ReservarPageModule', name: 'ReservarPage', segment: 'reservar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, apiProvider, events, modalCtrl) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.apiProvider = apiProvider;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.rootPage = 'InicioPage';
        this.initializeApp();
        events.subscribe('userCreated', function (user) {
            _this.userDataProfile = user;
        });
        events.subscribe('userLogout', function () {
            _this.userDataProfile = false;
            //console.log(user);
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.apiProvider.verificarLogin()
                .then(function (data) {
                console.log(data);
                _this.userDataProfile = data;
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goPerfil = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot('PerfilPage');
    };
    MyApp.prototype.goHorarios = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('HorariosPage');
    };
    MyApp.prototype.goHome = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('InicioPage');
    };
    MyApp.prototype.openModalLogin = function () {
        var modalPage = this.modalCtrl.create('LoginPage');
        modalPage.present();
    };
    MyApp.prototype.goRutina = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        if (this.userDataProfile) {
            this.nav.setRoot('MiRutinaPage');
        }
        else {
            this.openModalLogin();
        }
    };
    MyApp.prototype.goReservar = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('ReservarPage');
    };
    MyApp.prototype.goEstadistica = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        if (this.userDataProfile) {
            this.nav.setRoot('EstadisticaPage');
        }
        else {
            this.openModalLogin();
        }
    };
    MyApp.prototype.goNovedades = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('NovedadesPage');
    };
    MyApp.prototype.goEquipamento = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('EquipamentoPage');
    };
    MyApp.prototype.goQR = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('EscanerPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/app/app.html"*/'<ion-menu [content]="content">\n<!--   <ion-header>\n    <ion-toolbar>\n      <ion-title>Menvcu</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content class=\'menuLateral\'>\n<!--     <ion-list>\n      <button class=\'itemMenu\' menuClose ion-item *ngFor="let p of pages; let  i = index" (click)="openPage(p)">\n        <img class="menuIcono" [src]="\'assets/imgs/icono\'+(i+1)+\'.png\'" > {{p.title}}\n      </button>\n    </ion-list> -->\n\n<div *ngIf=\'userDataProfile\' class=\'containerMenuProfile\' (click)="goPerfil()" menuClose>\n  <div class="mitadProfile">\n      <img style=\'border-radius: 100%;width: 66%; margin-top: 20px; margin-bottom: 11px;box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);\' src="assets/imgs/profile.png"> \n      <div style="    color: white;margin-bottom: 30px;font-weight: 800;letter-spacing: 0px;">{{userDataProfile?.nombre || \'Desconocido\'}}</div>\n  </div>\n  <div class="mitadProfile">\n      <div class="profileEtiq">\n        <div>Socio N</div>\n        <div>{{userDataProfile?.numeroSocio || \'-\'}}</div>\n      </div>\n\n            <div class="profileEtiq">\n        <div>Edad</div>\n        <div>{{userDataProfile?.edad || \'-\'}}</div>\n      </div>\n\n            <div class="profileEtiq">\n        <div>Personal Trainer</div>\n        <div>{{userDataProfile?.trainer || \'-\'}}</div>\n      </div>\n\n\n  </div>\n  \n</div>\n\n\n\n<div *ngIf=\'!userDataProfile\' class=\'containerMenuProfile\' menuClose>\n<div style="width:100%; text-align:center">\n<button style="    width: 60%;\n    color: white;\n    border: white solid 2px;\n    font-family: normalL;\n    margin-top: 30px;\n    margin-bottom: 30px;"  (click)="openModalLogin()" ion-button  outline>Iniciar Sesion</button>\n  </div>\n</div>\n\n\n        <ion-list>\n\n\n\n    \n      <button class=\'itemMenu\' menuClose ion-item (click)="goHome()">\n        <img class="menuIcono" src="assets/imgs/logong.png" > INICIO\n      </button>\n\n      <button class=\'itemMenu\' menuClose ion-item (click)="goHorarios()">\n        <img class="menuIcono" src="assets/imgs/icono1.png" > HORARIOS\n      </button>\n\n            <button class=\'itemMenu\' menuClose ion-item (click)="goRutina()">\n        <img class="menuIcono" src="assets/imgs/icono2.png" > MI RUTINA\n      </button>\n\n\n            <button class=\'itemMenu\' menuClose ion-item (click)="goReservar()">\n        <img class="menuIcono" src="assets/imgs/icono3.png" > RESERVAR CLASE\n      </button>\n            <button class=\'itemMenu\' menuClose ion-item (click)="goEstadistica()">\n        <img class="menuIcono" src="assets/imgs/icono4.png"  > ESTADISTICAS\n      </button>\n<!--             <button class=\'itemMenu\' menuClose ion-item>\n        <img class="menuIcono" src="assets/imgs/icono5.png" > MENSAJES\n      </button> -->\n            <button class=\'itemMenu\' menuClose ion-item (click)="goNovedades()" >\n        <img class="menuIcono" src="assets/imgs/icono6.png" > NOVEDADES\n      </button>\n            <button class=\'itemMenu\' menuClose ion-item   (click)="goEquipamento()"  >\n        <img class="menuIcono" src="assets/imgs/icono7.png" > EQUIPAMENTO\n      </button>\n            <button class=\'itemMenu\' menuClose ion-item (click)="goQR()" >\n        <img class="menuIcono" src="assets/imgs/icono8.png" > ESCANER\n      </button>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        //console.log('d');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('d3');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoAmarillo.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content style=\'background-color: #c3d7e6\'>\n\n\n<!--   <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button> -->\n\n  <div class="sectionHome">\n    <div style=\'background-color: #ff0090\' class="tituloHome">PROXIMA CLASE</div> \n    <div class="bodyHome">\n      <div class=\'tituloBold\'>Body Pump</div>\n      <div style="text-align:center"><div style=\'background-color: #ff0090;\' class=\'masBtn\' >+</div></div>\n    </div>\n  </div>\n\n  <div class="sectionHome">\n    <div style=\'background-color: #3ec754\' class="tituloHome">EJERCICIO DEL DIA</div> \n    <div class="bodyHome">\n      <div class=\'tituloBold\'>Biceps</div>\n      <div style="text-align:center"><div style="background-color: #3ec754;" class=\'masBtn\'>+</div></div>\n    </div>\n\n  </div>\n\n  <div class="sectionHome">\n    <div style=\'background-color: #ff4d00\' class="tituloHome">SOLICITAR RUTINA</div> \n    <div class="bodyHome">\n      <div style="    color: white;\n    font-size: 14px;\n    font-weight: 800;\n    padding-top: 42px;\n    padding-bottom: 20px;    font-family: normalL;">Al momento de tu inscripcion podes <br> solicitar una rutina en la que tu <br> personal trainer podra seguir tus avances</div>\n      <div style="text-align:center"><div style="  background-color:  #ff4d00;" class=\'masBtn\' >+</div></div>\n    </div>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map