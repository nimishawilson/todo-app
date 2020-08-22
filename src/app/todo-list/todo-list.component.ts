import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  isNoteChecked: boolean;
  toDoListData: any;

  constructor(public dialog: MatDialog) {}

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
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      height: '350px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
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

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'pop-up.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
