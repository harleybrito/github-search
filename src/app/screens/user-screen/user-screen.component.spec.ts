import { RepoService } from './../../services/repo.service';
import { RouterStubService } from './../../mock/router-stub.service';
import { ActivatedRouteStubService } from '../../mock/activated-route-stub.service';
import { AppModule } from './../../app.module';
import { TestBed, ComponentFixture, fakeAsync, flush, flushMicrotasks } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserScreenComponent } from './user-screen.component';
import { UserService } from 'src/app/services/user.service';
import { UserStubService } from 'src/app/mock/user-stub.service';
import { RepoStubService } from 'src/app/mock/repo-stub.service';

describe('UserScreenComponent', () => {
    let component: UserScreenComponent;
    let fixture: ComponentFixture<UserScreenComponent>;
    let debugElement: DebugElement;
    let router: Router;
    let routeSnapshot: ActivatedRoute;
    let userService: UserService;
    let repoService: RepoService;
    
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [ UserScreenComponent ],
            imports: [ AppModule ],
            providers: [
                { provide: Router, useValue: new RouterStubService() },
                { provide: ActivatedRoute, useValue: new ActivatedRouteStubService },
                { provide: UserService, useValue: new UserStubService() },
                { provide: RepoService, useValue: new RepoStubService() },
                { provide: Router, useValue: new RouterStubService() }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(UserScreenComponent);
            component = fixture.componentInstance;
            debugElement = fixture.debugElement;
            router = TestBed.inject(Router);
            routeSnapshot = TestBed.inject(ActivatedRoute);
            userService = TestBed.inject(UserService);
            repoService = TestBed.inject(RepoService);
            spyOn(router, 'navigate').and.callThrough();
            spyOn(component, 'search').and.callThrough();
            fixture.detectChanges();
        });
    });

    it('should be created', () => {
        expect(component.fieldValue).toMatch(new ActivatedRouteStubService().params['username']);
        expect(component).toBeDefined();
        expect(component.search).toHaveBeenCalledTimes(1);
    });

    it('should call a not found error', () => {
        component.search('404');
    });

    it('should call a connection error', () => {
        component.search('400');
    });
});