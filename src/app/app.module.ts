import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from  '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
import { UserComponent } from './user/user.component';
import { SpecieComponent } from './specie/specie.component';
import { BreedComponent } from './breed/breed.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './user/add-user.component';
import { UserService } from './user/user.service';
import { MatTableModule } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';

@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		UserComponent,
		AddUserComponent,
		SpecieComponent,
		BreedComponent
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
		MatTableModule
	],
	providers: [UserService],
	bootstrap: [AppComponent]
})
export class AppModule { }