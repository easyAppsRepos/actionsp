webpackJsonp([11],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscanerPageModule", function() { return EscanerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__escaner__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EscanerPageModule = (function () {
    function EscanerPageModule() {
    }
    EscanerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__escaner__["a" /* EscanerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__escaner__["a" /* EscanerPage */]),
            ],
        })
    ], EscanerPageModule);
    return EscanerPageModule;
}());

//# sourceMappingURL=escaner.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscanerPage; });
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
 * Generated class for the EscanerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EscanerPage = (function () {
    function EscanerPage(navCtrl, navParams, apiProvider, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
    }
    EscanerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EscanerPage');
    };
    EscanerPage.prototype.goVideo = function (link) {
        var _this = this;
        this.apiProvider.getYoutubeDataVideo(link)
            .then(function (data) {
            console.log(data.items[0]);
            _this.navCtrl.push('YoutubevidePage', data.items[0]);
        });
    };
    EscanerPage.prototype.escanearCodigo = function () {
        var me = this;
        var loading = me.loadingController.create({ content: "cargando..." });
        loading.present();
        console.log('escanearCodigo');
        cordova.plugins.barcodeScanner.scan(function (result) {
            console.log(result);
            //var ref = cordova.InAppBrowser.open(result.text, '_system', 'location=yes');
            me.apiProvider.getYoutubeLink(result.text)
                .then(function (data) {
                loading.dismissAll();
                if (data) {
                    console.log(data);
                    //console.log(data.url);
                    // var youtubeVideo = data.url.split("v=")[1];
                    try {
                        var youtubeVideo = data.split('href="https://www.youtube.com/watch?v=')[1].split('">')[0];
                    }
                    catch (err) {
                        alert('QR invalido');
                        return false;
                    }
                    //YoutubeVideoPlayer.openVideo(youtubeVideo, function(result) { console.log('YoutubeVideoPlayer result = ' + result); console.log(result);});
                    me.goVideo(youtubeVideo);
                }
                else {
                    console.log('errQR');
                    console.log(data);
                }
            });
        }, function (error) {
            console.log("Ups, ha ocurrido un error: ");
            console.log(error);
            loading.dismissAll();
        }, {
            preferFrontCamera: true,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: true,
            saveHistory: true,
            prompt: "Coloca el QR de la maquina dentro del recuadro",
            resultDisplayDuration: 500,
            formats: "QR_CODE,PDF_417",
            orientation: "landscape",
            disableAnimations: true,
            disableSuccessBeep: false // iOS and Android
        });
    };
    EscanerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-escaner',template:/*ion-inline-start:"/Users/jose/Documents/appGym/myApp/src/pages/escaner/escaner.html"*/'<!--\n\n\n  Generated template for the EstadisticaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button style=\'color:white\' ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img style=\'    height: 30px; float: right;margin-right: 15px;\' src="assets/imgs/logoFinal.png"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content   style=\'background-color: #c3d7e6\' >\n\n\n<div class=\'tituloHome\' style="background-color:#009a00 !important;text-align:center;">ESCANEAR QR</div>\n\n\n\n<div style="text-align: center;\n    font-size: 22px;\n    padding: 38px;\n    font-family: normalL;\n    color: #444;">Acercate a una maquina  y escanea el codigo QR</div>\n\n<div style="\n    text-align: center;\n"> <img src="assets/imgs/qr.png" style="\n    max-width: 295px;\n    width: 65% !important;\n"> </div>\n\n\n<div style="text-align:center"><button (click)=\'escanearCodigo()\' class="btnAzul">ESCANEAR</button></div>\n\n\n<!-- \n          <ion-item>\n                <div class="video-container">\n                    <iframe src="https://lfconnect.com/q?t=s&m=sshad" frameborder="0" width="560" height="315"></iframe>\n                </div>\n            </ion-item> -->\n\n            \n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/appGym/myApp/src/pages/escaner/escaner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], EscanerPage);
    return EscanerPage;
}());

//# sourceMappingURL=escaner.js.map

/***/ })

});
//# sourceMappingURL=11.js.map