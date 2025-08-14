import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOpening } from './current-opening';

describe('CurrentOpening', () => {
  let component: CurrentOpening;
  let fixture: ComponentFixture<CurrentOpening>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentOpening]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentOpening);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
