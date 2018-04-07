webpackJsonp([12],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadPageModule", function() { return ActividadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actividad__ = __webpack_require__(297);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__actividad__["a" /* ActividadPage */]),
            ],
        })
    ], ActividadPageModule);
    return ActividadPageModule;
}());

//# sourceMappingURL=actividad.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActividadPage; });
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
 * Generated class for the ActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActividadPage = (function () {
    function ActividadPage(navCtrl, navParams, apiProvider, loadingController, alertCtrl, modalCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.actividadData = {};
        this.ejercicioCompletado = false;
    }
    ActividadPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //agregar alert de no se cargo ok
        var loading = this.loadingController.create({ content: "cargando..." });
        loading.present();
        console.log(this.navParams.get('idActividad'));
        return this.apiProvider.getActividadData(this.navParams.get('idActividad'))
            .then(function (data) {
            console.log(data);
            _this.actividadData = data[0];
            loading.dismissAll();
        });
    };
    ActividadPage.prototype.ionViewDidLoad = function () {
    };
    ActividadPage.prototype.actualizarRutina = function () {
        this.events.publish('updateRutin');
    };
    ActividadPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    ActividadPage.prototype.openModal = function () {
        var modalPage = this.modalCtrl.create('LoginPage');
        modalPage.present();
    };
    ActividadPage.prototype.completarEjercicioApi = function () {
        var _this = this;
        console.log('adsasda');
        console.log(this.idUsuario);
        var loading = this.loadingController.create({ content: "cargando..." });
        loading.present();
        this.apiProvider.completarEjercicio(this.navParams.get('idActividad'), this.navParams.get('idR'), this.idUsuario)
            .then(function (data) {
            console.log(data);
            loading.dismissAll();
            if (data.data.affectedRows > 0) {
                _this.events.publish('updateRutin');
                _this.ejercicioCompletado = true;
                _this.presentAlert('Enhorabuena!', 'Has completado el ejercicio');
            }
        });
    };
    ActividadPage.prototype.completarEjercicio = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Completar',
            message: 'Deseas marcar como completado este ejercicio?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Completar',
                    handler: function () {
                        console.log('COMPLETADO');
                        _this.completarEjercicioApi();
                    }
                }
            ]
        });
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            data ? _this.idUsuario = data.idUsuario : console.log('nouser');
            data ? alert.present() : _this.openModal();
        });
    };
    ActividadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-actividad',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/actividad/actividad.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoAmarillo.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content   style="background-image: url(\'assets/imgs/bicepFoto.png\');    background-size: cover;" >\n<div [ngClass]="{\'colorVerde\' : ejercicioCompletado, \'colorDark\' : !ejercicioCompletado}" class="capaOscuridad" style="height:140% !important; position:fixed"></div>\n<div  *ngIf=\'actividadData\'>\n	<div style="  text-align: center;\n    color: white;\n    font-size: 65px;\n    font-family: tituloItalic;\n    text-shadow: 2px 4px 3px rgba(0,0,0,0.6);\n    margin-top: 25px;" [innerHtml]="actividadData.nombre">\n		\n	</div>\n<div class="containerActividadD">\n  <div >\n    <span >{{actividadData.cantidadEjercicio}}</span>\n    <span >{{actividadData.etiquetaEjercicio}}</span>\n  </div>\n  <div >\n    <img src="assets/imgs/icono1.png">\n  </div>\n</div>\n\n<div  class="containerActividadD" *ngIf=\'!ejercicioCompletado\'>\n  <div>\n    <span >{{actividadData.dificultad}}%</span>\n    <span >Dificultad</span>\n  </div>\n  <div >\n    <img src="assets/imgs/icono2.png" >\n  </div>\n</div>\n\n<div  class="containerActividadD" *ngIf=\'ejercicioCompletado\'>\n  <div>\n    <span >{{actividadData.kgFuerza}}</span>\n    <span >Kilogramos/fuerza</span>\n  </div>\n  <div >\n    <img src="assets/imgs/icono2.png" >\n  </div>\n</div>\n\n\n<div  class="containerActividadD" *ngIf=\'ejercicioCompletado\'>\n  <div>\n    <span >{{actividadData.calorias}}</span>\n    <span>Calorias perdidas</span>\n  </div>\n  <div >\n    <img src="assets/imgs/icono4.png" >\n  </div>\n</div>\n\n\n<div style="text-align:center; margin-top:15px; margin-bottom:30px" *ngIf=\'!ejercicioCompletado\'>\n<button class="btnAzul"  (click)="completarEjercicio()" >Completar ejercicio</button>\n</div>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/actividad/actividad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ActividadPage);
    return ActividadPage;
}());

//# sourceMappingURL=actividad.js.map

/***/ })

});
//# sourceMappingURL=12.js.map