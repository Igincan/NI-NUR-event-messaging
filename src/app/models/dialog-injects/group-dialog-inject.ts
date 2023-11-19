import {FormType} from "../enums/form-type";
import {Group} from "../group";

export interface GroupDialogInject {
  group?: Group;
  showMultiselect: boolean;
  type: FormType;
}
