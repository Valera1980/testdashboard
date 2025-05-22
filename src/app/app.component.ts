import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BadgeCellComponent } from './badge-cell/badge-cell.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AngularSvgIconModule } from 'angular-svg-icon';

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
  ],
})
export class AppComponent {
  title = 'testdashboard';
}
