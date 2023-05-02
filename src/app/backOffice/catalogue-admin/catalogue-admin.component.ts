import { Component } from '@angular/core';
import {Produit} from "../../models/Produit.model";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PromotionService} from "../../services/promotion.service";
import {Catalogue} from "../../models/Catalogue";
import {CataloqueService} from "../../services/Catalogue.service";

@Component({
  selector: 'app-catalogue-admin',
  templateUrl: './catalogue-admin.component.html',
  styleUrls: ['./catalogue-admin.component.css']
})
export class CatalogueAdminComponent {
  catalogues : Catalogue[];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;

  constructor(private formBuilder: FormBuilder, private router: Router ,     private route: ActivatedRoute , private catalogueService : CataloqueService  ) {
    //  this.catalogueService.getAllCatalogue().subscribe((produit) =>{ (this.produits = produit), console.log(this.produits)});
    // this.promotionService.getAllPromotions().subscribe((promo) =>{ (this.promotions = promo), console.log(this.promotions)});
  }
  ngOnInit(): void {
    console.log("ngOnInit: ge()");
    this.getCatalogues();
  }
  getCatalogues() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    console.log("getPromotions: spec =", spec, "sort =", sort);
    this.catalogueService.getAllCatalogue().subscribe(response => {
      console.log("getCatalogues: response =", response);
      this.catalogues = response;
    });
  }



  onUserClick(id: number) {
    this.router.navigate(['/amin/promtion-admin-create', id]);
  }



  onSpecChange() {
    this.sort = 'id,asc'; // réinitialisation du tri par défaut
    this.pageNumber = 0; // réinitialisation du numéro de page
    this.getCatalogues();
  }
  onSortChange(sort: string) {
    this.sort = sort;
    this.getCatalogues() ;
  }

  onPageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getCatalogues();
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.catalogues.length / this.pageSize);
    return Array.from(Array(pageCount), (_, i) => i);
  }

  get itemsToDisplay(): any[] {
    const startIndex = this.pageNumber * this.pageSize;
    return this.catalogues.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange2(page: number): void {
    this.pageNumber = page;
  }


}
