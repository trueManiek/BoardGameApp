import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { MessagesComponent } from './messages/messages.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from './_guards/auth.guard';
import { GameDetailComponent } from './games/game-detail/game-detail.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'games', component: GameListComponent},
      { path: 'games/:id', component: GameDetailComponent},
      { path: 'messages', component: MessagesComponent},
      { path: 'users', component: UserListComponent},
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];
