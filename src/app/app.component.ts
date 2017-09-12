import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cameraActivated = false;

  open(){
    this.cameraActivated = true;
  }

  close(){
    this.cameraActivated = false;
  }
}
