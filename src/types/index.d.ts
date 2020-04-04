import { Dispatch, SetStateAction } from 'react';
import { Moment } from 'moment';

export interface CalendarDate {
    year: number;
    month: number;
    day: number;
}

export interface DateRange {
    startDate?: Date;
    endDate?: Date;
}

export type SetCalendarDate = Dispatch<SetStateAction<CalendarDate>>;
export type SetDateRange = Dispatch<SetStateAction<DateRange>>;
export type SetMoment = Dispatch<SetStateAction<Moment>>;
export type SetNumber = Dispatch<SetStateAction<number>>;

export interface EmailType {
    from: string;
    to: string;
    subject: string | undefined;
    body: string;
    messageCount: number | undefined;
    hasAttachment: boolean | undefined;
    date: Date;
}
