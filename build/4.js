webpackJsonp([4],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(100);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, apiProvider, viewCtrl, loadingController, alertCtrl, formBuilder, modalCtrl, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.viewCtrl = viewCtrl;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.events = events;
        this.slideOneForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[0-9]{1,45}$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[0-9]{1,45}$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
        });
        /*
        this.storage.get('usr_tok_datagym').then((value) => {
        value ? this.userLogged = true : this.userLogged = false
        console.log(value);
        }).catch(() => this.userLogged = false);
        */
    };
    LoginPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "cargando..." });
        loading.present();
        this.apiProvider.doLoginApi(this.slideOneForm.value)
            .then(function (data) {
            loading.dismissAll();
            if (data.data[0] && (data.data[0].idUsuario > 0)) {
                console.log(data);
                _this.storage.set("usr_tok_datagym", data.data[0]);
                _this.events.publish('userCreated', data.data[0]);
                _this.closeModal();
            }
            else {
                _this.presentAlert('Ups!', 'Credenciales incorrectas');
            }
        });
    };
    LoginPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n<ion-content  style="background-image: url(\'assets/imgs/loginFondo.png\');    background-size: cover; "   >\n\n  <button style="position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 100px;\n    height: 50px;\n    width: 50px;\n    font-size: 30px;\n    padding: 0px;\n    background-color: transparent;\n    border: solid white 4px;\n    color: white;" ion-button icon-close (click)="closeModal()">\n  <ion-icon name="close"></ion-icon>\n  \n</button>\n\n\n\n<div style="text-align:center;margin-top: 25%;">\n <img style=\'border-radius: 100%;\n    width: 280px;\n    margin-top: 20px;\n    margin-bottom: 61px;\n    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);\' src="assets/imgs/logoGrande.png"> \n 	<div style="    color: white;\n    font-size: 29px;\n      font-family: normalL;">\n\n<!-- \n      	<input style=\'    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;    padding-left: 12px;\n    border-radius: 7px 7px 0px 0px;\' class=\'inputTheme\' placeholder="ID Socio" >\n\n    <input style=\'margin-top: 10px;    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;    padding-left: 12px;\n    border-radius: 7px 7px 0px 0px;\' class=\'inputTheme\' placeholder="Codigo de Acceso" >\n\n -->\n<!-- \n\n <ion-item class=\'inputTheme\' style=\'    padding-top: 0px !important;\'>\n <ion-input type="number" placeholder="ID Socio" style=\'border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;    padding-left: 12px;\n    border-radius: 11px 11px 0px 0px;\'></ion-input>\n\n <button clear item-right style="font-size: 30px; color: white;background-color: transparent;"><ion-icon name="arrow-round-forward"></ion-icon></button>\n\n</ion-item>\n -->\n\n	<ion-list no-lines>\n\n			<form [formGroup]="slideOneForm">\n\n				<ion-item  class=\'inputTheme\' style=\'    padding-top: 0px !important;\'>\n					<ion-label floating>ID Socio</ion-label>\n					<ion-input formControlName="firstName" type="number" [class.invalid]="!slideOneForm.controls.firstName.valid && (slideOneForm.controls.firstName.dirty || submitAttempt)"></ion-input>\n				</ion-item>\n\n				<ion-item  class=\'inputTheme\' style=\'    padding-top: 0px !important;\' *ngIf="!slideOneForm.controls.firstName.valid  && (slideOneForm.controls.firstName.dirty || submitAttempt)">\n					<p  style="color: lightcoral;" >ID socio invalido</p>\n				</ion-item>\n\n				<ion-item class=\'inputTheme\' style=\'    padding-top: 0px !important;\'>\n					<ion-label floating>Codigo</ion-label>\n					<ion-input formControlName="lastName" type="number" [class.invalid]="!slideOneForm.controls.lastName.valid"></ion-input>\n				</ion-item>\n\n				<ion-item  class=\'inputTheme\' style=\'    padding-top: 0px !important;\' *ngIf="!slideOneForm.controls.lastName.valid  && (slideOneForm.controls.lastName.dirty )">\n					<p style="color: lightcoral;">Codigo Invalido</p>\n				</ion-item>\n\n\n			</form>\n\n		</ion-list>\n\n\n\n\n      </div>\n\n\n<div style="\n    color:  white;\n    display: inline-block;\n    width: 70%;\n    margin-top:  8px;\n    height: 32px;\n    font-size:  15px;\n    font-family: normalL;\n">\n\n<button style=\'margin-bottom: 10px\' ion-button full [disabled]="!((slideOneForm.controls.lastName.valid)  && (slideOneForm.controls.firstName.valid))"   (click)="doLogin()" >Ingresar</button>\n\n\n      	<div style="\n    display: inline-block;    width: 49%;\n    float: left;    height: 35px;\n">Olvide mi cuenta</div>\n      		<div style="\n    display: inline-block;\n    float: right;    width: 49%;height: 35px;\n">Quiero ser socio</div>\n\n      </div>\n</div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=4.js.map