import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAuthorComponent } from './api-author.component';

describe('ApiAuthorComponent', () => {
  let component: ApiAuthorComponent;
  let fixture: ComponentFixture<ApiAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
