import { Injectable } from '@angular/core';

@Injectable()
export class ValidadorServidor{

    validaServidor(servidor){
        if(servidor.nome == undefined || servidor.nome.trim() == ''
          || servidor.hostName == undefined || servidor.hostName.trim() == ''
          || servidor.ip == undefined || servidor.ip.trim() == ''
          || servidor.usuario == undefined || servidor.usuario.trim() == ''
          || servidor.senha == undefined || servidor.senha.trim() == ''
          || servidor.timeOut == undefined
          || servidor.porta == undefined
          || servidor.tempoRefresh == undefined
          ){ 
            alert("Todos os campos do servidor devem ser preenchidos");   
            return false;
          }if(servidor.tempoRefresh < 3000){
            alert("O tempo de refresh deve igual ou maior que 3000.")
            return false;
          }if(!this.validarIp(servidor.ip)){
            alert('formato de ip invalido');
            return false;
          }   
        return true;
      }

      validarIp(ip){
        let pattern = /\d{2,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}?$/;
        let teste = pattern.test(ip);
        console.log("Mostar" + teste);
        return teste;
      }
}