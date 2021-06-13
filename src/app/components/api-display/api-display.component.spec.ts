import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDisplayComponent } from './api-display.component';

describe('ApiDisplayComponent', () => {
  let component: ApiDisplayComponent;
  let fixture: ComponentFixture<ApiDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
