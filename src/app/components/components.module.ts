import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, AngularMaterialModule, PipesModule],
  exports: [UsersListComponent],
})
export class ComponentsModule {}
