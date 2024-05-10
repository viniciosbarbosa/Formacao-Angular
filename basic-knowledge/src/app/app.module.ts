import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { GenderPipe } from "./pipes/gender.pipe";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { NewComponent } from './components/new/new.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, GenderPipe, ToolbarComponent, NewComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
