import {Component, Inject} from "@angular/core";

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GroupDialogInject} from "src/app/models/dialog-injects/group-dialog-inject";
import {PeopleService} from "../../../services/people.service";
import {GroupDialogData} from "../../../models/dialog-data/group-dialog-data";
import {MatSnackBar} from "@angular/material/snack-bar";
import {GlobalDialogCreator} from "../../../services/global.dialog.creator.service";

@Component({
  selector: "app-group-dialog",
  templateUrl: "./group-dialog.component.html",
  styleUrls: ["./group-dialog.component.scss"]
})
export class GroupDialogComponent {

  data: GroupDialogData;

  // dialoge: FormGroup;


  constructor(private snackBar: MatSnackBar, public dialogRef: MatDialogRef<GroupDialogComponent>, @Inject(MAT_DIALOG_DATA) public inject: GroupDialogInject,
              public peopleService: PeopleService,
  ) {
    if (inject.group) {
      this.data = {
        group: inject.group,
        showMultiselect: inject.showMultiselect,
        membersIds: this.getPeopleInGroupIds(inject.group.id)
      };
    }
    else {
      this.data = {
        group: {id: 0, name: ""},
        showMultiselect: inject.showMultiselect,
        membersIds: []
      };
    }

  }

  validateAndClose(): void {
    if (this.data.group.name && this.data.group.name != "" ) {
      this.dialogRef.close(this.data);
    } else {
      this.snackBar.open("Please fill all required fields.")
    }
  }

  addNewPerson(): void {
    GlobalDialogCreator.showAddPersonDialogCallback()
  }

  getPeopleInGroupIds(groupId: number): number[] {
    return this.peopleService.getAll().filter(p => p.groupIds.includes(groupId || -1)).map(p => p.id);
  }

  saveMemberIds(ids: number[]): void {
    this.data.membersIds = ids;
  }
}
