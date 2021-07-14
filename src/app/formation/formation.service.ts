import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  prefix = 'https://api.stagenligne.com/api/formation/public';

  constructor(public httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get(this.prefix+'/active/');
  }

  findOneById(id: number) {
    return this.httpClient.get(`${this.prefix}/${id}`)
  }
}
