import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'app-sampleview2',
	templateUrl: 'sampleview2.component.html',
	styleUrls: ['sampleview2.component.css']
})
export class Sampleview2Component implements OnInit {
	public selectedId;
	public sub;
	constructor(private router: Router, private route: ActivatedRoute) {
		this.sub = this.route.params.subscribe(params => {
			this.selectedId = params['id']; // (+) converts string 'id' to a number
			console.log(this.selectedId);
		});

	}

	ngOnInit() {
	
	}

}
