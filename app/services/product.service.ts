import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private apiUrl = "http://5872f1532f4460120032e64c.mockapi.io/api/products/";

    constructor(private _http: Http) {

    }
    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) => response.json())
    }
    Search(keyword: string): Observable<any[]> {
        return this._http.get(this.apiUrl + "?search=" + keyword).map((response: Response) => response.json())
    }
    GetSingle(id: number): Observable<any> {
        return this._http.get(this.apiUrl + id).map((response: Response) => response.json())
    }

    Update(id: number, data: any): Observable<any> {
        return this._http.put(this.apiUrl + id, data).map((response: Response) => response.json())
    }

    Delete(id: number): Observable<any> {
        return this._http.delete(this.apiUrl + id).map((response: Response) => response.json())
    }

}