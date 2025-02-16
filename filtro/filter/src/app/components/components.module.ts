import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TableComponent } from './table/table.component';
import { RangeDateComponent } from './range-date/range-date.component';
import { InfoDetailsComponent } from './info-details/info-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent, RangeDateComponent, InfoDetailsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AngularMaterialModule,
    TableComponent,
    RangeDateComponent,
    InfoDetailsComponent,
  ],
})
export class ComponentsModule {}
