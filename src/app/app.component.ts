import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from './services/websockets.service';
import { ChatServiceService } from './services/chat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public wsService: WebsocketsService,
              public chatService: ChatServiceService) {}

  ngOnInit() {
    console.log('Hola mundo');
    this.chatService.sendMessage('Hola mundo');
  }
}
