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
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';

import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { UserService } from './user/user.service';

import { SpecieComponent } from './specie/specie.component';
import { AddSpecieComponent } from './specie/add-specie.component';
import { EditSpecieComponent } from './specie/edit-specie.component';
import { SpecieService } from './specie/specie.service';

import { AttributeTypeComponent } from './attributetype/attributetype.component';
import { AddAttributeTypeComponent } from './attributetype/add-attributetype.component';
import { AttributeTypeService } from './attributetype/attributetype.service';

import { BreedComponent } from './breed/breed.component';
import { BreedService } from './breed/breed.service';
import { AddBreedComponent } from './breed/add-breed.component';

@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		UserComponent,
		AddUserComponent,
		AddSpecieComponent,
		SpecieComponent,
		EditSpecieComponent,
		AddAttributeTypeComponent,
		AttributeTypeComponent,
		AddBreedComponent,
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
	providers: [UserService,SpecieService,AttributeTypeService,BreedService],
	bootstrap: [AppComponent]
})
export class AppModule { }