import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Promotion} from "../models/Promotion";
import {Produit} from "../models/Produit.model";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private apiUrl = 'http://localhost:8075/';

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  public addPromotionToStock(promotion: Promotion, stockId: any): Observable<Promotion>{
    return this.http.post<Promotion>(this.apiUrl + "api/promotions/addPromotionToStock/" + stockId , promotion , this.httpOptions);
  }

  public getAllProduit() : Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiUrl + "Produit/afficherProduits");

  }

  public getAllPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this.apiUrl + "api/promotions/AllPromotion");

  }

  public  removePromotion(promotion: Promotion | number): Observable<Promotion> {
    const id = typeof promotion === 'number' ? Promotion : promotion.id ;
    const url = this.apiUrl + 'api/promotions/removePromotion/' + id;
    return this.http.delete<Promotion>(url);
  }




}
