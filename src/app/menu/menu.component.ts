import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocialUser } from 'angularx-social-login';
import { Router } from "@angular/router";

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css'] 
})
export class MenuComponent implements OnInit{
	
	usuariologado: SocialUser;

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches)
		);

	constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
		

		
	}

	ngOnInit() {
		/*
		this.usuariologado = JSON.parse(localStorage.getItem("usuariologado"));

		if(!this.usuariologado) {

			this.router.navigate(['login']);

		}
		*/
		//console.log("Usuario logado:"+ JSON.stringify(this.usuariologado));
	}

}
