import { Component, OnInit, Inject } from '@angular/core';
import { AttributeService } from '../attribute/attribute.service';
import { Attribute } from '../attribute/attribute.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AttributeBreedService } from './attributebreed.service';
import { EditBreedComponent } from '../breed/edit-breed.component';

@Component({
	selector: 'app-attributebreed',
	templateUrl: './attributebreed.component.html',
	styleUrls: ['./attributebreed.component.css']
})
export class AttributebreedComponent implements OnInit {

	attributes:Attribute[];
	breed:any;

	constructor(
		private attributeservice: AttributeService,
		private attributeBreedService: AttributeBreedService,
		public dialogRef: MatDialogRef<EditBreedComponent>,
		@Inject(MAT_DIALOG_DATA) public request: any) {

		this.attributeservice.getAttributes().subscribe(data => {
			this.attributes = data;
		});

		this.breed = request.breedForm;
	}

	ngOnInit() {
	}

	addToBreed(attrib){
		attrib.attribute_id = attrib.id;
		attrib.breed_id = this.breed.id;
		this.attributeBreedService.createAttributeBreed(attrib).subscribe(data => {
			console.log(data);
			this.breed.attributes.push(attrib);
			this.removeAttributeFromList(attrib);
		});
	}

	removeAttributeFromList(attribute: Attribute): void {
		const index = this.attributes.indexOf(attribute);
			if (index >= 0) {
			this.attributes.splice(index, 1);
		}
	}

	confirm(){
		this.dialogRef.close();
	}

	cancel(){
		this.dialogRef.close();
	}
}
