import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  texto: string = '';
  constructor(public chatService: ChatServiceService) { }

  ngOnInit() {
  }


  enviar():void{
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }
}
