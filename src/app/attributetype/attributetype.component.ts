import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttributeType } from './attributetype.model';
import { AttributeTypeService } from './attributetype.service';
import { MatTableModule } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

@Component({
	selector: 'app-attributetype',
	templateUrl: './attributetype.component.html',
	styleUrls: ['./attributetype.component.css']
})
export class AttributeTypeComponent implements OnInit{
	
	attributetypes: AttributeType[];
	displayedColumns = ['name','action'];

	constructor(private router: Router, private attributetypeservice: AttributeTypeService) {
  
	}
  
	ngOnInit() {
	  this.attributetypeservice.getAttributeTypes()
		.subscribe( data => {
		  this.attributetypes = data;
		});
	};

	
	deleteAttributeType(attributetype: AttributeType): void {
	  this.attributetypeservice.deleteAttributeType(attributetype)
		.subscribe( data => {
		  this.attributetypes = this.attributetypes.filter(u => u !== attributetype);
		})
	};

}