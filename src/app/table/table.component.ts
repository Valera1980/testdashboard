import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  NzTableModule,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';
import { TableService } from '../services/table.service';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';
import { TableRow } from '../types/table-row.type';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzProgressModule } from 'ng-zorro-antd/progress';

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<TableRow> | null;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-table',
  imports: [
    NzTableModule,
    NzDividerModule,
    AsyncPipe,
    NgForOf,
    NzInputModule,
    NzIconModule,
    ReactiveFormsModule,
    NgIf,
    NzProgressModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TableService],
})
export class TableComponent implements OnInit {
  data$!: Observable<TableRow[]>;
  search = new FormControl('');
  sortedData: TableRow[] = [];
  sortKey: string | null = null;
  sortOrder: string | null = null;

  listOfColumns: ColumnItem[] = [
    {
      name: 'Badge',
      sortOrder: null,
      sortFn: (a: TableRow, b: TableRow) => a.badge.localeCompare(b.badge),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Total Goals',
      sortOrder: null,
      sortFn: (a: TableRow, b: TableRow) => a.totalGoals - b.totalGoals,
      sortDirections: ['descend', null],
    },
    {
      name: 'Completed',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: TableRow, b: TableRow) => a.completed - b.completed,
    },
    {
      name: 'In Progress',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: TableRow, b: TableRow) => a.inProgress - b.inProgress,
    },
    {
      name: 'Not Started',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: TableRow, b: TableRow) => a.notStarted - b.notStarted,
    },
    {
      name: 'Completion Rate',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: TableRow, b: TableRow) => a.completionRate - b.completionRate,
    },
  ];

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.data$ = this.search.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value) => {
        return this.tableService
          .getData()
          .pipe(
            map((data) =>
              data.filter(
                (item) =>
                  item.badge
                    .toLowerCase()
                    .includes(value?.toString()?.toLowerCase() ?? '') ||
                  item.totalGoals
                    .toString()
                    .includes(value?.toString() ?? '') ||
                  item.completed.toString().includes(value?.toString() ?? '') ||
                  item.inProgress
                    .toString()
                    .includes(value?.toString() ?? '') ||
                  item.notStarted
                    .toString()
                    .includes(value?.toString() ?? '') ||
                  item.completionRate
                    .toString()
                    .includes(value?.toString() ?? '')
              )
            )
          );
      })
    );
  }
}
