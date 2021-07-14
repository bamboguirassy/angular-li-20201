import { Etudiant } from './../etudiant';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'etudiant-new',
  templateUrl: './etudiant-new.component.html',
  styleUrls: ['./etudiant-new.component.css']
})
export class EtudiantNewComponent implements OnInit {
  etudiant: Etudiant;
  @Output() creation: EventEmitter<Etudiant> = new EventEmitter();

  constructor() {
    this.etudiant = new Etudiant();
  }

  informerCreation() {
    this.creation.emit(this.etudiant);
    this.etudiant = new Etudiant();
  }

  ngOnInit(): void {
  }

}
