import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NewsCardModel } from '../models/news-card.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getNewsCards(): Observable<NewsCardModel[]> {
    return this
      .httpClient
      .get("http://newsapi.org/v2/top-headlines")
      .pipe(
        map((data: any) =>
          data.articles.map((item: any) => {
            return this.mapResponseToNewsModel(item)
          }))
      );
  }

  mapResponseToNewsModel(item: any): NewsCardModel {
    const model = new NewsCardModel();
    model.content = item.content;
    model.description = item.description;
    model.publishedAt = item.publishedAt;
    model.urlToImage = item.urlToImage;
    model.url = item.url;
    return model;
  }

}
