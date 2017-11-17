import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBodyComponent } from './table-body.component';
import { TableBodyRowComponent } from './table-body-row/table-body-row.component';
import { TableBodyCellComponent } from './table-body-cell/table-body-cell.component';

describe('TableBodyComponent', () => {
    let component: TableBodyComponent;
    let fixture: ComponentFixture<TableBodyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TableBodyComponent,
                TableBodyRowComponent,
                TableBodyCellComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableBodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
