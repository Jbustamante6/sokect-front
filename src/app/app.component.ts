import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from './services/websockets.service';
import { ChatServiceService } from './services/chat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public wsService: WebsocketsService, public chastService: ChatServiceService) {}

  ngOnInit() {
    this.chastService.getMessagesPrivates().subscribe( msg => {
      console.log(msg);
    });
  }
}
