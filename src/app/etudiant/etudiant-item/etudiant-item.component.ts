import { Etudiant } from './../etudiant';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-etudiant-item',
  templateUrl: './etudiant-item.component.html',
  styleUrls: ['./etudiant-item.component.css']
})
export class EtudiantItemComponent implements OnInit {

  @Input() etudiant: Etudiant;
  @Output() infoSup: EventEmitter<Etudiant> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  informerSuppression()  {
    this.infoSup.emit();
  }

}
