import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Catalogue} from "../models/Catalogue";
import {Promotion} from "../models/Promotion";

@Injectable({
  providedIn: 'root'
})
export class CataloqueService {

  private apiUrl = 'http://localhost:8075/';

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }


  public getAllCatalogue() : Observable<Catalogue[]>{
    return this.http.get<Catalogue[]>(this.apiUrl + "afficherCatalogueAllProduct");
  }

  public retriveCatalogueBoutiquePromotion(IdBoutique : number) : Observable<Catalogue[]>{
    return this.http.get<Catalogue[]>(this.apiUrl + "afficherCatalogueBoutiquePromotion/"+IdBoutique);
  }

  public retriveCatalogueBoutiqueSansPromotion(IdBoutique : number) : Observable<Catalogue[]>{
    return this.http.get<Catalogue[]>(this.apiUrl + "afficherCatalogueBoutiqueSansPromotion/"+IdBoutique );
  }
  public afficherCataloguePromotion() : Observable<Catalogue[]>{
    return this.http.get<Catalogue[]>(this.apiUrl + "afficherCataloguePromotion");
  }

  public  removeCatalogue(catalogue: Catalogue | number): Observable<Catalogue> {
    const id = typeof catalogue === 'number' ? Catalogue : catalogue.id ;
    const url = this.apiUrl + '/DeleteCatalogue/' + id;
    return this.http.delete<Catalogue>(url);
  }

}
