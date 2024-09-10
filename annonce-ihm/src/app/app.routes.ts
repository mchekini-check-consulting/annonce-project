import {Routes} from '@angular/router';
import {GestionAnnoncesComponent} from "./features/gestion-annonces/gestion-annonces.component";
import {StatistiquesComponent} from "./features/statistiques/statistiques.component";

export const routes: Routes = [
  {path: '', component: GestionAnnoncesComponent},
  {path: 'gestion-annonces', component: GestionAnnoncesComponent},
  {path: 'statistiques', component: StatistiquesComponent},

];
