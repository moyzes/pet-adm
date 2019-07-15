import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
testhtml = `<form [formGroup]="firstFormGroup">
    <ng-template matStepLabel>Fill out your name</ng-template>
    <mat-form-field>
      <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
    </mat-form-field>
    <div>
      <button mat-button matStepperNext>Next</button>
    </div>
</form>`;


  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

}
