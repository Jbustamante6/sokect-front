import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto: string = '';
  mensajeSuscripcion: Subscription;
  element: HTMLElement;
  mensajes:any[]=[];
  constructor(public chatService: ChatServiceService) { }

  ngOnInit() {
    this.element = document.getElementById('chat-mensajes')
    this.mensajeSuscripcion = this.chatService.getMessages().subscribe(msg => {
      console.log(msg);
      this.mensajes.push(msg);
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);
    });
  }


  enviar(): void{
    if(this.texto.trim().length === 0) {
      return;
    }
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

  ngOnDestroy(){
    this.mensajeSuscripcion.unsubscribe();
  }
}
