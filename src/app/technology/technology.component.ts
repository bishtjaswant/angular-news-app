import { Component, OnInit } from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'news-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  techNewsData:any[]=[];

  constructor(
    private newsService:NewsService
  ) { }

  ngOnInit(): void {
    this.newsService.getTopTechnologyNews().subscribe(data=>{
           this.techNewsData=data.articles;
     console.log(data.articles)
    })
  }

}
