import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Breed } from './breed.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BreedService {

  constructor(private http:HttpClient) {}

  // private url = 'https://procura-pet.herokuapp.com/';
  private url = '/api'; 
  
  public getBreed(breed: { id: string; }) {
    return this.http.get<Breed[]>(this.url + "/" + "getBreed" + "/" + breed.id);
  }

  public getBreeds() {
    return this.http.get<Breed[]>(this.url + "/" + "listBreeds");
  }

  public deleteBreed(breed: Breed) {
    return this.http.delete(this.url + "/"+ "deleteBreed" + "/" + breed.id);
  }

  public createBreed(breed: Breed) {
    return this.http.post<Breed>(this.url + "/" + "addBreed", breed);
  }

  public updateBreed(breed: Breed) {
    return this.http.put<Breed>(this.url + "/" + "updateBreed" + "/" + breed.id, breed);
  }

}