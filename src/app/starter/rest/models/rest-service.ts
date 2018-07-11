import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable }                           from 'rxjs/Observable';
import { RestEntity }                           from 'app/starter/rest/models/rest-entity';
import { RestSearchResponse }                   from 'app/starter/rest/models/rest-search-response';
import 'rxjs/add/operator/map';

/**
 * Generic service to access an entity REST api.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
export class RestService<T extends RestEntity> {
    /**
     * Constructor.
     *
     * @param {HttpClient} http Angular HttpClient service.
     * @param {string}     url  URL to consume API.
     * @param {RestEntity} type The entity class to instantiate
     */
    constructor(protected http: HttpClient,
                protected url: string,
                protected type: new () => T) {
    }

    /**
     * Search in the complete list of entities.
     *
     * @param {Object} query Some query params.
     *
     * @returns {Observable<RestSearchResponse<RestEntity>>}
     */
    search(query: Object = {}): Observable<RestSearchResponse<T>> {
        let params: HttpParams = new HttpParams();
        for (const key in query) {
            if (query.hasOwnProperty(key)) {
                params = params.set(key, query[key]);
            }
        }

        return this.http
                   .get<T[]>(this.url, {observe: 'response', params: params})
                   .map((response: HttpResponse<T[]>) => {
                       return new RestSearchResponse<T>(response, this.type);
                   });
    }

    /**
     * Get an entity by its primary key value.
     *
     * @param {number | string} id The entity identifier.
     * @param {Object}          query Some query params.
     *
     * @returns {Observable<RestEntity>}
     */
    get(id: number | string, query: Object = {}): Observable<T> {
        let params: HttpParams = new HttpParams();
        for (const key in query) {
            if (query.hasOwnProperty(key)) {
                params = params.set(key, query[key]);
            }
        }

        const url = this.url + '/' + id;
        return this.http
                   .get<T>(url, {params: params})
                   .map((row: any) => {
                       const entity = new this.type();
                       entity.hydrate(row);
                       return entity;
                   });
    }

    /**
     * Create an entity.
     *
     * @param {RestEntity | any} entity Entity to create.
     * @param {Object}           query Some query params.
     *
     * @returns {Observable<RestEntity>}
     */
    create(entity: T | any, query: Object = {}): Observable<T> {
        let params: HttpParams = new HttpParams();
        for (const key in query) {
            if (query.hasOwnProperty(key)) {
                params = params.set(key, query[key]);
            }
        }

        return this.http
                   .post<T>(this.url, entity, {params: params})
                   .map((row: any) => {
                       let instance = entity;
                       if (!(entity instanceof this.type)) {
                           instance = new this.type();
                       }
                       instance.hydrate(row);
                       return instance;
                   });
    }

    /**
     * Update an entity by its primary key value.
     *
     * @param {RestEntity | any} entity Entity to update.
     * @param {Object}           query Some query params.
     *
     * @returns {Observable<RestEntity>}
     */
    update(entity: T | any, query: Object = {}): Observable<T> {
        let params: HttpParams = new HttpParams();
        for (const key in query) {
            if (query.hasOwnProperty(key)) {
                params = params.set(key, query[key]);
            }
        }

        const url = this.url + '/' + entity.id;
        return this.http
                   .put<T>(url, entity, {params: params})
                   .map((row: any) => {
                       let instance = entity;
                       if (!(entity instanceof this.type)) {
                           instance = new this.type();
                       }
                       instance.hydrate(row);
                       return instance;
                   });
    }

    /**
     * Remove an entity.
     *
     * @param {RestEntity | number} entity Entity to remove.
     *
     * @returns {Observable}
     */
    remove(entity: T | number): Observable<Object> {
        let url = this.url + '/';
        if (entity instanceof this.type) {
            url += entity.id;
        } else {
            url += entity;
        }

        return this.http.delete(url);
    }

    /**
     * Save an entity (create or update).
     *
     * @param {RestEntity | any} entity Entity to save.
     * @param {Object}           query Some query params.
     *
     * @returns {Observable<RestEntity>}
     */
    save(entity: T | any, query: Object = {}): Observable<T> {
        if (entity.id) {
            return this.update(entity, query);
        } else {
            return this.create(entity, query);
        }
    }
}
