import { Component, OnInit, ResolvedReflectiveFactory, Input } from '@angular/core';
import { Game } from 'src/app/_models/game';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import * as xml2js from 'xml2js';
import { parseString } from 'xml2js';
import { BggService } from 'src/app/_services/bgg.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Boardgame, Name } from 'src/app/_models/boardgames';


@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {
  game: Game;
  loadedGame: Boardgame;
  savedGame: Game;
  bggUrl = 'http://www.boardgamegeek.com/xmlapi/boardgame/';
  bggGameLink = '';
  titleSelect = false;

  @Input() maxlength: string | number;

  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.game = data.game;
    });
  }

  titleSelected(): boolean {
    return this.titleSelect;
  }

  updateTitle(title: string) {
    this.game.title = title;
  }

  parseBggLink(): string {

    if (this.bggGameLink !== '') {
      const bggId = this.bggGameLink.split('/');

      if (bggId[4] && bggId[4].match(/^[0-9]+$/) !== null) {
        return bggId[4];
      } else {
        this.alertify.warning('Nieprawidłowy link do bgg')
      }
    } else {
      this.alertify.warning('Pole link do bgg jest puste');
      return null;
    }

  }

  convertToJson() {

    const id = this.parseBggLink();
    if (!id) { return; }

    this.httpClient.get(this.bggUrl + id, { responseType: 'text' as 'text' }).subscribe(respons => {
      parseString(respons, { explicitArray: false }, (error, result) => {
        if (error) {
          this.alertify.error('Nie można pobrac informacji o grze');
        } else {
          this.alertify.success('Pobrano informacje o grze');
          this.loadedGame = result.boardgames.boardgame;
          this.savedGame = this.game;

          this.game.maxPlayTime = this.loadedGame.maxplaytime;
          this.game.minPlayTime = this.loadedGame.minplaytime;
          this.game.minPlayers = this.loadedGame.minplayers;
          this.game.maxPlayers = this.loadedGame.maxplayers;
          this.game.minAge = this.loadedGame.age;
          this.game.imageUrl = this.loadedGame.thumbnail;
          this.game.author = this.loadedGame.boardgamedesigner._;

          if (Array.isArray(this.loadedGame.name)) {
            for (const name of this.loadedGame.name) {
              if (name.$.primary) {
                this.game.title = name._;
              }
            }
            this.titleSelect = true;
          } else {
            this.game.title = this.loadedGame.name._;
          }

        }
      });
    });
  }
}
