import { RestEntity } from 'app/starter/rest/models/rest-entity';

/**
 * Class Bar.
 *
 * An example of Starter REST entity.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
export class Bar extends RestEntity {
    /**
     * Identifier.
     *
     * @type {number}
     */
    id: number;
    /**
     * A random property.
     *
     * @type {string}
     */
    baz: string;

    getName(): void {
        console.log(this.baz);
    }
}
