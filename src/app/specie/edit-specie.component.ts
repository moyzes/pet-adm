import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Specie } from './specie.model';
import { SpecieService } from './specie.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-specie',
  templateUrl: './edit-specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class EditSpecieComponent implements OnInit {

  specie: Specie;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private specieService: SpecieService) { 

  }

  ngOnInit() {

    let specieId = localStorage.getItem("editSpecieId");

    if(!specieId) {
      alert("Ação inválida.")
      this.router.navigate(['specie']);
      return;
    }
    
    this.editForm = this.formBuilder.group({id:[],name:[]});
    
    this.specieService.getSpecie(+specieId).subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.specieService.updateSpecie(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['specie']);
        },
        error => {
          alert(error);
        });
  }

}