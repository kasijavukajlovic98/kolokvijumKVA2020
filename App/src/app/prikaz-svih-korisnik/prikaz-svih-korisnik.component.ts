import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../korisnik';
import { ServisService } from '../servis.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prikaz-svih-korisnik',
  templateUrl: './prikaz-svih-korisnik.component.html',
  styleUrls: ['./prikaz-svih-korisnik.component.css']
})
export class PrikazSvihKorisnikComponent implements OnInit {

  items:Korisnik[] = [];
  dodajForm;

  constructor(private service:ServisService, 
    private router:Router,
    private formBuilder:FormBuilder) {

        this.dodajForm = this.formBuilder.group({
          id: 0,
          korisnickoIme: "",
          email: "",
          lozinka: ""
        }as Korisnik);
    }

  ngOnInit(): void {
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.dobaviKorisnik().subscribe(data => this.items = data);
  }

  obrisi(id){
    this.service.obrisiKorisnika(id).subscribe(data => this.dobaviSve());
  }

  dodaj(item){
    this.service.dodajKorisnika(item).subscribe(data => this.dobaviSve());
  }

  detalji(id){
    this.router.navigate(["prikazKorisnika/prikazDetalja", {id:id}]);

  }

}
