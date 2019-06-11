import { Component, Input } from '@angular/core';
import { fora } from '../imagens/fora';
import { demandaOk } from '../imagens/demandaOk';


@Component({
  selector: 'app-table-demandas',
  templateUrl: './table-demandas.component.html',
  styleUrls: ['./table-demandas.component.css']
})
export class TableDemandasComponent {

  constructor() { }

  fora = fora;
  ok = demandaOk;

  @Input()
  demandas: any
  

}
