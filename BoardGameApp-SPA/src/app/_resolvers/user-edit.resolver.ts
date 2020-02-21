import { Injectable } from '@angular/core';
import { Game } from '../_models/game';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { GameService } from '../_services/game.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserEditResolver implements Resolve<User> {

  constructor(private gameService: GameService, private router: Router, private alertify: AlertifyService, private auth: AuthService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.gameService.getGame(this.auth.decodedToken.nameid).pipe(
      catchError(error => {
        this.alertify.error('Problem retriving your data');
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
