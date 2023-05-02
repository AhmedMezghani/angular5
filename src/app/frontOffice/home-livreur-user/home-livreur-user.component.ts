import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-livreur-user',
  templateUrl: './home-livreur-user.component.html',
  styleUrls: ['./home-livreur-user.component.css']
})
export class HomeLivreurUserComponent {
  constructor(private router: Router) {
  }
  logout() {
    console.log("ok");
    this.router.navigate(['user/authenticate']);
  }
}
