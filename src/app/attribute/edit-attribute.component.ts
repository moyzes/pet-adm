import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Attribute } from './attribute.model';
import { AttributeService } from './attribute.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-attribute',
  templateUrl: './edit-attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class EditAttributeComponent implements OnInit {

  attribute: Attribute;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private attributeService: AttributeService) { 

  }

  ngOnInit() {

    let attributeId = localStorage.getItem("editAttributeId");

    if(!attributeId) {
      alert("Ação inválida.")
      this.router.navigate(['attribute']);
      return;
    }
    
    this.editForm = this.formBuilder.group({id:[],name:[]});
    
    this.attributeService.getAttribute(+attributeId).subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.attributeService.updateAttribute(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['attribute']);
        },
        error => {
          alert(error);
        });
  }

}