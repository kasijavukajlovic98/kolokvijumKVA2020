import { Component, OnInit } from '@angular/core';
import { Ocena } from '../ocena';
import { Film } from '../film';
import { Korisnik } from '../korisnik';
import { ServisService } from '../servis.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prikaz-svih-ocena',
  templateUrl: './prikaz-svih-ocena.component.html',
  styleUrls: ['./prikaz-svih-ocena.component.css']
})
export class PrikazSvihOcenaComponent implements OnInit {

  items:Ocena[] = [];
  items2:Film[] = [];
  items3:Korisnik[] = [];
  dodajForm;

  constructor(private service:ServisService, 
    private router:Router,
    private formBuilder:FormBuilder) {

        this.dodajForm = this.formBuilder.group({
          id: 0,
          filmId: 0,
          korisnikId: 0,
          ocena: 0,
          komentar: ""
        }as Ocena);
    }

  ngOnInit(): void {
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.dobaviOcena().subscribe(data => this.items = data);
    this.service.dobaviFilm().subscribe(data => this.items2 = data);
    this.service.dobaviKorisnik().subscribe(data => this.items3 = data);
  }

  obrisi(id){
    this.service.obrisiOcenu(id).subscribe(data => this.dobaviSve());
  }

  dodaj(item){
    this.service.dodajOcenu(item).subscribe(data => this.dobaviSve());
  }

  detalji(id){
    this.router.navigate(["prikazOcena/prikazDetalja", {id:id}]);

  }

}
