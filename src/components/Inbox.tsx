import React, { useState } from 'react';
import { DateRange, SetNumber, SortSettings } from 'types';

import EmptyState from './EmptyState';
import InboxHeader from './InboxHeader';
import EmailList from './EmailList';

interface Props {
    dateRange: DateRange;
    emailCount: number;
    setEmailCount: SetNumber;
}

const Inbox: React.FC<Props> = ({ dateRange, emailCount, setEmailCount }) => {
    const [sortSettings, setSortSettings] = useState<SortSettings>({ sortKey: 'date', sortOrder: 'desc' });
    return (
        <>
            <div className="inbox">
                <InboxHeader setSortSettings={setSortSettings} sortSettings={sortSettings} />
                <EmailList
                    dateRange={dateRange}
                    emailCount={emailCount}
                    setEmailCount={setEmailCount}
                    sortSettings={sortSettings}
                />
            </div>
            {!emailCount && <EmptyState />}
        </>
    );
};

export default Inbox;
