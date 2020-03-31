import React, { Dispatch, SetStateAction } from 'react';

import { DateRange } from '../types/index';

interface Props {
    dateRange: DateRange;
    setDateRange: Dispatch<SetStateAction<DateRange>>;
}

const DateRangeBar: React.FC<Props> = () => {
    return <div className="date-range-bar"></div>;
};

export default DateRangeBar;
