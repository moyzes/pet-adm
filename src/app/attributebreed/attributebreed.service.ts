import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { AttributeBreed } from './attributebreed.model';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AttributeBreedService {

	constructor(private router: Router, private http:HttpClient) {}

	//private url = 'https://procura-pet.herokuapp.com/';
	private url = '/api'; 

	public createAttributeBreed(attbreed: AttributeBreed) {
		return this.http.post<AttributeBreed>(this.url + "/" + "addAttributeBreed", attbreed);
	}

	public deleteAttributeType(attributeId:number, breedId:number) {
		return this.http.delete(this.url + "/"+ "deleteAttributeBreed" + "/" + attributeId + "/" + breedId);
	}

}