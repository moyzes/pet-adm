import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { AttributeType } from './attributetype.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AttributeTypeService {

  constructor(private router: Router, private http:HttpClient) {}

  private url = '/api'; 
  
  public getAttributeType( id: number ) {
    return this.http.get<AttributeType[]>(this.url + "/" + "getAttributeType" + "/" + id);
  }

  public getAttributeTypes() {
    return this.http.get<AttributeType[]>(this.url + "/" + "listAttributeTypes");
  }

  public deleteAttributeType(attributetype: AttributeType) {
    this.router.navigate(['attributetype']);
    return this.http.delete(this.url + "/"+ "deleteAttributeType" + "/" + attributetype.id);
  }

  public createAttributeType(attributetype: AttributeType) {
    this.router.navigate(['attributetype']);
    return this.http.post<AttributeType>(this.url + "/" + "addAttributeType", attributetype);
  }

  public updateAttributeType(attributetype: AttributeType) {
    this.router.navigate(['attributetype']);
    return this.http.put<AttributeType>(this.url + "/" + "updateAttributeType" + "/" + attributetype.id, attributetype);
  }

}