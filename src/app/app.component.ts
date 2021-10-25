import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-databinding';
  startCount: number = 0;

  serverElements: Server[] = [{name: 'Test Server', type: 'blueprint', content: 'Sample'}];

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
  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }

  onChangeDestroy(){
    this.serverElements.splice(0,1);
  }

  getEvenOrOdd(countUpdate: {count: number}){
    this.startCount = countUpdate.count;
  }

}
