import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HeaderService {

  constructor(private http: Http) { }
  
  loadMenu(): Promise<any>  {
    return this.http.get("assets/json-data/nav-menu.json")
        .toPromise()
        .then(resp => 
            resp.json()
        )
        .catch((error) => { 
            console.log(error);
        });
}
}