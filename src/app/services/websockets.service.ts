import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  constructor(private socket: Socket) {
    this.checkStatus();
   }
  public socketStatus = false; 
  public usuario: Usuario;

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

  login(nombre: string) {
    console.log('configurando', nombre);
    this.emit('configurar-usuario', {nombre}, (resp) => {
        console.log(resp);
      });
    // this.socket.emit('configurar-usuario', {nombre}, (resp) => {
    //   console.log(resp);
    // });
  }
}

