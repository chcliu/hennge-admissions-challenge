import React from 'react';
import moment from 'moment';

import { CalendarDate, SetCalendarDate } from '../types/index';
import { convertToCalendarDate } from '../utils/date-helper';

interface Props {
    calendarDate: CalendarDate;
    setCalendarDate: SetCalendarDate;
}

const DatePicker: React.FC<Props> = ({ calendarDate, setCalendarDate }) => {
    return (
        <div className="date-picker__header">
            <span
                className="date-picker__header-child clickable"
                onClick={(): void => {
                    const previousMonth = moment(calendarDate).clone().subtract({ month: 1 });
                    setCalendarDate(convertToCalendarDate(previousMonth));
                }}
            >
                {'<'}
            </span>
            <span className="date-picker__header-child">
                {moment(calendarDate).format('MMMM')} {moment(calendarDate).format('YYYY')}
            </span>
            <span
                className="date-picker__header-child clickable"
                onClick={(): void => {
                    const nextMonth = moment(calendarDate).clone().add({ month: 1 });
                    setCalendarDate(convertToCalendarDate(nextMonth));
                }}
            >
                {'>'}
            </span>
        </div>
    );
};

export default DatePicker;
