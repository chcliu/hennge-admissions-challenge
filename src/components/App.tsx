import React, { useState } from 'react';

import Inbox from './Inbox';
import ResultDisplay from './ResultDisplay';
import DateRangeBar from './DateRangeBar';

import { DateRange } from '../types/index';
import '../styles/index.scss';

const App: React.FC = () => {
    const [dateRange, setDateRange] = useState<DateRange>({
        startDate: new Date('2019/06/01'),
        endDate: new Date(),
    });
    const [emailCount, setEmailCount] = useState(0);
    return (
        <>
            <DateRangeBar dateRange={dateRange} setDateRange={setDateRange} />
            <ResultDisplay emailCount={emailCount} />
            <Inbox emailCount={emailCount} setEmailCount={setEmailCount} dateRange={dateRange} />
        </>
    );
};

export default App;
