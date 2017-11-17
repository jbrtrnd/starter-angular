import { NgModule } from '@angular/core';

import { TableComponent } from 'app/starter/table/components/table/table.component';
import { TableHeaderComponent } from 'app/starter/table/components/table/table-header/table-header.component';
import { TableBodyComponent } from 'app/starter/table/components/table/table-body/table-body.component';
import { TableHeaderRowComponent } from 'app/starter/table/components/table/table-header/table-header-row/table-header-row.component';
import { TableHeaderCellComponent } from 'app/starter/table/components/table/table-header/table-header-cell/table-header-cell.component';
import { TableBodyRowComponent } from 'app/starter/table/components/table/table-body/table-body-row/table-body-row.component';
import { TableBodyCellComponent } from 'app/starter/table/components/table/table-body/table-body-cell/table-body-cell.component';

/**
 * The Table module contains components to build an advanced table.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
@NgModule({
    declarations: [
        TableComponent,
        TableHeaderComponent,
        TableHeaderRowComponent,
        TableHeaderCellComponent,
        TableBodyComponent,
        TableBodyRowComponent,
        TableBodyCellComponent
    ],
    exports: [
        TableComponent
    ]
})
export class StarterTableModule {}
