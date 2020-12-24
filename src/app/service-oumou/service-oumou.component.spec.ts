import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOumouComponent } from './service-oumou.component';

describe('ServiceOumouComponent', () => {
  let component: ServiceOumouComponent;
  let fixture: ComponentFixture<ServiceOumouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOumouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOumouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
