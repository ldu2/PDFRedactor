# Javascript PDF Redactor

This project was done by three tools. <br/>
	[dropzone](https://github.com/enyo/dropzone) to uploade the PDF file.<br/>
	[PDF.js](https://github.com/mozilla/pdf.js/) to process the PDF file.<br/>
	[jsPDF](https://github.com/MrRio/jsPDF) to download the redacted PDF file.<br/>

## Usage
1. You can simply use this tool to redact your PDF file. [Demo](https://ldu2.github.io/PDFRedactor/)<br/>
2. You can use this page as part of your own app to redact pdf file and send to your server.<br/>
3. You can learn something from the tool,i.e., manipulating PDF file with canvas.<br/>
### Note:
**Once you move on to the next page. The redaction is set on the page.**<br/>
**The larger the resolution of the screen, the better quality of the file maintains.**<br/>
The result is almost the same as the [Angular7PDF_Redactor](https://github.com/ldu2/PDFRedactor/tree/master/Angular7PDF_Redactor)<br/>
For the javascript version of pdf file redactor. When upload a file, **you are not sending it anywhere**. The browser is only using it as input to edit it. **The files only stays in your computer.**<br/>
If you wish you send it to your server, simply clone the repo and modify the code. It's as simply as change the download button to send a POST request.
## Documentation
So far, it's not well documented but it does what it intended to do.
The code will be better documented in the future.
