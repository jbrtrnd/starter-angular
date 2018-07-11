import { HttpClientModule } from '@angular/common/http';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { StarterModule }    from 'app/starter/starter.module';
import { UserModule }       from 'app/user/user.module';

/**
 * Application root module.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        StarterModule,
        UserModule
    ],
    bootstrap: []
})
export class AppModule {
}
