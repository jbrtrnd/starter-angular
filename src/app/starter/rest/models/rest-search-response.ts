import { RestEntity } from 'app/starter/rest/models/rest-entity';

export class RestSearchResponse<T extends RestEntity> {
    rows: Array<T>;
    total: number;

    constructor(rows: any[], total: string, type: new () => T) {
        this.total = parseInt(total) || null;

        this.rows  = rows.map((row: any) => {
            let entity = new type();
            entity.deserialize(row);
            return entity;
        })
    }
}
