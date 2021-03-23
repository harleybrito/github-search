import { UserPropertyIconizedComponent } from './user-property-iconized.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('UserPropertyIconizedComponent', () => {
  let component: UserPropertyIconizedComponent;
  let fixture: ComponentFixture<UserPropertyIconizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPropertyIconizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPropertyIconizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
