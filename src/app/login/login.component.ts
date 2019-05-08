import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	suser: SocialUser;
	user: User;
	
	constructor(private authService: AuthService, private userService: UserService,	private router: Router) { }

	ngOnInit() {
		this.authService.authState.subscribe((suser) => {
			
			this.suser = suser;

			if(suser!=null) {
		
				this.userService.login(suser).subscribe(data => {
					this.user = data
					localStorage.setItem("userlogado", JSON.stringify(this.user));
					localStorage.setItem("suserlogado", JSON.stringify(this.suser));
				});
			
			}
			
		});
	}

	signInWithGoogle(): void {
		
		this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
		//this.router.navigate(['login']);
		
	}

	signInWithFB(): void {
		
		this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
		//this.router.navigate(['login']);
		this.reload;
	}

	signOut(): void {
		localStorage.removeItem("userlogado");
		localStorage.removeItem("suserlogado");
		this.suser = null;
		this.user = null;
		this.authService.signOut();
		this.router.navigate(['login']);
		//location.reload();
		this.reload;
	}

	reload(): void {
		this.router.navigate(['menu']);
	}

}