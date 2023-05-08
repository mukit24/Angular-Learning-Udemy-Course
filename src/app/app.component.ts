import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-course tutorial';
  
  onCustomClick(eventData: string): void {
    // Handle the custom event
    console.log('Custom event clicked with data:', eventData);
  }
}
