import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-databinding';

  serverElements: Server[] = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      name: serverData.serverName,
      type: 'server',
      content: serverData.serverContent});
  }
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      name: blueprintData.serverName,
      type: 'blueprint',
      content: blueprintData.serverContent});
  }

}
