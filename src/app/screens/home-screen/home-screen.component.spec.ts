import { RouterStubService } from './../../mock/router-stub.service';
import { ActivatedRouteStubService } from '../../mock/activated-route-stub.service';
import { SearchComponent } from './../../components/search/search.component';
import { AppModule } from './../../app.module';
import { TestBed, ComponentFixture, fakeAsync, flush, flushMicrotasks } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HomeScreenComponent } from './home-screen.component';
import { NavigationExtras, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';



describe('HomeScreenComponent', () => {
    let component: HomeScreenComponent;
    let fixture: ComponentFixture<HomeScreenComponent>;
    let debugElement: DebugElement;
    let router: Router;
    
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [ HomeScreenComponent ],
            imports: [ AppModule ],
            providers: [
                { provide: Router, useValue: new RouterStubService() }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(HomeScreenComponent);
            component = fixture.componentInstance;
            debugElement = fixture.debugElement;
            router = TestBed.inject(Router);
            spyOn(router, 'navigate').and.callThrough();
            spyOn(component, 'searchFieldCall').and.callThrough();
            fixture.detectChanges();
        });
    });

    it('should be created', () => {
        expect(component).toBeDefined();
    });

    it('should call "searchFieldCall" and navigate', () => {
        const searchComponent: SearchComponent = debugElement.query(By.directive(SearchComponent)).componentInstance;
        searchComponent.searchFieldEmitter.emit('harleydebrito');
        expect(component.searchFieldCall).toHaveBeenCalledTimes(1);
        expect(router.navigate).toHaveBeenCalled();
    });
});