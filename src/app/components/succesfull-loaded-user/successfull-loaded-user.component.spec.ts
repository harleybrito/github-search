import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccesfullLoadedUserComponent } from './succesfull-loaded-user.component';

describe('SuccesfullLoadedUserComponent', () => {
  let component: SuccesfullLoadedUserComponent;
  let fixture: ComponentFixture<SuccesfullLoadedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesfullLoadedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfullLoadedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
