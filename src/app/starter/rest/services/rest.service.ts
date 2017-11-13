import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RestSearchResponse } from 'app/starter/rest/models/rest-search-response';
import { RestEntity } from 'app/starter/rest/models/rest-entity';

/**
 * Class RestService.
 *
 * Generic service to access an entity REST api.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
export class RestService<T extends RestEntity> {
    constructor(
        protected http: HttpClient,
        protected url: string,
        protected type: new () => T
    ) {}

    search(): Observable<RestSearchResponse<T>> {
        return this.http.get<T[]>(this.url, { observe: 'response' })
                        .map((response) => {
                            let row   = response.body;
                            let total = response.headers.get('X-REST-TOTAL');

                            return new RestSearchResponse<T>(row, total, this.type);
                        });
    }
}
