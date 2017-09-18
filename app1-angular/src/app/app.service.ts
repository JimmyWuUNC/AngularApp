import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {
	constructor (private http: HttpClient) {}
	
	getPersonData(id) {
		return this.http.get('http://localhost:3000/person/getPerson?id=' + id);
	}
	
	submitPersonData(params) {
		return this.http.post('http://localhost:3000/person/addPerson', params);
	}
}