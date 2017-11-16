///<reference path="../../../../../node_modules/@types/jasmine/index.d.ts"/>
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootComponent } from './root.component';

describe('RootComponent', () => {
    let component: RootComponent;
    let fixture: ComponentFixture<RootComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RootComponent ],
            imports: [ HttpClientModule ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RootComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
