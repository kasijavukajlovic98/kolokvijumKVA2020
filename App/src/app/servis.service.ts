import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from './film';
import { Ocena } from './ocena';
import { Korisnik } from './korisnik';

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  adresa:string = "http://localhost:3000/";

  constructor(private http:HttpClient) { }


  dobaviFilm():Observable<Film[]>{
    return this.http.get<Film[]>(this.adresa + "film");
  }

  dobaviOcena():Observable<Ocena[]>{
    return this.http.get<Ocena[]>(this.adresa + "ocena");
  }

  dobaviKorisnik():Observable<Korisnik[]>{
    return this.http.get<Korisnik[]>(this.adresa + "korisnik");
  }


  obrisiFilm(id):Observable<Film>{
    return this.http.delete<Film>(this.adresa + "film/" + id);
  }
  obrisiOcenu(id):Observable<Ocena>{
    return this.http.delete<Ocena>(this.adresa + "ocena/" + id);
  }
  obrisiKorisnika(id):Observable<Korisnik>{
    return this.http.delete<Korisnik>(this.adresa + "korisnik/" + id);
  }


  dodajFilm(item):Observable<Film>{
    return this.http.post<Film>(this.adresa + "film", item);
  }
  dodajOcenu(item):Observable<Ocena>{
    return this.http.post<Ocena>(this.adresa + "ocena", item);
  }
  dodajKorisnika(item):Observable<Korisnik>{
    return this.http.post<Korisnik>(this.adresa + "korisnik", item);
  }
  

  detaljiFilm(id):Observable<Film>{
    return this.http.get<Film>(this.adresa + "film/" + id);
  }
  detaljiOcena(id):Observable<Ocena>{
    return this.http.get<Ocena>(this.adresa + "ocena/" + id);
  }
  detaljiKorisnik(id):Observable<Korisnik>{
    return this.http.get<Korisnik>(this.adresa + "korisnik/" + id);
  }


  izmenaFilm(item):Observable<Film>{
    return this.http.put<Film>(this.adresa + "film/" + item.id, item);
  }
  izmenaOcena(item):Observable<Ocena>{
    return this.http.put<Ocena>(this.adresa + "ocena/" + item.id, item);
  }
  izmenaKorisnik(item):Observable<Korisnik>{
    return this.http.put<Korisnik>(this.adresa + "korisnik/" + item.id, item);
  }

  komentariZaFilm(id):Observable<Ocena[]>{
    return this.http.get<Ocena[]>(this.adresa + "ocena?filmId=" + id);
  }

}
