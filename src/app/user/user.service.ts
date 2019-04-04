import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}

  // private userUrl = 'https://procura-pet.herokuapp.com/';
  private userUrl = '/api'; 
  
  public getUser(user: { id: string; }) {
    return this.http.get<User[]>(this.userUrl + "/" + "getUser" + "/" + user.id);
  }


  public getUsers() {
    return this.http.get<User[]>(this.userUrl + "/" + "listUsers");
  }

  public deleteUser(user: User) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

}