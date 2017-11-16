import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleModule } from 'app/example/example.module';
import { RootComponent } from 'app/example/components/root/root.component';

/**
 * Application root module.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ExampleModule
    ],
    bootstrap: [
        RootComponent
    ]
})
export class AppModule {}
