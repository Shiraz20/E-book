import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ListBookComponent } from './list-book/list-book.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import {ComponentsModule} from "./components/components.module";
import { AjouterBookComponent } from './ajouter-book/ajouter-book.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpadateBookComponent } from './upadate-book/upadate-book.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BooksComponent,
    ContactComponent,
    LoginComponent,
    ListBookComponent,
    ReclamationListComponent,
    AjouterBookComponent,
    UpadateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
