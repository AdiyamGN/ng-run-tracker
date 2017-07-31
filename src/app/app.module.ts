import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';

import { AppComponent } from './app.component';


import { ActivityListComponent } from './activity-list/activity-list.component';

import { ActivityService } from './services/activity.service';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
