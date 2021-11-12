import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'news-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  topHeadlineData: any[] = [];

  constructor(
    private newsService: NewsService
  ) {
  }

  ngOnInit(): void {

    this.newsService.getTopHeadline().subscribe(data => {
      console.log("output", data)
      this.topHeadlineData = data.articles;
    });

  }


  trackByFn(i: number) {
    console.log(i)
  }

}
