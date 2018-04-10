webpackJsonp([8],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorariosPageModule", function() { return HorariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horarios__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HorariosPageModule = (function () {
    function HorariosPageModule() {
    }
    HorariosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__horarios__["a" /* HorariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__horarios__["a" /* HorariosPage */]),
            ],
        })
    ], HorariosPageModule);
    return HorariosPageModule;
}());

//# sourceMappingURL=horarios.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorariosPage; });
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
 * Generated class for the HorariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HorariosPage = (function () {
    function HorariosPage(navCtrl, navParams, apiProvider, loadingController, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
    }
    HorariosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "cargando..." });
        loading.present();
        return this.apiProvider.getHorarioSemana()
            .then(function (data) {
            _this.valoresDia = (Object.keys(data));
            _this.valoresClases = (Object.values(data));
            console.log(_this.valoresClases);
            _this.dataHorario = [];
            //  console.log(data);
            loading.dismissAll();
        });
    };
    HorariosPage.prototype.getHora = function (hora) {
        var arr = hora.split(':');
        arr.pop();
        return arr.join(":");
    };
    HorariosPage.prototype.goClase = function (clase) {
        this.navCtrl.push('ClasePage', clase);
        //this.navCtrl.push('ClasePage');
    };
    HorariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-horarios',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/horarios/horarios.html"*/'<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoFinal.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content style=\'background-color: #c3d7e6\' >\n\n<div *ngIf=\'valoresClases\' style="background-color: #ff0090;    text-align: center;" class="tituloHome">PROXIMAS CLASES</div>\n\n<div *ngFor="let c of valoresClases" >\n\n\n	<div class="horarioDiaTitulo">{{c[0].diaFecha == \'Monday\' ? \'Lunes\' : \n                                    c[0].diaFecha == \'Tuesday\' ? \'Martes\' :\n                                    c[0].diaFecha == \'Wednesday\' ? \'Miercoles\' : \n                                    c[0].diaFecha == \'Thursday\' ? \'Jueves\' :\n                                    c[0].diaFecha == \'Friday\' ? \'Viernes\' : \n                                    c[0].diaFecha == \'Saturday\' ? \'Sabado\' :\n                                    c[0].diaFecha == \'Sunday\' ? \'Domingo\' : \'-\'}}</div>\n\n <!--    <div style="width:100%;    display: table; table-layout: fixed;">\n    	<div style=" display: table-cell;\n    vertical-align: top;\n    background-color: white;\n    padding-top: 13px;\n       text-align: center;\n       color: #2f2f2f; \n    font-size: 13px;    width: 85px;">\n    	8:00 - 9:00\n    	</div>\n    	<div  tappable (click)="goClase()" style="     display: table-cell;\n    padding-left: 16px;\n    background-color: #d2dade;\n    padding-bottom: 7px;\n    padding-top: 8px;">\n		    		<div style="color: #00afe7;" class="tituloHorarios">Action Cycle</div>\n		    		<div class="horariosTipo">Cardio</div>\n		    		<div class="horariosProfesor">Profesor: Alejandro</div>\n		    	</div>\n    </div>\n\n\n        <div style="width:100%;    display: table; table-layout: fixed;">\n    	<div style=" display: table-cell;\n    vertical-align: top;\n    background-color: white;\n    padding-top: 13px;\n       text-align: center;\n       color: #2f2f2f; background-color: #d2dade;\n    font-size: 13px;    width: 85px;">\n    	8:00 - 9:00\n    	</div>\n    	<div  tappable (click)="goClase()"  style="     display: table-cell;\n    padding-left: 16px;\n   background-color: white;\n    padding-bottom: 7px;\n    padding-top: 8px;    border-left: solid #ff5300 5px;">\n    \n		    		<div style="color: #ff5300;" class="tituloHorarios">Hard Training</div>\n		    		<div class="horariosTipo">Cardio</div>\n		    		<div class="horariosProfesor">Profesor: Alejandro</div>\n		    	</div>\n    </div>\n -->\n\n\n        <div *ngFor="let v of c" style="width:100%;    display: table; table-layout: fixed;">\n\n        	<div style=" display: table-cell;\n        vertical-align: top;\n        background-color: white;\n        padding-top: 13px;\n           text-align: center;\n           color: #2f2f2f;\n        font-size: 13px;    width: 85px;">\n        <span style="font-family: normalL;">	{{getHora(v.soloHora)}}</span>\n\n            \n            <div style="    font-family: normalIt;\n    color: lightslategrey;margin-top:10px"> <ion-icon name="md-timer"></ion-icon>{{v.duracionMinutos}}min</div>\n        	</div>\n\n    	   <div  tappable (click)="goClase(v)"  [ngStyle]="{\'border-left-color\': v.color}" style="     display: table-cell;\n    padding-left: 16px;\n   \n    padding-bottom: 7px;\n    padding-top: 8px; background-color: #d2dade;    border-left: solid #ff0090 5px;">\n		    		<div [ngStyle]="{\'color\': v.color}"  class="tituloHorarios">{{v.nombre}}</div>\n		    		<div class="horariosTipo">{{v.categoriaClase}}</div>\n		    		<div class="horariosProfesor">Profesor: {{v.nombreProfesor || \'Sin asignar\'}}</div>\n		    </div>\n        </div>\n\n\n</div>\n\n\n\n\n\n\n\n\n<!-- \n\n\n\n\n<div>\n	<div class="horarioDiaTitulo">MARTES</div>\n\n    <div style="width:100%;    display: table; table-layout: fixed;">\n    	<div style=" display: table-cell;\n    vertical-align: top;\n    background-color: white;\n    padding-top: 13px;\n       text-align: center;\n       color: #2f2f2f;\n    font-size: 13px;    width: 85px;">\n    	8:00 - 9:00\n    	</div>\n    	<div style="     display: table-cell;\n    padding-left: 16px;\n    background-color: #d2dade;\n    padding-bottom: 7px;\n    padding-top: 8px;">\n		    		<div style="color: #00afe7;" class="tituloHorarios">Action Cycle</div>\n		    		<div class="horariosTipo" > Cardio</div>\n		    		<div class="horariosProfesor">Profesor: Alejandro</div>\n		    	</div>\n    </div>\n\n\n        <div style="width:100%;    display: table; table-layout: fixed;">\n    	<div style=" display: table-cell;\n    vertical-align: top;\n    background-color: white;\n    padding-top: 13px;\n       text-align: center;\n       color: #2f2f2f; background-color: #d2dade;\n    font-size: 13px;    width: 85px;">\n    	8:00 - 9:00\n    	</div>\n    	<div style="     display: table-cell;\n    padding-left: 16px;\n      background-color: white;\n    padding-bottom: 7px;\n    padding-top: 8px;">\n		    		<div style="color: #ff5300;"  class="tituloHorarios">Hard Training</div>\n		    		<div class="horariosTipo">Cardio</div>\n		    		<div class="horariosProfesor">Profesor: Alejandro</div>\n		    	</div>\n    </div>\n\n\n\n        <div style="width:100%;    display: table; table-layout: fixed;">\n    	<div style=" display: table-cell;\n    vertical-align: top;\n    background-color: white;\n    padding-top: 13px;\n       text-align: center;\n       color: #2f2f2f;\n    font-size: 13px;    width: 85px;">\n    	8:00 - 9:00\n    	</div>\n    	<div style="     display: table-cell;\n    padding-left: 16px;\n   \n    padding-bottom: 7px;\n    padding-top: 8px; background-color: #d2dade;">\n		    		<div style="color: #ff0090;" class="tituloHorarios">Body Pump</div>\n		    		<div class="horariosTipo">Cardio</div>\n		    		<div class="horariosProfesor">Profesor: Alejandro</div>\n		    	</div>\n    </div>\n</div>\n -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/horarios/horarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HorariosPage);
    return HorariosPage;
}());

//# sourceMappingURL=horarios.js.map

/***/ })

});
//# sourceMappingURL=8.js.map