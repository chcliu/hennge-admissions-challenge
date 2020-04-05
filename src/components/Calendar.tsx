import React, { useEffect, useRef, useState } from 'react';
import { Moment } from 'moment';
import _ from 'lodash';

import { CalendarDate, DateRange, SetDateRange } from 'types';
import {
    createCalendar,
    DAYS_IN_A_WEEK,
    DAYS_OF_THE_WEEK,
    DEFAULT_CALENDAR_DAY_CLASS,
    DOUBLE_SELECTED_CALENDAR_DAY_CLASS,
    SELECTED_CALENDAR_DAY_CLASS,
} from '../utils/date-helper';

import CalendarDay from './CalendarDay';

interface Props {
    calendarDate: CalendarDate;
    setTempDateRange: SetDateRange;
    tempDateRange: DateRange;
}

const Calendar: React.FC<Props> = ({ calendarDate, setTempDateRange, tempDateRange }) => {
    const [selectedDates, setSelectedDates] = useState<Array<HTMLButtonElement>>([]);
    const [unselectedDates, setUnselectedDates] = useState<Array<HTMLButtonElement>>([]);
    const [weeks, setWeeks] = useState(createCalendar(calendarDate));

    const calendarRef = useRef<Array<HTMLButtonElement>>([]);

    useEffect(() => {
        setWeeks(createCalendar(calendarDate));
        calendarRef.current = new Array(weeks.length * DAYS_IN_A_WEEK);
    }, [calendarDate]);

    const setCalendarClasses = (): void => {
        unselectedDates.forEach((element) => (element.className = DEFAULT_CALENDAR_DAY_CLASS));

        selectedDates.forEach((element) => (element.className = SELECTED_CALENDAR_DAY_CLASS));

        if (selectedDates.length === 2) {
            const firstSelectedDate = selectedDates[0];
            const secondSelectedDate = selectedDates[1];
            const isSameSelected = firstSelectedDate.value === secondSelectedDate.value;

            if (isSameSelected) firstSelectedDate.className = DOUBLE_SELECTED_CALENDAR_DAY_CLASS;
        }
    };

    useEffect(() => setCalendarClasses(), [selectedDates, unselectedDates]);

    const { startDate, endDate } = tempDateRange || {};

    const onCalendarClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        const element = event?.target as HTMLButtonElement;
        const refIndex = Number(element.value);
        const currentElement = calendarRef.current[refIndex];

        const dayNumber = refIndex % DAYS_IN_A_WEEK;
        const weekNumber = (refIndex - dayNumber) / 7;

        const date = weeks[weekNumber][dayNumber].toDate();

        if (!startDate || startDate > date || endDate) {
            setTempDateRange({ startDate: date, endDate: undefined });
            setUnselectedDates([...selectedDates]);
            setSelectedDates([currentElement]);
        } else if (startDate && startDate <= date && !endDate) {
            setTempDateRange({ startDate, endDate: date });
            setSelectedDates([...selectedDates, currentElement]);
        }
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
                            calendarDate={calendarDate}
                            calendarRef={calendarRef}
                            dayMoment={day}
                            handleClick={onCalendarClick}
                            key={day.format('D')}
                            weekNumber={weekNumber}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Calendar;
