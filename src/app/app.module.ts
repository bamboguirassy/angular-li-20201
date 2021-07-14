import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquationSecondDegreComponent } from './equation-second-degre/equation-second-degre.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { EtudiantListComponent } from './etudiant/etudiant-list/etudiant-list.component';
import { EtudiantItemComponent } from './etudiant/etudiant-item/etudiant-item.component';
import { CardComponent } from './card/card.component';
import { EtudiantNewComponent } from './etudiant/etudiant-new/etudiant-new.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormationListComponent } from './formation/formation-list/formation-list.component';
import { FormationShowComponent } from './formation/formation-show/formation-show.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ComponentAComponent,
    ComponentBComponent,
    EquationSecondDegreComponent,
    FruitListComponent,
    EtudiantListComponent,
    EtudiantItemComponent,
    CardComponent,
    EtudiantNewComponent,
    WeatherComponent,
    FormationListComponent,
    FormationShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
