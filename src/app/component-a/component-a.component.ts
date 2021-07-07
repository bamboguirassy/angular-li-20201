import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  couleur: string = 'red';
  hauteur = 100;
  largeur = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
