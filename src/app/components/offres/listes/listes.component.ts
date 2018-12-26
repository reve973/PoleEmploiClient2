import { Component, OnInit } from '@angular/core';
import { Offre } from '../../../class/Offre';
import { Page } from '../../../class/Page';
import { OffreService } from '../../../services/offre.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OffreComponent } from '../offre/offre.component';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})
export class ListesComponent implements OnInit {

  private page: Page<Offre>;

  private sortColumn: String = 'dtParution';
  private sortOrder: String = 'dsc';
  private searchPage: Number = 0;
  private searchSize: Number = 5;
  private searchKeyword: String = '';
  private searchCommune: String = '';
  private searchCDD: Boolean = false;
  private searchCDI: Boolean = false;
  private searchCDDI: Boolean = false;

  private needResetPage: Boolean = false;

  private selectSortColumn = [{column: 'dtParution', title: 'Publication'},
                             {column: 'titre', title: 'Titre'}];

  private selectSortOrder = [{id: 'asc', title: 'Croissant'},
                             {id: 'dsc', title: 'Décroissant'}];

  constructor(private sOffres: OffreService,
            private ngModal: NgbModal) { }

  ngOnInit() {
    this.doSearch();
  }

  doSearch() {
    if (this.needResetPage) {
      this.searchPage = 0;
      this.needResetPage = false;
    }

    this.sOffres.findAll(this.searchPage, this.searchSize, this.sortColumn, this.sortOrder, this.searchKeyword, this.searchCommune,
                        this.searchCDD, this.searchCDDI, this.searchCDI).subscribe((res: Page<Offre>) => {
      this.page = res;
    },
      err => {
      });
  }

  pageEventHander($event: any) {
    this.searchPage = $event;
    this.doSearch();
  }

  searchCriteriaUpdated() {
    this.needResetPage = true;
  }

  updateSearch() {
    this.needResetPage = true;
    this.doSearch();
  }

  truncate(nbCharacter: Number, text: String) {
    if (text.length < nbCharacter) {
      return text;
    } else {
      return text.substring(0, nbCharacter.valueOf()) + '...';
    }
  }

  show(offre: Offre) {
    const modalRef = this.ngModal.open(OffreComponent, {size: 'lg', windowClass: 'modal-xxl' });
    modalRef.componentInstance.offre = offre;
    modalRef.result.then((result) => {
    });
  }
}
