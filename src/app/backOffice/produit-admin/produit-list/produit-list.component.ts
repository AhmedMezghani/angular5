import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PromotionService} from "../../../services/promotion.service";
import {Promotion} from "../../../models/Promotion";
import Swal from 'sweetalert2';
import {Produit} from "../../../models/Produit.model";
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit{
  produits : Produit[];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;

  constructor(private formBuilder: FormBuilder, private router: Router ,     private route: ActivatedRoute , private promotionService : PromotionService  ) {
    //  this.promotionService.getAllProduit().subscribe((produit) =>{ (this.produits = produit), console.log(this.produits)});
   // this.promotionService.getAllPromotions().subscribe((promo) =>{ (this.promotions = promo), console.log(this.promotions)});
  }
  ngOnInit(): void {
    console.log("ngOnInit: getProduit()");
    this.getProduit();
  }
  getProduit() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    console.log("getPromotions: spec =", spec, "sort =", sort);
    this.promotionService.getAllProduit().subscribe(response => {
      console.log("getPromotions: response =", response);
      this.produits = response;
    });
  }



  onUserClick(id: number) {
    this.router.navigate(['/amin/promtion-admin-create', id]);
  }



  onSpecChange() {
    this.sort = 'id,asc'; // réinitialisation du tri par défaut
    this.pageNumber = 0; // réinitialisation du numéro de page
    this.getProduit();
  }
  onSortChange(sort: string) {
    this.sort = sort;
    this.getProduit() ;
  }

  onPageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getProduit();
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.produits.length / this.pageSize);
    return Array.from(Array(pageCount), (_, i) => i);
  }

  get itemsToDisplay(): any[] {
    const startIndex = this.pageNumber * this.pageSize;
    return this.produits.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange2(page: number): void {
    this.pageNumber = page;
  }


}
