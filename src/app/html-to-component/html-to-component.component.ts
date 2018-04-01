import { Component, OnInit } from '@angular/core';
import {logging} from "selenium-webdriver";

@Component({
  selector: 'app-html-to-component',
  templateUrl: './html-to-component.component.html',
  styleUrls: ['./html-to-component.component.css']
})
export class HtmlToComponentComponent implements OnInit {

  sendText(text){
    console.log(text.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
