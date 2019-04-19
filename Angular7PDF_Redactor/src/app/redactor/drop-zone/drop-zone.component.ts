import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';


@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.css']
})
export class DropZoneComponent implements OnInit {
  @Output() fileEvent = new EventEmitter<string>();
  @Output() removeFileEvent = new EventEmitter<string>();
  public message: string;
  public errFlag: boolean;
  public DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface  = {
      url: 'http://httpbin.org/post',
      addRemoveLinks: true,
      acceptedFiles: '.pdf',
      maxFiles: 1,
      errorReset: 1
  };
  ngOnInit(): void {
    this.message = 'Only ONE PDF File is Allowed';
    this.errFlag = false;
  }
  fileUploadSuccess($e) {
    // console.log($e);
    this.message = 'Only ONE PDF File is Allowed';
    if (this.errFlag) {
      this.removeFileEvent.emit($e);
    }
    this.errFlag = false;
    this.fileEvent.emit(URL.createObjectURL($e[0]));
  }
  fileUploadError($e) {
    console.log($e);
    if ('application/pdf' !== $e[0].type) {
      alert('Error : Not a PDF');
      this.message = 'Please upload a PDF file.';
    } else {
      this.message = 'Please save the current file. Next upload will replace the current file.';
    }
    this.errFlag = true;
  }
  removeFile($e) {
    if (!this.errFlag) {
      this.removeFileEvent.emit($e);
    }
  }
}
