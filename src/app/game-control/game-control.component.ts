import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: []
})

export class GameControlComponent {
  @Input() count : number = 0;
  timer = null;
  @Output() gameStart = new EventEmitter<{count: number}>();

  onGameStart(updateCount: HTMLParagraphElement){
    this.timer = setInterval(()=> {
      this.count++;
    }, 1000);
    this.gameStart.emit({count: this.count});
  }
  onGameStop(){
    console.log(typeof clearInterval(this.timer));
    clearInterval(this.timer);
  }
}
