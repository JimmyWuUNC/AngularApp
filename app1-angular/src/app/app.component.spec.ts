import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './app.service';

describe('AppComponent', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports: [
				FormsModule, 
				HttpClientModule
			],
			providers: [
				PersonService
			]
		}).compileComponents();
	}));
	  
	it('[component] should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
	  
	it('[component] inital person model should have empty string for its values', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.model.first_name).toEqual('');
		expect(app.model.last_name).toEqual('');
		expect(app.model.address).toEqual('');
		expect(app.model.company).toEqual('');
	}));
	  
	it('[component] should render title in a h1 tag', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Angular Application');
	}));
	
	it('[component] should render title in a h1 tag', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Angular Application');
	}));
	
});
