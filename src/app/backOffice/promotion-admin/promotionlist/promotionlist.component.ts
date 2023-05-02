import { Component } from '@angular/core';
import {User} from "../../../models/User";
import {Promotion} from "../../../models/Promotion";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {PromotionService} from "../../../services/promotion.service";

@Component({
  selector: 'app-promotionlist',
  templateUrl: './promotionlist.component.html',
  styleUrls: ['./promotionlist.component.css']
})
export class PromotionlistComponent {
  promotions: Promotion[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;

  constructor(private promotionservice: PromotionService,private router: Router) { }
  ngOnInit(): void {
    console.log("ngOnInit: getPromotions()");
    this.getPromotions();
  }
  getPromotions() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    console.log("getPromotions: spec =", spec, "sort =", sort);
    this.promotionservice.getAllPromotions().subscribe(response => {
      console.log("getPromotions: response =", response);
      this.promotions = response;
    });
  }

  onSpecChange() {
    this.sort = 'id,asc'; // réinitialisation du tri par défaut
    this.pageNumber = 0; // réinitialisation du numéro de page
    this.getPromotions();
  }
  onSortChange(sort: string) {
    this.sort = sort;
    this.getPromotions();
  }
  onPageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getPromotions();
  }
  get pages(): number[] {
    const pageCount = Math.ceil(this.promotions.length / this.pageSize);
    return Array.from(Array(pageCount), (_, i) => i);
  }

  get itemsToDisplay(): any[] {
    const startIndex = this.pageNumber * this.pageSize;
    return this.promotions.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange2(page: number): void {
    this.pageNumber = page;
  }

}
