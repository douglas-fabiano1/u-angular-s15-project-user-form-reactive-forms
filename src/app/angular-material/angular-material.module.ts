import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatRadioModule, MatDatepickerModule],
  exports: [MatButtonModule, MatCardModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatRadioModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
})
export class AngularMaterialModule { }
