import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../class/Offre';
import { OFFRES_MOCK } from '../class/data.mock';

@Injectable({
  providedIn: 'root'
})
export class OffreMockService {

  offres: Offre[] = OFFRES_MOCK;

  constructor(private http: HttpClient) {
  }


  public findAll(): Observable<Array<Offre>> {
    return of(this.offres);
  }

  public findFromId(id: number): Observable<Offre> {
    return of(this.offres.find(function (obj) {
      return obj.id === id;
    }));
  }

  public deleteFromId(id: number): Observable<Offre> {
    const index = this.offres.findIndex(function (obj) {
      return obj.id === id;
    });

    if (index > -1) {
      const offre: Offre = this.offres[index];

      this.offres.splice(index, 1);
      return of(offre);
    } else {
      return of(null);
    }
  }

  public saveOrUpdate(offre: Offre): Observable<Offre> {
    if (offre.id == null) {
      offre.id = 1;
      this.offres.forEach(function (value) {
        offre.id = Math.max(offre.id.valueOf(), value.id.valueOf() + 1);
      });
      this.offres.push(offre);
    }

    return of(offre);
  }
}
