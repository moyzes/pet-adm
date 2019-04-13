import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breed } from './breed.model';
import { BreedService } from './breed.service';

@Component({
	selector: 'app-breed',
	templateUrl: './breed.component.html',
	styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit{
	
	breeds: Breed[];
	displayedColumns = ['name','specie','origin','slogan','action'];

	constructor(
		private router: Router,
		private breedService: BreedService) {
	}
	
	ngOnInit() {
		this.breedService.getBreeds()
		.subscribe( data => {
			this.breeds = data;
		});
	};

	deleteBreed(breed: Breed): void {
		this.breedService.deleteBreed(breed)
		.subscribe(() => {
			this.breeds = this.breeds.filter(u => u !== breed);
		})
	};
	editBreed(breed: Breed): void {
		localStorage.removeItem("editBreedId");
		localStorage.setItem("editBreedId", breed.id+"");
		this.router.navigate(['editbreed']);
	};
}