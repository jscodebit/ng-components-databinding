import { Component } from "@angular/core";

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styles: [
    `.even {
    color: red;
  }
  .odd {
    color: purple;
  }
  `]
})

export class AppDirectives {
  onlyOdd: boolean = false;
  numbers: number[] = [1,2,3,4];
  evenNumbers: number[] = [2,4, 6];
  oddNumbers: number[] = [1,3,5];
}
