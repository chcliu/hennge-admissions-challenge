'use strict';

import _ from 'lodash';
import moment, { Moment } from 'moment';
import { CalendarDate } from 'types';

export const DEFAULT_DATE_FORMAT = 'YYYY/M/D';
export const SAME_YEAR_DATE_FORMAT = 'MMM DD';
export const SAME_DAY_DATE_FORMAT = 'H:mm';

export const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'Th', 'F', 'Su'];

export const formatDate = (date?: Date): string => moment(date).format(DEFAULT_DATE_FORMAT);

export const setToStart = (date?: Date): Moment => moment(date).startOf('day');
export const setToEnd = (date?: Date): Moment => moment(date).endOf('day');

export const convertToCalendarDate = (date: Moment): CalendarDate => ({
    year: date.year(),
    month: date.month(),
    day: date.day(),
});

export const createCalendar = (date: CalendarDate): Array<Array<Moment>> => {
    const dateMoment = moment(date);
    const firstWeek = dateMoment.clone().startOf('month');
    const lastWeek = dateMoment.clone().endOf('month');

    const calendar = [];
    for (let calendarRow = firstWeek; calendarRow.week() !== lastWeek.week() + 1; calendarRow.add({ week: 1 })) {
        const currentWeek = dateMoment.week(calendarRow.week()).startOf('week');
        calendar.push(_.range(7).map((index) => currentWeek.clone().add(index, 'day')));
    }
    return calendar;
};
