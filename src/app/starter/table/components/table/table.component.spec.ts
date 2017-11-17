import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableHeaderRowComponent } from './table-header/table-header-row/table-header-row.component';
import { TableHeaderCellComponent } from './table-header/table-header-cell/table-header-cell.component';
import { TableBodyRowComponent } from './table-body/table-body-row/table-body-row.component';
import { TableBodyCellComponent } from './table-body/table-body-cell/table-body-cell.component';

describe('TableHeaderComponent', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TableComponent,
                TableHeaderComponent,
                TableHeaderRowComponent,
                TableHeaderCellComponent,
                TableBodyComponent,
                TableBodyRowComponent,
                TableBodyCellComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
