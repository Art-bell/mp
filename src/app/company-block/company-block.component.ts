import { Component, ViewEncapsulation, OnInit, Input } from "@angular/core";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: 'company-block',
  templateUrl: './company-block.component.html',
  styleUrls: ['./company-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CompanyBlockComponent implements OnInit {


  constructor() { }
  @Input() thumbnailData: companyThumbnailData = {imagePath: "", companyName: "", pageUrl: ""};

  ngOnInit(): void {
  }

}

interface companyThumbnailData {
  imagePath: string;
  companyName: string;
  pageUrl: string
}