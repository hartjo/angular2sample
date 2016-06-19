import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SampleviewService {

	private headers: Headers;
	public result;

	getHeroes(itemdata): Observable<Response> {
		let toAdd = JSON.stringify({ name: itemdata });
		return this.http.post('http://hcareapi.dev/ping', toAdd, { headers: this.headers })
			.map(response => response.json());
	}

	constructor(private http : Http) {

		this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

	}

}
