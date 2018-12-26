import { Component, OnInit } from '@angular/core';
import { User } from '../../../class/User';
import { Page } from '../../../class/Page';
import { AuthentificationService } from '../../../services/authentification.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})
export class ListesComponent implements OnInit {

  private page: Page<User>;

  private sortColumn: String = 'dtParution';
  private sortOrder: String = 'dsc';
  private searchPage: Number = 0;
  private searchSize: Number = 5;


  constructor(private sAuthentification: AuthentificationService,
              private router: Router) { }

  ngOnInit() {
    this.doSearch();
  }

  doSearch() {
    /*
    this.sOffres.findAllByEntreprise(this.sAuthentification.getAuthenticatedEntreprise().id,
                                    this.searchPage,
                                    this.searchSize,
                                    this.sortColumn,
                                    this.sortOrder,
                                    this.searchKeyword,
                                    this.searchCommune,
                                    this.searchCDD,
                                    this.searchCDDI,
                                    this.searchCDI).subscribe((res: Page<Offre>) => {
      this.page = res;
    },
    err => {
    });
    */
  }

  pageEventHander($event: any) {
    this.searchPage = $event;
    this.doSearch();
  }

  setSortColumn(column: String) {
    if (this.sortColumn === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'dsc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }
    this.doSearch();
  }

  /*edit(offre: Offre) {
    this.router.navigate(['/entreprises/offres/edit/' + offre.id]);
  }*/
}
