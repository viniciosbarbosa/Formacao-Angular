import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilhoComponentComponent } from './components/filho-component/filho-component.component';
import { PaiComponentComponent } from './components/pai-component/pai-component.component';

@NgModule({
  declarations: [AppComponent, FilhoComponentComponent, PaiComponentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
