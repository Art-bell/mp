import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-review',
  templateUrl: './company-review.component.html',
  styleUrls: ['./company-review.component.scss']
})
export class CompanyReviewComponent implements OnInit {
  @Input() reviewerImage: string = "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png";
  @Input() rating: number = 0;
  @Input() openResponse: string = "";
  @Input() createdDate: Date | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
