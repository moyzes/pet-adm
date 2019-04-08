import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';

import { SpecieComponent } from './specie/specie.component';
import { AddSpecieComponent } from './specie/add-specie.component';

import { AttributeTypeComponent } from './attributetype/attributetype.component';
import { AddAttributeTypeComponent } from './attributetype/add-attributetype.component';

import { BreedComponent } from './breed/breed.component';
import { AddBreedComponent } from './breed/add-breed.component';


const routes: Routes = [
	{path: 'user', component: UserComponent},
	{path: 'adduser', component: AddUserComponent},
	{path: 'specie', component: SpecieComponent},
	{path: 'addspecie', component: AddSpecieComponent},
	{path: 'attributetype', component: AttributeTypeComponent},
	{path: 'addattributetype', component: AddAttributeTypeComponent},
	{path: 'breed', component: BreedComponent},
	{path: 'addbreed', component: AddBreedComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
