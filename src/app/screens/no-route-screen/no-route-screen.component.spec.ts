import { RouterStubService } from './../../mock/router-stub.service';
import { ActivatedRouteStubService } from '../../mock/activated-route-stub.service';
import { SearchComponent } from './../../components/search/search.component';
import { AppModule } from './../../app.module';
import { TestBed, ComponentFixture, fakeAsync, flush, flushMicrotasks } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { NoRouteScreenComponent } from './no-route-screen.component';



describe('NoRouteScreenComponent', () => {
    let component: NoRouteScreenComponent;
    let fixture: ComponentFixture<NoRouteScreenComponent>;
    let debugElement: DebugElement;
    let router: Router;
    
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [ NoRouteScreenComponent ],
            imports: [ AppModule ],
            providers: [
                { provide: Router, useValue: new RouterStubService() }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(NoRouteScreenComponent);
            component = fixture.componentInstance;
            debugElement = fixture.debugElement;
            router = TestBed.inject(Router);
            spyOn(router, 'navigate').and.callThrough();
            spyOn(component, 'onReturnButtonClicked').and.callThrough();
            fixture.detectChanges();
        });
    });

    it('should be created', () => {
        expect(component).toBeDefined();
    });

    it('should call "onReturnButtonClicked" and navigate', () => {
        const button: DebugElement = debugElement.query(By.css('button'));
        button.nativeElement.dispatchEvent(new Event('click'));
        expect(component.onReturnButtonClicked).toHaveBeenCalledTimes(1);
        expect(router.navigate).toHaveBeenCalled();
    });
});