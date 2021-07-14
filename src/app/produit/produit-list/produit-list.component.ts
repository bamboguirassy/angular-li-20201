import { Produit } from './../produit';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produits: any[];
  produit: Produit;

  constructor(public httpClient: HttpClient) {
    this.produit = new Produit();
  }

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits() {
    this.httpClient.get('http://localhost:8000/api/produit')
      .subscribe((data: any) => {
        this.produits = data;
      }, err => {
        console.log(err);
      })
  }

  createProduit() {
    this.httpClient.post('http://localhost:8000/api/produit', this.produit)
      .subscribe((data: any) => {
        this.produits.push(data);
        this.produit = new Produit();
      }, err => {
        console.log(err);

      })
  }

  supprimerProduit(produit: Produit) {
    this.httpClient.delete(`http://localhost:8000/api/produit/${produit.id}`)
      .subscribe(() => {
        var pos = this.produits.indexOf(produit);
        if(pos>-1) {
          this.produits.splice(pos,1);
        }
      }, (err) => {
        console.log(err);
      })
  }

}
