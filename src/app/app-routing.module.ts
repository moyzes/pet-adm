import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { SpecieComponent } from './specie/specie.component';
import { BreedComponent } from './breed/breed.component';

const routes: Routes = [
	{path: 'user', component: UserComponent},
	{path: 'adduser', component: AddUserComponent},
	{path: 'specie', component: SpecieComponent},
	{path: 'breed', component: BreedComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
