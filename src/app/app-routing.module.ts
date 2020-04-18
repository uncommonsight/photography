import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BlackComponent } from './features/black/black.component';
import { WhiteComponent } from './features/white/white.component';
import { LoginComponent } from './features/login/login.component';
import { UserComponent } from './features/login/user/user.component';
import { AuthGuard } from './core/auth.guard';
import { BlogComponent } from './features/blog/blog.component';
import { KanyeComponent } from './features/kanye/kanye.component';
import { UserTwoComponent } from './features/login/user-two/user-two.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'black',
    component: BlackComponent
  },
  {
    path: 'white',
    component: WhiteComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'kanye',
    component: KanyeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'user2',
    component: UserTwoComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
