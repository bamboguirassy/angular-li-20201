import { Etudiant } from './../etudiant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  etudiants: Etudiant[];
  hauteur = 400;
  largeur = 200;

  constructor() {
    this.etudiants = [];
  }

  ngOnInit(): void {
  }

  ajouter(etudiant: Etudiant) {
    this.etudiants.push(etudiant);
  }

  supprimer(etudiant: Etudiant) {
    const index = this.etudiants.indexOf(etudiant);
    if(index>-1) {
      this.etudiants.splice(index,1);
    }
  }

  

}
