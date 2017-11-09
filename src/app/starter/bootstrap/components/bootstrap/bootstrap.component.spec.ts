///<reference path="../../../../../../node_modules/@types/jasmine/index.d.ts"/>
import { TestBed, async } from '@angular/core/testing';

import { BootstrapComponent } from './bootstrap.component';

describe('BootstrapComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BootstrapComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(BootstrapComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));
});
