import { Injectable } from "@angular/core";
import { Group } from "../models/group";
import { GroupForm } from "../models/forms/group-form";
import {AbstractDataService} from "./abstract-data.service";
import {GROUPS} from "../mocks/GroupsData";

@Injectable({
  providedIn: "root"
})
export class GroupsService extends AbstractDataService<Group>{
    constructor() {
        super(GROUPS);
    }

    override add(group: Group): number {
    // if (!group.name) {
    //   throw new Error("Missing name in group");
    // }

    this._elems.unshift({ id: ++this._maxId, name: group.name });
    return this._maxId;
  }


  convertElementToString(elem: Group): string {
    return elem.name;
  }
}
