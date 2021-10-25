import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newserverName : string = '';
  @ViewChild('newServerContent') newServerContent : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(name: HTMLInputElement){
    //console.log(this.newServerContent);
    this.serverCreated.emit({
      serverName: name.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }
  onAddBlueprint(name: HTMLInputElement, content: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: name.value,
      serverContent: content.value
    });
  }

}
