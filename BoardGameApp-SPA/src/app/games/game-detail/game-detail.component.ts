import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/_models/game';
import { GameService } from 'src/app/_services/game.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game;

  constructor(private gameService: GameService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.game = data.game;
    });
  }

  // loadGame() {
  //   this.gameService.getGame(this.route.snapshot.params['id']).subscribe((game: Game) => {
  //     this.game = game;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }

}
