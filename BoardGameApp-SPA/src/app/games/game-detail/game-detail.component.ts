import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/_models/game';
import { GameService } from 'src/app/_services/game.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { GameCopy } from 'src/app/_models/gameCopy';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game;
  copies: GameCopy[];

  constructor(private gameService: GameService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.game = data.game;
    });
  }

  getCopies() {
    const copies = [];
    for (const copy of copies) {
      copies.push(copy);
    }
    this.copies = copies;
  }

  orderedCopies() {
    return this.game.gameCopies.sort(copy =>{
      if (copy.barrowed) { return 1; } else { return -1; }
    });
  }

  isValid(copy: GameCopy) {
    return copy.comment !== null;
  }

  isBarrowed(copy: GameCopy) {
    return copy.barrowed;
  }

  // loadGame() {
  //   this.gameService.getGame(this.route.snapshot.params['id']).subscribe((game: Game) => {
  //     this.game = game;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }

}
