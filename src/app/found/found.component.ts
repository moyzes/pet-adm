import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-found',
	templateUrl: './found.component.html',
	styleUrls: ['./found.component.css']
})

export class FoundComponent implements OnInit {

	formGroup: FormGroup;
	constructor(private _formBuilder: FormBuilder) { }

	ngOnInit() {
		this.formGroup = this._formBuilder.group({
			formArray: this._formBuilder.array([
				this._formBuilder.group({}),
				this._formBuilder.group({})
			])
		});
	}
}