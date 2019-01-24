import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from 'app/starter/rest/models/rest-service';
import { User } from 'app/user/models/user';

/**
 * User service.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
@Injectable()
export class UserService extends RestService<User> {
    /**
     * Constructor.
     *
     * @param {HttpClient} http Angular HttpClient service.
     */
    constructor(protected http: HttpClient) {
        super(http, 'user', User);
    }
}
