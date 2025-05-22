import { Injectable } from '@angular/core';
import { TableRow } from '../types/table-row.type';
import { Observable } from 'rxjs';

const mockData: TableRow[] = [
  {
    key: '1',
    badge: 'badge1',
    totalGoals: 10,
    completed: 5,
    inProgress: 3,
    notStarted: 2,
    completionRate: 50,
  },
  {
    key: '2',
    badge: 'badge2',
    totalGoals: 20,
    completed: 132,
    inProgress: 7,
    notStarted: 5,
    completionRate: 45,
  },
  {
    key: '3',
    badge: 'badge3',
    totalGoals: 30,
    completed: 10,
    inProgress: 5,
    notStarted: 15,
    completionRate: 33,
  },
  {
    key: '4',
    badge: 'badge4',
    totalGoals: 40,
    completed: 20,
    inProgress: 10,
    notStarted: 10,
    completionRate: 50,
  },
  {
    key: '5',
    badge: 'badge5',
    totalGoals: 50,
    completed: 25,
    inProgress: 15,
    notStarted: 10,
    completionRate: 50,
  },
];

@Injectable()
export class TableService {
  constructor() {}
  getData(): Observable<TableRow[]> {
    return new Observable((observer) => {
      observer.next(mockData);
      observer.complete();
    });
  }
}
