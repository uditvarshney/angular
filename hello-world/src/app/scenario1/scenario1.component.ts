import { Component } from '@angular/core';

@Component({
  selector: 'app-scenario1',
  templateUrl: './scenario1.component.html',
  styleUrls: ['./scenario1.component.css']
})
export class Scenario1Component{

  constructor() { }

  onKeyUp($event){
    console.log($event.target.value);
  }

}
