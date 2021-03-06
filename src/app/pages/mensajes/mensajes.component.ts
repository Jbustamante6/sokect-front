import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from '../../services/websockets.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(public wsSocket: WebsocketsService) { }

  ngOnInit() {
  }

  salir() {
    this.wsSocket.logout()
  }

}
