import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOverviewByCliComponent } from './component-overview-by-cli/component-overview-by-cli.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { MoblieComponentComponent } from './moblie-component/moblie-component.component';
import { LaptopComponentComponent } from './laptop-component/laptop-component.component';

@NgModule({
  declarations: [AppComponent, ComponentOverviewByCliComponent, DynamicComponentComponent, MoblieComponentComponent, LaptopComponentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent], //metadata định nghĩa AppComponent chạy đầu tiên
})
export class AppModule {}
