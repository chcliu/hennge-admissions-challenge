import React, { useState } from 'react';
import moment from 'moment';

import Calendar from './Calendar';
import DatePickerHeader from './DatePickerHeader';

import { DateRange, SetDateRange } from 'types';
import { convertToCalendarDate } from '../utils/date-helper';

interface Props {
    setTempDateRange: SetDateRange;
    showDatePicker: boolean;
    tempDateRange: DateRange;
}

const DatePicker: React.FC<Props> = ({ setTempDateRange, showDatePicker, tempDateRange }) => {
    const [calendarDate, setCalendarDate] = useState(convertToCalendarDate(moment()));

    const datePickerClass = showDatePicker ? '' : ' hidden';

    return (
        <div className={'date-picker' + datePickerClass}>
            <DatePickerHeader calendarDate={calendarDate} setCalendarDate={setCalendarDate} />
            <Calendar setTempDateRange={setTempDateRange} tempDateRange={tempDateRange} calendarDate={calendarDate} />
        </div>
    );
};

export default DatePicker;
