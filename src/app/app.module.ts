import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOverviewByCliComponent } from './component-overview-by-cli/component-overview-by-cli.component';
import { ComponentParentComponent } from './component-parent/component-parent.component';
import { ComponentChildrenComponent } from './component-children/component-children.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOverviewByCliComponent,
    ComponentParentComponent,
    ComponentChildrenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent], //metadata định nghĩa AppComponent chạy đầu tiên
})
export class AppModule {}
