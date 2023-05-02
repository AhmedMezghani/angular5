import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-send-mail-admin',
  templateUrl: './send-mail-admin.component.html',
  styleUrls: ['./send-mail-admin.component.css']
})
export class SendMailAdminComponent {
  to!: string;
  subject!: string;
  body!: string;

  constructor(private emailService: UserService) { }

  sendMail() {
    this.emailService.sendMail(this.to, this.subject, this.body).subscribe(
      () => alert('E-mail sent successfully'),
      error => console.error(error)
    );
  }

}
