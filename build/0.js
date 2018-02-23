webpackJsonp([0],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservarPageModule", function() { return ReservarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservar__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReservarPageModule = (function () {
    function ReservarPageModule() {
    }
    ReservarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reservar__["a" /* ReservarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reservar__["a" /* ReservarPage */]),
            ],
        })
    ], ReservarPageModule);
    return ReservarPageModule;
}());

//# sourceMappingURL=reservar.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservarPage; });
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
 * Generated class for the ReservarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservarPage = (function () {
    function ReservarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReservarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservarPage');
    };
    ReservarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservar',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/reservar/reservar.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoAmarillo.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content   style=\'background-color: #c3d7e6\' >\n\n\n<div class=\'tituloHome\' style="background-color:#ff0090 !important; text-align:center">RESERVAR CLASE</div>\n<div style="font-family: normalITitulos;">\n<div style="    width: 100%;    margin-top: 40px;">\n  <ion-select [(ngModel)]="clase" placeholder="Clase" class=\'inputTheme\'>\n    <ion-option value="f">AEROBICOS</ion-option>\n    <ion-option value="m">ZUMBA</ion-option>\n  </ion-select>\n</div>\n\n\n<div style="    width: 100%;    margin-top: 18px;">\n  <ion-select [(ngModel)]="dia" placeholder="Dia" class=\'inputTheme\'>\n    <ion-option value="f">20 de febrero</ion-option>\n    <ion-option value="m">23 de febrero</ion-option>\n  </ion-select>\n</div>\n\n\n<div style="    width: 100%;    margin-top: 18px;">\n  <ion-select [(ngModel)]="horario" placeholder="Horario" class=\'inputTheme\'>\n    <ion-option value="f">3pm</ion-option>\n    <ion-option value="m">8pm</ion-option>\n  </ion-select>\n</div>\n</div>\n    <div style="text-align:center; margin-top:30px">\n	<button class="btnAzul" style="    width: 60%;">RESERVAR</button>\n	</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/reservar/reservar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReservarPage);
    return ReservarPage;
}());

//# sourceMappingURL=reservar.js.map

/***/ })

});
//# sourceMappingURL=0.js.map