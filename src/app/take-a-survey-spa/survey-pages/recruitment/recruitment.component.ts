import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../survey.service';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})
export class RecruitmentComponent implements OnInit {

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
  }

  moveToNextPage() {
    this.surveyService.pageSet.emit(1);
    console.log("Sending event to parent to move to next page.")
  }

}
