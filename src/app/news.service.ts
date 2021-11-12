import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getTopHeadline(): Observable<any> {
  const api = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=73bde0f9494e46fdb22a8c15552393ce`

    return this.http.get<any>(api);
  }

  getTopHealthNews(): Observable<any> {
    const health_api = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=73bde0f9494e46fdb22a8c15552393ce`;
    return this.http.get<any>(health_api);
  }

  getTopTechnologyNews(): Observable<any> {
    const api=`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=73bde0f9494e46fdb22a8c15552393ce`
    return this.http.get<any>(api);
  }

}
