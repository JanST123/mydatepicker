import { IMyDateTime } from "./my-datetime.interface";
export interface IMyDateModel {
    date: IMyDateTime;
    jsdate: Date;
    formatted: string;
    epoc: number;
}
