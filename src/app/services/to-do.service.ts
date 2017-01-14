import {Injectable} from '@angular/core';
@Injectable()

class Item {
	title: string;
	info: string;
	taskNumber: number;
	completed: boolean;
}

export class toDoService {
	public items: Item[] = [];
}