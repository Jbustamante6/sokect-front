import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  constructor(private socket: Socket) {
    this.checkStatus();
   }
  public socketStatus = false; 

  checkStatus(){
    this.socket.on('connect', () => {
      console.log('Conectado');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('desconectado');
      this.socketStatus = false;
    });
  }

  emit(evento: string, payload?: any, callback?: Function) {
    this.socket.emit(evento, payload, callback);
  }

  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }
}

