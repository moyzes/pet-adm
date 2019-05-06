import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { EditUserComponent } from './user/edit-user.component';

import { SpecieComponent } from './specie/specie.component';
import { AddSpecieComponent } from './specie/add-specie.component';
import { EditSpecieComponent } from './specie/edit-specie.component';

import { AttributeTypeComponent } from './attributetype/attributetype.component';
import { AddAttributeTypeComponent } from './attributetype/add-attributetype.component';
import { EditAttributeTypeComponent } from './attributetype/edit-attributetype.component';

import { BreedComponent } from './breed/breed.component';
import { AddBreedComponent } from './breed/add-breed.component';
import { EditBreedComponent } from './breed/edit-breed.component';

import { AttributeComponent } from './attribute/attribute.component';
import { AddAttributeComponent } from './attribute/add-attribute.component';
import { EditAttributeComponent } from './attribute/edit-attribute.component';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
	{path: 'user', component: UserComponent},
	{path: 'adduser', component: AddUserComponent},
	{path: 'edituser', component: EditUserComponent},
	{path: 'specie', component: SpecieComponent},
	{path: 'addspecie', component: AddSpecieComponent},
	{path: 'editspecie', component: EditSpecieComponent},
	{path: 'attributetype', component: AttributeTypeComponent},
	{path: 'editattributetype', component: EditAttributeTypeComponent},
	{path: 'addattributetype', component: AddAttributeTypeComponent},
	{path: 'attribute', component: AttributeComponent},
	{path: 'editattribute', component: EditAttributeComponent},
	{path: 'addattribute', component: AddAttributeComponent},
	{path: 'attribute', component: AttributeComponent},
	{path: 'editattribute', component: EditAttributeComponent},
	{path: 'addattribute', component: AddAttributeComponent},
	{path: 'breed', component: BreedComponent},
	{path: 'editbreed', component: EditBreedComponent},
	{path: 'addbreed', component: AddBreedComponent},
	{path: 'login', component: LoginComponent},
	{path: 'menu', component: MenuComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
	exports: [RouterModule]
})

export class AppRoutingModule { }
