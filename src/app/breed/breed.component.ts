import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';

@Component({
	selector: 'app-breed',
	templateUrl: './breed.component.html',
	styleUrls: ['./breed.component.css']
})
export class BreedComponent {
	specieForm = this.fb.group({
		name: null
	});

	hasUnitNumber = false;

	constructor(private fb: FormBuilder) {}

	onSubmit() {
		alert('Obrigado!');
	}
}
