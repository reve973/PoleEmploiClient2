import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalRef: any;

  constructor(public modalService: NgbModal,
    private aService: AuthentificationService,
    private router: Router) { }

  ngOnInit() {
  }

  connexion() {
    this.modalRef = this.modalService.open(LoginComponent);
    /*modalRef.componentInstance.title = 'Suppression d un user';
    modalRef.componentInstance.content = 'Voulez vous vraiment supprimer le user ' + user.lastname + ' ' + user.firstname + ' ?';
    modalRef.result.then((result) => {
      this.service.deleteFromId(user.id).subscribe((res: User) => {
          this.mService.addInfo('Suppression du user ' + user);
          this.updateEvent.emit();
        },
        err => {
          this.mService.addError('Impossible de supprimer le user ' + user);
        });
    }, (reason) => {
    });*/
  }

  deconnexion() {
    this.aService.logout();
    this.router.navigate(['/']);
    this.modalRef.close();
  }

  getIdentificationUser(): string {

    if (this.aService.isAuthenticateUserAdmin()) {
      return 'Administrateur (' + this.aService.getAuthenticatedUser().username + ')';
    }

    if (this.aService.isAuthenticateUserEntreprise()) {
      return 'Entreprise (' + this.aService.getAuthenticatedEntreprise().denom + ' - ' +
                              this.aService.getAuthenticatedUser().username + ')';
    }

    if (this.aService.isAuthenticateUserCandidat()) {
      return 'Candidat (' + this.aService.getAuthenticatedCandidat().nom + ' ' +
                             this.aService.getAuthenticatedCandidat().prenom + ' - ' +
                             this.aService.getAuthenticatedUser().username + ')';
    }

    return 'uuu';
  }
}
