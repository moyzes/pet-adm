import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-specie',
	templateUrl: './specie.component.html',
	styleUrls: ['./specie.component.css']
})
export class SpecieComponent {
	specieForm = this.fb.group({
		name: null
	});

	hasUnitNumber = false;

	constructor(private fb: FormBuilder) {}

	onSubmit() {
		alert('Obrigado!');
	}
}
export interface Specie { 
	value: string;
	viewValue: string;
}
export class Species {
	Species: Specie[] = [
	  {value: '1', viewValue: 'Cão'},
	  {value: '2', viewValue: 'Gato'},
	  {value: '3', viewValue: 'Ave'},
	  {value: '4', viewValue: 'Roedor'},
	  {value: '5', viewValue: 'Reptil/Anfíbio'}
	];
  }
