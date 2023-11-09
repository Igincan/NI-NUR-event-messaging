import {DataElement} from "./DataElement";

export interface Message extends DataElement{
  type: "event" | "group";
  eventOrGroupIds: number[];
  subject: string;
  message: string;
  date: string;
  time: string;
}
