import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent, UsersListComponent],
  imports: [CommonModule, AngularMaterialModule, FormsModule],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    FormsModule,
    UsersListComponent,
  ],
})
export class ComponentsModule {}
