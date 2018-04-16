webpackJsonp([4],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovedadesPageModule", function() { return NovedadesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__novedades__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NovedadesPageModule = (function () {
    function NovedadesPageModule() {
    }
    NovedadesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__novedades__["a" /* NovedadesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__novedades__["a" /* NovedadesPage */]),
            ],
        })
    ], NovedadesPageModule);
    return NovedadesPageModule;
}());

//# sourceMappingURL=novedades.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovedadesPage; });
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
 * Generated class for the NovedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NovedadesPage = (function () {
    function NovedadesPage(navCtrl, navParams, apiProvider, loadingController, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.events = events;
        this.dataNovedades = [];
    }
    NovedadesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstadisticaPage');
        this.cargarNovedades();
    };
    NovedadesPage.prototype.cargarNovedades = function () {
        var _this = this;
        this.apiProvider.getNovedades()
            .then(function (data) {
            // this.proximoEjercicio = data[1][0];
            // this.diasRutina =  (Object.values(data[0]));
            console.log(data);
            _this.dataNovedades = data.data;
            // console.log(this.proximoEjercicio);
        });
    };
    NovedadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novedades',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/novedades/novedades.html"*/'<!--\n\n\n  Generated template for the EstadisticaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoFinal.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content   style=\'background-color: #c3d7e6\' >\n\n\n<div class="tituloHome" style="background-color:#6d22d2 !important; text-align:center">NOVEDADES</div>\n\n\n<div style="\n    padding: 20px;\n    border: solid 3px #cccccc;\n    background-color:  white;\n    margin: 27px;\n" *ngFor="let n of dataNovedades">\n<p class="novedadesTitulo">{{n.titulo}}</p>\n<img [src]="n.imagenUrl" >\n<p style="\n    color:  #2f2f2f;\n    font-size: 16px;\n    line-height: 20px;\n">{{n.descripcion}}</p>\n</div>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/novedades/novedades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], NovedadesPage);
    return NovedadesPage;
}());

//# sourceMappingURL=novedades.js.map

/***/ })

});
//# sourceMappingURL=4.js.map