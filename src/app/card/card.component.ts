import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() hauteur: number = 200;
  @Input() largeur: number = 100;
  @Input() bgColor: string;
  @Input() borderColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
