import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOverviewByCliComponent } from './component-overview-by-cli/component-overview-by-cli.component';

@NgModule({
  declarations: [AppComponent, ComponentOverviewByCliComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent], //metadata định nghĩa AppComponent chạy đầu tiên
})
export class AppModule {}
