import { RestEntity } from 'app/starter/rest/models/rest-entity';

/**
 * User model.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
export class User extends RestEntity {
    /**
     * Username.
     *
     * @type {string}
     */
    username: string;
    /**
     * Password.
     *
     * @type {string}
     */
    password: string;
}
