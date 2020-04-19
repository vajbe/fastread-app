import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../services/news-service.service';
import { NewsCardModel } from '../../models/news-card.model';
import { NewscontentShortenPipe } from '../../pipes/newscontent-shorten.pipe';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  items = ["1", "2", "3"];
  tempData = [] as NewsCardModel[];

  constructor(private newsService: NewsServiceService) {
    this.getNewsCards();
  }

  ngOnInit(): void {
  }

  getNewsCards() {
    this.newsService
      .getNewsCards()
      .subscribe((data) => {
        this.tempData = data;
        console.log(this.tempData);
      });
  }

}
