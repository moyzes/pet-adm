import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Attribute } from './attribute.model';

const httpOptions = {
	headers: new HttpHeaders({'Content-': 'application/json'})
};

@Injectable()
export class AttributeService {

	constructor(private router: Router, private http:HttpClient) {}

	//private url = 'https://procura-pet.herokuapp.com/';
	private url = '/api'; 
	
	public getAttribute(id: number) {
		return this.http.get<Attribute[]>(this.url + "/" + "getAttribute" + "/" + id);
	}

	public getAttributes() {
		return this.http.get<Attribute[]>(this.url + "/" + "listAttributes");
	}

	public deleteAttribute(attribute: Attribute) {
		this.router.navigate(['attribute']);
		return this.http.delete(this.url + "/"+ "deleteAttribute" + "/" + attribute.id);
	}

	public createAttribute(attribute: Attribute) {
		this.router.navigate(['attribute']);
		return this.http.post<Attribute>(this.url + "/" + "addAttribute", attribute);
	}

	public updateAttribute(attribute: Attribute) {
		this.router.navigate(['attribute']);
		return this.http.put<Attribute>(this.url + "/" + "updateAttribute" + "/" + attribute.id, attribute);
	}

}