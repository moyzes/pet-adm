import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Breed } from './breed.model';
import { BreedService } from './breed.service';

@Component({
  templateUrl: './add-breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class AddBreedComponent {

  breed: Breed = new Breed();

  constructor(private router: Router, private breedService: BreedService) {

  }

  createBreed(): void {
    this.breedService.createBreed(this.breed)
        .subscribe( data => {
          alert("Raça salva com sucesso!");
        });

  };

}