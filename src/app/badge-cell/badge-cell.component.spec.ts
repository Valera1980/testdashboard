import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeCellComponent } from './badge-cell.component';

describe('BadgeCellComponent', () => {
  let component: BadgeCellComponent;
  let fixture: ComponentFixture<BadgeCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
