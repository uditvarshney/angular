import { Component} from '@angular/core';

@Component({
  selector: 'app-scenario2',
  templateUrl: './scenario2.component.html',
  styleUrls: ['./scenario2.component.css']
})
export class Scenario2Component{

  constructor() { }

  inputText:string="";

  onKeyUp($event){
    this.inputText=$event.target.value;
  }
}
