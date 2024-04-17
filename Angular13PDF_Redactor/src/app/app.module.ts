import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropZoneComponent } from './redactor/drop-zone/drop-zone.component';
import { RedactorComponent } from './redactor/redactor.component';
import {DropzoneModule} from 'ngx-dropzone-wrapper';

@NgModule({
  declarations: [
    AppComponent,
    DropZoneComponent,
    RedactorComponent
  ],
  imports: [
    BrowserModule,
    DropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
