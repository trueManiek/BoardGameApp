import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { MessagesComponent } from './messages/messages.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AuthGuard } from './_guards/auth.guard';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { GameDetailResolver } from './_resolvers/game-detail.resolver';
import { GameListResolver } from './_resolvers/game-list.resolver';
import { GameEditComponent } from './games/game-edit/game-edit.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'games', component: GameListComponent, resolve: {games: GameListResolver}},
      { path: 'games/:id', component: GameDetailComponent, resolve: {game: GameDetailResolver}},
      { path: 'game/edit/:id', component: GameEditComponent, resolve: {game: GameDetailResolver}},
      { path: 'messages', component: MessagesComponent},
      { path: 'users', component: UserListComponent},
      { path: 'users/edit', component: UserEditComponent}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];
