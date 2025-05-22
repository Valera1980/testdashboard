import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-badge-cell',
  imports: [AngularSvgIconModule],
  templateUrl: './badge-cell.component.html',
  styleUrl: './badge-cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeCellComponent {}
