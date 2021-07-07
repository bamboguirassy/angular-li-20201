import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
  fruits: string[] = ["Mangue", "Orange", "Fraise", "Banane", "Raisin"];

  constructor() { }

  ngOnInit(): void {
    let var1 = 5;
    var var2;
  }

}
