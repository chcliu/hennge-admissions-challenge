import React, { useState } from 'react';

import { DateRange, SetBoolean, SetDateRange } from '../types/index';

import CalendarInput from './CalendarInput';

interface Props {
    dateRange: DateRange;
    setDateRange: SetDateRange;
    setIsLoading: SetBoolean;
}

const DateRangeBar: React.FC<Props> = ({ dateRange, setDateRange, setIsLoading }) => {
    const [tempDateRange, setTempDateRange] = useState<DateRange | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = (): void => setIsOpen(!isOpen);
    const onSearchButtonClick = (): void => {
        if (tempDateRange) {
            setDateRange(tempDateRange);
            setIsLoading(true);
        }
    };

    return (
        <div className="date-range-bar">
            <CalendarInput dateRange={dateRange} tempDateRange={tempDateRange} onClick={toggleIsOpen} />
            <button className="date-range-bar__button" onClick={onSearchButtonClick}>
                <img className="date-range-bar__search-icon" src="../../public/images/icon_search.svg" />
            </button>
        </div>
    );
};

export default DateRangeBar;
