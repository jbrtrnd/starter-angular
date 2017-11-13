/**
 * The basic starter REST entity.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
export class RestEntity {
    /**
     * Creation date of the entity.
     *
     * @type {Date}
     */
    created: Date;
    /**
     * Updated date of the entity.
     *
     * @type {Date}
     */
    updated: Date;

    deserialize(data: any): void {
        Object.assign(this, data);
    }
}
