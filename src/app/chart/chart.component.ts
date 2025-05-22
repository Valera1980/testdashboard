import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  imports: [BaseChartDirective, NgFor, NzIconModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent {
  pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  defaultColors = ['#FF6384', '#36A2EB', '#FFCE56']; // Add as many as needed

  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'],
    datasets: [
      {
        data: [300, 500, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Match your legend colors
      },
    ],
  };
  pieChartType: ChartType = 'pie';
}
