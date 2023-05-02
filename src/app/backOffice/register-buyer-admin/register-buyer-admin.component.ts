import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-buyer-admin.component.html',
  styleUrls: ['./register-buyer-admin.component.css']
})
export class RegisterBuyerAdminComponent implements OnInit{
  registerRequest: any = {};
  successMessage: string = '';
  roles: string[] = ['ADMIN', 'MODERATOR', 'BUYER','VENDOR','PROVIDER','LIVREUR'];

  constructor(private userService: UserService) { }

  register(F:NgForm){
    this.registerRequest.firstname=F.controls['firstname'].value;
    this.registerRequest.lastname=F.controls['lastname'].value;
    this.registerRequest.password=F.controls['password'].value;
    this.registerRequest.email=F.controls['email'].value;
    this.userService.register(this.registerRequest).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Le compte a été créé avec succès !';
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
