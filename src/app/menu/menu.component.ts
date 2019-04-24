import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocialUser } from 'angularx-social-login';

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

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit() {
		
		this.usuariologado = JSON.parse(localStorage.getItem("usuariologado"));
		//console.log("Usuario logado:"+ JSON.stringify(this.usuariologado));
	}

}
