import { Component, OnInit, ViewChild } from '@angular/core';

declare var Webcam: any;

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  cameraImg;
  error=false;
  errorMessage;
  @ViewChild('camera') cameraContainer;
  constructor() { }

  ngOnInit() {
    Webcam.set("swfURL", "/assets/webcam.swf");
    Webcam.attach(this.cameraContainer.nativeElement);
    Webcam.on( 'error', (err) => {
      this.error = true;
      this.errorMessage = err;
	  });
  }

  takePicture(){
    Webcam.snap( (data_uri) => {
				this.cameraImg = data_uri;
		});
  }

}
