import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { BloodRequestFormComponent } from './blood-request-form/blood-request-form.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { UniversalGuardService } from './universal-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo:'donorDetails', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'donorDetails', component: DonorDetailsComponent, canActivate:[UniversalGuardService]},
  { path: 'donorDetails/:message', component: DonorDetailsComponent, canActivate:[UniversalGuardService]},
  { path: 'reviews', component: ReviewsComponent, canActivate:[UniversalGuardService]},
  { path: 'requestForm', component: BloodRequestFormComponent,canActivate:[UniversalGuardService], canDeactivate:[UniversalGuardService] },
  { path: 'logout/:true', component: LoginComponent},
  { path: '**', component: LoginComponent, canActivate:[UniversalGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
