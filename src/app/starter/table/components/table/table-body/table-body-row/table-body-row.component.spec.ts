import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBodyRowComponent } from './table-body-row.component';
import { TableBodyCellComponent } from '../table-body-cell/table-body-cell.component';

describe('TableBodyRowComponent', () => {
    let component: TableBodyRowComponent;
    let fixture: ComponentFixture<TableBodyRowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TableBodyRowComponent,
                TableBodyCellComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableBodyRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
