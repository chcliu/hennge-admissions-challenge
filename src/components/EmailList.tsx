import React, { useEffect, useState } from 'react';

import { DateRange, EmailType, SetNumber } from 'types';

import { getEmailData } from '../utils/email-helper';
import { setToStart, setToEnd } from '../utils/date-helper';

import Email from './Email';

interface Props {
    dateRange: DateRange;
    emailCount: number;
    setEmailCount: SetNumber;
}

const emailData = getEmailData();

const EmailList: React.FC<Props> = ({ dateRange, emailCount, setEmailCount }) => {
    const { startDate, endDate } = dateRange;
    const [emails, setEmails] = useState<Array<EmailType>>([]);

    useEffect(() => {
        const isAfterStartDate = (date: Date): boolean => setToStart(date).isSameOrAfter(setToStart(startDate));
        const isBeforeEndDate = (date: Date): boolean => setToStart(date).isSameOrBefore(setToEnd(endDate));

        const filteredEmails = emailData.filter((email) => isAfterStartDate(email.date) && isBeforeEndDate(email.date));
        if (emailCount !== filteredEmails.length) setEmailCount(filteredEmails.length);
        setEmails(filteredEmails);
    }, [dateRange]);

    return (
        <div className="email-list">
            {emails.map((email: EmailType, index: number) => (
                <Email key={index} {...email} />
            ))}
        </div>
    );
};

export default EmailList;
