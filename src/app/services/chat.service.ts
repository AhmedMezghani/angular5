import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {AuthenticationRequest, AuthenticationResponse, User} from "../models/User";
import {CookieService} from "ngx-cookie-service";
import {Observable, tap} from "rxjs";
import {ChatBox} from "../models/ChatBox";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private URL = 'http://localhost:8075/authentication';
  private URL1 = 'http://localhost:8075/user';
  private URL2 = 'http://localhost:8075/chat';
  private URL3= 'http://localhost:8075/newsletter'

  constructor(private http: HttpClient,private cookieService: CookieService) { }

  register(registerRequest: any) {
    return this.http.post<User>(`${this.URL}/register`, registerRequest);
  }
  sendCode(email: string) {
    return this.http.post(`${this.URL}/send-code`, email);
  }
  verifyCode(email: string, code: number) {
    const body = {
      email: email,
      code: code
    };
    return this.http.post(`${this.URL}/verify-code`, body);
  }
  //sans cookie
  authenticate(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.URL}/authenticate`, request);
  }


  uploadLogo(file: File, email: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email);
    return this.http.post(`${this.URL1}/uploadLogo`, formData);
  }
  getUserLogo(email: string): Observable<any> {
    const url = `${this.URL1}/${email}/logo`;
    return this.http.get(url, { responseType: 'blob' });
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL1);
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.URL1}/show-user/${id}`;
    return this.http.get<User>(url);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.URL1}/remove-user/${id}`, { responseType: 'text' });
  }

  banUser(email: string): Observable<any> {
    return this.http.post<any>(`${this.URL2}/${email}/ban`, {});
  }

  unbanUser(email: string): Observable<any> {
    return this.http.post<any>(`${this.URL2}/${email}/unban`, {});
  }

  getBannedUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL2}/show-all-users`);
  }
  forgotPassword(email: string) {
    return this.http.post(`${this.URL}/forgot-password`,{email}, { responseType: 'text' });
  }
  subscribe(email: string): Observable<string> {
    const url = `${this.URL3}/subscribe/${email}`;
    return this.http.post<string>(url, {});
  }

  unsubscribe(email: string): Observable<string> {
    const url = `${this.URL3}/unsubscribe/${email}`;
    return this.http.put<string>(url, {});
  }

  getUsers(spec: string, sort: string): Observable<User[]> {
    const url = `http://localhost:8075/user/recherche-avancee?spec=${spec}&sort=${sort}`;
    return this.http.get<User[]>(url);
  }

  sendMail(to: string, subject: string, body: string) {
    const formData = new FormData();
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('body', body);
    return this.http.post('http://localhost:8075/mail/send-from-cocomarket', formData);
  }


  getUser(userId: number) {
    return this.http.get(`${this.URL1}/show-user/${userId}`);
  }

  getChatBoxs(userId: number) {
    return this.http.get(`${this.URL1}/show-user/${userId}`);
  }

  searchUser(entry: string,id:number) {
    return this.http.get(`${this.URL1}/usersByName/${entry}/${id}`);
  }

  getChats(chatBox: ChatBox) {
    console.log('chatBox:', chatBox);

    return this.http.get(`${this.URL1}/getChats/${chatBox.id}`);
  }

  saveMessage(message: string, userId: number, chatBoxClicked: ChatBox) {
    return this.http.post('http://localhost:8075/chat.sendMessage/'+message+'/'+userId, chatBoxClicked);
  }
}
