import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attribute } from './attribute.model';
import { AttributeService } from './attribute.service';
import { MatTableModule } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

@Component({
	selector: 'app-attribute',
	templateUrl: './attribute.component.html',
	styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit{
	
	attributes: Attribute[];
	displayedColumns = ['name','attributetype','action'];

	constructor(private router: Router, private attributeservice: AttributeService) {
  
	}
  
	ngOnInit() {
	  this.attributeservice.getAttributes()
		.subscribe( data => {
		  this.attributes = data;
		});
	};

	
	deleteAttribute(attribute: Attribute): void {
	  this.attributeservice.deleteAttribute(attribute)
		.subscribe( data => {
		  this.attributes = this.attributes.filter(u => u !== attribute);
		})
	};

	editAttribute(attribute: Attribute): void {
    localStorage.removeItem("editAttributeId");
    localStorage.setItem("editAttributeId", attribute.id+"");
    this.router.navigate(['editattribute']);
  };

}