/**
 * The basic starter REST entity.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
export class RestEntity {
    /**
     * Identifier.
     *
     * @type {number}
     */
    id: number;
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

    /**
     * Hydrate the current class instance with an base Javascript object.
     *
     * @param {any} data
     *
     * @returns {void}
     */
    hydrate(data: any): void {
        Object.assign(this, data);
    }
}
