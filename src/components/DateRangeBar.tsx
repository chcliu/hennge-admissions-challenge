import React, { useState } from 'react';

import { DateRange, SetDateRange } from '../types/index';

import DateInput from './DateInput';
import DatePicker from './DatePicker';

interface Props {
    dateRange: DateRange;
    setDateRange: SetDateRange;
}

const DateRangeBar: React.FC<Props> = ({ dateRange, setDateRange }) => {
    const [tempDateRange, setTempDateRange] = useState<DateRange>({});
    const [showDatePicker, setShowDatePicker] = useState(false);

    const toggleDatePicker = (): void => {
        setShowDatePicker(!showDatePicker);
    };
    const onSearchButtonClick = (): void => {
        if (tempDateRange?.startDate && tempDateRange?.endDate) {
            setDateRange(tempDateRange);
            toggleDatePicker();
        }
    };

    return (
        <div className="date-range-bar">
            <DateInput dateRange={dateRange} tempDateRange={tempDateRange} toggleDatePicker={toggleDatePicker} />
            <button className="date-range-bar__button clickable" onClick={onSearchButtonClick}>
                <img className="date-range-bar__search-icon" src="../../public/images/icon_search.svg" />
            </button>
            <DatePicker
                setTempDateRange={setTempDateRange}
                showDatePicker={showDatePicker}
                tempDateRange={tempDateRange}
            />
        </div>
    );
};

export default DateRangeBar;
