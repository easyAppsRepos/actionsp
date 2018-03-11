webpackJsonp([7],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticaPageModule", function() { return EstadisticaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estadistica__ = __webpack_require__(300);
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

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticaPage; });
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


/**
 * Generated class for the EstadisticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstadisticaPage = (function () {
    function EstadisticaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EstadisticaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstadisticaPage');
    };
    EstadisticaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estadistica',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/estadistica/estadistica.html"*/'<!--\n\n\n  Generated template for the EstadisticaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoAmarillo.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content   style=\'background-color: #c3d7e6\' >\n\n\n<div class="tituloHome" style="background-color:#00d3d4 !important; text-align:center">MI PROGRESO</div>\n	<div style="text-align: center;\n    color: white;\n    font-size: 46px;\n    margin-top: 20px;\n    margin-bottom: 35px;\n    font-family: tituloItalic;\n    text-shadow: 2px 4px 3px rgba(0,0,0,0.6);">\n		Llevas quemadas\n	</div>\n<div style=\'text-align: center;    position: relative;\' >\n<div style="    font-size: 49px;\n    color: white;\n    position: absolute;\n    bottom: 43%;\n    left: calc(50% - 79px);\n    line-height: 38px;\n    font-family: tituloItalic;\n    text-shadow: 2px 4px 3px rgba(0,0,0,0.6);">6500 <br> calorias</div>\n<img style=\'width: 80%;    max-width: 400px;\' src="assets/imgs/estArco.png">\n\n</div>\n\n<div style="    text-align: center;\n    display: table;\n    width: 100%;\n    padding-left: 5%;\n    padding-right: 5%;\n    margin-top: 40px;    margin-bottom: 40px;">\n	\n	<div class="estadisticaItem">\n		<img src="assets/imgs/est1.png">\n		<div>Fuerza</div>\n		<div>105Kg</div>\n	</div>\n\n	<div class="estadisticaItem">\n		<img src="assets/imgs/est2.png">\n		<div>Tiempo</div>\n		<div>14:25hs</div>\n	</div>\n\n	<div class="estadisticaItem">\n		<img src="assets/imgs/est3.png">\n		<div>Calorias</div>\n		<div>6500Kc</div>\n	</div>\n\n	<div class="estadisticaItem">\n		<img src="assets/imgs/est4.png">\n		<div>PPM</div>\n		<div>00</div>\n	</div>\n\n\n\n\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/estadistica/estadistica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EstadisticaPage);
    return EstadisticaPage;
}());

//# sourceMappingURL=estadistica.js.map

/***/ })

});
//# sourceMappingURL=7.js.map