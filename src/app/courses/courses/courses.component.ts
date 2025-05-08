import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

    courses: Course[] = [
      {
        _id: '1',
        name: 'Angular',
        category: 'Frontend'
      },
    ];

    displayedColumns = ['name', 'category'];

    constructor() {
      // this.courses = [];
    }

    ngOnInit(): void {

    }

}
