import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-link-form',
  templateUrl: './add-link-form.component.html',
  styleUrls: ['./add-link-form.component.css']
})
export class AddLinkFormComponent implements OnInit {
  @Input() addArticle: Function;

  constructor() { }

  ngOnInit() {
  }

}
