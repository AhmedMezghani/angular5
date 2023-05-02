import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home-vendor-user',
  templateUrl: './home-vendor-user.component.html',
  styleUrls: ['./home-vendor-user.component.css']
})
export class HomeVendorUserComponent {
  constructor(private userService: UserService,private router: Router) {
  }
  logout() {

  }
}
