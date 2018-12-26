import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './modules/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListesComponent as EntOffreListesComponent } from './components/entreprises/offres/listes/listes.component';
import { ListesComponent as OffreListesComponent } from './components/offres/listes/listes.component';
import { OffreMockService } from './services/offre-mock.service';
import { OffreService } from './services/offre.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { LoaderInterceptorService } from './services/loader-interceptor.service';
import { LoaderService } from './services/loader.service';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationService } from './services/authentification.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisibilityAuthDirective } from './directives/visibility-auth.directive';
import { EditComponent } from './components/entreprises/offres/edit/edit.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ListesComponent } from './components/utilisateurs/listes/listes.component';
import { OffreComponent } from './components/offres/offre/offre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntOffreListesComponent,
    OffreListesComponent,
    PaginationComponent,
    LoaderComponent,
    LoginComponent,
    VisibilityAuthDirective,
    EditComponent,
    ConfirmComponent,
    ListesComponent,
    OffreComponent,
    OffreComponent
  ],
  entryComponents: [LoginComponent, ConfirmComponent, OffreComponent],
  imports: [
    RoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: OffreService,
      useClass: OffreService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    LoaderService,
    {
      provide: AuthentificationService,
      useClass: AuthentificationService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
