import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5',
  templateUrl: './scenario5.component.html',
  styleUrls: ['./scenario5.component.css']
})
export class Scenario5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() sendToParent: EventEmitter<string> = new EventEmitter();
  onKeyUp($event){
    this.sendToParent.emit($event.target.value);
    //console.log($event.target.value);
  }

}
