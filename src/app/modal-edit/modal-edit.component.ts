import { Component, Input, TemplateRef, OnInit, Output,EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ServidorBean } from '../server/servidor-bean';
import { ServidorService } from '../server/servidor.service';
import { ValidadorServidor } from '../server/validador-servidor';


@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})

export class ModalEditComponent implements OnInit{
  

  modalRef: BsModalRef;
  servidorAux: ServidorBean;

  @Input()
  servidor: ServidorBean;

  @Output()
  resposta = new EventEmitter();

  constructor(private modalService: BsModalService, private servico: ServidorService, private validador: ValidadorServidor) {}  

  ngOnInit(): void {
    this.servidorAux = Object.assign({}, this.servidor);
  }

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  atualizar(){
    if(!this.validador.validaServidor(this.servidor)){
      return;
    }     
    this.servico.atualizar(this.servidor);
    this.modalRef.hide();
  }

  cancelar(){
    this.resposta.emit(this.servidorAux);
    this.modalRef.hide();
  }
}
