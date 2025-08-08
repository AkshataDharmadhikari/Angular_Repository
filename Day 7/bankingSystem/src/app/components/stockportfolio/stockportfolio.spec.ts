import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stockportfolio } from './stockportfolio';

describe('Stockportfolio', () => {
  let component: Stockportfolio;
  let fixture: ComponentFixture<Stockportfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stockportfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stockportfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
