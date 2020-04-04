import React, { useRef } from 'react';
import moment, { Moment } from 'moment';

import { CalendarDate, DateRange, SetDateRange } from 'types';
import { createCalendar, DAYS_OF_THE_WEEK } from '../utils/date-helper';

import CalendarDay from './CalendarDay';

interface Props {
    calendarDate: CalendarDate;
    setTempDateRange: SetDateRange;
    tempDateRange: DateRange;
    toggleDatePicker: () => void;
}

const Calendar: React.FC<Props> = ({ calendarDate, setTempDateRange, tempDateRange, toggleDatePicker }) => {
    const weeks = createCalendar(calendarDate);
    const { startDate, endDate } = tempDateRange || {};

    // const calendarDayRefs = useRef([]);

    const onCalendarClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        const element = event?.target as HTMLButtonElement;
        const date = new Date(element.value);

        if (!startDate || startDate > date || endDate) {
            setTempDateRange({ startDate: date, endDate: undefined });
        } else if (startDate && startDate <= date && !endDate) {
            setTempDateRange({ startDate, endDate: date });
            toggleDatePicker();
        }

        element.className += ' calendar__selected';
    };
    return (
        <div className="calendar">
            <div className="calendar__dotw">
                {DAYS_OF_THE_WEEK.map((dayOfTheWeek) => (
                    <span className="calendar__day" key={dayOfTheWeek}>
                        {dayOfTheWeek}
                    </span>
                ))}
            </div>
            {weeks.map((week: Array<Moment>, weekNumber: number) => (
                <div className="calendar__week" key={weekNumber}>
                    {week.map((day) => (
                        <CalendarDay
                            key={day.format('D')}
                            calendarDate={calendarDate}
                            day={day}
                            handleClick={onCalendarClick}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Calendar;
