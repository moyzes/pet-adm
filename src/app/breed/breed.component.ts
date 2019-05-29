import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breed } from './breed.model';
import { BreedService } from './breed.service';
import { HttpResponse } from '@angular/common/http';

@Component({
	selector: 'app-breed',
	templateUrl: './breed.component.html',
	styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit{
	
	breeds: Breed[];
	displayedColumns = ['name','specie','origin','slogan','action'];
	breeds_per_page: number = 8;
	offset: number = 0;
	actual_page: number = 1;
	last_page:number = 10;

	constructor(
		private router: Router,
		private breedService: BreedService) {
	}
	
	ngOnInit() {
		this.offset = 0;
		this.actual_page = 1;
		this.getBreeds(1);
	};

	getFirstPage():void {
		this.offset = 0;
		this.actual_page = 1;		
		this.getBreeds(1);
	}
	
	getPreviousPage():void {
		if(this.actual_page>1){
			 this.getBreeds(--this.actual_page);
		} else {
			this.getFirstPage();
		}
	}

	getNextPage():void {
		if(this.actual_page<this.last_page){
			this.getBreeds(++this.actual_page);
	    } else {
		   this.getLastPage();
		}
	}

	getLastPage():void {
		this.getBreeds(this.last_page);
	}

	getBreeds(page_number: number):void {

		if(page_number>1) {
			this.offset = (this.breeds_per_page * page_number) - this.breeds_per_page;
		} else {
			this.offset = 0;
		}

		this.breedService.getBreeds(this.offset,this.breeds_per_page).subscribe((res:HttpResponse<Response>) => {
			
			//aqui a lista de breeds
			this.breeds = <Breed[]> <unknown> res.body
			console.log(this.breeds);

			//aqui o header
			let total_count = res.headers.get("total_record_count")
			console.log(total_count);

		});
	}

	deleteBreed(breed: Breed): void {
		this.breedService.deleteBreed(breed).subscribe(() => {
			this.breeds = this.breeds.filter(u => u !== breed);
		})
	};

	editBreed(breed: Breed): void {
		localStorage.removeItem("editBreedId");
		localStorage.setItem("editBreedId", breed.id+"");
		this.router.navigate(['editbreed']);
	};
}