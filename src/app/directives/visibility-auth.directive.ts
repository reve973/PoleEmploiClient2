import {Directive, ElementRef, Input, OnInit, Renderer} from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';

@Directive({
  selector: '[appVisibilityAuth]'
})
export class VisibilityAuthDirective  implements OnInit {
  @Input('appVisibilityAuth') appVisibilityAuth: string[] = [];

  constructor(private el: ElementRef,
              private rendered: Renderer,
              private aService: AuthentificationService) {

    this.aService.authEvent.subscribe(value => {
      this.process();
    });
  }

  ngOnInit() {
    this.process();
  }

  private process() {
     if (this.isAuthorized()) {
      this.el.nativeElement.style.visibility = 'visible';
      this.el.nativeElement.style.display = 'block';
    } else {
      this.el.nativeElement.style.visibility = 'hidden';
      this.el.nativeElement.style.display = 'none';
    }
  }

  private isAuthorized(): Boolean {
    const tdhat = this;
    if (this.aService.isAuthenticated()) {

      let res = false;
      for (let j = 0 ; j < this.appVisibilityAuth.length ; j++) {
        if (this.aService.getAuthenticatedUser().role.nom === this.appVisibilityAuth[j]) {
          res = true;
        }
      }

      return res;
    } else {
      return false;
    }
  }
}
