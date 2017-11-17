import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'starter-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})
export class TableComponent implements OnInit {
    @Input()
    getRows: (callback: (rows: any) => void) => void;

    ngOnInit(): void {
        this.getRows((rows: any) => {
            console.log(rows);
        });
    }
}
