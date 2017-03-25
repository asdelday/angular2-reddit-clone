import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  votes: number;
  title: string;
  description: string;
  link: string;

  constructor() {
    this.votes = 10;
    this.title = 'Angular 2';
    this.description = 'lorem asdasd as das da asdasd a ads asd.';
    this.link = 'http://angular.io';
  }

  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

  ngOnInit() {
  }

}
