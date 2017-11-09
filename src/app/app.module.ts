import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BootstrapModule } from 'app/starter/bootstrap/bootstrap.module';
import { BootstrapComponent } from 'app/starter/bootstrap/components/bootstrap/bootstrap.component';

@NgModule({
    imports: [
        BrowserModule,
        BootstrapModule
    ],
    bootstrap: [
        BootstrapComponent
    ]
})
export class AppModule {}
