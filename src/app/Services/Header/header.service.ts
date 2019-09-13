import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeaderService {

    constructor(private http: HttpClient) { }

    loadMenu(): Promise<any> {
        return this.http.get('assets/json-data/nav-menu.json')
            .toPromise()
            .then(resp =>
                resp
            )
            .catch((error) => {
                console.log(error);
            });
    }
}
