webpackJsonp([6],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(308);
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

/***/ 308:
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
        this.slideTwoForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            dni: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.mymodel = 'segment1';
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
    LoginPage.prototype.serSocio = function () {
        this.mymodel = 'segment2';
    };
    LoginPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    LoginPage.prototype.recuperarContra = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Recuperar Codigo de acceso',
            subTitle: 'Ingresa tu correo electronico para restablecer tu cuenta',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Username',
                    type: 'email'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Recuperar',
                    handler: function (data) {
                        if (_this.validateEmail(data.email)) {
                            console.log(data.email);
                            var loading_1 = _this.loadingController.create({ content: "cargando..." });
                            loading_1.present();
                            _this.apiProvider.enviarContra({ email: data.email })
                                .then(function (data) {
                                console.log(data);
                                loading_1.dismissAll();
                                if (data.error === false) {
                                    _this.presentAlert('Exito!', 'Te hemos enviado el codigo de acceso al correo electronico');
                                    //this.closeModal();
                                    return true;
                                }
                                else {
                                    _this.presentAlert('Ups!', 'Correo no registrado');
                                    return false;
                                }
                            });
                        }
                        else {
                            _this.presentAlert('Ups!', 'Email invalido');
                            return false;
                        }
                        // logged in!
                    }
                }
            ]
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
    LoginPage.prototype.registrarUsuario = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "cargando..." });
        loading.present();
        this.apiProvider.registrarUsuario(this.slideTwoForm.value)
            .then(function (data) {
            console.log(data);
            loading.dismissAll();
            if (data.data && data.data.insertId && (data.data.insertId > 0)) {
                //this.storage.set(`usr_tok_datagym`, data.data[0]);
                //this.events.publish('userCreated', data.data[0]);
                _this.slideTwoForm.reset();
                _this.presentAlert('Exito!', 'Usuario creado correctamente. Tu numero de socio y codigo será entregado en breve');
                _this.mymodel = 'segment1';
                //this.closeModal();
            }
            else {
                _this.presentAlert('Ups!', 'Ha ocurrido un error');
            }
        });
    };
    LoginPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n<ion-content  style="background-image: url(\'assets/imgs/loginFondo.png\');    background-size: cover; ">\n\n\n\n  <button style="position: absolute;\n    top: 12px;\n    left: 0;\n\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    padding: 0px;\n    background-color: transparent;\n    border: none;\n        z-index: 36;\n    color: white;" ion-button icon-close (click)="closeModal()">\n  <ion-icon name="close"></ion-icon>\n  \n</button>\n\n\n\n<ion-segment class=\'seg\' [(ngModel)]="mymodel">\n      <ion-segment-button value="segment1">\n        <span>Login</span>\n      </ion-segment-button>\n      <ion-segment-button value="segment2">\n        <span>Registro</span>\n      </ion-segment-button>\n</ion-segment>\n\n\n\n\n<div [ngSwitch]="mymodel">\n    <ion-list *ngSwitchCase="\'segment1\'" style=\'margin: 0px !important\'>\n\n    \n<div class="capaOscuridad" style="z-index:0 !important;height: 100% !important;     background-color: black !important;"></div>\n\n\n<div style="text-align: center;\n    margin-top: 25%;\n    position: absolute;\n    width: 100%;\n    height: 100%;">\n <img style=\'border-radius: 100%;\n    width: 280px;\n    margin-top: 20px;\n    margin-bottom: 61px;\n    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);\' src="assets/imgs/logon.png"> \n  <div style="    color: white;\n    font-size: 29px;\n      font-family: normalL;">\n\n<!-- \n        <input style=\'    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;    padding-left: 12px;\n    border-radius: 7px 7px 0px 0px;\' class=\'inputTheme\' placeholder="ID Socio" >\n\n    <input style=\'margin-top: 10px;    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;    padding-left: 12px;\n    border-radius: 7px 7px 0px 0px;\' class=\'inputTheme\' placeholder="Codigo de Acceso" >\n\n -->\n<!-- \n\n <ion-item class=\'inputTheme\' style=\'    padding-top: 0px !important;\'>\n <ion-input type="number" placeholder="ID Socio" style=\'border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;    padding-left: 12px;\n    border-radius: 11px 11px 0px 0px;\'></ion-input>\n\n <button clear item-right style="font-size: 30px; color: white;background-color: transparent;"><ion-icon name="arrow-round-forward"></ion-icon></button>\n\n</ion-item>\n -->\n\n  <ion-list no-lines>\n\n      <form [formGroup]="slideOneForm">\n\n        <ion-item  class=\'inputTheme\' style=\'    padding-top: 0px !important;\'>\n          <ion-label floating>ID Socio</ion-label>\n          <ion-input formControlName="firstName" type="number" [class.invalid]="!slideOneForm.controls.firstName.valid && (slideOneForm.controls.firstName.dirty || submitAttempt)"></ion-input>\n        </ion-item>\n\n        <ion-item  class=\'inputTheme\' style=\'    padding-top: 0px !important;\' *ngIf="!slideOneForm.controls.firstName.valid  && (slideOneForm.controls.firstName.dirty || submitAttempt)">\n          <p  style="color: lightcoral;" >ID socio invalido</p>\n        </ion-item>\n\n        <ion-item class=\'inputTheme\' style=\'    padding-top: 0px !important;\'>\n          <ion-label floating>Codigo</ion-label>\n          <ion-input formControlName="lastName" type="number" [class.invalid]="!slideOneForm.controls.lastName.valid"></ion-input>\n        </ion-item>\n\n        <ion-item  class=\'inputTheme\' style=\'    padding-top: 0px !important;\' *ngIf="!slideOneForm.controls.lastName.valid  && (slideOneForm.controls.lastName.dirty )">\n          <p style="color: lightcoral;">Codigo Invalido</p>\n        </ion-item>\n\n\n      </form>\n\n    </ion-list>\n\n\n\n\n      </div>\n\n\n<div style="\n    color:  white;\n    display: inline-block;\n    width: 70%;\n    margin-top:  8px;\n    height: 32px;\n    font-size:  15px;\n    font-family: normalL;\n">\n\n<button style=\'margin-bottom: 10px\' ion-button full [disabled]="!((slideOneForm.controls.lastName.valid)  && (slideOneForm.controls.firstName.valid))"   (click)="doLogin()" >Ingresar</button>\n\n\n        <div style="\n    display: inline-block;    width: 49%;\n    float: left;    height: 35px;\n" (click)=\'recuperarContra()\'>Olvide mi cuenta</div>\n          <div style="\n    display: inline-block;\n    float: right;    width: 49%;height: 35px;\n" (click)=\'serSocio()\' >Quiero ser socio</div>\n\n      </div>\n</div>\n\n\n    </ion-list>\n    <ion-list style=\'margin: 0px!important\' *ngSwitchCase="\'segment2\'">\n\n    <div class="capaOscuridad" style="z-index:0 !important;height: 100% !important;     background-color: black !important;"></div>\n\n<div style="text-align: center;\n  \n    position: absolute;\n    width: 100%;\n    height: 100%;">\n\n\n<div class=\'tituloHome\' style="margin-top:80px;background-color:#8395a7 !important; text-align:center">QUIERO SER SOCIO</div>\n<div style="font-family: normalITitulos;">\n\n\n      <form style=\'margin-top:40px\' [formGroup]="slideTwoForm">\n\n        <ion-item  class=\'inputTheme2\' style=\'    padding-top: 0px !important;\'>\n          <ion-label floating>Nombre</ion-label>\n          <ion-input formControlName="firstName" type="text" [class.invalid]="!slideTwoForm.controls.firstName.valid && (slideTwoForm.controls.firstName.dirty || submitAttempt)"></ion-input>\n        </ion-item>\n\n        <ion-item  class=\'inputTheme2\' style=\'    padding-top: 0px !important;\' *ngIf="!slideTwoForm.controls.firstName.valid  && (slideTwoForm.controls.firstName.dirty || submitAttempt)">\n          <p  style="color: lightcoral;" >Nombre invalido</p>\n        </ion-item>\n\n        <ion-item class=\'inputTheme2\' style=\'    padding-top: 0px !important;\'>\n          <ion-label floating>Apellido</ion-label>\n          <ion-input formControlName="lastName" type="text" [class.invalid]="!slideTwoForm.controls.lastName.valid"></ion-input>\n        </ion-item>\n\n        <ion-item  class=\'inputTheme2\' style=\'    padding-top: 0px !important;\' *ngIf="!slideTwoForm.controls.lastName.valid  && (slideTwoForm.controls.lastName.dirty )">\n          <p style="color: lightcoral;">Apellido invalido</p>\n        </ion-item>\n\n\n\n        <ion-item class=\'inputTheme2\' style=\'    padding-top: 0px !important;\'>\n          <ion-label floating>Email</ion-label>\n          <ion-input formControlName="email" type="email" [class.invalid]="!slideTwoForm.controls.email.valid"></ion-input>\n        </ion-item>\n\n        <ion-item  class=\'inputTheme2\' style=\'    padding-top: 0px !important;\' *ngIf="!slideTwoForm.controls.email.valid  && (slideTwoForm.controls.email.dirty )">\n          <p style="color: lightcoral;">Email invalido</p>\n        </ion-item>\n\n\n\n\n\n        <ion-item class=\'inputTheme2\' style=\'    padding-top: 0px !important;\'>\n          <ion-label floating>DNI</ion-label>\n          <ion-input formControlName="dni" type="number" [class.invalid]="!slideTwoForm.controls.dni.valid"></ion-input>\n        </ion-item>\n\n        <ion-item  class=\'inputTheme2\' style=\'    padding-top: 0px !important;\' *ngIf="!slideTwoForm.controls.dni.valid  && (slideTwoForm.controls.dni.dirty )">\n          <p style="color: lightcoral;">DNI invalido</p>\n        </ion-item>\n\n\n\n\n\n      </form>\n\n\n\n</div>\n    <div style="text-align:center; margin-top:30px">\n  <button [disabled]="!((slideTwoForm.controls.lastName.valid)  && (slideTwoForm.controls.email.valid) && (slideTwoForm.controls.firstName.valid) && (slideTwoForm.controls.dni.valid))"    (click)="registrarUsuario()" class="btnAzul" style="    width: 60%;">Enviar</button>\n  </div>\n\n</div>\n\n    </ion-list>\n \n</div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=6.js.map