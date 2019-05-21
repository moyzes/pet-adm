import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { Breed } from './breed.model';
import { BreedService } from './breed.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { first } from "rxjs/operators";
import { MatDialog } from '@angular/material';
import { AttributebreedComponent } from '../attributebreed/attributebreed.component';
import { Specie } from '../specie/specie.model';
import { SpecieService } from '../specie/specie.service';
import { AttributeBreedService } from '../attributebreed/attributebreed.service';
import { Measure } from './measure.model';
import { AttributeBreed } from '../attributebreed/attributebreed.model';
import { AttributeService } from '../attribute/attribute.service';
import { Attribute } from '../attribute/attribute.model';

@Component({
	selector: 'app-edit-breed',
	templateUrl: './edit-breed.component.html',
	styleUrls: ['./breed.component.css']
})
export class EditBreedComponent implements OnInit {

	measures: Measure[];
	species: Specie[];
	attributeBreeds: AttributeBreed[];
	breed: Breed;
	editForm: FormGroup;
	visible = true;
	selectable = true;
	removable = true;
	Arr = Array;
	maxLength: number = 200

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private breedService: BreedService,
		private specieService: SpecieService,
		private attributeBreedService: AttributeBreedService,
		private attributeService: AttributeService,
		private dialog: MatDialog){

		//List species for the select
		this.specieService.getSpecies().subscribe(data => {
			this.species = data;
		});

		//List measures
		this.breedService.getMeasures().subscribe(data => {
			this.measures = data;
		});

	}

	ngOnInit() {

		let breedId = localStorage.getItem("editBreedId");

		if(!breedId) {
			alert("Ação inválida.")
			this.router.navigate(['breed']);
			return;
		}

		this.editForm = this.formBuilder.group({
			specie:[],
			id:[],
			name:[],
			care:[],
			curiosity:[],
			information:[],
			look:[],
			pelage:[],
			collor:[],
			maxheight:[],
			maxlifetime:[],
			maxweight:[],
			minheight:[],
			minlifetime:[],
			minweight:[],
			origin:[],
			slogan:[],
			summary:[],
			attributes:[],
			faq:[]
		});
		
		this.breedService.getBreed(+breedId).subscribe(data => {

			this.breed = <Breed> <unknown>data;
			this.editForm.setValue(data);
			this.editForm.controls['specie'].setValue(this.editForm.value.specie.id);

			//List the attributes for this breed
			this.attributeBreedService.listAttributeBreed(this.breed.id).subscribe(data => {
				this.attributeBreeds = <AttributeBreed[]> data;
				this.attributeBreeds.forEach((att: any) => {
					this.attributeService.getAttribute(att.attribute_id).subscribe(res => {
						const attrib = <Attribute> <unknown>res;
						att.attribute_name = attrib.name
					})
				})
			});
		});
	}

	onSubmit() {
		this.editForm.value.specie = {id:this.editForm.value.specie}
		this.breedService.updateBreed(this.editForm.value)
			.pipe(first())
			.subscribe(() => {
				this.router.navigate(['breed']);
			},
			error => {
				console.log(error);
			}
		);
	} 

	addAttribute(): void {
		console.log(this.breed);
		let dialogRef = this.dialog.open(AttributebreedComponent, {
			width: '50%',
			data: {
				breedForm: this.editForm.value,
				attributeBreeds: this.attributeBreeds
			}
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result){
				//this.editForm.value.attributes = result;
			}
		});
	}

	removeAttribute(attribute: AttributeBreed): void {
		this.attributeBreedService.deleteAttributeType(attribute.attribute_id, attribute.breed_id).subscribe(() => {
			const index = this.attributeBreeds.indexOf(attribute);
				if (index >= 0) {
				this.attributeBreeds.splice(index, 1);
			}
		});
	}
}