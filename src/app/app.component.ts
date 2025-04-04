import { MatDatepickerModule } from '@angular/material/datepicker';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list-response';
import { take } from 'rxjs';
import { IUser } from './interfaces/user/user-interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { IDialogConfirmationData } from './interfaces/dialog-confirmation-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isInEditMode: boolean = false;
  enableSaveButton: boolean = false;
  userFormUpdated: boolean = false;

  userSelectedIndex: number | undefined;
  userSelected: IUser = {} as IUser;

  usersList: UsersListResponse = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _matDialog: MatDialog
  ) { }

  ngOnInit() {
    this._usersService
      .getUsers()
      .pipe(take(1))
      .subscribe((usersListResponse) => (this.usersList = usersListResponse));
  }

  onUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex];

    if (userFound) {
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound);
    }
  }

  onCancelButton() {
    if (this.userFormUpdated) {
      this.openConfirmationDialog({
        title: 'O Formulário foi alterado',
        message: 'Deseja realmente cancelar as alterações feitas no formulário?',
      }, (value: boolean) => {
        if (!value) return;

        this.isInEditMode = false;
        this.userFormUpdated = false;
      });
    } else {
      this.isInEditMode = false;
    }
  }

  onSaveButton() {
    this.openConfirmationDialog({
      title: 'Confirmar alteração de dados',
      message: 'Deseja realmente salvar os valores alterados?',
    }, (value: boolean) => {
      if (!value) return;

      this.saveUserInfos();

      this.isInEditMode = false;
      this.userFormUpdated = false;
    });
  }

  onEditButton() {
    this.isInEditMode = true;
  }

  onFormStatusChange(formStatus: boolean) {
    setTimeout(() => this.enableSaveButton = formStatus, 0);
  }

  onUserFormFirstChange() {
    this.userFormUpdated = true;
  }

  private openConfirmationDialog(data: IDialogConfirmationData, callback: (value: boolean) => void) {
    const dialogRef = this._matDialog.open(ConfirmationDialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe(callback);
  }

  private saveUserInfos() {
    console.log('Valores Alterados!');
  }
}
