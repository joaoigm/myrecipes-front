import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class BaseService<T> {
    protected defaultHeaders = {
        headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Accept': 'application/json'
        })
    }
    protected _serviceUrl: string
    protected _httpClient: HttpClient

    constructor(serviceUrl: string, httpClient: HttpClient){
        this._serviceUrl = serviceUrl;
        this._httpClient = httpClient
    }

    public get(): Observable<T[]> {
        return this._httpClient.get<T[]>(this._serviceUrl, this.defaultHeaders)
    }

    public getById(id): Observable<T> {
        return this._httpClient.get<T>(this._serviceUrl+`/${id}`, this.defaultHeaders);
    }

    public create(): Observable<T> {
        return this._httpClient.post<T>(this._serviceUrl, this.defaultHeaders);
    }

    public update(): Observable<T> {
        return this._httpClient.put<T>(this._serviceUrl, this.defaultHeaders);
    }

    public delete(id): Observable<any> {
        return this._httpClient.delete(this._serviceUrl+`/${id}`, this.defaultHeaders);
    }
}