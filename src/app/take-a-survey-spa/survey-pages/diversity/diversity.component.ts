import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../survey.service';

@Component({
  selector: 'app-diversity',
  templateUrl: './diversity.component.html',
  styleUrls: ['./diversity.component.scss']
})
export class DiversityComponent implements OnInit {

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
  }

  moveToNextPage() {
    this.surveyService.pageSet.emit(1);
    console.log("Sending event to parent to move to next page.")
  }
}
