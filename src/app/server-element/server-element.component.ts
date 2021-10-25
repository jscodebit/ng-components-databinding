import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None //EMulated, None, ShadowDom
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input() serverElement: Server;
  @Input() name: string;
  @ViewChild('heading') header : ElementRef<HTMLDivElement>;
  @ContentChild('paragraph') para: ElementRef<HTMLParagraphElement>;

  constructor() {
    //console.log("Server element constructor called")
  }

  ngOnInit(): void {
    //console.log("Server element onInit called")
    //console.log("ViewInit update: "+ this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log("server element onChanges");
    // console.log(changes);
  }

  ngDoCheck(){
    // console.log("server element DoCheck");
  }

  ngAfterContentInit(){
    // console.log("server element AfterContentInit");
    // console.log("ContentInit update: "+ this.para.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    // console.log("server element AfterContentChecked");
    // console.log("ContentChecked : " +this.para.nativeElement.textContent);
  }

  ngAfterViewInit(){
    // console.log("server element ngAfterViewInit");
    // console.log("ViewInit update: "+ this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    //console.log("server element ngAfterViewChecked");
    //console.log("ContentChecked : " +this.paragraph.nativeElement.textContent);
  }

  ngOnDestroy(){
    //console.log("server element ngOnDestroy");
  }

}
