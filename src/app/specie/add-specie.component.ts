import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Specie } from './specie.model';
import { SpecieService } from './specie.service';

@Component({
	templateUrl: './add-specie.component.html',
	styleUrls: ['./specie.component.css']
})
export class AddSpecieComponent {

	specie: Specie = new Specie();

	constructor(
		private router: Router,
		private specieService: SpecieService){

	}

	createSpecie(): void {
		this.specieService.createSpecie(this.specie).subscribe(data => {
			this.router.navigate(['specie']);
		});
	};
}