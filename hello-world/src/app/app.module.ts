import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenraio3Component } from './scenraio3/scenraio3.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { Scenario5Component } from './scenario5/scenario5.component';
import { Scenario5ParentComponent} from './scenario5/scenario5-parent.component';
import { Scenario6Component } from './scenario6/scenario6.component';
import { Sibiling1Component } from './scenario6/sibilling1.component'
import { Sibiling2Component } from './scenario6/sibiling2.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    Scenario1Component,
    Scenario2Component,
    Scenraio3Component,
    Scenario4Component,
    Scenario5Component,
    Scenario5ParentComponent,
    Scenario6Component,
    Sibiling1Component,
    Sibiling2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
