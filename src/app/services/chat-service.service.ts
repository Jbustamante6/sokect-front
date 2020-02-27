import { Injectable } from '@angular/core';
import { WebsocketsService } from './websockets.service';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(
    public wsService: WebsocketsService
  ) { }


  sendMessage(mensaje: string){
    const payload ={
      de: 'Fernando',
      cuerpo: mensaje
    };
    this.wsService.emit('mensaje', payload);
  }
}
