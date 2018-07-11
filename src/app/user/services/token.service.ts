import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

/**
 * Token service store and read a JWT token.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
@Injectable()
export class TokenService {
    /**
     * The key used in the localStorage
     *
     * @type {string}
     */
    protected TOKEN_KEY = 'token';

    /**
     * Store a token in the localStorage
     *
     * @param token
     */
    store(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    /**
     * Retrieve the token from localStorage
     *
     * @returns {string|null}
     */
    get(): string {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    /**
     * Remove the token from the localStorage
     */
    clear(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }
}
