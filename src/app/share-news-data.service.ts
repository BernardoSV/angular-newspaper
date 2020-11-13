import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareNewsDataService {
  newsData: any;
  constructor() {}
  setNewsData(data) {
    this.newsData = data;
  }

  getNewsData() {
    return this.newsData;
  }
}
