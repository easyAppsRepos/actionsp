webpackJsonp([9],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorarioatencionPageModule", function() { return HorarioatencionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horarioatencion__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HorarioatencionPageModule = (function () {
    function HorarioatencionPageModule() {
    }
    HorarioatencionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__horarioatencion__["a" /* HorarioatencionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__horarioatencion__["a" /* HorarioatencionPage */]),
            ],
        })
    ], HorarioatencionPageModule);
    return HorarioatencionPageModule;
}());

//# sourceMappingURL=horarioatencion.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarioatencionPage; });
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
 * Generated class for the HorarioatencionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HorarioatencionPage = (function () {
    function HorarioatencionPage(navCtrl, navParams, apiProvider, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.horarioPileta = [];
        this.horarioFitness = [];
    }
    HorarioatencionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "cargando..." });
        loading.present();
        return this.apiProvider.getHorarioAtencion()
            .then(function (data) {
            _this.horarioFitness = data.data[0];
            _this.horarioPileta = data.data[1];
            loading.dismissAll();
        });
    };
    HorarioatencionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-horarioatencion',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/horarioatencion/horarioatencion.html"*/'<!--\n  Generated template for the HorarioatencionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoFinal.png"> \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style=\'background-color: #c3d7e6\'>\n<div  *ngIf="horarioFitness.length>0">\n<div  style="background-color: #0095ff;    text-align: center;" class="tituloHome">HORARIOS FITNESS</div>\n\n<ion-grid style=\'background-color:rgba(28, 167, 252, 0.4)\'>\n  <ion-row style=\'margin:15px;\' *ngFor="let d of horarioFitness" >\n    <ion-col style=\'font-family: tituloHItalic !important\' col-5 class=\'tituloHome\'>\n      {{d.diaNombre}}\n    </ion-col>\n    <ion-col class=\'tituloHome\'>\n      {{d.horario}}\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<div  style="background-color: #0095ff;    text-align: center;" class="tituloHome">HORARIOS PILETA</div>\n\n<ion-grid style=\' background-color:rgba(28, 167, 252, 0.4)\'>\n  <ion-row style=\'margin:15px;\' *ngFor="let d of horarioPileta">\n    <ion-col style=\'font-family: tituloHItalic !important\' col-5 class=\'tituloHome\'>\n      {{d.diaNombre}}\n    </ion-col>\n    <ion-col class=\'tituloHome\'>\n      {{d.horario}}\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/horarioatencion/horarioatencion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], HorarioatencionPage);
    return HorarioatencionPage;
}());

//# sourceMappingURL=horarioatencion.js.map

/***/ })

});
//# sourceMappingURL=9.js.map