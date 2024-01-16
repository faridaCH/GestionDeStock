import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginPageComponent
  },
  {
    path:'inscrire',
    component: PageInscriptionComponent
  },
  {
    path:'',
    component: PageDashboardComponent,
    children:[
      {
        path:'statistiques',
        component: PageStatistiqueComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
