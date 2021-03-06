import { IMyDate } from "../interfaces/my-date.interface";
import { IMyDateTime } from "../interfaces/my-datetime.interface";
import { IMyDateRange } from "../interfaces/my-date-range.interface";
import { IMyMonth } from "../interfaces/my-month.interface";
import { IMyMonthLabels } from "../interfaces/my-month-labels.interface";
import { IMyMarkedDates } from "../interfaces/my-marked-dates.interface";
import { IMyMarkedDate } from "../interfaces/my-marked-date.interface";
import { IMyDateFormat } from "../interfaces/my-date-format.interface";
export declare class UtilService {
    weekDays: Array<string>;
    isDateValid(dateStr: string, dateFormat: string, minYear: number, maxYear: number, disableUntil: IMyDateTime, disableSince: IMyDateTime, disableWeekends: boolean, disableWeekDays: Array<string>, disableDays: Array<IMyDateTime>, disableDateRanges: Array<IMyDateRange>, monthLabels: IMyMonthLabels, enableDays: Array<IMyDateTime>): IMyDateTime;
    getDateValue(dateStr: string, dateFormat: string, delimeters: Array<string>): Array<IMyDateFormat>;
    getMonthNumberByMonthName(df: IMyDateFormat, monthLabels: IMyMonthLabels): number;
    getNumberByValue(df: IMyDateFormat): number;
    getDateFormatDelimeters(dateFormat: string): Array<string>;
    parseDefaultMonth(monthString: string): IMyMonth;
    formatDate(date: IMyDateTime, dateFormat: string, monthLabels: IMyMonthLabels): string;
    preZero(val: number): string;
    isDisabledDay(date: IMyDateTime, minYear: number, maxYear: number, disableUntil: IMyDateTime, disableSince: IMyDateTime, disableWeekends: boolean, disableWeekDays: Array<string>, disableDays: Array<IMyDateTime>, disableDateRanges: Array<IMyDateRange>, enableDays: Array<IMyDateTime>): boolean;
    isMarkedDate(date: IMyDateTime, markedDates: Array<IMyMarkedDates>, markWeekends: IMyMarkedDate): IMyMarkedDate;
    isHighlightedDate(date: IMyDateTime, sunHighlight: boolean, satHighlight: boolean, highlightDates: Array<IMyDateTime>): boolean;
    getWeekNumber(date: IMyDate): number;
    isMonthDisabledByDisableUntil(date: IMyDateTime, disableUntil: IMyDateTime): boolean;
    isMonthDisabledByDisableSince(date: IMyDateTime, disableSince: IMyDateTime): boolean;
    isInitializedDate(date: IMyDateTime): boolean;
    isSameDate(d1: IMyDateTime, d2: IMyDateTime): boolean;
    getTimeInMilliseconds(date: IMyDateTime): number;
    getDayNumber(date: IMyDateTime): number;
    getWeekDays(): Array<string>;
    getWeekdayIndex(wd: string): number;
}
