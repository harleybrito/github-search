import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRouteScreenComponent } from './no-route-screen.component';

describe('NoRouteScreenComponent', () => {
  let component: NoRouteScreenComponent;
  let fixture: ComponentFixture<NoRouteScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoRouteScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRouteScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
