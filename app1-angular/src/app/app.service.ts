import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {
	constructor (private http: HttpClient) {}
	
	// Get the data for a person of given ID
	getPersonData(id) {
		return this.http.get('http://localhost:3000/person/getPerson?id=' + id);
	}
	
	// Add a new person entry into the database
	submitPersonData(params) {
		return this.http.post('http://localhost:3000/person/addPerson', params);
	}
}