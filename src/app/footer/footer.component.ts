import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  github: string;
  year: number;

  constructor() {
    this.github = 'https://github.com/asdelday/angular2-reddit-clone.git';
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
