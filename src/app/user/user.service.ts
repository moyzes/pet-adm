import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { User } from './user.model';
import { SocialUser } from 'angularx-social-login';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

	constructor(private router: Router, private http:HttpClient) {}

	//private userUrl = 'https://procura-pet.herokuapp.com/';
	private url = '/api';
	
	public getUser(id: number) {
		return this.http.get<User[]>(this.url + "/" + "getUser" + "/" + id);
	}

	public getUserByEmail(email: String) {
		return this.http.get<User>(this.url + "/" + "getUserByEmail" + "/" + email);
	}

	public getUsers() {
		return this.http.get<User[]>(this.url + "/" + "listUsers");
	}

	public deleteUser(user: User) {
		this.router.navigate(['user']);
		return this.http.delete(this.url + "/"+ "deleteUser" + "/" + user.id);
	}

	public createUser(user: User) {
		this.router.navigate(['user']);
		return this.http.post<User>(this.url + "/" + "addUser", user);
	}

	public login(suser: SocialUser) {
		this.router.navigate(['login']);
		return this.http.post<User>(this.url + "/" + "login" , suser);
	}

	public updateUser(user: User) {
		this.router.navigate(['user']);
		return this.http.put<User>(this.url + "/" + "updateUser" + "/" + user.id, user);
	}

}