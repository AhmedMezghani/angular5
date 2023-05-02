import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-home-buyer-user',
  templateUrl: './home-buyer-user.component.html',
  styleUrls: ['./home-buyer-user.component.css']
})
export class HomeBuyerUserComponent  {
  userId!: string;

  constructor(private route: ActivatedRoute,private router: Router) {
  }


  logout() {
    console.log("ok");
    this.router.navigate(['user/authenticate']);
  }

  getUserId() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('idUser');

    });
    return this.userId;
  }
}
