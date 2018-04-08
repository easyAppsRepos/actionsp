webpackJsonp([10],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipamentoPageModule", function() { return EquipamentoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipamento__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EquipamentoPageModule = (function () {
    function EquipamentoPageModule() {
    }
    EquipamentoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__equipamento__["a" /* EquipamentoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__equipamento__["a" /* EquipamentoPage */]),
            ],
        })
    ], EquipamentoPageModule);
    return EquipamentoPageModule;
}());

//# sourceMappingURL=equipamento.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipamentoPage; });
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
 * Generated class for the EquipamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EquipamentoPage = (function () {
    function EquipamentoPage(navCtrl, navParams, apiProvider, loadingController, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.events = events;
        this.dataEquipamento = [];
    }
    EquipamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad cargarEquipamento');
        this.cargarEquipamento();
    };
    EquipamentoPage.prototype.cargarEquipamento = function () {
        var _this = this;
        this.apiProvider.getEquipamento()
            .then(function (data) {
            console.log(data);
            _this.dataEquipamento = data.data;
        });
    };
    EquipamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipamento',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/equipamento/equipamento.html"*/'<!--\n\n\n  Generated template for the EstadisticaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoAmarillo.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content   style=\'background-color: #c3d7e6\' >\n\n\n<div class="tituloHome"  style="background-color:#3ec754 !important; text-align:center ">EQUIPAMENTO</div>\n\n    <div style="width:100%;    display: table; table-layout: fixed;" *ngFor="let e of dataEquipamento; let i = index">\n      <div [style.backgroundColor]="i%2 !== 0 ? \'#d2dade\' : \'white\'" style=" display: table-cell;\n    vertical-align: top;\n\n    padding-top: 13px;\n       text-align: center;\n       color: #2f2f2f;\n    font-size: 13px;        width: 36%;">\n      <img style=\'    width: 70px;\n    padding-bottom: 10px;\' src="assets/imgs/maquina1.png">\n      </div>\n      <div   [style.backgroundColor]="i%2 == 0 ? \'#d2dade\' : \'white\'" class="maquinaData">\n            <div style="    font-size: 23px;\n    color: #4c4c4c;\n    ">{{e.nombre}}</div>\n            <div style="\n            font-size: 18px;\n    color: #5a5c5d;\n    ">{{e.item1}}</div>\n                <div style="\n            font-size: 18px;\n    color: #5a5c5d;\n    ">{{e.item2}}</div>\n                <div style="\n            font-size: 18px;\n    color: #5a5c5d;\n    ">{{e.item3}}</div>\n\n\n<div style="background-color: #3ec754;" class=\'masBtn maquinabtn\'>+</div>\n\n\n          </div>\n    </div>\n\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/equipamento/equipamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], EquipamentoPage);
    return EquipamentoPage;
}());

//# sourceMappingURL=equipamento.js.map

/***/ })

});
//# sourceMappingURL=10.js.map