import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaComponent } from 'src/core/components/marca/marca.component';
import { GasolineraComponent } from 'src/core/components/gasolinera/gasolinera.component';
import { EstacionesComponent } from 'src/core/components/estaciones/estaciones.component';
import { AnalisisComponent } from 'src/core/components/analisis/analisis.component';
import { DocumentoComponent } from 'src/core/components/documento/documento.component';
import { LoginComponent } from 'src/core/components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'marca', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'marca', component: MarcaComponent},
  {path: 'gasolinera/:id', component: GasolineraComponent},
  {path: 'estacion/:id', component: EstacionesComponent},
  {path: 'verificador', component: AnalisisComponent},
  {path: 'documento', component: DocumentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
