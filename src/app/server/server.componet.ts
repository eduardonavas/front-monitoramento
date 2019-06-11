import { Component } from '@angular/core';
import { ServidorService } from './servidor.service';
import { Global } from '../app-global';


@Component({
  selector: 'app-server',
  templateUrl: './server.componet.html',
  styleUrls: ['./server.css']
})

export class Servers {

  erroNoServico = '1';
  constructor(private _servico: ServidorService, public global: Global){}

  itervalo = setInterval(()=>{this.getServidores()},3000);

  getServidores(){
    
    this._servico.getServidores().subscribe(data => {this.global.servidores = data; this.erroNoServico = '0'}, ()=>{this.erroNoServico = '2'; this.global.servidores = null});
  }

  ngOnInit(){
    this.getServidores();
  }
  
  resposta(){
    this.getServidores();
  }

}