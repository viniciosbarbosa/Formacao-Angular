import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [MatButtonModule, MatIconModule],
})
export class AngularMaterialModule {}
