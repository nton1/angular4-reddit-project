import { Component } from '@angular/core';
import {Article} from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  articles: Article[];

    constructor() {
      this.articles = [
        new Article('Google article', 'http://www.google.it', 4),
        new Article('Google article', 'http://www.google.it', 4),
        new Article('Google article', 'http://www.google.it', 4)
      ]
    }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value}and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
}
