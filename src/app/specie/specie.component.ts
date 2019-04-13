import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specie } from './specie.model';
import { SpecieService } from './specie.service';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
	selector: 'app-specie',
	templateUrl: './specie.component.html',
	styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit{
	
	species: Specie[];
	displayedColumns = ['name','action'];

	constructor(
		private router: Router, 
		private specieService: SpecieService) {
	
	}
	
	ngOnInit() {
		this.specieService.getSpecies().subscribe(data => {
			this.species = data;
		});
	};

	
	deleteSpecie(specie: Specie): void {

		if(confirm("Confirma a exclusão?")){
			this.specieService.deleteSpecie(specie)
			.subscribe(data => {
				this.species = this.species.filter(u => u !== specie);
			})
		}
	};

	editSpecie(specie: Specie): void {
		localStorage.removeItem("editSpecieId");
		localStorage.setItem("editSpecieId", specie.id+"");
		this.router.navigate(['editspecie']);
	};

}