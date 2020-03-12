import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from '../../services/websockets.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string = '';
  constructor(public wsService: WebsocketsService) { }

  ngOnInit() {
  }

  ingresar(): void {
    if (!this.nombre) {
      return;
    }
    this.wsService.login(this.nombre);
    this.nombre = '';
  }

}
