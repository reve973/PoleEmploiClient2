import {forkJoin, Observable, of} from 'rxjs';
import { Injectable } from '@angular/core';
import { Contrat } from '../class/Contrat';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  contrats: Contrat[];

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<Contrat>> {
    return this.http.get<Array<Contrat>>('http://localhost:8081/api/contrat/get/all');
  }

}
