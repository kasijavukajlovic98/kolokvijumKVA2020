import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { ServisService } from '../servis.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prikaz-svih-film',
  templateUrl: './prikaz-svih-film.component.html',
  styleUrls: ['./prikaz-svih-film.component.css']
})
export class PrikazSvihFilmComponent implements OnInit {

  items:Film[] = [];
  dodajForm;

  constructor(private service:ServisService, 
    private router:Router,
    private formBuilder:FormBuilder) {

        this.dodajForm = this.formBuilder.group({
          id: 0,
          naziv: "",
          reziser: "",
          ocena: 0
        }as Film);
    }

  ngOnInit(): void {
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.dobaviFilm().subscribe(data => this.items = data);
  }

  obrisi(id){
    this.service.obrisiFilm(id).subscribe(data => this.dobaviSve());
  }

  dodaj(item){
    this.service.dodajFilm(item).subscribe(data => this.dobaviSve());
  }

  detalji(id){
    this.router.navigate(["prikazFilmova/prikazDetalja", {id:id}]);

  }

}
