import { RepoStubService } from './../../test/repo-stub.service';
import { UserStubService } from './../../test/user-stub.service';
import { ActivatedRouteStubService } from './../../test/activated-route-stub.service';
import { UserScreenComponent } from './user-screen.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Observable, of, ReplaySubject, Subscriber } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';

describe('UserScreenComponent', () => {
  let component: UserScreenComponent;
  let fixture: ComponentFixture<UserScreenComponent>;
  let activatedRouteStubService: ActivatedRouteStubService = new ActivatedRouteStubService();
  let userStubService: UserStubService = new UserStubService();
  let repoStubService: RepoStubService = new RepoStubService();
  let eventSubject: ReplaySubject<RouterEvent> = new ReplaySubject<RouterEvent>();
  
  let succesfullLoadSpy: jasmine.Spy<(result, fieldValue: string) => void>;
  // let searchSpy: jasmine.Spy<(username: string) => void>;
  let errorLoadSpy: jasmine.Spy<(result: HttpErrorResponse, fieldValue: string) => void>;
  let changeRouteSpy: jasmine.Spy<(value: string) => void>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserScreenComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStubService
        },
        {
          provide: UserService,
          useValue: userStubService
        },
        {
          provide: RepoStubService,
          useValue: repoStubService
        },
        {
          provide: Router,
          useValue: eventSubject
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(UserScreenComponent);
    component = fixture.componentInstance;
    tick();
    fixture.detectChanges();
  }));

  it('deve ser inicializado', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('"search" deve funcionar', fakeAsync(() => {
    const searchSpy = spyOn(component, 'search');
    const getAllSpy = spyOn(repoStubService, 'getAll').and.returnValues(of(repoStubService.repos));

    repoStubService.getAll().subscribe(
      success => component.successfulLoad(success, 'harleydebrito'),
      error => component.errorLoad(error, 'harleydebrito')
    );

    // component.search('harleydebrito');
    tick();
    expect(component.user).toBeDefined();
    expect(component.repos).toBeDefined();
    expect(searchSpy).toHaveBeenCalled();
    expect(getAllSpy).toHaveBeenCalled();
  }));


  // it('should have the other component', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('app-other')).not.toBe(null);
  // }));

  // it('deve executar o "search" ao ser inicializado', fakeAsync(() => {
  //   expect(component.search).toHaveBeenCalledTimes(1);
  //   expect(component.isLoading).toBeTrue();
  // }));

  // it('deve executar o "succesfullLoad"', () => {
  //   expect(component.user).toBeDefined();
  // });

});
