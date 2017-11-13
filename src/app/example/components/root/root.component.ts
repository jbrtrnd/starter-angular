import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { RestService } from 'app/starter/rest/services/rest.service';
import { Bar } from 'app/example/models/bar';
import { RestSearchResponse } from 'app/starter/rest/models/rest-search-response';

/**
 * The root app component.
 *
 * @author Jules Bertrand <jules.brtrnd@gmail.com>
 */
@Component({
  selector: 'example-root',
  templateUrl: 'root.component.html'
})
export class RootComponent implements OnInit {

    constructor(protected http: HttpClient) {}

    ngOnInit() {
        const service = new RestService<Bar>(this.http, 'http://localhost:8000/bar', Bar);
        service.search().subscribe(
            (response: RestSearchResponse<Bar>) => {
                response.rows.map((bar: Bar) => bar.getName())
            }
        );
    }
}
