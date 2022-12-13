import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from '../../../services/user-services.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { DialogErrorComponent } from '../../dialog-error/dialog-error.component';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
})
export class SendMessageComponent {
  constructor(
    private userService: UserServicesService,
    public dialog: MatDialog
  ) {}
  userForm!: FormGroup;
  dataRes: any;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      phone: new FormControl(''),
      message: new FormControl('', [Validators.required]),
    });
  }
  get name() {
    return this.userForm.get('name')!;
  }

  get mail() {
    return this.userForm.get('mail')!;
  }

  get phone() {
    return this.userForm.get('phone')!;
  }

  get message() {
    return this.userForm.get('message')!;
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  openDialogError() {
    this.dialog.open(DialogErrorComponent);
  }
  async sendForm() {
    if (this.userForm.invalid) {
      return;
    }

    this.userService
      .postUser(this.userForm.value)
      .pipe(
        catchError(() => {
          return throwError(() => new Error('askdjnaskdjnasdkjasndkasdnaskjd'));
        })
      )
      .subscribe({
        next: (data) => {
          this.openDialog();
        },
        error: (err) => {
          this.openDialogError();
        },
      });
  }
}
