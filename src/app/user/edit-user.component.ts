import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from './user.model';
import { UserService } from './user.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
	selector: 'app-edit-user',
	templateUrl: './edit-user.component.html',
	styleUrls: ['./user.component.css']
})
export class EditUserComponent implements OnInit {

	user: User;
	editForm: FormGroup;
	
	// Variavel criada apenas para evitar erro de compilação no build
	superuser: boolean;


	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private userService: UserService){ 
	}

	ngOnInit() {

		let userId = localStorage.getItem("editUserId");

		if(!userId) {
			alert("Ação inválida.")
			this.router.navigate(['user']);
			return;
		}

		this.editForm = this.formBuilder.group({
			id:[],
			name:[], 
			adress:[], 
			city:[], 
			country:[], 
			email:[], 
			state:[], 
			provider:[], 
			token:[], 
			lastlocation:[], 
			zipcode:[],
			superuser:[]
		});
		
		this.userService.getUser(+userId).subscribe(data => {
			console.log(data)
			this.editForm.setValue(data);
		});
	}

	onSubmit() {
		console.log(this.editForm.value)
		this.userService.updateUser(this.editForm.value)
			.pipe(first())
			.subscribe(() => {
				this.router.navigate(['user']);
			},
			error => {
				alert(error);
			}
		);
	}
}