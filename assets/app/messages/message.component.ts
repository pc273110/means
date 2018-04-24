import { Message } from './message.model';
import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector:'app-message',
    templateUrl:'./message.component.html',
    styles:[`
    .author{
        display:inline-block;
        font-style:italic;
        font-size:12px;
        width:80%;
    }
    .config{
        display:inline-block;
        text-align:right;
        font-size:12px;
        width:19%;
    }
    `]       
})

export class MessageComponent{
    
    @Input('inputMessage') message: Message;
    
     @Output('outMessage') editClicked=new EventEmitter<string>();

    onEdit(){
        this.editClicked.emit('A new value');
    }
}