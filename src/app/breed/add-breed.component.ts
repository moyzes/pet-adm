import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Breed } from './breed.model';
import { BreedService } from './breed.service';
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
		private specieService: SpecieService) {
		
		this.specieService.getSpecies().subscribe(data => {
			this.species = data;
		});

		this.breedService.getMeasures().subscribe(data => {
			this.measures = data;
		});
	}

	createBreed(): void {
		
		this.breed.specie = this.selectedSpecie;
		this.breedService.createBreed(this.breed).subscribe(data => {
			const breed = <Breed> data
			this.editBreed(breed)
		});
	};

	editBreed(breed: Breed): void {
		localStorage.removeItem("editBreedId");
		localStorage.setItem("editBreedId", breed.id+"");
		this.router.navigate(['editbreed']);
	};
}