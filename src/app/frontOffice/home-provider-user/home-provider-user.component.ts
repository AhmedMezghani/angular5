import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-provider-user',
  templateUrl: './home-provider-user.component.html',
  styleUrls: ['./home-provider-user.component.css']
})
export class HomeProviderUserComponent {
  constructor(private router: Router) {
  }
  logout() {
    console.log("ok");
    this.router.navigate(['user/authenticate']);
  }
}
