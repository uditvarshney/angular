import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-udit';

  inputText:string;
  onKeyUp($event){
    this.inputText=$event.target.value;
  }

  inputFromGrandChild:string;
  getFromParent(data:string){
    //console.log("main parent"+data);
    this.inputFromGrandChild= data;
  }
}
