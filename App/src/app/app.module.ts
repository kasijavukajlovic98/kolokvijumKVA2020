import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PrikazSvihFilmComponent } from './prikaz-svih-film/prikaz-svih-film.component';
import { PrikazSvihOcenaComponent } from './prikaz-svih-ocena/prikaz-svih-ocena.component';
import { PrikazSvihKorisnikComponent } from './prikaz-svih-korisnik/prikaz-svih-korisnik.component';
import { PrikazDetaljaFilmComponent } from './prikaz-detalja-film/prikaz-detalja-film.component';
import { PrikazDetaljaOcenaComponent } from './prikaz-detalja-ocena/prikaz-detalja-ocena.component';
import { PrikazDetaljaKorisnikComponent } from './prikaz-detalja-korisnik/prikaz-detalja-korisnik.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    PrikazSvihFilmComponent,
    PrikazSvihOcenaComponent,
    PrikazSvihKorisnikComponent,
    PrikazDetaljaFilmComponent,
    PrikazDetaljaOcenaComponent,
    PrikazDetaljaKorisnikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
