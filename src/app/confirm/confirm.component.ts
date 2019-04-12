import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-confirm',
	templateUrl: './confirm.component.html',
	styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

	confirmQuestion:string
	confirmAction:boolean

	constructor(
		public dialogRef: MatDialogRef<any>,
		@Inject(MAT_DIALOG_DATA) public data: any){ 
			this.confirmQuestion = data.confirmQuestion
		}
	
	confirm(){
		this.confirmAction = true;
		this.dialogRef.close(this.confirmAction);
	}

	cancel(){
		this.confirmAction = false;
		this.dialogRef.close(this.confirmAction);
	}

	ngOnInit() {
	}

}
