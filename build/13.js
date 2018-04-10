webpackJsonp([13],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasePageModule", function() { return ClasePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clase__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClasePageModule = (function () {
    function ClasePageModule() {
    }
    ClasePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clase__["a" /* ClasePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clase__["a" /* ClasePage */]),
            ],
        })
    ], ClasePageModule);
    return ClasePageModule;
}());

//# sourceMappingURL=clase.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClasePage; });
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
 * Generated class for the ClasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClasePage = (function () {
    function ClasePage(navCtrl, navParams, apiProvider, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.claseData = {};
    }
    ClasePage.prototype.verificarReserva = function (idClase, idUsuario) {
        return this.apiProvider.verificarReserva(idClase, idUsuario)
            .then(function (data) {
            console.log(data);
        });
    };
    ClasePage.prototype.ionViewDidLoad = function () {
        this.claseData = this.navParams.data;
        console.log(this.claseData);
    };
    ClasePage.prototype.goReservar = function () {
        this.navCtrl.push('ReservarPage');
    };
    ClasePage.prototype.goTodasClases = function () {
        var loading = this.loadingController.create({ content: "cargando..." });
        loading.present();
        this.verificarReserva(this.claseData.idClase, 1).then(function () {
            loading.dismissAll();
        });
    };
    ClasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clase',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/clase/clase.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoFinal.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content style=\'background-color: #c3d7e6\' >\n<div class="capaOscuridad" style="z-index:0 !important;height: 90% !important;     background-color: black !important;"></div>\n	<div style="    background-image: url(assets/imgs/claseFo.png);\n    background-size: cover;\n    width: 100%;\n    z-index:-1 !important;\n    height: 90%;">\n    	<div style="      text-align: center;\n    font-size: 46px;\n    font-weight: 800;\n    color: white;\n    padding-top: 30%;\n    font-family: tituloHItalic;\n    position: absolute;\n    width: 100%;"  [innerHtml]="claseData.nombre" ></div>\n    	<div style="    text-align: center;\n    padding-top: calc(40% + 65px);\n    position: absolute;\n    width: 100%;">\n<!-- \n    <button class="btnRosa"  (click)="goReservar()"  >RESERVAR</button> -->\n\n    	</div>\n\n    	<div style="display:table; width:100%  ;  position: absolute;\n    bottom: 12%;">\n    		<div style="    display: table-cell;\n    text-align: center;">\n    			<img src="assets/imgs/imagenCuerpo.png" style="height: 170px;    padding: 0px 20px;">\n    		</div>\n    		<div style="    display: table-cell;\n    vertical-align: top;\n    color: white;\n    font-size: 21px;font-family: normalL;\n    padding-right: 25px;">\n    			<div class="itemClase" style="    margin-bottom: 15px;">\n    				<div>Duracion: {{claseData.duracionMinutos || claseData.duracionAproximada}}min</div>\n    			\n    			</div>\n    			<div class="itemClase"  style="    margin-bottom: 15px;">\n    				<div *ngIf=\'claseData.duracionMinutos\' >Beneficio: {{claseData.beneficio}}</div>\n                    <div *ngIf=\'claseData.duracionAproximada\' >{{claseData.cantidadEjercicio}}  {{claseData.etiquetaEjercicio}}</div>\n\n    			</div>\n    			<div class="itemClase">\n    				<div>Calorias: {{claseData.calorias}} aprox.</div>\n    				<div>\n            <div class="barraRelleno" [ngStyle]="{\'width\': (claseData.calorias/10) +\'%\' }" ></div>              \n                    </div>\n    			</div>\n    			<div class="itemClase">\n    				<div>Dificultad: {{claseData.dificultad}} %</div>\n    				<div>\n            <div class="barraRelleno"  [ngStyle]="{\'width\': claseData.dificultad +\'%\' }" ></div>              \n                    </div>\n    			</div>\n    		</div>\n\n    	</div>\n    	\n\n\n    </div>\n\n\n    <div style="text-align:center">\n	<button class="btnAzul" *ngIf=\'claseData.reserva==1\' (click)=\'goReservar()\'>RESERVAR UNA CLASE</button>\n	</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/clase/clase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ClasePage);
    return ClasePage;
}());

//# sourceMappingURL=clase.js.map

/***/ })

});
//# sourceMappingURL=13.js.map