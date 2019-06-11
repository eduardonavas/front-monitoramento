import { Component, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IServidor } from '../server/servidor';
import { ServidorService } from '../server/servidor.service';
import { loading } from '../imagens/loading';
@Component({
  selector: 'app-demandas',
  templateUrl: './demandas.component.html',
  styleUrls: ['./demandas.component.css']
})

export class DemandasComponent{

  constructor(private modalService: BsModalService, private servico: ServidorService) {}
  demandas = []
  modalRef: BsModalRef;
  loading = loading;
  carregando = true;
  ok = 0;
  nok = 0;

  @Input()
  servidor: IServidor;
 
 
  openModal(template: TemplateRef<any>) {
    console.log("entrou")
    this.modalRef = this.modalService.show(template);
    this.servico.getDemandas(this.servidor).subscribe(resp => {this.demandas = resp; this.carregando = false; this.volumes()});
  }

  volumes(){
   
    this.demandas.forEach(d=>{
      if(d.ativa){
        this.ok += 1;
      }else{
        this.nok += 1;
      }
    });    
  }
}
