import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorModel } from 'src/core/models/ErrorModel';
import { Estacion } from 'src/core/models/Estacion';
import { GasolineraService } from 'src/core/services/gasolinera.service';
import { ErrorModelComponent } from 'src/core/shared/components/error-model/error-model.component';

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrls: ['./gasolinera.component.css']
})
export class GasolineraComponent implements OnInit {
  gasolineras: Estacion[] = [];
  marcaId: number = this.route.snapshot.params['id'];
  buscador: string = '';
  activarButton: boolean = true;
  borrarBuscador: boolean = true;

  constructor(private gasolineraService: GasolineraService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getGasolinerasByMarcaId(this.marcaId);
  }

  getGasolinerasByMarcaId(id:number){
    this.gasolineraService
    .getGasolinerasByMarcaId(id)
    .subscribe((dataGasolineras: Estacion[]) => {
      this.gasolineras = dataGasolineras;
    }, (error: ErrorModel) => {
      this.snackBar.openFromComponent(ErrorModelComponent, {
        duration: 3000,
        data: error
      }).afterDismissed().subscribe(() => {
        this.router.navigate(['marca']);
      })
    })
  }

  buscarGasolinera(ubicacion:string) {
    if(ubicacion.length >= 5){
      this.borrarBuscador = false;
      this.gasolineras = this.gasolineras.filter(e => e.direccion.toLocaleLowerCase().includes(ubicacion.toLocaleLowerCase()));
    }

  }

  cancelarBusqueda(){
    this.borrarBuscador = true;
    this.buscador = '';
    this.getGasolinerasByMarcaId(this.marcaId);
  }

  irEstaciones(idGasolinera:number){
    this.router.navigate(['estacion',idGasolinera], {queryParams: {idMarca: this.marcaId}})
  }

}
