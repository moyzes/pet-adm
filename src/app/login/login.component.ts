import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

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
					this.user = data;

					if(localStorage.getItem("userlogado")==null) {
						localStorage.setItem("userlogado", JSON.stringify(this.user));
						localStorage.setItem("suserlogado", JSON.stringify(this.suser));
						location.reload();
					}
					else {
						localStorage.setItem("userlogado", JSON.stringify(this.user));
						localStorage.setItem("suserlogado", JSON.stringify(this.suser));
					}
				});
			
			}
			
		});
	}

	signInWithGoogle(): void {
		
		this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
		
	}

	signInWithFB(): void {

		this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
	
	}

	signOut(): void {
		
		Promise.resolve(this.authService.signOut());
		this.limparLogin();
		
	}

	async limparLogin() {
		localStorage.removeItem("userlogado");
		localStorage.removeItem("suserlogado");
	
		this.suser = null;
		this.user = null;
		this.router.navigate(['login']);
		location.reload();
		Promise.resolve(true);
	}

}