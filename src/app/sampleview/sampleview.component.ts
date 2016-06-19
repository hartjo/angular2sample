import { Component, OnInit } from '@angular/core';
import {SampleviewService} from './sampleview.service';
import {Sampleview} from './sampleview.directive';
import { environment } from '../environment';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Component({
	moduleId: module.id,
	selector: 'app-sampleview',
	templateUrl: 'sampleview.component.html',
	styleUrls: ['sampleview.component.css'],
	providers: [SampleviewService],
	directives: [Sampleview]
})
export class SampleviewComponent implements OnInit {
	public arrayko = [{ name: "11" }, { name: "12" }, {name: "13" }];
	title ;
	private headers: Headers;
	// title = environment.sampleurl;
	mylist;
	constructor(private sampleviewService: SampleviewService) {
		this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
	}

	ngOnInit() {
	}

	onClickMe(dataclick) {
		this.sampleviewService.getHeroes(dataclick)
			.subscribe(result => this.title = result);
		// console.log(this.title);
		// this.title = dataclick; 
		// this.arrayko.push(dataclick)
		// this.mylist = this.sampleviewService.gitList(this.arrayko);
		// let toAdd = JSON.stringify({ name: dataclick });
		// this.http.post('http://hcareapi.dev/ping', toAdd, { headers: this.headers })
		// 	.map(response => response.json())
		// 	.subscribe(result => this.title = result.name);
		// console.log(this.title);
	}

  // mylist= ["heyoyou", "heyme", "heynatinglahat"];

}
