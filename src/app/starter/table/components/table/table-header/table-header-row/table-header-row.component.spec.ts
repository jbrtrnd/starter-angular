import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderRowComponent } from './table-header-row.component';
import { TableHeaderCellComponent } from '../table-header-cell/table-header-cell.component';

describe('TableHeaderRowComponent', () => {
    let component: TableHeaderRowComponent;
    let fixture: ComponentFixture<TableHeaderRowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TableHeaderRowComponent,
                TableHeaderCellComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableHeaderRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
