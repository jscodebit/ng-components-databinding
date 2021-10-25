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
  oddNumbers : number[] = [];
  evenNumbers : number[] = [];

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
    console.log(countUpdate.count);
    if(countUpdate.count %2 === 0){
      this.evenNumbers.push(countUpdate.count);
    } else {
      this.oddNumbers.push(countUpdate.count);
    }
  }

}
