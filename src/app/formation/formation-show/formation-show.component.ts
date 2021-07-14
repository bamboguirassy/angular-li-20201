import { FormationService } from './../formation.service';
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

  constructor(public activatedRoute: ActivatedRoute,
     public httpClient: HttpClient,
     public formationSrv: FormationService) { }

  ngOnInit(): void {
    // recuperer la parametre id depuis la route
    let id = this.activatedRoute.snapshot.params.id;
    this.findOneById(id);
  }

  findOneById(id: number) {
    this.formationSrv.findOneById(id)
      .subscribe((response) => {
        this.formation = response;
      }, err => {
        console.log(err);
      })
  }

}
