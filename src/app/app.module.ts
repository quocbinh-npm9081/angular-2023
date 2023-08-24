import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOverviewByCliComponent } from './component-overview-by-cli/component-overview-by-cli.component';
import { HeroChildComponent } from './decoration/hero-child/hero-child.component';
import { HeroParentComponent } from './decoration/hero-parent/hero-parent.component';
import { VersionChildComponent } from './decoration/version-child/version-child.component';
import { VersionParentComponent } from './decoration/version-parent/version-parent.component';
import { VoteChildrenComponent } from './decoration/vote-children/vote-children.component';
import { VoteParentComponent } from './decoration/vote-parent/vote-parent.component';
import { CountdownParentComponent } from './decoration/countdown-parent/countdown-parent.component';
import { CountdownChildrenComponent } from './decoration/countdown-children/countdown-children.component';
import { MultiplicationChildrenComponent } from './decoration/multiplication-children/multiplication-children.component';
import { MultiplicationParentComponent } from './decoration/multiplication-parent/multiplication-parent.component';

@NgModule({
  declarations: [AppComponent, ComponentOverviewByCliComponent, HeroChildComponent, HeroParentComponent, VersionChildComponent, VersionParentComponent, VoteChildrenComponent, VoteParentComponent, CountdownParentComponent, CountdownChildrenComponent, MultiplicationChildrenComponent, MultiplicationParentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent], //metadata định nghĩa AppComponent chạy đầu tiên
})
export class AppModule {}
