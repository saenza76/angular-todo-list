import { Component, OnInit, Input } from '@angular/core';
import { toDoService } from '../services/to-do.service';

@Component({
  selector: 'items-done',
  templateUrl: './items-done.component.html',
  styleUrls: ['./items-done.component.css']
})
export class ItemsDoneComponent implements OnInit {

  constructor(public toDoService: toDoService) { }

  ngOnInit() {
  }
  @Input()
  showItemsDone: number;

}
