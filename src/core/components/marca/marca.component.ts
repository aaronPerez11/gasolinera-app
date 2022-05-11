import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Marca } from 'src/core/models/Marca';
import { GasolineraService } from 'src/core/services/gasolinera.service';


@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {
  marcas: Marca[] = [];

  constructor(private gasolineraService: GasolineraService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllMarcas();
  }

  getAllMarcas() {
    this.gasolineraService
    .getAllMarcas()
    .subscribe(( data:Marca[]) => {
      this.marcas = data;
      console.log(data);
    });

  }

  irGasolinera(id:number){
    this.router.navigate(['gasolinera',id])
  }
}
