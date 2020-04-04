'use strict';

import moment, { Moment } from 'moment';

export const DEFAULT_DATE_FORMAT = 'YYYY/M/D';
export const SAME_YEAR_DATE_FORMAT = 'MMM DD';
export const SAME_DAY_DATE_FORMAT = 'H:mm';

export const formatDate = (date?: Date): string => moment(date).format(DEFAULT_DATE_FORMAT);

export const setToStart = (date?: Date): Moment => moment(date).startOf('day');
export const setToEnd = (date?: Date): Moment => moment(date).endOf('day');
