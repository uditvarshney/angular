import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4',
  templateUrl: './scenario4.component.html',
  styleUrls: ['./scenario4.component.css']
})
export class Scenario4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() sendData: EventEmitter<string> =new EventEmitter();

  onKeyUp($event){
    let data= $event.target.value;
    this.sendData.emit(data);
  }
}
