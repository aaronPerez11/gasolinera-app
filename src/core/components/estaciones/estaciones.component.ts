import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estacion } from 'src/core/models/Estacion';
import { TipoEstacion } from 'src/core/models/TipoEstacion';
import { GasolineraService } from 'src/core/services/gasolinera.service';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.css']
})
export class EstacionesComponent implements OnInit {
  estaciones: TipoEstacion[] = [];
  estacion: any;

  idMarca: number = this.route.snapshot.queryParams['idMarca'];
  idGasolinera: number = this.route.snapshot.params['id'];

  constructor( private gasolineraService: GasolineraService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEstaciones();
    this.getGasolineraById(this.idMarca, this.idGasolinera);
  }

  getEstaciones(){
    this.gasolineraService
    .getEstacionesGasolinerasByMarcaId(this.idMarca, this.idGasolinera)
    .subscribe(dataEstaciones => {
      this.estaciones = dataEstaciones;
      console.log(dataEstaciones);
    })
  }

  getGasolineraById(id:number, idGasolinera:number){
    this.gasolineraService
    .getEstacionGasolineraById(id,idGasolinera)
    .subscribe(dataGasolinera => {
      this.estacion = dataGasolinera;
      console.log(dataGasolinera);
    })
  }
}
