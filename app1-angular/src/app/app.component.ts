import { Component } from '@angular/core';
import { PersonService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	model = {};
  
	constructor(private personService: PersonService) {
		this.model = {
			first_name: '',
			last_name: '',
			address: '',
			company: ''
		}
	}
	
	// Add a new person entry into the database, then retrieve it
	onSubmit(input) {
		this.personService.submitPersonData(input).subscribe(
			(data) => {
				if ((data as any).affectedRows > 0) {
					var id = (data as any).insertId;
					this.retrievePerson(id);
				}
			}
		);
	}
	
	// Get the data for a person of given ID, display on UI
	retrievePerson(id) {
		this.personService.getPersonData(id).subscribe(
			(data) => {
				console.log(data);
				this.model = data[0];
			}
		);
	}
  
}
