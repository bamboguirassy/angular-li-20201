import { FormationShowComponent } from './formation/formation-show/formation-show.component';
import { FormationListComponent } from './formation/formation-list/formation-list.component';
import { EtudiantListComponent } from './etudiant/etudiant-list/etudiant-list.component';
import { WeatherComponent } from './weather/weather.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'meteo', component: WeatherComponent},
  {path: 'etudiant', component: EtudiantListComponent},
  {path: 'formation', component: FormationListComponent},
  {path: 'formation/:id', component: FormationShowComponent},
  {path: '**',pathMatch: 'full', redirectTo: 'etudiant'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
