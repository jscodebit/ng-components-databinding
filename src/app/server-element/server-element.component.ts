import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None //EMulated, None, ShadowDom
})
export class ServerElementComponent implements OnInit {
  @Input() serverElement: Server;

  constructor() { }

  ngOnInit(): void {
  }

}
