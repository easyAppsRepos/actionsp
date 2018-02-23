webpackJsonp([11],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/actividad/actividad.module": [
		278,
		7
	],
	"../pages/clase/clase.module": [
		277,
		10
	],
	"../pages/equipamento/equipamento.module": [
		276,
		6
	],
	"../pages/escaner/escaner.module": [
		279,
		5
	],
	"../pages/estadistica/estadistica.module": [
		280,
		4
	],
	"../pages/horarios/horarios.module": [
		281,
		9
	],
	"../pages/inicio/inicio.module": [
		282,
		3
	],
	"../pages/mi-rutina/mi-rutina.module": [
		283,
		2
	],
	"../pages/novedades/novedades.module": [
		285,
		1
	],
	"../pages/perfil/perfil.module": [
		284,
		8
	],
	"../pages/reservar/reservar.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoAmarillo.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content style=\'background-color: #c3d7e6\'>\n\n\n<!--   <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button> -->\n\n  <div class="sectionHome">\n    <div style=\'background-color: #ff0090\' class="tituloHome">PROXIMA CLASE</div> \n    <div class="bodyHome">\n      <div class=\'tituloBold\'>Body Pump</div>\n      <div style="text-align:center"><div style=\'background-color: #ff0090;\' class=\'masBtn\' >+</div></div>\n    </div>\n  </div>\n\n  <div class="sectionHome">\n    <div style=\'background-color: #3ec754\' class="tituloHome">EJERCICIO DEL DIA</div> \n    <div class="bodyHome">\n      <div class=\'tituloBold\'>Biceps</div>\n      <div style="text-align:center"><div style="background-color: #3ec754;" class=\'masBtn\'>+</div></div>\n    </div>\n\n  </div>\n\n  <div class="sectionHome">\n    <div style=\'background-color: #ff4d00\' class="tituloHome">SOLICITAR RUTINA</div> \n    <div class="bodyHome">\n      <div style="    color: white;\n    font-size: 14px;\n    font-weight: 800;\n    padding-top: 42px;\n    padding-bottom: 20px;    font-family: normalL;">Al momento de tu inscripcion podes <br> solicitar una rutina en la que tu <br> personal trainer podra seguir tus avances</div>\n      <div style="text-align:center"><div style="  background-color:  #ff4d00;" class=\'masBtn\' >+</div></div>\n    </div>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClasePage; });
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
 * Generated class for the ClasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClasePage = (function () {
    function ClasePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClasePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClasePage');
    };
    ClasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clase',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/clase/clase.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoAmarillo.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content style=\'background-color: #c3d7e6\' >\n<div class="capaOscuridad" style="z-index:0 !important;height: 90% !important;"></div>\n	<div style="    background-image: url(assets/imgs/claseFo.png);\n    background-size: cover;\n    width: 100%;\n    z-index:-1 !important;\n    height: 90%;">\n    	<div style="    text-align: center;\n    font-size: 60px;\n    font-weight: 800;\n    color: white;\n    padding-top: 40%;\n    font-family: tituloItalic;\n    position: absolute;\n    width: 100%;">Body Pump</div>\n    	<div style="    text-align: center;\n    padding-top: calc(40% + 65px);\n    position: absolute;\n    width: 100%;"><button class="btnRosa" >RESERVAR</button>\n    	</div>\n\n    	<div style="display:table; width:100%  ;  position: absolute;\n    bottom: 12%;">\n    		<div style="    display: table-cell;\n    text-align: center;">\n    			<img src="assets/imgs/imagenCuerpo.png" style="height: 170px;    padding: 0px 20px;">\n    		</div>\n    		<div style="    display: table-cell;\n    vertical-align: top;\n    color: white;\n    font-size: 21px;font-family: normalL;\n    padding-right: 25px;">\n    			<div class="itemClase">\n    				<div>Duracion: 60</div>\n    				<div>\n            \n                <div class="barraRelleno" style="    width: 70%;"></div>            \n                    </div>\n    			</div>\n    			<div class="itemClase">\n    				<div>Calorias: 560 aprox.</div>\n    				<div>\n            <div class="barraRelleno" style="    width: 20%;"></div>              \n                    </div>\n    			</div>\n    			<div class="itemClase">\n    				<div>Material: Pesa y barra</div>\n    				<div>\n            <div class="barraRelleno" style="    width: 50%;"></div>              \n                    </div>\n    			</div>\n    			<div class="itemClase">\n    				<div>Beneficio: Tonificacion</div>\n    				<div>\n            <div class="barraRelleno" style="    width: 90%;"></div>              \n                    </div>\n    			</div>\n    		</div>\n\n    	</div>\n    	\n\n\n    </div>\n\n\n    <div style="text-align:center">\n	<button class="btnAzul">VER TODAS LAS CLASES</button>\n	</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/clase/clase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ClasePage);
    return ClasePage;
}());

