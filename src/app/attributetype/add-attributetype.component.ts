import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AttributeType } from './attributetype.model';
import { AttributeTypeService } from './attributetype.service';

@Component({
  templateUrl: './add-attributetype.component.html',
  styleUrls: ['./attributetype.component.css']
})
export class AddAttributeTypeComponent {

  attributetype: AttributeType = new AttributeType();

  constructor(private router: Router, private attributetypeservice: AttributeTypeService) {

  }

  createAttributeType(): void {
    this.attributetypeservice.createAttributeType(this.attributetype)
        .subscribe( data => {
          alert("Tipo de característica salva com sucesso!");
        });

  };

}