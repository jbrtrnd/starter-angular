import { HTTP_INTERCEPTORS }         from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { TokenInterceptor }          from 'app/user/interceptors/token.interceptor';
import { UrlInterceptor }            from 'app/user/interceptors/url.interceptor';
import { AuthenticationService }     from 'app/user/services/authentication.service';
import { TokenService }              from 'app/user/services/token.service';
import { UserService }               from 'app/user/services/user.service';

/**
 * Manages users and authentication.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
@NgModule({
    providers: [
        // Add API url to each requests
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UrlInterceptor,
            multi: true,
        },
        // Inject token in request headers
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        // Initialize the authentication service
        {
            provide: APP_INITIALIZER,
            useFactory: (authenticationService: AuthenticationService): () => Promise<any> => {
                return (): Promise<any> => {
                    return authenticationService.initialize();
                };
            },
            deps: [ AuthenticationService ],
            multi: true
        },
        AuthenticationService,
        TokenService,
        UserService
    ]
})
export class UserModule {
}
