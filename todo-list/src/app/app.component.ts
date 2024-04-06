import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { SchoolData, SchoolService } from './services/school.service';
import { Observable, filter, from, map, of, switchMap, zip } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TodoCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'todo-list';
  public students: Array<SchoolData> = [];
  public teachers: Array<SchoolData> = [];
  private zipSchoolReponse$ = zip(
    this.getStudentsDatas(),
    this.getTeachersDatas()
  );

  private ages = of(20, 30, 40, 50, 60, 70);

  private peopleDatas = from([
    {
      name: 'Vinciius',
      age: 23,
      profession: 'software developer',
    },
    {
      name: 'julia',
      age: 25,
      profession: 'ux ui',
    },
    {
      name: 'jorge',
      age: 35,
      profession: 'scrum master',
    },
    {
      name: 'sebastiao',
      age: 30,
      profession: 'scrum master',
    },
    {
      name: 'elisas',
      age: 34,
      profession: 'scrum master',
    },
  ]);

  constructor(private schoolService: SchoolService) {}

  ngOnInit(): void {
    // this.getSchoolDatas();
    // this.getMultipledAges();
    // this.getScrumName();
    this.handleFindStudentsById();
  }

  public getScrumName(): void {
    this.peopleDatas
      .pipe(
        filter((people) => people.age < 35),
        map((people) => people.name)
      )
      .subscribe({
        next: (value) => {
          console.log('Nome da pessoa', value);
        },
      });
  }

  private studentsUserId = '2';

  public handleFindStudentsById(): void {
    this.getStudentsDatas()
      .pipe(
        switchMap((students) =>
          this.findStudentsById(students, this.studentsUserId)
        )
      )
      .subscribe({
        next: (response) => {
          console.log('retorno estudante filtrado', response);
        },
      });
  }

  public findStudentsById(
    students: Array<SchoolData>,
    userId: string
  ): Observable<(SchoolData | undefined)[]> {
    return of([students.find((student) => student.id === userId)]);
  }

  public getSchoolDatas(): void {
    this.zipSchoolReponse$.subscribe({
      next: (response) => {
        console.log('Estudantes', response[0]);
        console.log('Professores', response[1]);
      },
    });
  }

  public getMultipledAges(): void {
    this.ages.pipe(map((age) => age * 2)).subscribe({
      next: (response) => {
        console.log('idade', response);
      },
    });
  }

  private getStudentsDatas(): Observable<Array<SchoolData>> {
    return this.schoolService.getStudents();
  }

  private getTeachersDatas(): Observable<Array<SchoolData>> {
    return this.schoolService.getTeachers();
  }
}
