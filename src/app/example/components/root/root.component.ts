import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { RestService } from 'app/starter/rest/models/rest-service';
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

    options: {
        test: boolean,
        obj: {
            name: string
        }
    };

    constructor(protected http: HttpClient) {
        this.getRows = this.getRows.bind(this);
    }

    test() {
        console.log('test');
    }

    getRows(callback) {
        const service = new RestService<Bar>(this.http, 'http://localhost:8000/bar', Bar);
        service.search().subscribe(
            (response: RestSearchResponse<Bar>) => {
                callback(response.rows);
            }
        );
    }

    ngOnInit() {
        this.options = {
            test: true,
            obj: {
                name: 'hiih'
            }
        };

        setTimeout(() => {
            this.options.test = false;
            this.options.obj.name = 'yolo';
            setTimeout(() => {
                this.options.test = false;
                this.options.obj = {
                    name: 'test'
                }
            }, 5000)
        }, 5000)
        /*const service = new RestService<Bar>(this.http, 'http://localhost:8000/bar', Bar);
        service.search().subscribe(
            (response: RestSearchResponse<Bar>) => {
                console.log(response.total);
                response.rows.map((bar: Bar) => bar.getName());
            }
        );

        service.get(1).subscribe(
            (row: Bar) => {
                row.getName();

                row.baz = 'updated';
                service.update(row).subscribe(
                    (row: Bar) => {
                        row.getName();
                    }
                );
            }
        );
        let bar = new Bar();
        bar.baz = 'new3';
        service.create(bar).subscribe(
            (baz) => {
                console.log(bar, baz, bar === baz);
                service.remove(45).subscribe(
                    (test) => {
                        console.log(test);
                    }
                );
            }
        );


        service.create({
            baz: 'obj'
        }).subscribe(
            (baz) => {
                console.log(baz);
                service.remove(45).subscribe(
                    (test) => {
                        console.log(test);
                    }
                );
            }
        )
        */
    }
}
