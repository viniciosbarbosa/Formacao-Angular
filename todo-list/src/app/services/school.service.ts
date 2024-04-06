import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface SchoolData {
  name: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private studentes: Array<SchoolData> = [
    { name: 'vinicius', id: '1' },
    { name: 'marcio', id: '2' },
    { name: 'marcia', id: '3' },
  ];

  private teachers: Array<SchoolData> = [
    { name: 'jorge', id: '1' },
    { name: 'luiz', id: '2' },
    { name: 'jose', id: '3' },
  ];

  public getStudents(): Observable<Array<SchoolData>> {
    return of(this.studentes);
  }

  public getTeachers(): Observable<Array<SchoolData>> {
    return of(this.teachers);
  }
}
