import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataBindTest = "If this string shows up, data binding worked."
  myString = "i will become hokage";
  myBoolean = true;
  constructor() { }

  ngOnInit() {
  }

}
