import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Offre } from '../../../class/Offre';
import { Candidature } from '../../../class/Candidature';
import { CandidatureService } from '../../../services/candidature.service';
import { AuthentificationService } from '../../../services/authentification.service';
declare let L;

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit, AfterViewInit {

  private offre: Offre;
  private current: number;
  private isInitMap: Boolean = false;
  private isCandidat: Boolean;

  constructor(public modal: NgbActiveModal,
              private aService: AuthentificationService,
              private cService: CandidatureService) {}

  ngOnInit() {
    this.cService.findById(this.offre.id, this.aService.getAuthenticatedCandidat().id).subscribe((res: Candidature) => {
      if (res != null) {
        this.isCandidat = true;
      } else {
        this.isCandidat = false;
      }
    },
    err => {
    });
  }

  ngAfterViewInit() {
//    this.click();
  }

  initMap() {
    if (this.isInitMap) {
      return;
    }

    const map = L.map('map', { zoomControl: true }).setView([48.80952, 7.776818], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'OSM' }).addTo(map);
    // map.dragging.disable();
    // map.touchZoom.disable();
    // map.doubleClickZoom.disable();
    // map.scrollWheelZoom.disable();

    /*L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roads/x={x}&y={y}&z={z}', {
    attribution: '<a href="https://www.lije-creative.com">LIJE Creative</a>',
      maxZoom: 18
    }).addTo(map);
    const marker = L.marker([48.804128, 7.776792]).addTo(map).bindPopup('<b>LIJE Creative</b>');*/

    this.isInitMap = true;
  }

  creerCandidature() {
    this.cService.createFromId(this.offre.id, this.aService.getAuthenticatedCandidat().id).subscribe((res: Candidature) => {
      if (res != null) {
        this.isCandidat = true;
      }
    },
    err => {
    });
  }

  annulerCandidature() {
    this.cService.delete(this.offre.id, this.aService.getAuthenticatedCandidat().id).subscribe((res: Boolean) => {
      if (res) {
        this.isCandidat = false;
      }
    },
    err => {
    });
  }
}
