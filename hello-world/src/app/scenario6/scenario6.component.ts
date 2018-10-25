import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario6',
  templateUrl: './scenario6.component.html',
  styleUrls: ['./scenario6.component.css']
})
export class Scenario6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inputText:string;
  onKeyUp($event){
    this.inputText= $event.target.value;
  }

}
