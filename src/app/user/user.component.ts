import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { UserService } from './user.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
	
	users: User[];
	displayedColumns = ['name', 'email','action'];

	constructor(
		private router: Router,
		private userService: UserService,
		private dialog: MatDialog){
	}
	
	ngOnInit() {
		this.userService.getUsers().subscribe(data => {
			this.users = data;
		});
	};

	deleteUser(user: User): void {
		let dialogRef = this.dialog.open(ConfirmComponent, {
			width: '30%',
			data: {
				confirmQuestion: "Deseja remover esse usuário?",
			}
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result){
				this.userService.deleteUser(user).subscribe(() => {
					this.users = this.users.filter(u => u !== user);
				})
			}
		});
	};

	editUser(user: User): void {
		localStorage.removeItem("editSUserId");
		localStorage.setItem("editUserId", user.id+"");
		this.router.navigate(['edituser']);
	};
}