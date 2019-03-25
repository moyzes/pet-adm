import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent {
	addressForm = this.fb.group({
		name: [null, Validators.required],
		email: [null, Validators.required]
	});

	hasUnitNumber = false;

	constructor(private fb: FormBuilder) {}

	onSubmit() {
		alert('Obrigado!');
	}
}
