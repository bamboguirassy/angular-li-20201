import { FormationService } from './../formation.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  formations: any[] = [];

  constructor(public httpClient: HttpClient,
     public formationSrv: FormationService) { }
  

  ngOnInit(): void {
    this.findAllFormation();
  }

  findAllFormation() {
    this.formationSrv.findAll()
    .subscribe((response: any) => {
      console.log('reponse', response);
      this.formations = response.items;
    }, (error) => {
      console.log('erreur', error);
    });
  }

}
