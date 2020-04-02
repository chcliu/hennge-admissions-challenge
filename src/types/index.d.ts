import { Dispatch, SetStateAction } from 'react';

export interface DateRange {
    startDate: Date;
    endDate: Date;
}

export type SetBoolean = Dispatch<SetStateAction<boolean>>;

export type SetDateRange = Dispatch<SetStateAction<DateRange>>;

export interface EmailType {
    from: string;
    to: string;
    subject: string | undefined;
    body: string;
    messageCount: number | undefined;
    hasAttachment: boolean | undefined;
    date: Date;
}
