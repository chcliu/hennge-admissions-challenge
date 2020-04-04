import React from 'react';

import { DateRange } from 'types';
import { formatDate } from '../utils/date-helper';

interface Props {
    dateRange: DateRange;
    toggleDatePicker: () => void;
    tempDateRange: DateRange;
}

const DateInput: React.FC<Props> = ({ dateRange, toggleDatePicker, tempDateRange }) => {
    const hasTempDates = Boolean(tempDateRange?.startDate && tempDateRange?.endDate);
    const { startDate, endDate } = hasTempDates ? tempDateRange : dateRange;

    return (
        <div className="date-input" onClick={toggleDatePicker}>
            <img className="date-input__icon" src="../../public/images/icon_calender.svg" />
            <div className="date-input__text">
                {formatDate(startDate)} - {formatDate(endDate)}
            </div>
        </div>
    );
};

export default DateInput;
