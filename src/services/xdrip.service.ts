import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GlucoseValue } from '../models/SugarValue';
import { Status } from 'src/models/Status';

@Injectable({
  providedIn: 'root'
})
export class XdripService {

  xdripUrl = 'http://10.0.0.52:17580'

  constructor(private http: HttpClient) { }

  public getGlucoseValues(count:number):Observable<GlucoseValue[]>{
    return this.http.get<GlucoseValue[]>(this.xdripUrl + '/sgv.json?count=' + count.toString());
  }

  public getStatus():Observable<Status>{
    return this.http.get<Status>(this.xdripUrl + '/status.json');
  }

}
