import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  constructor(private socket: Socket, private router: Router) {
    this.cargarStorage();
    this.checkStatus();
   }
  public socketStatus = false;
  public usuario: Usuario;

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado');
      this.socketStatus = true;
      this.cargarStorage();
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

    return new Promise( (resolve, reject) => {
      this.emit('configurar-usuario', {nombre}, (resp) => {
          this.usuario  = new Usuario(nombre);
          this.guardarStorage();
          resolve();
      });
    });
  }

  logout() {
    this.usuario = null;
    localStorage.removeItem('usuario');
    const payload = {
      nombre: 'sin-nombre'
    }
    this.emit('configurar-usuario', payload, () => {});
    this.router.navigateByUrl('');
  }

  guardarStorage() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
  }

  cargarStorage() {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.login(this.usuario.nombre);
    }
  }

  getUsuario() {
    return this.usuario;
  }
}

