import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { User } from './user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private router: Router, private http:HttpClient) {}

  // private userUrl = 'https://procura-pet.herokuapp.com/';
  private url = '/api'; 
  
  public getUser(id: number) {
    return this.http.get<User[]>(this.url + "/" + "getUser" + "/" + id);
  }

  public getUsers() {
    return this.http.get<User[]>(this.url + "/" + "listUsers");
  }

  public deleteUser(user: User) {
    return this.http.delete(this.url + "/"+ "deleteUser" + "/" + user.id);
  }

  public createUser(user: User) {
    this.router.navigate(['user']);
    return this.http.post<User>(this.url + "/" + "addUser", user);
  }

  public updateUser(user: User) {
    return this.http.put<User>(this.url + "/" + "updateUser" + "/" + user.id, user);
  }

}