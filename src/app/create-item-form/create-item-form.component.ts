import { Component, OnInit } from '@angular/core';
import { toDoService } from '../services/to-do.service';
@Component({
  selector: 'create-item-form',
  templateUrl: './create-item-form.component.html',
  styleUrls: ['./create-item-form.component.css']
})
export class CreateItemFormComponent implements OnInit {

  constructor(private toDoService: toDoService) { }
  public itemTitle: string;
  public itemInfo: string;
  postItem(){
  	var newItem = {
  		'title': this.itemTitle,
  		'info': this.itemInfo,
  		'taskNumber': this.toDoService.items.length + 1,
  		'completed': false
  	}
  	this.toDoService.items.push(newItem);
  	this.itemTitle = "";
  	this.itemInfo = "";
  	console.log(this.toDoService.items);
  }

  ngOnInit() {
  }

}
