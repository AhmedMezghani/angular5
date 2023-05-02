import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PromotionService} from "../../../services/promotion.service";
import Swal from 'sweetalert2';
import {Produit} from "../../../models/Produit.model";
import {Promotion} from "../../../models/Promotion";


@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.css']
})
  export class CreatePromotionComponent implements OnInit{
produits : Produit[] ;
promotions : Promotion[];
promotionForm : FormGroup;
idStock : number ;
  constructor(private formBuilder: FormBuilder, private router: Router ,     private route: ActivatedRoute , private promotionService : PromotionService  ) {
    this.promotionService.getAllProduit().subscribe((produit) =>{ (this.produits = produit), console.log(this.produits)});
    this.promotionService.getAllPromotions().subscribe((promo) =>{ (this.promotions = promo), console.log(this.promotions)});
  }
  ngOnInit(): void {

    this.idStock = +this.route.snapshot.paramMap.get('id');


    this.promotionForm = this.formBuilder.group({
      idStock: ['', Validators.required],
      pourcentage: ['', Validators.required],
      PromotionDate: ['', Validators.required],
      duree: ['', Validators.required],
      nom: ['', Validators.required] ,
      description: ['', Validators.required]
    });




  }

  onSubmit(){


    if (this.promotionForm.valid) {
        const StockID: any = {
          idStock: this.promotionForm.get('idStock').value
         }
      const newPromotion: any = {
        pourcentage: this.promotionForm.get('pourcentage').value,
        PromotionDate: this.promotionForm.get('PromotionDate').value,
        duree: this.promotionForm.get('duree').value,
        nom: this.promotionForm.get('nom').value,
        description: this.promotionForm.get('description').value

      };




    this.promotionService.addPromotionToStock( newPromotion, StockID.idStock ).subscribe();
    // Réinitialiser le formulaire
    this.promotionForm.reset();
  } else {
  // Afficher les messages d'erreur pour les champs invalides
  Object.keys(this.promotionForm.controls).forEach(key => {
  this.promotionForm.get(key).markAsDirty();
  this.promotionForm.get(key).markAsTouched();
});
}
Swal.fire('Hi', 'commande ajouté avec succés!', 'success').then((result) => {
  if (result.value) {
    this.goToMainPage();      }
});

  }
  deletePromotion(i : Promotion , j : number){
    Swal.fire('Hi', 'Voulez vous vraiment supprimer la promotion!', 'question').then((result) => {
      if (result.value) {
        this.promotionService.removePromotion(i.id).subscribe();
        this.promotions.splice(j, 1);
      }
    });



  }

  goToMainPage(){
    this.router.navigate(['/promtion-admin']);
  }
}
