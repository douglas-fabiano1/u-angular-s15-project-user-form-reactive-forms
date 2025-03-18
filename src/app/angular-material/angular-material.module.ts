import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatTabsModule],
  exports: [MatButtonModule, MatCardModule, MatTabsModule],
})
export class AngularMaterialModule {}
