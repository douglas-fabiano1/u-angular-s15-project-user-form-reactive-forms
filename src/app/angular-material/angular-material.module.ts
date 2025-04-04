import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatRadioModule, MatDatepickerModule, MatIconModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  exports: [MatButtonModule, MatCardModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatRadioModule, MatDatepickerModule, MatIconModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  providers: [provideNativeDateAdapter(),
  { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
})
export class AngularMaterialModule { }
