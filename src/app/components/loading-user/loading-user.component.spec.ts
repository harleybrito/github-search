import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { LoadingUserComponent } from './loading-user.component';

describe('LoadingUserComponent', () => {
    let component: LoadingUserComponent;
    let fixture: ComponentFixture<LoadingUserComponent>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({}).compileComponents().then(() => {
            fixture = TestBed.createComponent(LoadingUserComponent);
            component = fixture.componentInstance;
            debugElement = fixture.debugElement;
            fixture.detectChanges();
        });
    });

    it('o componente deve ser criado', () => {
        expect(component).toBeDefined('O componente deveria ter sido instanciado.');
    });
});