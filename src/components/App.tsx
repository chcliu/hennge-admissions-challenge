import React, { useState } from 'react';

import Inbox from './Inbox';
import ResultDisplay from './ResultDisplay';
import DateRangeBar from './DateRangeBar';

import '../styles/index.scss';

const App: React.FC = () => {
    const [dateRange, setDateRange] = useState({ startDate: new Date('2019/12/31'), endDate: new Date('2020/1/3'));
    const [emailCount, setEmailCount] = useState(0);
    return (
        <div className="app">
            <DateRangeBar dateRange={dateRange}  setDateRange={setDateRange} />
            <ResultDisplay emailCount={emailCount} />
            <hr />
            <Inbox emailCount={emailCount} setEmailCount={setEmailCount} dateRange={dateRange} />
        </div>
    );
};

export default App;
