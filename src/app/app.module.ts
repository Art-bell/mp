import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from "swiper/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransparentHeaderComponent } from './transparent-header/transparent-header.component';
import { HomeSpaComponent } from './home-spa/home-spa.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { TakeASurveySpaComponent } from './take-a-survey-spa/take-a-survey-spa.component';
import { HeaderSwitchDirective } from './header-switch.directive';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyBlockComponent } from './company-block/company-block.component';
import { CompanySelectionComponent } from './take-a-survey-spa/survey-pages/company-selection/company-selection.component';
import { ExperienceComponent } from './take-a-survey-spa/survey-pages/experience/experience.component';
import { PsychologicalSafetyComponent } from './take-a-survey-spa/survey-pages/psychological-safety/psychological-safety.component';
import { DiversityComponent } from './take-a-survey-spa/survey-pages/diversity/diversity.component';
import { UpwardMobilityComponent } from './take-a-survey-spa/survey-pages/upward-mobility/upward-mobility.component';
import { RetentionComponent } from './take-a-survey-spa/survey-pages/retention/retention.component';
import { RecruitmentComponent } from './take-a-survey-spa/survey-pages/recruitment/recruitment.component';
import { GeneralComponent } from './take-a-survey-spa/survey-pages/general/general.component';
import { ProfileComponent } from './take-a-survey-spa/survey-pages/profile/profile.component';
import { TakeASurveyStartComponent } from './take-a-survey-spa/survey-pages/take-a-survey-start/take-a-survey-start.component';
import { SurveyService } from './take-a-survey-spa/survey.service';
import { CompanyPageComponent } from './company-page/company-page.component';
import { NgChartsModule } from 'ng2-charts';
import { CompanyReviewComponent } from './company-review/company-review.component';

const appRoutes: Routes = [
  { path: '', component: HomeSpaComponent},
  { path: 'take-a-survey', component: TakeASurveySpaComponent, children: [
    { path: '', component: TakeASurveyStartComponent},
    { path: 'select-company', component: CompanySelectionComponent},
    { path: 'experience', component: ExperienceComponent},
    { path: 'psychological-safety', component: PsychologicalSafetyComponent},
    { path: 'diversity', component: DiversityComponent},
    { path: 'upward-mobility', component: UpwardMobilityComponent},
    { path: 'retention', component: RetentionComponent},
    { path: 'recruitment', component: RecruitmentComponent},
    { path: 'general', component: GeneralComponent},
  ]},
  { path: 'companies', component: CompaniesComponent},
  { path: 'company-page', component: CompanyPageComponent},
  { path: 'test', component: CompanyReviewComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    TransparentHeaderComponent,
    HomeSpaComponent,
    SearchBarComponent,
    FooterComponent,
    HomeSectionComponent,
    TakeASurveySpaComponent,
    HeaderSwitchDirective,
    CompaniesComponent,
    CompanyBlockComponent,
    CompanySelectionComponent,
    ExperienceComponent,
    PsychologicalSafetyComponent,
    DiversityComponent,
    UpwardMobilityComponent,
    RetentionComponent,
    RecruitmentComponent,
    GeneralComponent,
    ProfileComponent,
    TakeASurveyStartComponent,
    CompanyPageComponent,
    CompanyReviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    NgChartsModule,
    BrowserAnimationsModule,
    SwiperModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
