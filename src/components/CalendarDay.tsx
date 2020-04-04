import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import { CalendarDate } from 'types';

interface Props {
    calendarDate: CalendarDate;
    day: Moment;
    handleClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

const CalendarDay: React.FC<Props> = ({ calendarDate, day, handleClick }) => {
    // const [isSelected, setIsSelected] = useState(false);
    const formattedDay = day.format('D');
    const formattedValue = day.format('YYYY/M/D');

    const isDifferentMonthClass = day.month() === moment(calendarDate).month() ? '' : ' calendar__different-month';
    // const isSelectedClass = isSelected ? ' calendar__selected' : '';
    return (
        <button
            onClick={handleClick}
            className={'calendar__day' + isDifferentMonthClass}
            value={formattedValue}
            key={formattedDay}
        >
            {formattedDay}
        </button>
    );
};

export default CalendarDay;
