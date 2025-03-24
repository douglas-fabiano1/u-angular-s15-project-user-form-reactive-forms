import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule,],
  exports: [MatButtonModule, MatCardModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule,],
})
export class AngularMaterialModule { }
