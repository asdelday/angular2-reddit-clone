import { Component } from '@angular/core';
import Article from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  articles: Article[];

  constructor() {
    this.title = 'Reddit Clone';
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 'One framework. Mobile & desktop.', 3),
      new Article('Fullstack', 'http://fullstack.io', undefined, 2),
      new Article('Angular Homepage', 'http://angular.io', 'One framework. Mobile & desktop.', 1),
    ];
  }

  addArticle = (title: HTMLInputElement, link: HTMLInputElement, description: HTMLInputElement): boolean => {
    console.log(
      `Adding article
        - title: ${title.value}
        - link: ${link.value}
        - description: ${description.value}`
    );

    const article = new Article(title.value, link.value, description.value, 0);

    this.articles.push(article);
    title.value = '';
    link.value = '';
    description.value = '';

    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
