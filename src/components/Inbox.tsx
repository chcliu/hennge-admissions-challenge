import React, { Dispatch, SetStateAction } from 'react';
import { DateRange } from '../types/index';

import EmptyState from './EmptyState';
import InboxHeader from './InboxHeader';
import EmailList from './EmailList';

interface Props {
    dateRange: DateRange;
    emailCount: number;
    setEmailCount: Dispatch<SetStateAction<number>>;
}

const Inbox: React.FC<Props> = ({ dateRange, emailCount, setEmailCount }) => {
    return (
        <>
            <div className="inbox">
                <InboxHeader />
                <EmailList dateRange={dateRange} emailCount={emailCount} setEmailCount={setEmailCount} />
            </div>
            {!emailCount && <EmptyState />}
        </>
    );
};

export default Inbox;