//# sourceMappingURL=clase.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorariosPage; });
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
 * Generated class for the HorariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HorariosPage = (function () {
    function HorariosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HorariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HorariosPage');
    };
    HorariosPage.prototype.goClase = function () {
        this.navCtrl.push('ClasePage');
    };
    HorariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-horarios',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/horarios/horarios.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoAmarillo.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content style=\'background-color: #c3d7e6\' >\n\n<div style="background-color: #ff0090;    text-align: center;" class="tituloHome">HORARIOS FITNESS</div>\n\n<div>\n	<div class="horarioDiaTitulo">LUNES</div>\n\n    <div style="width:100%;    display: table; table-layout: fixed;">\n    	<div style=" display: table-cell;\n    vertical-align: top;\n    background-color: white;\n    padding-top: 13px;\n       text-align: center;\n       color: #2f2f2f;\n    font-size: 13px;    width: 85px;">\n    	8:00 - 9:00\n    	</div>\n    	<div  (click)="goClase()" style="     display: table-cell;\n    padding-left: 16px;\n    background-color: #d2dade;\n    padding-bottom: 7px;\n    padding-top: 8px;">\n		    		<div style="color: #00afe7;" class="tituloHorarios">Action Cycle</div>\n		    		<div class="horariosTipo">Cardio</div>\n		    		<div class="horariosProfesor">Profesor: Alejandro</div>\n		    	</div>\n    </div>\n\n\n        <div style="width:100%;    display: table; table-layout: fixed;">\n    	<div style=" display: table-cell;\n    vertical-align: top;\n    background-color: white;\n    padding-top: 13px;\n       text-align: center;\n       color: #2f2f2f; background-color: #d2dade;\n    font-size: 13px;    width: 85px;">\n    	8:00 - 9:00\n    	</div>\n    	<div style="     display: table-cell;\n    padding-left: 16px;\n   background-color: white;\n    padding-bottom: 7px;\n    padding-top: 8px;    border-left: solid #ff5300 5px;">\n    \n		    		<div style="color: #ff5300;" class="tituloHorarios">Hard Training</div>\n		    		<div class="horariosTipo">Cardio</div>\n		    		<div class="horariosProfesor">Profesor: Alejandro</div>\n		    	</div>\n    </div>\n\n\n\n        <div style="width:100%;    display: table; table-layout: fixed;">\n    	<div style=" display: table-cell;\n    vertical-align: top;\n    background-color: white;\n    padding-top: 13px;\n       text-align: center;\n       color: #2f2f2f;\n    font-size: 13px;    width: 85px;">\n    	8:00 - 9:00\n    	</div>\n    	<div style="     display: table-cell;\n    padding-left: 16px;\n   \n    padding-bottom: 7px;\n    padding-top: 8px; background-color: #d2dade;    border-left: solid #ff0090 5px;">\n		    		<div style="color: #ff0090;" class="tituloHorarios">Body Pump</div>\n		    		<div class="horariosTipo">Cardio</div>\n		    		<div class="horariosProfesor">Profesor: Alejandro</div>\n		    	</div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div>\n	<div class="horarioDiaTitulo">MARTES</div>\n\n    <div style="width:100%;    display: table; table-layout: fixed;">\n    	<div style=" display: table-cell;\n    vertical-align: top;\n    background-color: white;\n    padding-top: 13px;\n       text-align: center;\n       color: #2f2f2f;\n    font-size: 13px;    width: 85px;">\n    	8:00 - 9:00\n    	</div>\n    	<div style="     display: table-cell;\n    padding-left: 16px;\n    background-color: #d2dade;\n    padding-bottom: 7px;\n    padding-top: 8px;">\n		    		<div style="color: #00afe7;" class="tituloHorarios">Action Cycle</div>\n		    		<div class="horariosTipo" > Cardio</div>\n		    		<div class="horariosProfesor">Profesor: Alejandro</div>\n		    	</div>\n    </div>\n\n\n        <div style="width:100%;    display: table; table-layout: fixed;">\n    	<div style=" display: table-cell;\n    vertical-align: top;\n    background-color: white;\n    padding-top: 13px;\n       text-align: center;\n       color: #2f2f2f; background-color: #d2dade;\n    font-size: 13px;    width: 85px;">\n    	8:00 - 9:00\n    	</div>\n    	<div style="     display: table-cell;\n    padding-left: 16px;\n      background-color: white;\n    padding-bottom: 7px;\n    padding-top: 8px;">\n		    		<div style="color: #ff5300;"  class="tituloHorarios">Hard Training</div>\n		    		<div class="horariosTipo">Cardio</div>\n		    		<div class="horariosProfesor">Profesor: Alejandro</div>\n		    	</div>\n    </div>\n\n\n\n        <div style="width:100%;    display: table; table-layout: fixed;">\n    	<div style=" display: table-cell;\n    vertical-align: top;\n    background-color: white;\n    padding-top: 13px;\n       text-align: center;\n       color: #2f2f2f;\n    font-size: 13px;    width: 85px;">\n    	8:00 - 9:00\n    	</div>\n    	<div style="     display: table-cell;\n    padding-left: 16px;\n   \n    padding-bottom: 7px;\n    padding-top: 8px; background-color: #d2dade;">\n		    		<div style="color: #ff0090;" class="tituloHorarios">Body Pump</div>\n		    		<div class="horariosTipo">Cardio</div>\n		    		<div class="horariosProfesor">Profesor: Alejandro</div>\n		    	</div>\n    </div>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/horarios/horarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HorariosPage);
    return HorariosPage;
}());

