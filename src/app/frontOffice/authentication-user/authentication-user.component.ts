import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {AuthenticationRequest, User} from "../../models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication-user',
  templateUrl: './authentication-user.component.html',
  styleUrls: ['./authentication-user.component.css']
})
export class AuthenticationUserComponent {
  email!: string;
  password!: string;
  role!:string;
  constructor(private userService: UserService,private router: Router) { }
  onSubmit() {
    console.log(this.email+"  "+this.password);
    const request: AuthenticationRequest = { email: this.email, password: this.password };
    this.userService.authenticate(request).subscribe(
      response => {
        console.log(response.token);
        // Enregistrer le token JWT dans le localStorage
        localStorage.setItem('token', response.token);
        // Rediriger l'utilisateur en fonction de son rôle
        console.log(response.token.split('.'));
        const user: User = JSON.parse(atob(response.token.split('.')[1])); // décoder le token JWT pour obtenir les données utilisateur
        console.log(user);
        if (user.role === 'BUYER') {
          this.router.navigate(['user/buyer/'+user.id]);
        } else if (user.role === 'ADMIN'){
          this.router.navigate(['admin/'+user.id]);
        }else if (user.role === 'VENDOR'){
          this.router.navigate(['user/vendor/'+user.id]);
        }else if (user.role === 'LIVREUR'){
          this.router.navigate(['user/livreur/'+user.id]);
        }else if (user.role === 'PROVIDER'){
          this.router.navigate(['user/provider/'+user.id]);
        }
      },
      error => {
        console.error(error);
      }
    );
  }
  redirectToForgot() {
    console.log("ok");
    this.router.navigate(['user/forgot-password']);
  }
}
