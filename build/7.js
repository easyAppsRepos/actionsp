webpackJsonp([7],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadPageModule", function() { return ActividadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actividad__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActividadPageModule = (function () {
    function ActividadPageModule() {
    }
    ActividadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__actividad__["a" /* ActividadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__actividad__["a" /* ActividadPage */]),
            ],
        })
    ], ActividadPageModule);
    return ActividadPageModule;
}());

//# sourceMappingURL=actividad.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActividadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
 * Generated class for the ActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActividadPage = (function () {
    function ActividadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ActividadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActividadPage');
    };
    ActividadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-actividad',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/actividad/actividad.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoAmarillo.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content   style="background-image: url(\'../assets/imgs/bicepFoto.png\');    background-size: cover;" >\n<div class="capaOscuridad" style="height:140% !important; position:fixed"></div>\n\n	<div style="  text-align: center;\n    color: white;\n    font-size: 103px;\n    font-family: tituloItalic;\n    text-shadow: 2px 4px 3px rgba(0,0,0,0.6);\n    margin-top: 25px;">\n		Biceps\n	</div>\n\n<!-- <div style=\'text-align: center;    position: relative;\' >\n<div style="    font-size: 49px;\n    color: white;\n    position: absolute;\n    bottom: 43%;\n    left: calc(50% - 79px);\n    line-height: 38px;\n    font-family: tituloItalic;\n    text-shadow: 2px 4px 3px rgba(0,0,0,0.6);">60 <br> <span>calorias</span></div>\n<img style=\'width: 80%;    max-width: 400px;\' src="assets/imgs/estArco.png">\n\n</div> -->\n<div class="containerActividadD">\n  <div >\n    <span >60</span>\n    <span >Minutos</span>\n  </div>\n  <div >\n    <img src="assets/imgs/icono1.png">\n  </div>\n</div>\n\n\n\n<div  class="containerActividadD">\n  <div>\n    <span >2000</span>\n    <span >Kilogramos/fuerza</span>\n  </div>\n  <div >\n    <img src="assets/imgs/icono2.png" >\n  </div>\n</div>\n\n\n<div  class="containerActividadD">\n  <div>\n    <span >1523</span>\n    <span>Calorias perdidas</span>\n  </div>\n  <div >\n    <img src="assets/imgs/icono4.png" >\n  </div>\n</div>\n<div style="text-align:center; margin-top:15px; margin-bottom:30px">\n<button class="btnAzul">Completar ejercicio</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/actividad/actividad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ActividadPage);
    return ActividadPage;
}());

//# sourceMappingURL=actividad.js.map

/***/ })

});
//# sourceMappingURL=7.js.map