//# sourceMappingURL=horarios.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
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
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoAmarillo.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content  style="background-image: url(\'assets/imgs/fondoPerfil.png\');    background-size: cover;">\n\n<div style="text-align:center">\n <img style=\'border-radius: 100%;\n    width: 150px;\n    margin-top: 20px;\n    margin-bottom: 11px;\n    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);\' src="assets/imgs/profile.png"> \n <div style="    color: white;\n    font-size: 29px;\n      font-family: normalL;">Martin Dorego</div>\n</div>\n\n  <div style="margin-top:30px;    font-family: normalIt;">\n      <div class="profileEtiq" style="margin-top:12px;text-align:center !important">\n        <div style="font-size: 18px !important;">Socio N</div>\n        <div style="font-size: 30px !important;">45872938</div>\n      </div>\n\n            <div class="profileEtiq" style="margin-top:12px; text-align:center !important">\n        <div style="font-size: 18px !important;">Edad</div>\n        <div style="font-size: 30px !important;">27</div>\n      </div>\n\n            <div class="profileEtiq" style="margin-top:12px;text-align:center !important">\n        <div style="font-size: 18px !important;">Personal Trainer</div>\n        <div style="font-size: 30px !important;">German</div>\n      </div>\n\n\n  </div>\n\n<div style="text-align:center">\n	<button style="    padding-left: 70px;\n    padding-right: 70px;" class="btnAzul">MI RUTINA</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { PerfilPage } from '../pages/perfil/perfil';
//import { HorariosPage } from '../pages/horarios/horarios';


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    tabsPlacement: 'top',
                    backButtonText: ''
                }, {
                    links: [
                        { loadChildren: '../pages/equipamento/equipamento.module#EquipamentoPageModule', name: 'EquipamentoPage', segment: 'equipamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clase/clase.module#ClasePageModule', name: 'ClasePage', segment: 'clase', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/actividad/actividad.module#ActividadPageModule', name: 'ActividadPage', segment: 'actividad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/escaner/escaner.module#EscanerPageModule', name: 'EscanerPage', segment: 'escaner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estadistica/estadistica.module#EstadisticaPageModule', name: 'EstadisticaPage', segment: 'estadistica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/horarios/horarios.module#HorariosPageModule', name: 'HorariosPage', segment: 'horarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mi-rutina/mi-rutina.module#MiRutinaPageModule', name: 'MiRutinaPage', segment: 'mi-rutina', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/novedades/novedades.module#NovedadesPageModule', name: 'NovedadesPage', segment: 'novedades', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservar/reservar.module#ReservarPageModule', name: 'ReservarPage', segment: 'reservar', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_horarios_horarios__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_clase_clase__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__["a" /* PerfilPage */] },
            { title: 'Horarios', component: __WEBPACK_IMPORTED_MODULE_7__pages_horarios_horarios__["a" /* HorariosPage */] },
            { title: 'Clase', component: __WEBPACK_IMPORTED_MODULE_8__pages_clase_clase__["a" /* ClasePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goPerfil = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot('PerfilPage');
    };
    MyApp.prototype.goHorarios = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('HorariosPage');
    };
    MyApp.prototype.goHome = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('InicioPage');
    };
    MyApp.prototype.goRutina = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('MiRutinaPage');
    };
    MyApp.prototype.goReservar = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('ReservarPage');
    };
    MyApp.prototype.goEstadistica = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('EstadisticaPage');
    };
    MyApp.prototype.goNovedades = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('NovedadesPage');
    };
    MyApp.prototype.goEquipamento = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('EquipamentoPage');
    };
    MyApp.prototype.goQR = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(HomePage);
        this.nav.setRoot('EscanerPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/app/app.html"*/'<ion-menu [content]="content">\n<!--   <ion-header>\n    <ion-toolbar>\n      <ion-title>Menvcu</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content class=\'menuLateral\'>\n<!--     <ion-list>\n      <button class=\'itemMenu\' menuClose ion-item *ngFor="let p of pages; let  i = index" (click)="openPage(p)">\n        <img class="menuIcono" [src]="\'assets/imgs/icono\'+(i+1)+\'.png\'" > {{p.title}}\n      </button>\n    </ion-list> -->\n\n<div class=\'containerMenuProfile\' (click)="goPerfil()" menuClose>\n  <div class="mitadProfile">\n      <img style=\'border-radius: 100%;width: 66%; margin-top: 20px; margin-bottom: 11px;box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);\' src="assets/imgs/profile.png"> \n      <div style="    color: white;margin-bottom: 30px;font-weight: 800;letter-spacing: 0px;">Martin Dorego</div>\n  </div>\n  <div class="mitadProfile">\n      <div class="profileEtiq">\n        <div>Socio N</div>\n        <div>45872938</div>\n      </div>\n\n            <div class="profileEtiq">\n        <div>Edad</div>\n        <div>27</div>\n      </div>\n\n            <div class="profileEtiq">\n        <div>Personal Trainer</div>\n        <div>German</div>\n      </div>\n\n\n  </div>\n  \n</div>\n        <ion-list>\n\n\n\n      \n\n        <button class=\'itemMenu\' menuClose ion-item (click)="goHome()">\n          <ion-icon style=\'    font-size: 33px;\n    margin-left: 6px;\n    margin-right: 10px;\n    opacity: 0.8;\' name="home"></ion-icon>INICIO\n      </button>\n\n\n\n      <button class=\'itemMenu\' menuClose ion-item (click)="goHorarios()">\n        <img class="menuIcono" src="assets/imgs/icono1.png" > HORARIOS\n      </button>\n\n            <button class=\'itemMenu\' menuClose ion-item (click)="goRutina()">\n        <img class="menuIcono" src="assets/imgs/icono2.png" > MI RUTINA\n      </button>\n            <button class=\'itemMenu\' menuClose ion-item (click)="goReservar()">\n        <img class="menuIcono" src="assets/imgs/icono3.png" > RESERVAR CLASE\n      </button>\n            <button class=\'itemMenu\' menuClose ion-item (click)="goEstadistica()">\n        <img class="menuIcono" src="assets/imgs/icono4.png"  > ESTADISTICAS\n      </button>\n<!--             <button class=\'itemMenu\' menuClose ion-item>\n        <img class="menuIcono" src="assets/imgs/icono5.png" > MENSAJES\n      </button> -->\n            <button class=\'itemMenu\' menuClose ion-item (click)="goNovedades()" >\n        <img class="menuIcono" src="assets/imgs/icono6.png" > NOVEDADES\n      </button>\n            <button class=\'itemMenu\' menuClose ion-item   (click)="goEquipamento()"  >\n        <img class="menuIcono" src="assets/imgs/icono7.png" > EQUIPAMENTO\n      </button>\n            <button class=\'itemMenu\' menuClose ion-item (click)="goQR()" >\n        <img class="menuIcono" src="assets/imgs/icono8.png" > ESCANER\n      </button>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map