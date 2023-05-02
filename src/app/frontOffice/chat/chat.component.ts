import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GroupUser, ChatUser, ChatMessage } from './chat.model';
import { groupData, chatData, chatMessagesData } from './data';
// Light Box
import { Lightbox } from 'ngx-lightbox';
import {NavbarUserComponent} from "../navbar-user/navbar-user.component";
import {ActivatedRoute} from "@angular/router";
import {ChatService} from "../../services/chat.service";
import {User} from "../../models/User";
import {ChatBox} from "../../models/ChatBox";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

/**
 * Chat Component
 */
export class ChatComponent implements OnInit {
  @ViewChild('searchInput') searchInput: any;
  chatData!: ChatUser[];
  groupData!: GroupUser[];
  chatMessagesData!: ChatMessage[];
  formData!: FormGroup;
  usermessage!: string;
  isFlag: boolean = false;
  submitted = false;
  isStatus: string = 'online';
  isProfile: string = 'assets/images/users/avatar-2.jpg';
  username: any ;
  @ViewChild('scrollRef') scrollRef:any;
  userId!:number;
  images: { src: string; thumb: string; caption: string }[] = [];
  userConn !: User;
  constructor(private route: ActivatedRoute,public formBuilder: FormBuilder, private lightbox: Lightbox,private chatService:ChatService) {
    for (let i = 1; i <= 24; i++) {
      const src = '../../../../assets/images/small/img-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../../assets/images/small/img-' + i + '-thumb.jpg';
      const item = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this.images.push(item);
    }
  }

  ngOnInit(): void {
    // Chat Data Get Function
    this._fetchData();

    // Validation
    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    // Chat Data Get Function
    this._fetchData();
    this.route.parent.paramMap.subscribe(params => {
      this.userId = parseInt(params.get('idUser'),10);
    });
    this.chatService.getUser(this.userId).subscribe((response: User) => {
      this.userConn = response;
      this.username=response.firstname+" "+response.lastname;
      console.log('User:', this.userConn);
    });
    /*this.chatService.getChatBoxs(this.userId).subscribe((response: User) => {
      this.userConn = response;
      this.username=response.firstname+response.lastname;
      console.log('User:', this.userConn);
    });*/
  }

  ngAfterViewInit() {
    this.scrollRef.SimpleBar.getScrollElement().scrollTop = 100;
  }

  // Chat Data Fetch
  private _fetchData() {
    this.groupData = groupData;
    this.chatData = chatData;
    this.chatMessagesData = chatMessagesData;
  }

  onListScroll() { }

  /**
   * Returns form
   */
   get form() {
    return this.formData.controls;
  }

  /**
   * Save the message in chat
   */
   messageSave() {
    const message = this.formData.get('message')!.value;
    const currentDate = new Date();
    console.log(message);
    if (this.formData.valid && message) {
      this.chatService.saveMessage(message,this.userId,this.chatBoxClicked).subscribe((response: ChatUser) => {

      })
      this.chatMessagesData.push({
        align: 'right',
        name: 'Marcus',
        message,
        time: currentDate.getHours() + ':' + currentDate.getMinutes(),
      });

      this.onListScroll();

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null,
      });
      // Message Push in Chat

    }
    this.submitted = true;
  }

  /***
  * OnClick User Chat show
  */
  chats:ChatUser[];
chatBoxClicked:ChatBox;
  chatUsername(name: string, profile: any, status: string,chatBoxs:ChatBox[]) {
    this.chatBoxClicked=chatBoxs[0];
    console.log('chatBoxs:', chatBoxs[0]);
    this.chatService.getChats(chatBoxs[0]).subscribe((response: ChatUser[]) => {
      this.chats = response;
      console.log('User:', this.chats);
      this.isFlag = true;
      this.username = name;
      this.usermessage = 'Hello';
      this.chatMessagesData = [];
      const currentDate = new Date();
      this.isStatus = status;
      this.isProfile = profile ? profile : 'assets/images/users/user-dummy-img.jpg';
      for (let chat of this.chats) {
        console.log(chat);
        if (this.userId==chat["fromm"]){

            this.chatMessagesData.push({
              align: 'right',
              name: this.username,
              message: chat["content"],
              profile: this.isProfile ? this.isProfile : 'assets/images/users/user-dummy-img.jpg',
              time: chat["date"],
            });
        }
        else {
          this.chatMessagesData.push({
            align: 'left',
            name: this.username,
            message: chat["content"],
            profile: this.isProfile ? this.isProfile : 'assets/images/users/user-dummy-img.jpg',
            time: chat["date"],
          });
        }
      }

      const userChatShow = document.querySelector('.user-chat');
      if (userChatShow != null) {
        userChatShow.classList.add('user-chat-show');
      }
    })
  }

  /**
   * SidebarHide modal
   * @param content modal content
   */
   SidebarHide() {
    const recentActivity = document.querySelector('.user-chat');
      if(recentActivity != null){
        recentActivity.classList.remove('user-chat-show');
      }
  }

  /**
   * Info Model toggle
   */
     onChatInfoClicked() {
      const rightBar = document.getElementById('userProfileCanvasExample');
      if(rightBar != null){
        rightBar.classList.toggle('show');
        rightBar.setAttribute('style',"visibility: visible;");
      }
    }

       /**
   * Hide the sidebar
   */
  public hide() {
    const rightBar = document.getElementById('userProfileCanvasExample');
    if(rightBar != null){
      rightBar.classList.remove('show');
      rightBar.removeAttribute('style');
    }
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.images, index, { });
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }
  usersSearch : User[];
  search(value: string) {
    this.chatService.searchUser(value,this.userId).subscribe((response: User[]) => {
      this.usersSearch = response;
      console.log('User:', this.usersSearch);
    });
  }
}
