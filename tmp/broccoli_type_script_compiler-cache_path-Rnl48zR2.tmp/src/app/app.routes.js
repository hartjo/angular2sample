"use strict";
var router_1 = require('@angular/router');
var _1 = require('./sampleview/');
var _2 = require('./sampleview2/');
exports.routes = [
    { path: '/crisis-center/:id', component: _2.Sampleview2Component },
    { path: '/heroes', component: _1.SampleviewComponent, index: true },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map