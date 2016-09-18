"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
// Add the RxJS Observable operators we need in this app.
require('./rxjs-operators');
var http_service_1 = require('./http.service');
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.URL1 = '';
        this.URL2 = '';
        this.URL3 = '';
        this.URL4 = '';
        this.URL5 = '';
        this.inDateTime = '';
        this.x = function (value) { if (value.length != 0) {
            this.statusList = value;
        } };
    }
    AppComponent.prototype.inputURL1 = function (strURL) { this.URL1 = strURL; };
    AppComponent.prototype.inputURL2 = function (strURL) { this.URL2 = strURL; };
    AppComponent.prototype.inputURL3 = function (strURL) { this.URL3 = strURL; };
    AppComponent.prototype.inputURL4 = function (strURL) { this.URL4 = strURL; };
    AppComponent.prototype.inputURL5 = function (strURL) { this.URL5 = strURL; };
    AppComponent.prototype.inputDateTime = function (inDateTime) { this.inDateTime = inDateTime; };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = Rx_1.Observable.timer(6000, 1000);
        timer.subscribe(function (t) { return _this.showStat(); });
    };
    AppComponent.prototype.onClickQueue = function () {
        var _this = this;
        if (this.URL1) {
            this.httpService.addURL2quene(this.URL1)
                .subscribe(function (replay) { return _this.rep = replay; }, function (error) { return _this.errorMessage = error; });
        }
        if (this.URL2) {
            this.httpService.addURL2quene(this.URL2)
                .subscribe(function (replay) { return _this.rep = replay; }, function (error) { return _this.errorMessage = error; });
        }
        if (this.URL3) {
            this.httpService.addURL2quene(this.URL3)
                .subscribe(function (replay) { return _this.rep = replay; }, function (error) { return _this.errorMessage = error; });
        }
        if (this.URL4) {
            this.httpService.addURL2quene(this.URL4)
                .subscribe(function (replay) { return _this.rep = replay; }, function (error) { return _this.errorMessage = error; });
        }
        if (this.URL5) {
            this.httpService.addURL2quene(this.URL5)
                .subscribe(function (replay) { return _this.rep = replay; }, function (error) { return _this.errorMessage = error; });
        }
    };
    AppComponent.prototype.onClickStart = function () {
        var _this = this;
        this.httpService.startParsing()
            .subscribe(function (replay) { return console.log(replay); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.onClickSchedule = function () {
        var _this = this;
        this.httpService.scheduleParsing(this.inDateTime)
            .subscribe(function (replay) { return console.log(replay); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.onClickCancel = function () {
        var _this = this;
        this.httpService.stopParsing()
            .subscribe(function (replay) { return console.log(replay); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.showStat = function () {
        var _this = this;
        this.httpService.getStat()
            .subscribe(function (statusList) { return _this.x(statusList); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/template.component.html',
            styleUrls: ['./app/template.component.css'],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map