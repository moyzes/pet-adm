import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Picture } from './picture.model';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PictureService {

	constructor(private router: Router, private http:HttpClient) {}

	//private url = 'https://procura-pet.herokuapp.com/';
	private url = '/api';

	public getPicturesForForm(formName:string, entityId:number) {
		return this.http.get<Picture[]>(this.url + "/" + "listPictures" + "/" + formName + "/" + entityId);
	}
}