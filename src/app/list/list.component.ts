import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data = [];
  
  constructor(private serv2: ListService) {
    const ls = this.serv2.getList();
    ls.subscribe((value: any[]) => {
      this.data = value
    })
   }

  ngOnInit() {
  }

}
