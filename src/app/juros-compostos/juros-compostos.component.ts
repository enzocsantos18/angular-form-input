import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css'],
})
export class JurosCompostosComponent implements OnInit {
  vp: number;
  j: number;
  m: number;

  constructor() {
    this.vp = 100;
    this.j = 2.5;
    this.m = 3;
  }

  ngOnInit() {}

  getJuros(): any[] {
    var lista = [];

    for (let n = 1; n <= this.m; n++) {
      let retorno = (this.vp * Math.pow(1 + this.j / 100, n)).toPrecision(15);

      lista.push({
        periodo: n,
        calculo: `(1 + ${this.j / 100}ˆ${n} )`,
        retorno,
      });
    }

    return lista;
  }
}
