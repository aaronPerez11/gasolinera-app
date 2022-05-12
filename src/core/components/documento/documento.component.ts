import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');


@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

  urlPdf: string = '../../../assets/check.pdf';
  zoomPage: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  zoomIn(){
    this.zoomPage += 0.25;
  }

  zoomOut(){
    if(this.zoomPage > 1){
      this.zoomPage -= 0.25;
    }
  }

  descargarPdf(){
    FileSaver.saveAs(this.urlPdf, this.fechaFormat());
  }

  fechaFormat(): string{
    return new Date().toLocaleString();
  }

}
