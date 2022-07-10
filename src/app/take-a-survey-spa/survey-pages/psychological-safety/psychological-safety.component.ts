import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../survey.service';

@Component({
  selector: 'app-psychological-safety',
  templateUrl: './psychological-safety.component.html',
  styleUrls: ['./psychological-safety.component.scss']
})
export class PsychologicalSafetyComponent implements OnInit {

  constructor(private surveyService:SurveyService) { }

  ngOnInit(): void {
  }

  moveToNextPage() {
    this.surveyService.pageSet.emit(1);
    console.log("Sending event to parent to move to next page.")
  }
}
