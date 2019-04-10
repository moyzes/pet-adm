import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Breed } from './breed.model';
import { BreedService } from './breed.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-breed',
  templateUrl: './edit-breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class EditBreedComponent implements OnInit {

  breed: Breed;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private breedService: BreedService) { 

  }

  ngOnInit() {

    let breedId = localStorage.getItem("editBreedId");

    if(!breedId) {
      alert("Ação inválida.")
      this.router.navigate(['breed']);
      return;
    }
    
    this.editForm = this.formBuilder.group({
      id:[],
      name:[],
      care:[],
      curiosity:[],
      information: [],
      look: [],
      maxheight: [],
      maxlifetime: [],
      maxweight: [],
      minheight: [],
      minlifetime: [],
      minweight: [],
      origin: [],
      slogan: [],
      summary: []
    });
    
    this.breedService.getBreed(+breedId).subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.breedService.updateBreed(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['breed']);
        },
        error => {
          alert(error);
        });
  }

}