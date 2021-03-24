import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ErrorLoadedUserComponent } from './error-loaded-user.component';

describe('ErrorLoadedUserComponent', () => {
    let component: ErrorLoadedUserComponent;
    let fixture: ComponentFixture<ErrorLoadedUserComponent>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({}).compileComponents().then(() => {
            fixture = TestBed.createComponent(ErrorLoadedUserComponent);
            component = fixture.componentInstance;
            debugElement = fixture.debugElement;
            fixture.detectChanges();
        });
    });

    it('o componente deve ser criado', () => {
        expect(component).toBeDefined('O componente deveria ter sido instanciado.');
    });
});