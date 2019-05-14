import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocialUser } from 'angularx-social-login';
import { User } from '../user/user.model';
import { Router } from "@angular/router";

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css'] 
})
export class MenuComponent implements OnInit{
	
	usuariologado: User;
	susuariologado: SocialUser;
	admin: boolean;
	

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches)
		);

	constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
	
		
	}

	ngOnInit() {
		
		this.usuariologado = JSON.parse(localStorage.getItem("userlogado"));
		this.susuariologado = JSON.parse(localStorage.getItem("suserlogado"));

		if(!this.usuariologado || !this.admin) {

			this.router.navigate(['login']);

		}
		
		if(this.usuariologado!=null) {

			this.admin = this.usuariologado.superuser;
		}
		//console.log("Usuario logado:"+ JSON.stringify(this.usuariologado));
	}

}
