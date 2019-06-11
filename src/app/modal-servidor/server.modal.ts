import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ServidorService } from '../server/servidor.service';
import { Global } from '../app-global';
import { IServidor } from '../server/servidor';
import { serverOk } from '../imagens/serverOk';
import { serverNok } from '../imagens/serverNok';
import { loading } from '../imagens/loading';


@Component({
    selector: 'app-modal',
    templateUrl: './server.modal.html'
  })

  export class ModalServer{

    modalRef: BsModalRef;
    loading = loading;
    serverOk = serverOk;
    serverNok = serverNok;

    @Input()
    servidor: IServidor;

    constructor(private modalService: BsModalService, 
      private servico: ServidorService, 
      private global: Global) {}
 
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }

    respostaEditar(res){
     this.servidor = res;
    }

    deletar(servidor){
      console.log(servidor);
      let retorno = false;
      this.servico.deletar(servidor);
      this.modalRef.hide();
    }
  }