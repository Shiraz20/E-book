import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BooksComponent,
    ContactComponent,
    LoginComponent,
    AddBookComponent,
    ReclamationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
