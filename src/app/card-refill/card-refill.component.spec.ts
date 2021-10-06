import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRefillComponent } from './card-refill.component';

describe('CardRefillComponent', () => {
  let component: CardRefillComponent;
  let fixture: ComponentFixture<CardRefillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRefillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
