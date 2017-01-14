import { Component, OnInit } from '@angular/core';
import { toDoService } from '../services/to-do.service';

@Component({
  selector: 'items-to-do',
  templateUrl: './items-to-do.component.html',
  styleUrls: ['./items-to-do.component.css']
})
export class ItemsToDoComponent implements OnInit {

  constructor(public toDoService: toDoService) { }
  public itemsCompleted: number;


  ngOnInit() {
  	this.itemsCompleted = 0;
  }

}
