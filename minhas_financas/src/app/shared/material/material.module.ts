import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatSelectModule, MatButtonModule],
  exports: [MatCardModule, MatSelectModule, MatButtonModule],
})
export class MaterialModule {}
