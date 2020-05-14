import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { ServisService } from '../servis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Ocena } from '../ocena';
import { Korisnik } from '../korisnik';

@Component({
  selector: 'app-prikaz-detalja-film',
  templateUrl: './prikaz-detalja-film.component.html',
  styleUrls: ['./prikaz-detalja-film.component.css']
})
export class PrikazDetaljaFilmComponent implements OnInit {

  item:Film = {}as Film;
  izmeniForm;

  najpozitivniji:Ocena = {}as Ocena;
  najnegativniji:Ocena = {}as Ocena;
  ucitaj=false;
  pKorisnik:Korisnik = {}as Korisnik;
  nKorisnik:Korisnik = {}as Korisnik;

  constructor(private service:ServisService, 
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder) {
        
    }

  ngOnInit(): void {
    this.najpozitivniji.ocena=1;
    this.najnegativniji.ocena=5;
    this.dobaviSve();
  }

  dobaviSve(){
    this.service.detaljiFilm(this.route.snapshot.params["id"]).subscribe(data =>{
      this.item = data;

      this.izmeniForm = this.formBuilder.group({
        id:this.item.id,
        naziv:this.item.naziv,
        reziser:this.item.reziser,
        ocena:this.item.ocena,
      }as Film);
    });

    this.service.komentariZaFilm(this.route.snapshot.params["id"]).subscribe(data => {
      for(let i=0; i<data.length; i++){
        if(data[i].ocena>this.najpozitivniji.ocena){
          this.najpozitivniji=data[i];
        }
        if(data[i].ocena<this.najnegativniji.ocena){
          this.najnegativniji=data[i];
        }
      }
      if(this.najpozitivniji.korisnikId != undefined){
        this.service.detaljiKorisnik(this.najpozitivniji.korisnikId).subscribe(data => this.pKorisnik = data);
      }
      if(this.najnegativniji.korisnikId != undefined){
        this.service.detaljiKorisnik(this.najnegativniji.korisnikId).subscribe(data => this.nKorisnik = data);
      }
    });

  }

  izmeni(item){
    this.service.izmenaFilm(item).subscribe(data => this.item = data);
  }

}
