import { Dispatch, SetStateAction } from 'react';

export interface DateRange {
    startDate?: Date;
    endDate?: Date;
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
    currentTarget: T;
};

export type SetNumber = Dispatch<SetStateAction<number>>;

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
