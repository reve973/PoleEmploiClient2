import { Injectable } from '@angular/core';
import { Candidature } from '../class/Candidature';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http: HttpClient) {
  }

  public create(candidature: Candidature): Observable<Candidature> {
    return this.http.post<Candidature>('http://localhost:8081/api/candidature/save', candidature);
  }

  public createFromId(idOffre: Number, idCandidat: Number): Observable<Candidature> {
    return this.http.post<Candidature>('http://localhost:8081/api/candidature/save', {'idOffre': idOffre, 'idCandidat': idCandidat});
  }

  public findById(idOffre: Number, idCandidat: Number): Observable<Candidature> {
    return this.http.get<Candidature>('http://localhost:8081/api/candidature/offre/' + idOffre + '/candidat/' + idCandidat + '/get');
  }

  public delete(idOffre: Number, idCandidat: Number): Observable<Boolean> {
    return this.http.delete<Boolean>('http://localhost:8081/api/candidature/offre/' + idOffre + '/candidat/' + idCandidat + '/delete');
  }
}
