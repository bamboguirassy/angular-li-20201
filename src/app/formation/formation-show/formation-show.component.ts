import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation-show',
  templateUrl: './formation-show.component.html',
  styleUrls: ['./formation-show.component.css']
})
export class FormationShowComponent implements OnInit {

  formation: any;

  constructor(public activatedRoute: ActivatedRoute, public httpClient: HttpClient) { }

  ngOnInit(): void {
    // recuperer la parametre id depuis la route
    let id = this.activatedRoute.snapshot.params.id;
    this.findOneById(id);
  }

  findOneById(id: number) {
    this.httpClient.get('https://api.stagenligne.com/api/formation/public/' + id)
      .subscribe((response) => {
        this.formation = response;
      }, err => {
        console.log(err);
      })
  }

}
