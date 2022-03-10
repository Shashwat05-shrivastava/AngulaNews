import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {
  
  constructor(private _http:HttpClient) { }

  topheadlinesNews="https://newsapi.org/v2/top-headlines?country=us&apiKey=47da653706bd4e8f9b96e54157f77bcd";
  tcheadlines():Observable<any>{
    return this._http.get(this.topheadlinesNews)
  }
}
