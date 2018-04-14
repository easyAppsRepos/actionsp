webpackJsonp([1],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservarPageModule", function() { return ReservarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservar__ = __webpack_require__(313);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reservar__["a" /* ReservarPage */]),
            ],
        })
    ], ReservarPageModule);
    return ReservarPageModule;
}());

//# sourceMappingURL=reservar.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservarPage; });
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
 * Generated class for the ReservarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservarPage = (function () {
    function ReservarPage(navCtrl, navParams, apiProvider, loadingController, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    ReservarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "cargando..." });
        loading.present();
        return this.apiProvider.getClasesReserva()
            .then(function (data) {
            console.log(data);
            _this.valoresClases = (Object.values(data));
            loading.dismissAll();
        });
    };
    ReservarPage.prototype.removeDuplicatesBy = function (prop, array) {
        var mySet = new Set();
        return array.filter(function (x) {
            var key = x[prop], isNew = !mySet.has(key);
            if (isNew)
                mySet.add(key);
            return isNew;
        });
    };
    ReservarPage.prototype.cambioDeHora = function (valorSeleccionado) {
        this.idClaseReservaSeleccion = null;
        this.horaValores = this.claseSelecccionada.filter(function (item) {
            //console.log(item.soloFecha);
            //console.log(valorSeleccionado);
            return item.soloFecha == valorSeleccionado;
        });
        console.log(this.horaValores);
    };
    ReservarPage.prototype.seleccionClase = function (idClaseReserva) {
        this.idClaseReservaSeleccion = idClaseReserva;
        console.log(this.horaValores);
    };
    ReservarPage.prototype.openModal = function () {
        var data = { message: 'hello world' };
        var modalPage = this.modalCtrl.create('LoginPage', data);
        modalPage.present();
    };
    ReservarPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    ReservarPage.prototype.reservarClase = function () {
        var _this = this;
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            data ? _this.agregarReserva(data.idUsuario) : _this.openModal();
        });
        // console.log(  this.idClaseReservaSeleccion);
    };
    ReservarPage.prototype.agregarReserva = function (idUsuario) {
        var _this = this;
        var loading = this.loadingController.create({ content: "cargando..." });
        loading.present();
        return this.apiProvider.agregarReserva(idUsuario, this.idClaseReservaSeleccion)
            .then(function (data) {
            console.log(data);
            loading.dismissAll();
            if (data.data && (data.data.affectedRows > 0)) {
                console.log(data);
                _this.presentAlert('Enhorabuena!', 'Enhorabuena! Ya estas inscrit@ en esta clase');
            }
            else {
                console.log('nodata');
                data.data.errno == 1062 ? _this.presentAlert('Anotado', 'Ya estas anotado a esta clase') :
                    _this.presentAlert('Ups!', 'Ha ocurrido un error inesperado');
                //this.presentAlert('Anotado','Ya estas inscrit@ en esta clase');
            }
        });
    };
    ReservarPage.prototype.cambioDeClase = function (valorSeleccionado) {
        this.fechaValores = this.removeDuplicatesBy('soloFecha', this.valoresClases[valorSeleccionado]);
        this.claseSelecccionada = this.valoresClases[valorSeleccionado];
        this.horaValores = [];
        this.idClaseReservaSeleccion = null;
        // console.log(this.valoresClases[valorSeleccionado]);
        //this.indexSeleccionado = valorSeleccionado;
        //this.fechaValores = this.valoresClases[valorSeleccionado];
    };
    ReservarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservar',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/reservar/reservar.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoFinal.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content   style=\'background-color: #c3d7e6\' >\n\n\n<div class=\'tituloHome\' style="background-color:#ff0090 !important; text-align:center">RESERVAR CLASE</div>\n<div style="font-family: normalITitulos;">\n<div style="    width: 100%;    margin-top: 40px;">\n  <ion-select (ionChange)="cambioDeClase(clase)" [(ngModel)]="clase" placeholder="Clase" class=\'inputTheme\'>\n    <ion-option  value="{{i}}" *ngFor="let c of valoresClases;let i = index"  >{{c[0].nombre}}</ion-option>\n  </ion-select>\n</div>\n\n\n<div style="width: 100%;    margin-top: 18px;" >\n  <ion-select (ionChange)="cambioDeHora(dia)"  [(ngModel)]="dia" placeholder="Dia" class=\'inputTheme\'>\n\n     <ion-option  value="{{f.soloFecha}}" *ngFor="let f of fechaValores;let i = index"  >{{f.diaFecha}} - {{f.soloFecha}}</ion-option>\n\n\n  </ion-select>\n</div>\n\n\n<div style="    width: 100%;    margin-top: 18px;">\n  <ion-select (ionChange)="seleccionClase(horario)"  [(ngModel)]="horario" placeholder="Horario" class=\'inputTheme\'>\n  \n\n    <ion-option  value="{{h.idReservaClase}}" *ngFor="let h of horaValores;let i = index"  >{{h.soloHora}}\n    </ion-option>\n\n\n  </ion-select>\n</div>\n</div>\n    <div style="text-align:center; margin-top:30px">\n	<button [disabled]="!idClaseReservaSeleccion" (click)="reservarClase()" class="btnAzul" style="    width: 60%;">RESERVAR</button>\n	</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/reservar/reservar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReservarPage);
    return ReservarPage;
}());

//# sourceMappingURL=reservar.js.map

/***/ })

});
//# sourceMappingURL=1.js.map