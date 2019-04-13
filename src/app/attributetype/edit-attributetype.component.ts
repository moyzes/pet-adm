import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AttributeType } from './attributetype.model';
import { AttributeTypeService } from './attributetype.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
	selector: 'app-edit-attributetype',
	templateUrl: './edit-attributetype.component.html',
	styleUrls: ['./attributetype.component.css']
})
export class EditAttributeTypeComponent implements OnInit {

	attributetype: AttributeType;
	editForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private attributetypeService: AttributeTypeService) { 

	}

	ngOnInit() {

		let attributetypeId = localStorage.getItem("editAttributeTypeId");

		if(!attributetypeId) {
			alert("Ação inválida.")
			this.router.navigate(['attributetype']);
			return;
		}
		
		this.editForm = this.formBuilder.group({id:[],name:[]});
		
		this.attributetypeService.getAttributeType(+attributetypeId).subscribe( data => {
				this.editForm.setValue(data);
			});
	}

	onSubmit() {
		this.attributetypeService.updateAttributeType(this.editForm.value)
			.pipe(first())
			.subscribe(data => {
				this.router.navigate(['attributetype']);
			},
			error => {
				alert(error);
			}
		);
	}
}