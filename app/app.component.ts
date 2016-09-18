import { Component }        from '@angular/core';
//import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import {Observable}         from 'rxjs/Rx';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { HttpService } from './http.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/template.component.html',
  styleUrls: [ './app/template.component.css'],
  providers: [HttpService]
})
export class AppComponent { 

    constructor (private httpService: HttpService) { }

  URL1='';URL2='';URL3='';URL4='';URL5=''; inDateTime='';
  errorMessage: string;
  statusList : String[];
  rep: String[];
  
  inputURL1( strURL: string) { this.URL1 = strURL }
  inputURL2( strURL: string) { this.URL2 = strURL }
  inputURL3( strURL: string) { this.URL3 = strURL }
  inputURL4( strURL: string) { this.URL4 = strURL }
  inputURL5( strURL: string) { this.URL5 = strURL }
  inputDateTime( inDateTime: string) { this.inDateTime = inDateTime  }

  
  ngOnInit(){
      let timer = Observable.timer(6000,1000);
      timer.subscribe(t => this.showStat() );
  }

  onClickQueue() {

    if (this.URL1) { 
      this.httpService.addURL2quene(this.URL1)
                    .subscribe(
                      replay  => this.rep = replay,
                      error =>  this.errorMessage = <any>error);
                      
      }
      if (this.URL2) { 
      this.httpService.addURL2quene(this.URL2)
                    .subscribe(
                      replay  => this.rep = replay,
                      error =>  this.errorMessage = <any>error);
      }
       if (this.URL3) { 
      this.httpService.addURL2quene(this.URL3)
                    .subscribe(
                      replay  => this.rep = replay,
                      error =>  this.errorMessage = <any>error);
      }
      if (this.URL4) { 
      this.httpService.addURL2quene(this.URL4)
                    .subscribe(
                      replay  => this.rep = replay,
                      error =>  this.errorMessage = <any>error);
      }
       if (this.URL5) { 
      this.httpService.addURL2quene(this.URL5)
                    .subscribe(
                      replay  => this.rep = replay,
                      error =>  this.errorMessage = <any>error);
      }
  }

  onClickStart() {
     this.httpService.startParsing()
                    .subscribe(
                      replay  => console.log(replay),
                      error =>  this.errorMessage = <any>error);
  }

  onClickSchedule() {

    this.httpService.scheduleParsing(this.inDateTime)
                    .subscribe(
                      replay  => console.log(replay),
                      error =>  this.errorMessage = <any>error);
                      
  }

   onClickCancel() { 
     this.httpService.stopParsing()
                    .subscribe(
                      replay  => console.log(replay),
                      error =>  this.errorMessage = <any>error);
  }

   showStat():any {
    this.httpService.getStat()
                     .subscribe(
                       statusList => this.x( statusList ),
                       error =>  this.errorMessage = <any>error);
  }

x=function( value:String[] ) { if ( value.length != 0 ) { this.statusList = value }}

}

