import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BadgeCellComponent } from './badge-cell/badge-cell.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ChartComponent } from './chart/chart.component';
import { CardComponent } from './card/card.component';
import { Card } from './types/card.type';
import { NgFor } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    BadgeCellComponent,
    NzButtonModule,
    AngularSvgIconModule,
    ChartComponent,
    CardComponent,
    NgFor,
    NzTabsModule,
    TableComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'testdashboard';
  cards: Card[] = [
    {
      title: '50',
      content: 'Total Students Enrolled ',
    },
    {
      title: '5',
      content: 'Badges',
    },
    {
      title: '68%',
      content: 'Completion Rate',
    },
    {
      title: '5',
      content: 'Students At Risk',
    },
  ];
}
