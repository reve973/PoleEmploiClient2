import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListesComponent as EntOffreListesComponent } from '../components/entreprises/offres/listes/listes.component';
import { ListesComponent as OffreListesComponent } from '../components/offres/listes/listes.component';
import { ListesComponent as UtilisateurListesComponent } from '../components/utilisateurs/listes/listes.component';
import { EditComponent } from '../components/entreprises/offres/edit/edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/'},
  { path: 'entreprises/offres/liste', component: EntOffreListesComponent},
  { path: 'entreprises/offres/edit/:id', component: EditComponent},
  { path: 'entreprises/offres/add', component: EditComponent},
  { path: 'offres/liste', component: OffreListesComponent},
  { path: 'utilisateurs/liste', component: UtilisateurListesComponent}
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
