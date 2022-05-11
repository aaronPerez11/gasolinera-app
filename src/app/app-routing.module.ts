import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaComponent } from 'src/core/components/marca/marca.component';
import { GasolineraComponent } from 'src/core/components/gasolinera/gasolinera.component';
import { EstacionesComponent } from 'src/core/components/estaciones/estaciones.component';

const routes: Routes = [
  {path: '', redirectTo: 'marca', pathMatch: 'full'},
  {path: 'marca', component: MarcaComponent},
  {path: 'gasolinera/:id', component: GasolineraComponent},
  {path: 'estacion/:id', component: EstacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
