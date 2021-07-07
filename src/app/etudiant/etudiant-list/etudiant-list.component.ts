import { Etudiant } from './../etudiant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  etudiants: Etudiant[];
  etudiant: Etudiant;
  hauteur = 400;
  largeur = 200;

  constructor() {
    this.etudiant = new Etudiant();
    this.etudiants = [];
  }

  ngOnInit(): void {
  }

  ajouter() {
    this.etudiants.push(this.etudiant);
    this.etudiant = new Etudiant();
  }

  supprimer(etudiant: Etudiant) {
    const index = this.etudiants.indexOf(etudiant);
    if(index>-1) {
      this.etudiants.splice(index,1);
    }
  }

  

}
