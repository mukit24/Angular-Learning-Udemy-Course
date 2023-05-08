import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  allowButton = false;
  buttonStatus = 'Button is not clicked';
  serverStatus = false;

  @Input('headline') title: string;
  @Output() customClick: EventEmitter<string> = new EventEmitter<string>();

  constructor () {
    setTimeout(() => {
      this.allowButton = true;
    }, 2000);
  }

  onServerCreated(serverName: HTMLInputElement){
    this.serverStatus = true;
    this.buttonStatus = 'Server Name is '+ serverName.value;
  }

  onClick(): void {
    this.customClick.emit('Custom event data');
  }

  
}
