import { Component } from '@angular/core';
import { PersonService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'some random title';
  
	constructor(private personService: PersonService) {}
  
	retrievePerson(id) {
		this.personService.getPersonData(id).subscribe(
			(data) => {
				console.log(data);
			}
		);
	}
  
	submit() {
		console.log('...');
	}
  
}
