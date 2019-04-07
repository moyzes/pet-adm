import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Specie } from './specie.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SpecieService {

  constructor(private http:HttpClient) {}

  // private userUrl = 'https://procura-pet.herokuapp.com/';
  private url = '/api'; 
  
  public getSpecie(specie: { id: string; }) {
    return this.http.get<Specie[]>(this.url + "/" + "getSpecie" + "/" + specie.id);
  }



  public getSpecies() {
    return this.http.get<Specie[]>(this.url + "/" + "listSpecies");
  }

  public deleteSpecie(specie: Specie) {
    return this.http.delete(this.url + "/"+ "deleteSpecie" + "/" + specie.id);
  }

  public createSpecie(specie: Specie) {
    return this.http.post<Specie>(this.url + "/" + "addSpecie", specie);
  }

  public updateSpecie(specie: Specie) {
    return this.http.put<Specie>(this.url + "/" + "updateSpecie" + "/" + specie.id, specie);
  }

}