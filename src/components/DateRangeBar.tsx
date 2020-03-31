import React, { Dispatch, SetStateAction, useState } from 'react';

import { DateRange } from '../types/index';

import CalendarInput from './CalendarInput';

interface Props {
    dateRange: DateRange;
    setDateRange: Dispatch<SetStateAction<DateRange>>;
}

const DateRangeBar: React.FC<Props> = ({ dateRange, setDateRange }) => {
    const [tempDateRange, setTempDateRange] = useState<DateRange | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = (): void => setIsOpen(!isOpen);

    return (
        <div className="date-range-bar">
            <CalendarInput dateRange={dateRange} tempDateRange={tempDateRange} onClick={toggleIsOpen} />
        </div>
    );
};

export default DateRangeBar;
