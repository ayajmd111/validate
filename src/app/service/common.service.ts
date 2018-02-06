import { Injectable } from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http}  from '@angular/http';

@Injectable()
export class CommonService {

  constructor(private http:Http) { }
  
  postData(url, data):Observable<any>{
    return this.http.post(url, data)
      .map(res => res.json());
  }

}
