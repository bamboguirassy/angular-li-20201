import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  formations: any[] = [];

  constructor(public httpClient: HttpClient) { }
  

  ngOnInit(): void {
    this.findAllFormation();
  }

  findAllFormation() {
    this.httpClient.get('https://api.stagenligne.com/api/formation/public/active/').subscribe((response: any) => {
      console.log('reponse', response);
      this.formations = response.items;
    }, (error) => {
      console.log('erreur', error);
    });
  }

}
