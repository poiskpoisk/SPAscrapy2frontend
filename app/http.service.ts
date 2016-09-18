import { Injectable }     from '@angular/core';
import { Http, Response, Headers,  RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HttpService {
  constructor (private http: Http) {}

  private statusUrl = 'http://127.0.0.1:8000/stat/';  // URL to web API
  private queneURL  = 'http://127.0.0.1:8000/quene/';
  private startURL  = 'http://127.0.0.1:8000/start/';
  private stopURL  = 'http://127.0.0.1:8000/stop/';
  private beginURL  = 'http://127.0.0.1:8000/schedule/';
  
   addURL2quene (parsingURL: string): Observable<String[]> {
    let body = JSON.stringify({ parsingURL });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.queneURL, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
   }

   startParsing (): Observable<String[]> {
    let body = 'Parsing start';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.startURL, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
   }

      scheduleParsing ( strDataTime: string): Observable<String[]> {
    let body = JSON.stringify({ strDataTime });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.beginURL, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
   }

 stopParsing (): Observable<String[]> {
    let body = 'start/stop parsing';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.stopURL, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
   }

  getStat (): Observable<String[]> {
    // Tried adding headers with no luck
        const headers = new Headers();
        //headers.append('Access-Control-Allow-Headers', 'Content-Type');
        //headers.append('Access-Control-Allow-Methods', 'GET');
        //headers.append('Origin', 'http://localhost:3000' );
        //console.log(headers)

    return this.http.get(this.statusUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }


  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}



