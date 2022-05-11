import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estacion } from 'src/core/models/Estacion';
import { GasolineraService } from 'src/core/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrls: ['./gasolinera.component.css']
})
export class GasolineraComponent implements OnInit {
  gasolineras: Estacion[] = [];
  marcaId: number = this.route.snapshot.params['id'];

  constructor(private gasolineraService: GasolineraService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGasolinerasByMarcaId(this.marcaId);
  }

  getGasolinerasByMarcaId(id:number){
    this.gasolineraService
    .getGasolinerasByMarcaId(id)
    .subscribe((dataGasolineras: Estacion[]) => {
      this.gasolineras = dataGasolineras;
      console.log(dataGasolineras);
    })
  }

  buscarGasolinera(ubicacion:string){

  }

  irEstaciones(idGasolinera:number){
    this.router.navigate(['estacion',idGasolinera], {queryParams: {idMarca: this.marcaId}})
  }

}
