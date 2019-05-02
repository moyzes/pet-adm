import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	suser: SocialUser;
	user: User;
	

	constructor(private authService: AuthService, private userService: UserService) { }

	ngOnInit() {
		this.authService.authState.subscribe((suser) => {
			
			this.suser = suser;

			if(suser!=null) {
		
				this.userService.login(suser).subscribe(data => {
					console.log('user:'+ data)
					console.log('suser:'+ suser)
					this.user = data
					localStorage.setItem("userlogado", JSON.stringify(this.user));
					localStorage.setItem("suserlogado", JSON.stringify(this.suser));
					
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
		this.authService.signOut();
		localStorage.removeItem("userlogado");
		localStorage.removeItem("suserlogado");
	}
}