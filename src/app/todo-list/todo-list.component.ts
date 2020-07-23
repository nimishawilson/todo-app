import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  isNoteChecked: boolean;
  toDoListData: any;

  constructor() {}

  ngOnInit(): void {
    this.toDoListData = [
      {
        id: 1,
        title: 'maths',
        description:
          'sfsff sfjfsfs fjks afmssmfkmsdkfkf smfkmsdkfkf jfnjsdnf sdjfnsdf sjfndfns',
        complete: false,
      },
      {
        id: 2,
        title: 'sjdnf',
        description:
          'loriujm ipsum jnjso sf t iis fs fs dfjdssmfkmsdkfkf  jfnsdf sjfndfns dfsndfsdfn',
        complete: false,
      },
      {
        id: 3,
        title: 'dfjsdfj',
        description:
          'sfsff sfjfsfs fjks afmssmfkmsdkfkf smfkmsdkfkf jfnjsdnf sdjfnsdf sjfndfns',
        complete: true,
      },
      {
        id: 4,
        title: 'social',
        description:
          'sfsff sfjfsfs fjks afmssmfkmsdkfkf smfkmsdkfkf jfnjsdnf sdjfnsdf sjfndfns',
        complete: false,
      },
    ];
  }

  markAsDone(event, id) {
    this.isNoteChecked = event.checked;
    this.updateCheckedStatus(id, this.isNoteChecked);
  }

  updateCheckedStatus(id, checkedStatus: boolean) {
    for (let i in this.toDoListData) {
      if (this.toDoListData[i].id == id) {
        this.toDoListData[i].complete = checkedStatus;
        break;
      }
    }
  }
}
