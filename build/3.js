webpackJsonp([3],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiRutinaPageModule", function() { return MiRutinaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mi_rutina__ = __webpack_require__(304);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mi_rutina__["a" /* MiRutinaPage */]),
            ],
        })
    ], MiRutinaPageModule);
    return MiRutinaPageModule;
}());

//# sourceMappingURL=mi-rutina.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiRutinaPage; });
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
 * Generated class for the MiRutinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MiRutinaPage = (function () {
    function MiRutinaPage(navCtrl, navParams, apiProvider, loadingController, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.events = events;
        events.subscribe('updateRutin', function () {
            _this.apiProvider.verificarLogin()
                .then(function (data) {
                _this.apiProvider.getRutinaUsuario(data.idUsuario)
                    .then(function (data) {
                    _this.proximoEjercicio = data[1][0];
                    _this.diasRutina = (Object.values(data[0]));
                    console.log(_this.diasRutina);
                    console.log(_this.proximoEjercicio);
                });
            });
        });
    }
    MiRutinaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "cargando..." });
        loading.present();
        this.apiProvider.verificarLogin()
            .then(function (data) {
            _this.apiProvider.getRutinaUsuario(data.idUsuario)
                .then(function (data) {
                _this.proximoEjercicio = data[1][0];
                _this.diasRutina = (Object.values(data[0]));
                console.log(_this.diasRutina.length);
                loading.dismissAll();
                console.log(_this.proximoEjercicio);
            });
        });
    };
    MiRutinaPage.prototype.getPorcentaje = function (dia) {
        var num = 0;
        dia.forEach(function (item) {
            if (item.completado) {
                num++;
            }
        });
        var enviar = ((num * 100) / (dia.length)) + '%';
        return enviar;
    };
    MiRutinaPage.prototype.goActividad = function () {
        //console.log(this.proximoEjercicio.idActividad);
        this.navCtrl.push('ActividadPage', { idActividad: this.proximoEjercicio.idActividad, idR: this.proximoEjercicio.idRutinaActividad });
    };
    MiRutinaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mi-rutina',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/mi-rutina/mi-rutina.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoAmarillo.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content  style=\'background-color: #c3d7e6\' >\n\n<div class=\'tituloRutina tituloHome\'>MI RUTINA</div>\n<div *ngIf=\'diasRutina?.length == 0 && !proximoEjercicio\'>\n          <div class="sectionHome">\n    <div>\n      <div style="    color: white;\n    font-size: 16px;\n    font-weight: 800;\n        padding-left: 30px;\n    padding-right: 30px;\n    color:#777;\n    padding-top: 42px;\n    padding-bottom: 20px;    font-family: normalL;">Actualmente no tienes una rutina asignada, solicita una ahora mismo y empieza a entrenar! </div>\n      <div style="text-align:center"><div style="  background-color:  #ff4d00;" class=\'masBtn\' >+</div></div>\n    </div>\n  </div>\n\n</div>\n\n<div *ngIf=\'diasRutina\'>\n\n  <div class="sectionHome" *ngIf=\'proximoEjercicio\'>\n    <div style=\'margin-top:7px;background-color: #3ec754\' class="tituloHome">PROXIMO EJERCICIO</div> \n    <div class="bodyHome" tappable (click)="goActividad()">\n      <div class="tituloBold">{{proximoEjercicio?.nombre}}</div>\n      <div style="text-align:center">\n        <div style=\'background-color: #3ec754;\' class=\'masBtn\' >+</div>\n      </div>\n    </div>\n\n  </div>\n\n<!--     <div class="sectionHome" *ngIf=\'!proximoEjercicio && !(diasRutina?.length == 0)\'>\n    <div style=\'padding-left:20px; padding-right:20px;font-size:16px !important;margin-top:7px;background-color: #3ec754\' class="tituloHome">Enhorabuena! Has finalizado la rutina de esta semana</div> \n  </div>\n -->\n\n\n<div class="diaContainer" *ngFor="let dia of diasRutina;let i = index" >\n		<span class="diaTitulo" >DIA {{i+1}}</span>\n		<div style="\n    width:  100%;\n    height: 100%;\n    background: #ff4d00;\n    position: absolute;\n    top: 0;\n    z-index:  -1;\n    opacity: 0.66;\n"></div>\n		<div  [ngStyle]="{\'width\': getPorcentaje(dia)}" style="\n    \n    height: 100%;\n    background: #3ec754;\n    position: absolute;\n    top: 0;\n    z-index: -1;\n"></div>\n</div>\n\n\n\n<!-- \n<div class="diaContainer">\n		<span  class="diaTitulo">MARTES</span>\n		<div style="\n    width:  100%;\n    height: 100%;\n    background: #ff4d00;\n    position: absolute;\n    top: 0;\n    z-index:  -1;\n    opacity: 0.66;\n"></div>\n</div>\n\n\n<div class="diaContainer">\n		<span class="diaTitulo">MIERCOLES</span>\n		<div style="\n    width:  100%;\n    height: 100%;\n    background: #ff4d00;\n    position: absolute;\n    top: 0;\n    z-index:  -1;\n    opacity: 0.66;\n"></div>\n\n</div> -->\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/mi-rutina/mi-rutina.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _e || Object])
    ], MiRutinaPage);
    return MiRutinaPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=mi-rutina.js.map

/***/ })

});
//# sourceMappingURL=3.js.map