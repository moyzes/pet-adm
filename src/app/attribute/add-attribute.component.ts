import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Attribute } from './attribute.model';
import { AttributeService } from './attribute.service';
import { AttributeTypeService } from '../attributetype/attributetype.service';
import { AttributeType } from '../attributetype/attributetype.model';

@Component({
	templateUrl: './add-attribute.component.html',
	styleUrls: ['./attribute.component.css']
})
export class AddAttributeComponent {

	attribute: Attribute = new Attribute();
	attributetypes: AttributeType[];
	selectedAttributeType: AttributeType;

	constructor(
		private router: Router,
		private attributeservice: AttributeService,
		private attributetypeservice: AttributeTypeService) {

		this.attributetypeservice.getAttributeTypes().subscribe(data => {
			this.attributetypes = data;
		});
	}

	createAttribute(): void {
		this.attribute.attributetype = this.selectedAttributeType;
		console.log(this.attribute.attributetype)

		this.attributeservice.createAttribute(this.attribute).subscribe(data => {
			alert("Característica salva com sucesso!");
		});
		
	};
}