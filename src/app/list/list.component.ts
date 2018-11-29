import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data = [
    {
      name: 'thahir',
      id: '1',
      age: '20',
    },
    {
      name: 'mothil',
      id: '2',
      age: '20',
    },
    {
      name: 'rakesh',
      id: '3',
      age: '20'
    }];
  constructor() { }

  ngOnInit() {
  }

}
