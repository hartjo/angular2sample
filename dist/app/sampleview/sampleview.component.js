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
var sampleview_service_1 = require('./sampleview.service');
var sampleview_directive_1 = require('./sampleview.directive');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var SampleviewComponent = (function () {
    function SampleviewComponent(sampleviewService) {
        this.sampleviewService = sampleviewService;
        this.arrayko = [{ name: "11" }, { name: "12" }, { name: "13" }];
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    SampleviewComponent.prototype.ngOnInit = function () {
    };
    SampleviewComponent.prototype.onClickMe = function (dataclick) {
        var _this = this;
        this.sampleviewService.getHeroes(dataclick)
            .subscribe(function (result) { return _this.title = result; });
        console.log(this.title);
        // console.log(this.title);
        // this.title = dataclick; 
        // this.arrayko.push(dataclick)
        // this.mylist = this.sampleviewService.gitList(this.arrayko);
        // let toAdd = JSON.stringify({ name: dataclick });
        // this.http.post('http://hcareapi.dev/ping', toAdd, { headers: this.headers })
        // 	.map(response => response.json())
        // 	.subscribe(result => this.title = result.name);
        // console.log(this.title);
    };
    SampleviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-sampleview',
            templateUrl: 'sampleview.component.html',
            styleUrls: ['sampleview.component.css'],
            providers: [sampleview_service_1.SampleviewService],
            directives: [sampleview_directive_1.Sampleview]
        }), 
        __metadata('design:paramtypes', [sampleview_service_1.SampleviewService])
    ], SampleviewComponent);
    return SampleviewComponent;
}());
exports.SampleviewComponent = SampleviewComponent;
//# sourceMappingURL=sampleview.component.js.map