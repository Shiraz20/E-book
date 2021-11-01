import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {BooksComponent} from "./books/books.component";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./login/login.component";
import {ListBookComponent} from "./list-book/list-book.component";
import {ReclamationListComponent} from "./reclamation-list/reclamation-list.component";
import {AjouterBookComponent} from "./ajouter-book/ajouter-book.component";
import {UpadateBookComponent} from "./upadate-book/upadate-book.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'accueil',
    component: AccueilComponent,
  },
  // {
  //   path: '',
  //   redirectTo: 'accueil',
  //   pathMatch: 'full',
  // },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'nosbook',
    component: ListBookComponent,
  },
  {
    path: 'addBook',
    component: AjouterBookComponent,
  },
  {
    path: 'upBook',
    component: UpadateBookComponent,
  },
  {
    path: 'rec-list',
    component: ReclamationListComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
