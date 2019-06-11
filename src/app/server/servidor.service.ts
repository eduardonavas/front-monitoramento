import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { IServidor } from './servidor';
import { environment } from 'src/environments/environment';
import { Global } from '../app-global';

@Injectable()
export class ServidorService{
    private _url: string = environment.url;
    
    constructor(private http: HttpClient, private global: Global){}
        
    getServidores(): Observable<IServidor[]>{
        return this.http.get<IServidor[]>(this._url+'/getStatusServidores');
    }

    getServidoresPorId(id): Observable<IServidor>{
        return this.http.get<IServidor>(this._url + '/buscar/'+id);
    }

    deletar(servidor){
        // implementacao do delete
        console.log("Deletou: " + servidor.id);
        let headers = new HttpHeaders();
        let retorno = false;
        headers.append('Content-Type','application/json');
        this.http.delete<boolean>(this._url + '/delete/' + servidor.id, {headers: headers}).subscribe(resp=> {this.getServidores().subscribe(r => this.global.servidores = r)});
    }

    addServidor(servidor) {
        servidor.status = '3';
        console.log("Entrou " +  servidor);
        let headers = new HttpHeaders();
        headers.append('Content-Type','application/json');
        this.http.post(this._url + '/add', servidor, {headers: headers}).subscribe(resp => {this.getServidores().subscribe(r => this.global.servidores = r)});
    }

    atualizar(servidor) {
        servidor.status = '3';
        console.log("Entrou " +  servidor);
        let headers = new HttpHeaders();
        headers.append('Content-Type','application/json');
        this.http.put(this._url + '/update', servidor, {headers: headers}).subscribe(resp => {this.getServidores().subscribe(r => this.global.servidores = r)});
    }

    getDemandas(servidor){
        return this.http.get<IServidor[]>(this._url+'/buscarDemandas/'+ servidor.ip);
    }
}