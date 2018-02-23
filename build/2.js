webpackJsonp([2],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiRutinaPageModule", function() { return MiRutinaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mi_rutina__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MiRutinaPageModule = (function () {
    function MiRutinaPageModule() {
    }
    MiRutinaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mi_rutina__["a" /* MiRutinaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mi_rutina__["a" /* MiRutinaPage */]),
            ],
        })
    ], MiRutinaPageModule);
    return MiRutinaPageModule;
}());

//# sourceMappingURL=mi-rutina.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiRutinaPage; });
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
 * Generated class for the MiRutinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MiRutinaPage = (function () {
    function MiRutinaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MiRutinaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MiRutinaPage');
    };
    MiRutinaPage.prototype.goActividad = function () {
        this.navCtrl.push('ActividadPage');
    };
    MiRutinaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mi-rutina',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/mi-rutina/mi-rutina.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoAmarillo.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content  style=\'background-color: #c3d7e6\' >\n\n<div class=\'tituloRutina tituloHome\'>MI RUTINA</div>\n\n\n  <div class="sectionHome">\n    <div style=\'margin-top:7px;background-color: #3ec754\' class="tituloHome">PROXIMO EJERCICIO</div> \n    <div class="bodyHome" (click)="goActividad()">\n      <div class="tituloBold">Biceps</div>\n      <div style="text-align:center">\n        <div style=\'background-color: #3ec754;\' class=\'masBtn\' >+</div>\n      </div>\n    </div>\n\n  </div>\n\n<div class="diaContainer">\n		<span class="diaTitulo">LUNES</span>\n		<div style="\n    width:  100%;\n    height: 100%;\n    background: #ff4d00;\n    position: absolute;\n    top: 0;\n    z-index:  -1;\n    opacity: 0.66;\n"></div>\n		<div style="\n    width: 75%;\n    height: 100%;\n    background: #3ec754;\n    position: absolute;\n    top: 0;\n    z-index: -1;\n"></div>\n</div>\n\n\n\n\n<div class="diaContainer">\n		<span  class="diaTitulo">MARTES</span>\n		<div style="\n    width:  100%;\n    height: 100%;\n    background: #ff4d00;\n    position: absolute;\n    top: 0;\n    z-index:  -1;\n    opacity: 0.66;\n"></div>\n</div>\n\n\n<div class="diaContainer">\n		<span class="diaTitulo">MIERCOLES</span>\n		<div style="\n    width:  100%;\n    height: 100%;\n    background: #ff4d00;\n    position: absolute;\n    top: 0;\n    z-index:  -1;\n    opacity: 0.66;\n"></div>\n\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/mi-rutina/mi-rutina.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MiRutinaPage);
    return MiRutinaPage;
}());

//# sourceMappingURL=mi-rutina.js.map

/***/ })

});
//# sourceMappingURL=2.js.map