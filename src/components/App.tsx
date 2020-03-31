import React, { useState } from 'react';

import Inbox from './Inbox';
import ResultDisplay from './ResultDisplay';
import DateRangeBar from './DateRangeBar';

import '../styles/index.scss';

const App: React.FC = () => {
    const [dateRange, setDateRange] = useState({ startDate: new Date('2019/12/31'), endDate: new Date('2020/1/3') });
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
