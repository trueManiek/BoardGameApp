import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';
import { parseString } from 'xml2js';
import { Observable } from 'rxjs';
import { Boardgames } from '../_models/boardgames';


const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
  responsType: 'text' as 'text'
};

@Injectable({
  providedIn: 'root'
})
export class BggService {

  constructor(private _http: HttpClient, private alertify: AlertifyService) { }

  getInfo(): any {
    return this._http.get('http://www.boardgamegeek.com/xmlapi/boardgame/266192', httpOption).pipe(
      map(respons => {
        console.log('go');
        let data;
        parseString(respons, { explicitArray: false }, (error, result) => {
          if (error) {
            this.alertify.error('Nie można pobrac informacji o grze');
            console.log('blech')
          } else {
            this.alertify.success('Pobrano informacje o grze');
            console.log('yupi');
            data = result;
          }
          });
        console.log('finito');
        return data;
      })
    )
  }
}
