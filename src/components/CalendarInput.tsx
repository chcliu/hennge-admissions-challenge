import React from 'react';

import { DateRange } from '../types/index';
import { formatDate } from '../utils/date-helper';

interface Props {
    dateRange: DateRange;
    toggleDatePicker: () => void;
    tempDateRange: DateRange;
}

const CalendarInput: React.FC<Props> = ({ dateRange, toggleDatePicker, tempDateRange }) => {
    const hasTempDates = Boolean(tempDateRange?.startDate && tempDateRange?.endDate);
    const { startDate, endDate } = hasTempDates ? tempDateRange : dateRange;

    return (
        <div className="calendar-input" onClick={toggleDatePicker}>
            <img className="calendar-input__icon" src="../../public/images/icon_calender.svg" />
            <div className="calendar-input__dates">
                {formatDate(startDate)} - {formatDate(endDate)}
            </div>
        </div>
    );
};

export default CalendarInput;
