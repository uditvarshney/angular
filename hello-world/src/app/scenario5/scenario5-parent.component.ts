import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'scenario5-parent',
    template:
    `
    <div (keyup)="onKeyUpFromChild()">
        <app-scenario5 (sendToParent)="getDataFromParent($event)">
        </app-scenario5>
    </div>`
})
export class Scenario5ParentComponent{
    data:string;
    @Output() sendToGrandParent: EventEmitter<string> = new EventEmitter();
    getDataFromParent(dataFromChild){
        this.data=dataFromChild;
        console.log("parent"+this.data);
    }
    onKeyUpFromChild(){
        //console.log("data sent from parent");
        this.sendToGrandParent.emit(this.data);
    }
}