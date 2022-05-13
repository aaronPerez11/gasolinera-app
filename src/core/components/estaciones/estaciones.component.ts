import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorModel } from 'src/core/models/ErrorModel';
import { Estacion } from 'src/core/models/Estacion';
import { TipoEstacion } from 'src/core/models/TipoEstacion';
import { GasolineraService } from 'src/core/services/gasolinera.service';
import { ErrorModelComponent } from 'src/core/shared/components/error-model/error-model.component';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.css']
})
export class EstacionesComponent implements OnInit {
  displayedColumns: string[] = ['id','codigo','combustible','action'];
  estaciones: TipoEstacion[] = [];
  ocultarContenido: boolean = false;
  estacion: Estacion = {
    id: 0,
    nombre: "",
    direccion: "",
    img: "petro-seven.jpg",
    tipoLector: {
      id: 0,
      marca: "",
      version: "",
      fecha: ""
    }
  }


  idMarca: number = this.route.snapshot.queryParams['idMarca'];
  idGasolinera: number = this.route.snapshot.params['id'];

  constructor( private gasolineraService: GasolineraService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getEstaciones();
    this.getGasolineraById(this.idMarca, this.idGasolinera);
  }

  getEstaciones(){
    this.gasolineraService
    .getEstacionesGasolinerasByMarcaId(this.idMarca, this.idGasolinera)
    .subscribe(dataEstaciones => {
      this.estaciones = dataEstaciones;
    }, (error: ErrorModel) => {
      this.ocultarContenido = true
      this.snackBar.openFromComponent(ErrorModelComponent, {
        duration: 3000,
        data: error
      }).afterDismissed().subscribe(() => {
        this.router.navigate(['gasolinera', this.idMarca])
      })
    })
  }

  getGasolineraById(id:number, idGasolinera:number){
    this.gasolineraService
    .getEstacionGasolineraById(id,idGasolinera)
    .subscribe(dataGasolinera => {
      this.estacion = dataGasolinera;
    })
  }

  getDataRow(item:TipoEstacion){
    this.router.navigate(['verificador'])
  }
}
