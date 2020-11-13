import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareNewsDataService } from '../share-news-data.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  news: any;
  constructor(
    private shareNewsService: ShareNewsDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const index = Number(this.route.snapshot.paramMap.get('id'));
    const data = this.shareNewsService.getNewsData();
    this.news = data.articles[index];
  }
}
