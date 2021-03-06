webpackJsonp([2],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilPageModule = (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
            ],
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(100);
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
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, storage, events, apiProvider, loadingController, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
        this.getUserData();
    };
    PerfilPage.prototype.getUserData = function () {
        var _this = this;
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            data ? _this.userProfile = data : _this.openModal();
        });
    };
    PerfilPage.prototype.goRutinaP = function () {
        if (this.userProfile) {
            this.navCtrl.setRoot('MiRutinaPage');
        }
        else {
            this.openModalLogin();
        }
    };
    PerfilPage.prototype.openModal = function () {
        var data = { message: 'hello world' };
        var modalPage = this.modalCtrl.create('LoginPage', data);
        modalPage.present();
    };
    PerfilPage.prototype.CalculateAge = function (fecha) {
        console.log(fecha);
        if (fecha) {
            var timeDiff = Math.abs(Date.now() - new Date(fecha));
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            var edadc = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
            console.log(edadc);
            return edadc;
        }
    };
    PerfilPage.prototype.cerrarSesion = function () {
        this.storage.set("usr_tok_datagym", undefined);
        this.events.publish('userLogout');
        this.navCtrl.setRoot('InicioPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoFinal.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content  style="background-image: url(\'assets/imgs/fondoPerfil.png\');    background-size: cover;">\n\n<div style="text-align:center">\n <img style=\'border-radius: 100%;\n    width: 150px;\n    margin-top: 20px;\n    margin-bottom: 11px;\n    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);\' [src]="userProfile?.imagenUrl" onError="this.src=\'assets/imgs/profile.png\'"> \n <div style="    color: white;\n    font-size: 29px;\n      font-family: normalL;">{{userProfile?.nombre}}</div>\n</div>\n\n  <div style="margin-top:30px;    font-family: normalIt;">\n      <div class="profileEtiq" style="margin-top:12px;text-align:center !important">\n        <div style="font-size: 18px !important;">Socio N</div>\n        <div style="font-size: 30px !important;">{{userProfile?.numeroSocio}}</div>\n      </div>\n\n            <div class="profileEtiq" style="margin-top:12px; text-align:center !important">\n        <div style="font-size: 18px !important;">Edad</div>\n        <div style="font-size: 30px !important;">{{CalculateAge(userProfile?.fechaNacimiento) || \'-\'}}</div>\n      </div>\n\n            <div class="profileEtiq" style="margin-top:12px;text-align:center !important">\n        <div style="font-size: 18px !important;">Personal Trainer</div>\n        <div style="font-size: 30px !important;">{{userProfile?.profesor || \'-\'}}</div>\n      </div>\n\n\n  </div>\n\n<div style="text-align:center">\n	<button style="    padding-left: 70px;\n    padding-right: 70px;" class="btnAzul" (click)=\'goRutinaP()\'>MI RUTINA</button>\n</div>\n\n\n<div style="    text-align: center;\n    text-decoration: underline;\n    color: white;\n    margin-top: 30px;\n    font-size: 20px;\n    font-family: normalL; " (click)="cerrarSesion()">Cerrar sesion</div>\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ })

});
//# sourceMappingURL=2.js.map