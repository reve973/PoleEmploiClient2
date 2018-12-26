import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private submitted = false;
  private messageError: String;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private sAuthentification: AuthentificationService,
    public modal: NgbActiveModal,
    ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.sAuthentification.logout();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  cancel() {
    this.modal.close();
  }

  connect() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.sAuthentification.login(this.f.username.value, this.f.password.value).subscribe((res: Boolean) => {
        if (res) {
          this.modal.close();
        }
      },
      err => {
        this.messageError = 'Identifiant ou mot de passe invalide';
      });
  }
}
