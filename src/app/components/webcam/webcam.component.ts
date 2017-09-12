import { Component, OnInit, ViewChild } from '@angular/core';

declare var Webcam: any;

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  cameraImg;
  @ViewChild('camera') cameraContainer;
  constructor() { }

  ngOnInit() {
    Webcam.set("swfURL", "/assets/webcam.swf");
    Webcam.attach(this.cameraContainer.nativeElement);
  }

  takePicture(){
    Webcam.snap( (data_uri) => {
				this.cameraImg = data_uri;
		});
  }

}
