import { Injectable } from '@angular/core';
import { statusData } from '../../../data/statusData';
import { Observable } from 'rxjs/internal/Observable';
import { statusInfo } from '../../../interfaces/statusInfo';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor() {}

  getStatusInfo(): Observable<statusInfo[]> {
    return of(statusData);
  }
}
