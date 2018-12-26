import { Component, OnInit } from '@angular/core';
import { OffreService } from '../../../../services/offre.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { Offre } from '../../../../class/Offre';
import { ContratService } from '../../../../services/contrat.service';
import {forkJoin, Observable, of} from 'rxjs';
import { Contrat } from '../../../../class/Contrat';
import { AuthentificationService } from '../../../../services/authentification.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from '../../../confirm/confirm.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private offre: Offre;
  private isEditing: Boolean;
  private angForm: FormGroup;
  private submitted = false;
  private contrats: Contrat[];
  private messageError: String;
  private messageSuccess: String;


  constructor(private oService: OffreService,
              private cService: ContratService,
              private aService: AuthentificationService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private location: Location,
              private ngModal: NgbModal) {
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.isEditing = true;

      const response1 = this.oService.findFromId(Number(this.route.snapshot.paramMap.get('id')));
      const response2 = this.cService.findAll();

      forkJoin(response1, response2).subscribe((res) => {
        this.contrats = res[1];
        this.offre = res[0];
      },
      err => {
        this.location.back();
      });
    } else {
      this.isEditing = false;

      const response2 = this.cService.findAll();

      forkJoin([response2]).subscribe((res) => {
        this.contrats = res[0];
        this.offre = new Offre();
      },
      err => {
        this.location.back();
      });

    }

    this.angForm = this.fb.group({
      titre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      dtParution: ['', [Validators.required]],
      pourvu: ['', []],
      dureeContrat: ['', []],
      salaireBrut: ['', []],
      contrat: ['', [Validators.required]],
      commune: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1024)]]
      /*lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]*[a-zA-Z]'), Validators.minLength(2)]],
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z][a-zA-Z ]*[a-zA-Z]')]],
      email: ['', [Validators.required, Validators.email]],
      login: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z]*')]],
      password: ['', [Validators.required, Validators.minLength(3)]],*/
    });
  }

  cancel() {
    this.location.back();
  }

  delete() {

    const modalRef = this.ngModal.open(ConfirmComponent);
    modalRef.componentInstance.title = 'Suppression d une offre';
    modalRef.componentInstance.content = 'Voulez vous vraiment supprimer cette offre ?';
    modalRef.result.then((result) => {
      this.oService.delete(this.offre).subscribe((res: Offre) => {
        // this.messageSuccess = 'Création effectuée.';
        this.location.back();
      },
      err => {
      });
      }, (reason) => {
    });
  }

  saveOrUpdate() {
    this.messageError = null;
    this.messageSuccess = null;

    this.submitted = true;

    if (this.angForm.invalid) {
      this.messageError = 'Sauvegarde impossible. Veuillez corriger les anomalies.';
      return;
    }

    if (this.offre.id == null) {
      this.oService.create(this.offre, this.aService.getAuthenticatedEntreprise().id).subscribe((res: Offre) => {
        this.offre = res;
        this.messageSuccess = 'Création effectuée.';
        // this.location.back();
      },
      err => {
      });
    } else {
      this.oService.update(this.offre).subscribe((res: Offre) => {
          this.offre = res;
          this.messageSuccess = 'Mise à jour effectuée.';
          // this.location.back();
        },
        err => {
        });
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.angForm.controls; }
}
