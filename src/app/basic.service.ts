import { Injectable } from '@angular/core';
import{HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
/*URL = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json"*/
  URL="https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json"
  regURL = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json"
  constructor(private _http: HttpClient) { }

  getBrandList():Observable<any> {
    return this._http.get(this.URL);
  }
  getBrandImages() {
    return this._http.get(this.regURL);
  }
  getCurrentData(name:string):Observable<any> {
    //return this._http.get(`${this.URL}/${name}`)
    let params1 = new HttpParams().set('name', name); 
    return this._http.get(this.URL, { params: params1 });
  }
}
