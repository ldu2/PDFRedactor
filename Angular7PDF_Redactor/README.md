# Angular 7 PDF Redactor

This project was initially generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.<br/>
This project was done by three tools. <br/>
	[ngx-dropzone-wrapper](https://github.com/zefoy/ngx-dropzone-wrapper) to uploade the PDF file.<br/>
	[PDF.js](https://github.com/mozilla/pdf.js/) to process the PDF file.<br/>
	[jsPDF](https://github.com/MrRio/jsPDF) to download the redacted PDF file.<br/>

## Run the redactor

First, run `npm install` to install the libraries. Then, run `npm start` to run the project. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Implementation

### Components
<pre>
App<br/>
|--redactor<br/>
   |--dropzone
</pre>
## Usage
1. You can simply use this tool to redact your PDF file. [Demo](https://ldu2.github.io/PDFRedactor/)<br/>
2. You can use this app as a whole component in your own app to redact pdf file.<br/>
3. You can learn something from the tool,i.e., manipulating PDF file with canvas.<br/>
### Note:
**Once you move on to the next page. The redaction is set on the page.**<br/>
**The larger the resolution of the screen, the better quality of the file maintains.**<br/>
The result is almost the same as the [JS_PDFRedactor](https://github.com/ldu2/PDFRedactor/tree/master/JS_PDFRedactor)<br/>
For the Angular 7 version of pdf file redactor. When upload a file, I am using http://httpbin.org/post as the POST endpoint. No responsibility taken for the safety of the file posted to that end point.<br/>
If you wish you send it to your server, simply clone the repo and modify the code. Simply change the download button to send a POST request.

