import { provideRouter, RouterConfig } from '@angular/router';
import { SampleviewComponent } from './sampleview/';
import { Sampleview2Component } from './sampleview2/';

export const routes: RouterConfig = [
	{ path: '/crisis-center/:id', component: Sampleview2Component },
	{ path: '/heroes', component: SampleviewComponent, index: true },
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];