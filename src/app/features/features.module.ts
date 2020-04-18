import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BlackComponent } from './black/black.component';
import { WhiteComponent } from './white/white.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './login/user/user.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { KanyeComponent } from './kanye/kanye.component';
import { UserTwoComponent } from './login/user-two/user-two.component';
import { EntryListComponent } from './blog/entries/entry-list/entry-list.component';
import { EntryComponent } from './blog/entries/entry/entry.component';



@NgModule({
  declarations: [HomeComponent, BlackComponent, WhiteComponent, LoginComponent, UserComponent, BlogComponent, KanyeComponent, UserTwoComponent, EntryListComponent, EntryComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class FeaturesModule { }
