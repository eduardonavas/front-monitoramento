import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServidorService } from './server/servidor.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule} from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms'
import { Global } from './app-global';

import { Servers } from './server/server.componet';
import { ModalServer } from './modal-servidor/server.modal';
import { NavNBar } from './nav-bar/nav-bar.component';
import { ModalCadServidor } from './modal-cad-servidor/cad-modal';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { DemandasComponent } from './demandas/demandas.component';
import { TableDemandasComponent } from './table-demandas/table-demandas.component';
import { ValidadorServidor } from './server/validador-servidor';


@NgModule({
  declarations: [
    AppComponent,
    Servers,
    ModalServer,
    NavNBar,
    ModalCadServidor,
    ModalEditComponent,
    DemandasComponent,
    TableDemandasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: Servers },
    ])
  ],
  providers: [ServidorService, ValidadorServidor, Global],
  bootstrap: [AppComponent]
})
export class AppModule { }
