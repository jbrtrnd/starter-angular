import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'app/user/services/token.service';
import { Observable } from 'rxjs';

/**
 * Add the JWT token to the http request.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    /**
     * Constructor.
     *
     * @param {TokenService} tokenService The token service.
     */
    constructor(protected tokenService: TokenService) {}

    /**
     * Interceptor.
     *
     * @param {HttpRequest<any>} request
     * @param {HttpHandler}      next
     *
     * @returns {Observable<HttpEvent<any>>}
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenService.get();
        let update = {};
        if (token) {
            update = {
                setHeaders: {
                    Authorization: 'Bearer : ' + token,
                },
            };
        }

        return next.handle(request.clone(update));
    }
}
