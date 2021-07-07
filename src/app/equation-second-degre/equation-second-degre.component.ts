import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equation-second-degre',
  templateUrl: './equation-second-degre.component.html',
  styleUrls: ['./equation-second-degre.component.css']
})
export class EquationSecondDegreComponent implements OnInit {

  a=0;
  b=0;
  c=0;
  delta=0;
  x1=0;
  x2=0;
  x0=0;
  message = '';

  constructor() { }

  ngOnInit(): void {
  }

  resoudre() {
    this.delta = Math.pow(this.b,2)-4*this.a*this.c;
    if(this.delta>0) {
      this.message = "L'équation admet deux solutions distinctes";
      this.x1 = (-this.b-Math.sqrt(this.delta))/2*this.a;
      this.x2 = (-this.b+Math.sqrt(this.delta))/2*this.a;
    } else if(this.delta==0) {
      this.message = "L'équation admet une solution unique";
      this.x0 = -this.b/2*this.a;
    } else {
      this.message = "L'équation n'admet aucune solution";
    }
  }

}
