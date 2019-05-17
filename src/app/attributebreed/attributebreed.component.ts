import { Component, OnInit, Inject } from '@angular/core';
import { AttributeService } from '../attribute/attribute.service';
import { Attribute } from '../attribute/attribute.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AttributeBreedService } from './attributebreed.service';
import { EditBreedComponent } from '../breed/edit-breed.component';
import { AttributeBreed } from './attributebreed.model';

@Component({
	selector: 'app-attributebreed',
	templateUrl: './attributebreed.component.html',
	styleUrls: ['./attributebreed.component.css']
})
export class AttributebreedComponent implements OnInit {

	attributes: Attribute[];
	availableAttributes: Attribute[] = [];
	attributeBreeds: AttributeBreed[];
	breed:any;

	constructor(
		private attributeservice: AttributeService,
		private attributeBreedService: AttributeBreedService,
		public dialogRef: MatDialogRef<EditBreedComponent>,
		@Inject(MAT_DIALOG_DATA) public request: any) {

		this.attributeservice.getAttributes().subscribe(data => {
			this.attributes = data;
			this.attributes.forEach(att => {
				if(request.attributeBreeds.find(ab => ab.attribute_id == att.id) === undefined){
					this.availableAttributes.push(att)
				}
			})
		});

		this.breed = request.breedForm;
		this.attributeBreeds = request.attributeBreeds;
	}

	ngOnInit() { }

	addToBreed(attrib){

		attrib.attribute_id = attrib.id;
		attrib.attribute_name = attrib.name;
		attrib.breed_id = this.breed.id;
		attrib.value = attrib.value;

		this.attributeBreedService.createAttributeBreed(attrib).subscribe(data => {
			this.attributeBreeds.push(attrib);
			this.removeAttributeFromList(attrib);
		});
	}

	removeAttributeFromList(attribute: Attribute): void {
		const index = this.availableAttributes.indexOf(attribute);
		if (index >= 0) {
			this.availableAttributes.splice(index, 1);
		}
	}

	confirm(){
		this.dialogRef.close();
	}

	cancel(){
		this.dialogRef.close();
	}
}
