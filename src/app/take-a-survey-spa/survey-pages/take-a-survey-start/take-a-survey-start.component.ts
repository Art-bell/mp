import { Component, OnInit, Output } from '@angular/core';
import { SurveyService } from '../../survey.service';

@Component({
  selector: 'app-take-a-survey-start',
  templateUrl: './take-a-survey-start.component.html',
  styleUrls: ['./take-a-survey-start.component.scss']
})
export class TakeASurveyStartComponent implements OnInit {

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
  }

  moveToNextPage() {
    this.surveyService.pageSet.emit(1);
    console.log("Sending event to parent to move to next page.")
  }

}
