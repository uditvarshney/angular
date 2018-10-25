import {Component, Input} from '@angular/core'

@Component({
    selector:'app-sibiling1',
    template:`<p>sibiling1Text <strong>{{sibilingText}}</strong></p>`
})
export class Sibiling1Component{
    @Input() sibilingText:string;

}