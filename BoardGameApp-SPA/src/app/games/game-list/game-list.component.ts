import { Component, OnInit } from '@angular/core';
import { Game } from '../../_models/game';
import { GameService } from '../../_services/game.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService, private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.games = data.games;
    });
  }

  // loadGames() {
  //   this.gameService.getGames().subscribe((games: Game[]) => {
  //     this.games = games;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }

}
