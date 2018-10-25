import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'course',
  template: `
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
      </ul>
      `,
  styleUrls: ['./course.component.css']
})

export class CourseComponent  {

  title = "list of courses";
  courses ;
  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }
  
}