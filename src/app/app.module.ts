import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from  '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatSlideToggleModule, MatStepperModule } from '@angular/material';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';

import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { EditUserComponent } from './user/edit-user.component';
import { UserService } from './user/user.service';

import { SpecieComponent } from './specie/specie.component';
import { AddSpecieComponent } from './specie/add-specie.component';
import { EditSpecieComponent } from './specie/edit-specie.component';
import { SpecieService } from './specie/specie.service';

import { AttributeTypeComponent } from './attributetype/attributetype.component';
import { AddAttributeTypeComponent } from './attributetype/add-attributetype.component';
import { EditAttributeTypeComponent } from './attributetype/edit-attributetype.component';
import { AttributeTypeService } from './attributetype/attributetype.service';

import { BreedComponent } from './breed/breed.component';
import { BreedService } from './breed/breed.service';
import { AddBreedComponent } from './breed/add-breed.component';
import { EditBreedComponent } from './breed/edit-breed.component';

import { LoginComponent } from './login/login.component';

import { AttributeComponent } from './attribute/attribute.component';
import { AddAttributeComponent } from './attribute/add-attribute.component';
import { EditAttributeComponent } from './attribute/edit-attribute.component';
import { AttributeService } from './attribute/attribute.service';
import { ConfirmComponent } from './confirm/confirm.component';
import { AttributebreedComponent } from './attributebreed/attributebreed.component';
import { AttributeBreedService } from './attributebreed/attributebreed.service';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { PictureService } from './picture/picture.service';
import { FoundComponent } from './found/found.component';

let config = new AuthServiceConfig([
	{
	
		id: GoogleLoginProvider.PROVIDER_ID,
		provider: new GoogleLoginProvider("465049926471-h7tu9pt3lkc2pls1ksbmpqcmfi3itr76.apps.googleusercontent.com")

	},
	{
		id: FacebookLoginProvider.PROVIDER_ID,
		provider: new FacebookLoginProvider("680985052334686")
	},
	{
		id: LinkedInLoginProvider.PROVIDER_ID,
		provider: new LinkedInLoginProvider("LinkedIn-client-Id", false, 'en_US')
	}
]);
   
export function provideConfig() {
	return config;
}

@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		
		UserComponent,
		AddUserComponent,
		EditUserComponent,
		
		AddSpecieComponent,
		SpecieComponent,
		EditSpecieComponent,

		AddAttributeTypeComponent,
		EditAttributeTypeComponent,
		AttributeTypeComponent,
		
		AddAttributeComponent,
		EditAttributeComponent,
		AttributeComponent,

		AddBreedComponent,
		EditBreedComponent,
		BreedComponent,
		ConfirmComponent,
		AttributebreedComponent,
		LoginComponent,
		FoundComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
    	FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatInputModule,
		MatSelectModule,
		MatRadioModule,
		MatCardModule,
		ReactiveFormsModule,
		MatTableModule,
		MatDialogModule,
		MatChipsModule,
		MatSlideToggleModule,
		SocialLoginModule,
		MatFileUploadModule,
		MatStepperModule
	],
	providers: [
		UserService,
		SpecieService,
		AttributeTypeService,
		BreedService,
		AttributeService,
		AttributeBreedService,
		PictureService,
		{provide: AuthServiceConfig, useFactory: provideConfig},
		{provide: MatDialogRef, useValue: {}},
		{provide: LocationStrategy, useClass: HashLocationStrategy}
	],

	entryComponents: [ConfirmComponent, AttributebreedComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }