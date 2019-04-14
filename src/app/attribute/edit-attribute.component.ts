import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Attribute } from './attribute.model';
import { AttributeService } from './attribute.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { first } from "rxjs/operators";
import { AttributeType } from '../attributetype/attributetype.model';
import { AttributeTypeService } from '../attributetype/attributetype.service';

@Component({
	selector: 'app-edit-attribute',
	templateUrl: './edit-attribute.component.html',
	styleUrls: ['./attribute.component.css']
})
export class EditAttributeComponent implements OnInit {

	attribute: Attribute;
	attributetypes: AttributeType[];
	editForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private attributetypeservice: AttributeTypeService,
		private attributeService: AttributeService) {
		this.attributetypeservice.getAttributeTypes().subscribe(data => {
			this.attributetypes = data;
		});
	}

	ngOnInit() {

		let attributeId = localStorage.getItem("editAttributeId");

		if(!attributeId){
			alert("Ação inválida.")
			this.router.navigate(['attribute']);
			return;
		}
		
		this.editForm = this.formBuilder.group({id:[], name:[], attributetype:[]});
		
		this.attributeService.getAttribute(+attributeId).subscribe(data => {
			this.editForm.setValue(data);
			this.editForm.controls['attributetype'].setValue(this.editForm.value.attributetype.id);
		});
	}

	onSubmit() {
		this.editForm.value.attributetype = {id: this.editForm.value.attributetype}
		this.attributeService.updateAttribute(this.editForm.value)
			.pipe(first())
			.subscribe(() => {
				this.router.navigate(['attribute']);
			},
			error => {
				console.log(error)
			}
		);
	}
}