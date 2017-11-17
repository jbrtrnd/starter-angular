import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderComponent } from './table-header.component';
import { TableHeaderRowComponent } from './table-header-row/table-header-row.component';
import { TableHeaderCellComponent } from './table-header-cell/table-header-cell.component';

describe('TableHeaderComponent', () => {
    let component: TableHeaderComponent;
    let fixture: ComponentFixture<TableHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TableHeaderComponent,
                TableHeaderRowComponent,
                TableHeaderCellComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
