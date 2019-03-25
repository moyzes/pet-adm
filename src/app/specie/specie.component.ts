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
