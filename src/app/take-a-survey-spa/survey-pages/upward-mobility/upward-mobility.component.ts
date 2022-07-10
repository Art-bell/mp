import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../survey.service';

@Component({
  selector: 'app-upward-mobility',
  templateUrl: './upward-mobility.component.html',
  styleUrls: ['./upward-mobility.component.scss']
})
export class UpwardMobilityComponent implements OnInit {

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
  }

  moveToNextPage() {
    this.surveyService.pageSet.emit(1);
    console.log("Sending event to parent to move to next page.")
  }

}
