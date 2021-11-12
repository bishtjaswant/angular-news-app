import { Component, OnInit } from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'news-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthNewsData:any[]=[];

  constructor(
    private newsService:NewsService
  ) { }

  ngOnInit(): void {
    this.newsService.getTopHealthNews().subscribe(data=>{
      this.healthNewsData=data.articles;

    })
  }


}
