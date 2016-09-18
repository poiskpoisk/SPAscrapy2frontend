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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.statusUrl = 'http://127.0.0.1:8000/stat/'; // URL to web API
        this.queneURL = 'http://127.0.0.1:8000/quene/';
        this.startURL = 'http://127.0.0.1:8000/start/';
        this.stopURL = 'http://127.0.0.1:8000/stop/';
        this.beginURL = 'http://127.0.0.1:8000/schedule/';
    }
    HttpService.prototype.addURL2quene = function (parsingURL) {
        var body = JSON.stringify({ parsingURL: parsingURL });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.queneURL, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.startParsing = function () {
        var body = 'Parsing start';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.startURL, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.scheduleParsing = function (strDataTime) {
        var body = JSON.stringify({ strDataTime: strDataTime });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.beginURL, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.stopParsing = function () {
        var body = 'start/stop parsing';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.stopURL, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.getStat = function () {
        // Tried adding headers with no luck
        var headers = new http_1.Headers();
        //headers.append('Access-Control-Allow-Headers', 'Content-Type');
        //headers.append('Access-Control-Allow-Methods', 'GET');
        //headers.append('Origin', 'http://localhost:3000' );
        //console.log(headers)
        return this.http.get(this.statusUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    HttpService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map