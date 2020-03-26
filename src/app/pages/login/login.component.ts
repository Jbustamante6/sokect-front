import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from '../../services/websockets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string = '';
  constructor(public wsService: WebsocketsService, private router: Router) { }

  ngOnInit() {
  }

  ingresar(): void {
    if (!this.nombre) {
      return;
    }
    this.wsService.login(this.nombre).then(() => {
      this.router.navigate(['/mensajes']);
    }).catch();
    this.nombre = '';
  }

}
