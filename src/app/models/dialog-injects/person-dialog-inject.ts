import { PersonForm } from "../forms/person-form";
import { Group } from "../group";
import { FormType } from "../enums/form-type";
import {Person} from "../person";

export interface PersonDialogInject {
  person: Person;
  showMultiselect: boolean;
  groups: Group[];
  type: FormType;
}
