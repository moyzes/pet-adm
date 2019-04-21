import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: SocialUser;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.authService.authState.subscribe((user) => {
			this.user = user;
		});
	}

	signInWithGoogle(): void {
		
		let googleProvider = new GoogleLoginProvider("968935311452-3bq7dojhdvsump5egjoqjd9i7emabkc5");
		console.log(googleProvider)

   		googleProvider.signIn(googleProvider).then((userData) => {
			//on success
			//this will return user data from google. What you need is a user token which you will send it to the server
			//this.sendToRestApiMethod(userData.idToken);
			console.log(userData.idToken)
		});
		//this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
	}

	signInWithFB(): void {
		this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
	}

	signOut(): void {
		this.authService.signOut();
	}
}