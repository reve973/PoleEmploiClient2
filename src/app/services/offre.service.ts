import {forkJoin, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../class/Page';
import { Offre } from '../class/Offre';


@Injectable({
  providedIn: 'root'
})
export class OffreService {

  offres: Offre[];

  constructor(private http: HttpClient) {
  }

  public findAll(page: Number = 0,
                size: Number = 5,
                sortColumn: String,
                sortOrder: String,
                keyword: String = '',
                commune: String = '',
                cdd: Boolean = false,
                cddi: Boolean = false,
                cdi: Boolean = false): Observable<Page<Offre>> {
    return this.http.get('http://localhost:8081/api/offre/get/all/page?page=' + page +
                        '&size=' + size + '&sortcolumn=' + sortColumn + '&sortorder=' + sortOrder +
                        '&commune=' + commune + '&motclef=' + keyword + '&cdd=' + cdd + '&cddi=' + cddi + '&cdi=' + cdi)
            .pipe(
                map(response => {
                  return new Page<Offre>(response);
                })
                // catchError(this.handleError)
            );
  }

  public findAllByEntreprise(idEntreprise: Number,
                            page: Number = 0,
                            size: Number = 5,
                            sortColumn: String,
                            sortOrder: String,
                            keyword: String = '',
                            commune: String = '',
                            cdd: Boolean = false,
                            cddi: Boolean = false,
                            cdi: Boolean = false): Observable<Page<Offre>> {
    return this.http.get('http://localhost:8081/api/offre/entreprise/' + idEntreprise + '/get/all/page?page=' + page +
                        '&size=' + size + '&sortcolumn=' + sortColumn + '&sortorder=' + sortOrder +
                        '&commune=' + commune + '&motclef=' + keyword + '&cdd=' + cdd + '&cddi=' + cddi + '&cdi=' + cdi)
            .pipe(
                map(response => {
                  return new Page<Offre>(response);
                })
                // catchError(this.handleError)
            );
  }

  public findFromId(id: Number): Observable<Offre> {
    return this.http.get<Offre>('http://localhost:8081/api/offre/get/id/' + id);
  }

  public delete(offre: Offre): Observable<Offre> {
    return this.http.delete<Offre>('http://localhost:8081/api/offre/delete/id/' + offre.id);
  }

  public update(offre: Offre): Observable<Offre> {
    return this.http.post<Offre>('http://localhost:8081/api/offre/update', offre);
  }

  public create(offre: Offre, idEntreprise: Number): Observable<Offre> {
    return this.http.post<Offre>('http://localhost:8081/api/offre/entreprise/' + idEntreprise + '/save', offre);
  }
}
