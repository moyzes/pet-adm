import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Breed } from './breed.model';
import { BreedService } from './breed.service';
import { MatDialog } from '@angular/material/dialog';
import { AttributebreedComponent } from '../attributebreed/attributebreed.component';
import { Attribute } from '../attribute/attribute.model';
import { SpecieService } from '../specie/specie.service';
import { Specie } from '../specie/specie.model';
import { Measure } from './measure.model';

@Component({
	templateUrl: './add-breed.component.html',
	styleUrls: ['./breed.component.css']
})
export class AddBreedComponent {

	selectedSpecie: Specie
	species: Specie[];
	measures: Measure[];
	breed: Breed = new Breed();
	visible = true;
	selectable = true;
	removable = true;
	maxLength: number = 200

	constructor(
		private router: Router,
		private breedService: BreedService,
		private specieService: SpecieService,
		private dialog: MatDialog) {
		
		this.specieService.getSpecies().subscribe(data => {
			this.species = data;
		});

		this.breedService.getMeasures().subscribe(data => {
			console.log(data)
			this.measures = data;
		});
	}

	createBreed(): void {
		this.breed.specie = this.selectedSpecie;
		this.breedService.createBreed(this.breed).subscribe(data => {
			this.router.navigate(['breed']);
		});
	};

	addAttribute(): void {
		console.log(this.breed);
		let dialogRef = this.dialog.open(AttributebreedComponent, {
			width: '50%',
			data: {
				breed: this.breed
			}
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result){
				console.log(result);
				this.breed.attributesbreed = result;
			}
		});
	}

	removeAttribute(attrib: Attribute): void {
		const index = this.breed.attributesbreed.indexOf(attrib);
		if (index >= 0) {
			this.breed.attributesbreed.splice(index, 1);
		}
	}
}