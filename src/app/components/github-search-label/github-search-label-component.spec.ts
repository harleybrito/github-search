import { AppModule } from './../../app.module';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { GithubSearchLabelComponent } from './github-search-label.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('GithubSearchLabelComponent', () => {
    let component: GithubSearchLabelComponent;
    let fixture: ComponentFixture<GithubSearchLabelComponent>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                AppModule
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(GithubSearchLabelComponent);
            component = fixture.componentInstance;
            debugElement = fixture.debugElement;
            fixture.detectChanges();
        });
    });

    it('o componente deve ser criado', () => {
        expect(component).toBeDefined('O componente deveria ter sido instanciado.');
    });

    it('a fonte da label deve ser igual a "52.5px"', () => {
        const label: DebugElement = debugElement.query(By.css('h1'));
        expect(label).toBeDefined('O elemento h1 deveria estar definido.');
        expect(label.nativeNode.style.cssText).toMatch('font-size: 52.5px;');
    });

    it('a fonte da label deve ser igual a "32.5px"', () => {
        component.isHomeScreen = false;
        fixture.detectChanges();
        const label: DebugElement = debugElement.query(By.css('h1'));
        expect(label).toBeDefined('O elemento h1 deveria estar definido.');
        expect(label.nativeNode.style.cssText).toMatch('font-size: 32.5px;');
    });
});