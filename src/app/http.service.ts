import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getNews(pageNumber: number, category: string, keywords?: string) {
    if (!keywords) {
      return this.http.get(
        `https://newsapi.org/v2/top-headlines?country=us&page=${pageNumber}&category=${category}&pageSize=6&apiKey=5fe3c455000f404bb285afe0e6a2bb7b`
      );
    } else {
      return this.http.get(
        `https://newsapi.org/v2/top-headlines?q=${keywords}&category=general&pageSize=6&page=${pageNumber}&apiKey=5fe3c455000f404bb285afe0e6a2bb7b`
      );
    }
  }
}
