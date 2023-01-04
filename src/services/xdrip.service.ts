import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SugarValue } from '../models/SugarValue';

@Injectable({
  providedIn: 'root'
})
export class XdripService {

  xdripUrl = 'http://10.0.0.52:17580'

  constructor(private http: HttpClient) { }

  getGlucoseValues(count:number){
    return this.http.get<SugarValue[]>(this.xdripUrl + '/sgv.json?count=' + count.toString());
  }

}
