webpackJsonp([7],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InicioPageModule = (function () {
    function InicioPageModule() {
    }
    InicioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */]),
            ],
        })
    ], InicioPageModule);
    return InicioPageModule;
}());

//# sourceMappingURL=inicio.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
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
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = (function () {
    function InicioPage(navCtrl, navParams, apiProvider, loadingController, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    InicioPage.prototype.openModal = function () {
        var data = { message: 'hello world' };
        var modalPage = this.modalCtrl.create('LoginPage', data);
        modalPage.present();
    };
    InicioPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar'],
            cssClass: 'alertCustomCss'
        });
        alert.present();
    };
    InicioPage.prototype.solicitarRutinaApi = function () {
        var _this = this;
        console.log(this.idUs);
        var loading = this.loadingController.create({ content: "cargando..." });
        loading.present();
        this.apiProvider.solicitarRR(this.idUs)
            .then(function (data) {
            if (data.data) {
                _this.presentAlert('Rutina solicitada', 'Excelente! Tener un plan de ejercicios es el primer paso para cumplir tus metas! Un instructor te asignara la rutina en breve');
            }
            else {
                _this.presentAlert('Error', 'Ha ocurrido un error inesperado');
            }
            loading.dismissAll();
        });
    };
    InicioPage.prototype.solicitarRutina = function () {
        var _this = this;
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                var loading_1 = _this.loadingController.create({ content: "cargando..." });
                loading_1.present();
                _this.apiProvider.verificarLogin()
                    .then(function (data) {
                    _this.idUs = data.idUsuario;
                    _this.apiProvider.getRutinaUsuario(data.idUsuario)
                        .then(function (data) {
                        if (data[1].length > 0) {
                            _this.presentAlert('Atencion!', 'Tu rutina ha sido asiganda, ve a la seccion de rutina y empieza tu plan de entrenamiento!');
                            loading_1.dismissAll();
                        }
                        else {
                            _this.solicitarRutinaApi();
                        }
                    });
                });
            }
            else {
                _this.openModal();
            }
        });
    };
    InicioPage.prototype.getDataHome = function () {
        var _this = this;
        return this.apiProvider.getDataHome()
            .then(function (data) {
            console.log(data);
            console.log(data[1][0]);
            _this.proximaClase = data[0][0];
            _this.dia = data[1][0];
        });
    };
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('f4');
        var loading = this.loadingController.create({ content: "cargando..." });
        loading.present();
        this.getDataHome().then(function () {
            loading.dismissAll();
        });
    };
    InicioPage.prototype.goClase = function (tipo) {
        if (tipo == 1) {
            this.navCtrl.push('ClasePage', this.proximaClase);
        }
        if (tipo == 2) {
            this.navCtrl.push('ClasePage', this.dia);
        }
    };
    InicioPage.prototype.goActividad = function () {
        this.navCtrl.push('ActividadPage', this.dia);
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white;\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoFinal.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content style=\'background-color: #c3d7e6\'>\n\n\n<!--   <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button> -->\n\n  <div class="sectionHome" *ngIf="proximaClase">\n    <div style=\'background-color: #ff0090\' class="tituloHome">PROXIMA CLASE</div> \n    <div class="bodyHomee" [ngStyle]="{\'background-image\': \'url(\' + proximaClase.imagenUrl + \')\'}">\n      <div class=\'tituloBold\' [innerHtml]="proximaClase.nombre"></div>\n      <div class="btnMas"><div (click)="goClase(1)" style=\'background-color: #ff0090;\' class=\'masBtn\'>+</div></div>\n    </div>\n  </div>\n\n  <div class="sectionHome" *ngIf="dia" >\n    <div style=\'background-color: #3ec754\' class="tituloHome">EJERCICIO DEL DIA</div> \n    <div class="bodyHome55" [ngStyle]="{\'background-image\': \'url(\' + dia.imagenUrl + \')\'}">\n      <div class=\'tituloBold\' [innerHtml]="dia.nombre" ></div>\n      <div class="btnMas">\n        <div style="background-color: #3ec754;" class=\'masBtn\'  (click)="goClase(2)" >+</div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class="sectionHome">\n\n\n\n\n    <div style=\'background-color: #ff4d00\' class="tituloHome">SOLICITAR RUTINA</div> \n    <div class="bodyHome">\n\n\n\n\n      <div style="    color: white;\n    font-size: 14px;\n    font-weight: 800;\n    padding-top: 42px;\n    padding-bottom: 20px;    font-family: normalL;">Al momento de tu inscripcion podes <br> solicitar una rutina en la que tu <br> personal trainer podra seguir tus avances</div>\n      <div class="btnMas"><div  (click)="solicitarRutina()" style="  background-color:  #ff4d00;" class=\'masBtn\' >+</div></div>\n    </div>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/inicio/inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ })

});
//# sourceMappingURL=7.js.map