import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent, UserListComponent],
  imports: [CommonModule, AngularMaterialModule, FormsModule],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    FormsModule,
    UserListComponent,
  ],
})
export class ComponentsModule {}
