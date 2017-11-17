import { NgModule } from '@angular/core';
import { RootComponent } from 'app/example/components/root/root.component';
import { StarterTableModule } from 'app/starter/table/table.module';

@NgModule({
    declarations: [
        RootComponent
    ],
    imports: [
        StarterTableModule,
    ]
})
export class ExampleModule {}
