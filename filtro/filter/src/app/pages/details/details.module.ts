import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { PagesModule } from '../pages.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, DetailsRoutingModule, PagesModule],
})
export class DetailsModule {}
