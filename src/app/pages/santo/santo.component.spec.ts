import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantoComponent } from './santo.component';

describe('SantoComponent', () => {
  let component: SantoComponent;
  let fixture: ComponentFixture<SantoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SantoComponent]
    });
    fixture = TestBed.createComponent(SantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
