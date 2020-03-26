import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebsocketsService } from '../services/websockets.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardService implements CanActivate {

  constructor(private wsSocket: WebsocketsService, private router: Router ) { }

  canActivate() {
    if (this.wsSocket.getUsuario()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
