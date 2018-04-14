webpackJsonp([10],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticaPageModule", function() { return EstadisticaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estadistica__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EstadisticaPageModule = (function () {
    function EstadisticaPageModule() {
    }
    EstadisticaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__estadistica__["a" /* EstadisticaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__estadistica__["a" /* EstadisticaPage */]),
            ],
        })
    ], EstadisticaPageModule);
    return EstadisticaPageModule;
}());

//# sourceMappingURL=estadistica.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EstadisticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstadisticaPage = (function () {
    function EstadisticaPage(navCtrl, navParams, apiProvider, loadingController, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.events = events;
        this.dataEstadistica = {};
    }
    EstadisticaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstadisticaPage');
        this.cargarEstadistica();
    };
    EstadisticaPage.prototype.cargarEstadistica = function () {
        var _this = this;
        this.apiProvider.verificarLogin()
            .then(function (data) {
            _this.apiProvider.getEstadistica(data.idUsuario)
                .then(function (data) {
                // this.proximoEjercicio = data[1][0];
                // this.diasRutina =  (Object.values(data[0]));
                console.log(data);
                _this.dataEstadistica = data.data[0];
                // console.log(this.proximoEjercicio);
            });
        });
    };
    EstadisticaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estadistica',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/estadistica/estadistica.html"*/'<!--\n\n\n  Generated template for the EstadisticaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoFinal.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content   style=\'background-color: #c3d7e6\' >\n\n\n<div class="tituloHome" style="background-color:#00d3d4 !important; text-align:center">MI PROGRESO</div>\n	<div style="text-align: center;\n    color: white;\n    font-size: 37px;\n    margin-top: 20px;\n    margin-bottom: 35px;\n    font-family: tituloHItalic;\n    text-shadow: 2px 4px 3px rgba(0,0,0,0.6);">\n		Llevas quemadas\n	</div>\n<div style=\'text-align: center;    position: relative;\' >\n<div style="    font-size: 42px;\n    color: white;\n    position: absolute;\n    bottom: 43%;\n    left: calc(50% - 79px);\n    line-height: 38px;\n    font-family: tituloHItalic;\n    text-shadow: 2px 4px 3px rgba(0,0,0,0.6);">{{dataEstadistica.calorias || 0}} <br> calorias</div>\n<img style=\'width: 80%;    max-width: 400px;\' src="assets/imgs/estArco.png">\n\n</div>\n\n<div style="    text-align: center;\n    display: table;\n    width: 100%;\n    padding-left: 5%;\n    padding-right: 5%;\n    margin-top: 40px;    margin-bottom: 40px;">\n	\n	<div class="estadisticaItem">\n		<img src="assets/imgs/est1.png">\n		<div><b>Fuerza</b></div>\n		<div>{{dataEstadistica.fuerza || 0}} Kg/F</div>\n	</div>\n\n	<div class="estadisticaItem">\n		<img src="assets/imgs/est2.png">\n		<div><b>Tiempo</b></div>\n		<div>{{(dataEstadistica.minutos/60).toFixed(2) || 0}}hrs</div>\n	</div>\n\n	<div class="estadisticaItem">\n		<img src="assets/imgs/est3.png">\n		<div><b>Calorias</b></div>\n		<div>{{dataEstadistica.calorias || 0}}Kc</div>\n	</div>\n\n\n\n\n\n\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/estadistica/estadistica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], EstadisticaPage);
    return EstadisticaPage;
}());

//# sourceMappingURL=estadistica.js.map

/***/ })

});
//# sourceMappingURL=10.js.map