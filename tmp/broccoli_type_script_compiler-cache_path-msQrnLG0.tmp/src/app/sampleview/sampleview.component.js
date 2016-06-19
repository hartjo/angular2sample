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
var environment_1 = require('../environment');
var SampleviewComponent = (function () {
    function SampleviewComponent(sampleviewService) {
        this.title = environment_1.environment.sampleurl;
        this.mylist = sampleviewService.gitList();
    }
    SampleviewComponent.prototype.ngOnInit = function () {
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