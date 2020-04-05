import React, { useState, MutableRefObject } from 'react';
import moment, { Moment } from 'moment';

import { CalendarDate } from 'types';
import { DEFAULT_CALENDAR_DAY_CLASS, HIDDEN_CALENDAR_DAY_CLASS } from '../utils/date-helper';

interface Props {
    calendarDate: CalendarDate;
    calendarRef: MutableRefObject<Array<HTMLButtonElement>>;
    dayMoment: Moment;
    handleClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    weekNumber: number;
}

const CalendarDay: React.FC<Props> = ({ calendarDate, calendarRef, dayMoment, handleClick, weekNumber }) => {
    const refIndex = weekNumber * 7 + dayMoment.day();
    const setCalendarRef = (el: HTMLButtonElement): void => {
        if (calendarRef.current) calendarRef.current[refIndex] = el;
    };

    const isDifferentMonth = dayMoment.month() !== moment(calendarDate).month();
    const calendarDayClass = isDifferentMonth ? HIDDEN_CALENDAR_DAY_CLASS : DEFAULT_CALENDAR_DAY_CLASS;

    return (
        <button onClick={handleClick} className={calendarDayClass} key={refIndex} ref={setCalendarRef} value={refIndex}>
            {dayMoment.format('D')}
        </button>
    );
};

export default CalendarDay;
