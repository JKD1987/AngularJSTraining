import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowRequestComponent } from './show-request/show-request.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FutureCampComponent } from './future-camp/future-camp.component';
import { PastCampComponent } from './past-camp/past-camp.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {BannerComponent} from './banner/banner.component';
import { HighlightDirective } from './highlight.directive';
import { MagnifyDirective } from './magnify.directive';
import { FilterPipe } from './filter.pipe';
import { BloodRequestFormComponent } from './blood-request-form/blood-request-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DonorDetailsComponent,
    ShowRequestComponent,
    RequestDetailsComponent,
    DashboardComponent,
    FutureCampComponent,
    PastCampComponent,
    ReviewsComponent,
    BannerComponent,
    HighlightDirective,
    MagnifyDirective,
    FilterPipe,
    BloodRequestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  entryComponents:[FutureCampComponent, PastCampComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
