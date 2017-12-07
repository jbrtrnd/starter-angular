import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule }    from '@angular/platform-browser';

/**
 * Application root module.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    bootstrap: []
})
export class AppModule {
}
