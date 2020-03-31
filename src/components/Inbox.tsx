import React, { Dispatch, SetStateAction } from 'react';
import { DateRange } from '../types/index';

import EmptyState from './EmptyState';

interface Props {
    dateRange: DateRange;
    emailCount: number;
    setEmailCount: Dispatch<SetStateAction<number>>;
}

const Inbox: React.FC<Props> = ({ emailCount }) => {
    return (
        <>
            <div className="inbox"></div>
            {!emailCount && <EmptyState />}
        </>
    );
};

export default Inbox;
