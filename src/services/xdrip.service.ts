import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlucoseValue } from '../models/api/GlucoseValue';
import { Status } from 'src/models/api/Status';

@Injectable({
  providedIn: 'root'
})
export class XdripService {

  xdripUrl = 'http://10.0.0.52:17580'

  constructor(private http: HttpClient) {
    
   }

  public getGlucoseValues(count:number):Observable<GlucoseValue[]>{
    return this.http.get<GlucoseValue[]>(this.xdripUrl + '/sgv.json?count=' + count.toString());
    //return this.http.get<GlucoseValue[]>("../assets/GLUCOSE_VALUES.json");
  }

  public getStatus():Observable<Status>{
    return this.http.get<Status>(this.xdripUrl + '/status.json');
    //return this.http.get<Status>("../assets/STATUS.json");
  }


}
