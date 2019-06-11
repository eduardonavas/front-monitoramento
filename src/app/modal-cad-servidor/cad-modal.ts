import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ServidorBean } from '../server/servidor-bean';
import { ServidorService } from '../server/servidor.service';
import { serverOk } from '../imagens/serverOk';
import { AppData } from './AppData';
import { ValidadorServidor } from '../server/validador-servidor';

@Component({
    selector: 'app-cad-modal',
    templateUrl: './cad-modal.html'
  })

  export class ModalCadServidor{

    servidor = this.getNewServidor();
    serverOk = serverOk;
    nome: string="";
    modalRef: BsModalRef;
    datad = new AppData('');
    
    constructor(private modalService: BsModalService, private servico: ServidorService, private validador: ValidadorServidor) {}
 
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    showServidor(){
      //this.servico.addServidor(this.servidor);
      
      if(!this.validador.validaServidor(this.servidor)){
        return;
      }     
      this.servico.addServidor(this.servidor);
      this.servidor = this.getNewServidor();
      this.modalRef.hide();
    }

    getNewServidor(){
      return new ServidorBean(0,'', '', '', 0, 0, 0,'', '','', 0);
    }
  }