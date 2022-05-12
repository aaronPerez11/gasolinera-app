import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ErrorEstacion } from 'src/core/models/ErrorEstacion';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent implements OnInit {
  displayedColumns: string[] = ['estatus', 'tipoProceso', 'descripcion', 'progeso', 'action'];
  listErrores: ErrorEstacion[] = [
    {
      estatus: true,
      tipoProceso: "Procesando base de datos",
      descripcion: "Analisis en proceso",
      progreso: 5000
    },
    {
      estatus: false,
      tipoProceso: "Generación facturas",
      descripcion: "Analisis en proceso",
      progreso: 3000
    },
    {
      estatus: true,
      tipoProceso: "Generacion de auditorias",
      descripcion: "Analisis en proceso",
      progreso: 2000
    },
    {
      estatus: true,
      tipoProceso: "Salidas y entradas de combustible",
      descripcion: "Analisis en proceso",
      progreso: 2000
    }

  ];

  private pathImg: string = "../../../assets";

  valueProgress: number = 0;
  idInterval: any;

  constructor(private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private router: Router) {

    this.matIconRegistry.addSvgIcon('aceptar', this.setPath(`${this.pathImg}/acuerdo.svg`))
    .addSvgIcon('cancelar', this.setPath(`${this.pathImg}/cancelar.svg`))
   }

   private setPath(url: string): SafeResourceUrl {
     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
   }

  ngOnInit(): void {
    this.idInterval = setInterval(() => this.progressBar(), 1000)
  }

  progressBar(){
    if(this.valueProgress == 100){
      this.valueProgress = 100;
      clearInterval(this.idInterval);
    } else {
     this.valueProgress += 5;
    }
  }

  irPaginaPdf(){
    this.router.navigate(['documento'])
  }
}
