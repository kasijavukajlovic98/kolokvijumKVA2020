import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../korisnik';
import { ServisService } from '../servis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prikaz-detalja-korisnik',
  templateUrl: './prikaz-detalja-korisnik.component.html',
  styleUrls: ['./prikaz-detalja-korisnik.component.css']
})
export class PrikazDetaljaKorisnikComponent implements OnInit {

  item:Korisnik = {}as Korisnik;
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
    this.service.detaljiKorisnik(this.route.snapshot.params["id"]).subscribe(data =>{
      this.item = data;

      this.izmeniForm = this.formBuilder.group({
        id:this.item.id,
        korisnickoIme:this.item.korisnickoIme,
        email:this.item.email,
        lozinka:this.item.lozinka,
      }as Korisnik);
    });

  }

  izmeni(item){
    this.service.izmenaKorisnik(item).subscribe(data => this.item = data);
  }

}
