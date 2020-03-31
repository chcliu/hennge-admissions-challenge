import React from 'react';
import Moment from 'react-moment';

import { DateRange } from '../types/index';

interface Props {
    dateRange: DateRange;
    onClick: () => void;
    tempDateRange: DateRange | null;
}

const CalendarInput: React.FC<Props> = ({ dateRange, onClick, tempDateRange }) => {
    const { startDate, endDate } = tempDateRange || dateRange;

    return (
        <div className="calendar-input" onClick={onClick}>
            <img className="calendar-input__icon" src="../../public/images/icon_calender.svg" />
            <div className="calendar-input__dates">
                <Moment date={startDate} format="YYYY/MM/D" />
                <span> - </span>
                <Moment date={endDate} format="YYYY/MM/D" />
            </div>
        </div>
    );
};

export default CalendarInput;
