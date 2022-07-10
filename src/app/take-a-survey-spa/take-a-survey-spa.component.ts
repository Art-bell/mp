import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { SurveyService } from './survey.service';

@Component({
  selector: 'app-take-a-survey-spa',
  templateUrl: './take-a-survey-spa.component.html',
  styleUrls: ['./take-a-survey-spa.component.scss']
})
export class TakeASurveySpaComponent implements OnInit {
  currentPage: number = 0;
  constructor(private router: Router, private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveyService.pageSet.subscribe((direction) => {
      console.log("Changing value");
      if(direction == 1) {
        this.currentPage = this.currentPage + 1;
      } else if(this.currentPage > 0) {
        this.currentPage = this.currentPage - 1;
      }
      switch(this.currentPage) {
        case 1:
          this.router.navigate(['/take-a-survey', 'select-company']);
          break;
        case 2:
            this.router.navigate(['/take-a-survey', 'experience']);
            break;
        case 3:
            this.router.navigate(['/take-a-survey', 'psychological-safety']);
            break;
        case 4:
            this.router.navigate(['/take-a-survey', 'diversity']);
            break;
        case 5:
            this.router.navigate(['/take-a-survey', 'upward-mobility']);
            break;
        case 6:
            this.router.navigate(['/take-a-survey', 'retention']);
            break;
        case 7:
            this.router.navigate(['/take-a-survey', 'recruitment']);
            break;
        case 8:
            this.router.navigate(['/take-a-survey', 'general']);
            break;

          
        
        default:
          this.router.navigate(['/take-a-survey', '']);
      }
    })
    setInterval(() => console.log(this.currentPage), 5000);
  }

  testMethod() {
    console.log("Clicking start")
  }

  // I need a bunch of event listeners here that will dynamically change the page.
  // Development: Actually since Im using routes within this component and 
  // wont have the children directly available, I need to use DI with a service.
  // Each of the child components as well as the parent should subscribe to this
  // service and determine which buttons are disabled based on the data.
  onNextPage() {
    switch(this.currentPage) {

    }
  }

  onPreviousPage() {
    switch(this.currentPage) {

    }
  }
}
