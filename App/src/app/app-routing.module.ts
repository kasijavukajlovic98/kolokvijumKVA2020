import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PrikazSvihFilmComponent } from './prikaz-svih-film/prikaz-svih-film.component';
import { PrikazSvihOcenaComponent } from './prikaz-svih-ocena/prikaz-svih-ocena.component';
import { PrikazSvihKorisnikComponent } from './prikaz-svih-korisnik/prikaz-svih-korisnik.component';
import { PrikazDetaljaFilmComponent } from './prikaz-detalja-film/prikaz-detalja-film.component';
import { PrikazDetaljaOcenaComponent } from './prikaz-detalja-ocena/prikaz-detalja-ocena.component';
import { PrikazDetaljaKorisnikComponent } from './prikaz-detalja-korisnik/prikaz-detalja-korisnik.component';


const routes: Routes = [
  {path:"",component:PocetnaComponent},
  {path:"prikazFilmova",component:PrikazSvihFilmComponent},
  {path:"prikazOcena",component:PrikazSvihOcenaComponent},
  {path:"prikazKorisnika",component:PrikazSvihKorisnikComponent},
  {path:"prikazFilmova/prikazDetalja", component:PrikazDetaljaFilmComponent},
  {path:"prikazOcena/prikazDetalja", component:PrikazDetaljaOcenaComponent},
  {path:"prikazKorisnika/prikazDetalja", component:PrikazDetaljaKorisnikComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
