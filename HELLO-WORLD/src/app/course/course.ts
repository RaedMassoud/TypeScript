import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: false,
  template: `
  <h2>{{ "Title: " + getTitle() }}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{ course }}
    </li>
  </ul>`,
  styleUrls: ['./course.css']
})
export class Course {
  title = 'List of courses';
  courses: string[] = ['Course1', 'Course2', 'Course3'];

  getTitle() {
    return this.title;
  }
}
