import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOverviewByCliComponent } from './component-overview-by-cli/component-overview-by-cli.component';
import { HeroChildComponent } from './decoration/hero-child/hero-child.component';
import { HeroParentComponent } from './decoration/hero-parent/hero-parent.component';

@NgModule({
  declarations: [AppComponent, ComponentOverviewByCliComponent, HeroChildComponent, HeroParentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent], //metadata định nghĩa AppComponent chạy đầu tiên
})
export class AppModule {}
