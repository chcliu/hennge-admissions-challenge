import { Dispatch, SetStateAction } from 'react';

export interface DateRange {
    startDate: Date;
    endDate: Date;
}

export type SetBoolean = Dispatch<SetStateAction<boolean>>;

export type SetDateRange = Dispatch<SetStateAction<DateRange>>;
