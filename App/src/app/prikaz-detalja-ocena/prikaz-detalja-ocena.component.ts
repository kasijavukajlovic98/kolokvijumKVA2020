import { Component, OnInit } from '@angular/core';
import { Ocena } from '../ocena';
import { Film } from '../film';
import { Korisnik } from '../korisnik';
import { ServisService } from '../servis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prikaz-detalja-ocena',
  templateUrl: './prikaz-detalja-ocena.component.html',
  styleUrls: ['./prikaz-detalja-ocena.component.css']
})
export class PrikazDetaljaOcenaComponent implements OnInit {

  item:Ocena = {}as Ocena;

  items:Film[] = [];
  items2:Korisnik[] = [];
  izmeniForm;

  constructor(private service:ServisService, 
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder) {
        
    }

  ngOnInit(): void {
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.detaljiOcena(this.route.snapshot.params["id"]).subscribe(data =>{
      this.item = data;

      this.izmeniForm = this.formBuilder.group({
        id:this.item.id,
        filmId:this.item.filmId,
        korisnikId:this.item.korisnikId,
        ocena:this.item.ocena,
        komentar:this.item.komentar,
      }as Ocena);
    });
    this.service.dobaviFilm().subscribe(data => this.items = data);
    this.service.dobaviKorisnik().subscribe(data => this.items2 = data);
  }

  izmeni(item){
    this.service.izmenaOcena(item).subscribe(data => this.item = data);
  }


}
