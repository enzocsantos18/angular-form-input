import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css'],
})
export class JurosComponent implements OnInit {
  vp: number;
  j: number;
  m: number;

  constructor() {
    this.vp = 100;
    this.j = 2.5;
    this.m = 3;
  }

  ngOnInit() {}

  getJuros(): number {
    return this.vp * (1 + (this.j / 100) * this.m);
  }
}
