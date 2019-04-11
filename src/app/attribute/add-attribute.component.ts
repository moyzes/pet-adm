import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Attribute } from './attribute.model';
import { AttributeService } from './attribute.service';

@Component({
  templateUrl: './add-attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AddAttributeComponent {

  attribute: Attribute = new Attribute();

  constructor(private router: Router, private attributeservice: AttributeService) {

  }

  createAttribute(): void {
    this.attributeservice.createAttribute(this.attribute)
        .subscribe( data => {
          alert("Característica salva com sucesso!");
        });

  };

}