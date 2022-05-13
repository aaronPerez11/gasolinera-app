import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaComponent } from 'src/core/components/marca/marca.component';
import { GasolineraComponent } from 'src/core/components/gasolinera/gasolinera.component';
import { EstacionesComponent } from 'src/core/components/estaciones/estaciones.component';
import { AnalisisComponent } from 'src/core/components/analisis/analisis.component';
import { DocumentoComponent } from 'src/core/components/documento/documento.component';
import { LoginComponent } from 'src/core/components/login/login.component';
import { ErrorModelComponent } from 'src/core/shared/components/error-model/error-model.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ServerErrorInterceptor } from 'src/core/interceptor/ServerErrorInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    MarcaComponent,
    GasolineraComponent,
    EstacionesComponent,
    AnalisisComponent,
    DocumentoComponent,
    LoginComponent,
    ErrorModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSnackBarModule,
    PdfViewerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
