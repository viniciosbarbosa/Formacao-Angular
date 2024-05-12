import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { GenderPipe } from "./pipes/gender.pipe";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { NewComponent } from "./components/new/new.component";
import { HomeComponent } from "./components/home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    ToolbarComponent,
    NewComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
