import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [

  {
    path: "users", component: UsersComponent
  },
  {
    path: "history", component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
