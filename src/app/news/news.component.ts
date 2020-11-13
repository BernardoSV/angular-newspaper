import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ShareNewsDataService } from '../share-news-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: any;

  searchKeyword: string = '';
  categoryUsed: string = null;
  isKeywordTrue: boolean = false;

  constructor(
    private _http: HttpService,
    private shareNewsService: ShareNewsDataService
  ) {}

  shareNews() {
    this.shareNewsService.setNewsData(this.news);
  }

  findNews(pageNumber: number, category: string, keywords?: string) {
    this._http.getNews(pageNumber, category, keywords).subscribe((data) => {
      this.news = data;
    });
    this.categoryUsed = null;
    this.isKeywordTrue = true;
  }

  findNewsByCategory(pageNumber: number, category: string) {
    this._http.getNews(pageNumber, category).subscribe((data) => {
      this.news = data;
    });
    this.categoryUsed = category;
    this.isKeywordTrue = false;
  }

  ngOnInit() {
    this.searchKeyword = '';
    this.findNewsByCategory(1, 'General');
  }
}
